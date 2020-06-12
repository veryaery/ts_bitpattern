"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BitPattern = void 0;
class BitPattern {
    constructor(pattern) {
        this.pattern = pattern;
    }
    /**
     * Fills bigint with data following pattern
     */
    fill(data) {
        let n = 0n;
        let offset = 0;
        for (const element of this.pattern.slice().reverse()) {
            const symbol = element[1];
            const size = element[0];
            const value = data[symbol];
            // Data validation
            if (value === undefined) {
                throw new Error(`Data <${symbol}> is undefined`);
            }
            if (typeof value != "bigint") {
                throw new Error(`Data <${symbol}> is not a bigint`);
            }
            if (value < 0) {
                throw new Error(`Data <${symbol}> with value <${value}> is negative`);
            }
            if (value >= 2 ** size) {
                throw new Error(`Data <${symbol}> with value <${value}> of size <${Math.ceil(Math.log2(Number(value)) + 1)} bits> is larger than their specified size <${size} bits>`);
            }
            n += value << BigInt(offset);
            offset += size;
        }
        return n;
    }
    /**
     * Pulls data from bigint following pattern
     */
    pull(n) {
        const data = {};
        let offset = 0;
        for (const element of this.pattern.slice().reverse()) {
            const symbol = element[1];
            const size = element[0];
            const mask = (2n ** BigInt(size) - 1n) << BigInt(offset);
            const value = (n & mask) >> BigInt(offset);
            data[symbol] = value;
            offset += size;
        }
        return data;
    }
}
exports.BitPattern = BitPattern;
//# sourceMappingURL=BitPattern.js.map