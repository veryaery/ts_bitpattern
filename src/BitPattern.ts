export type Pattern = [ number, string ][];

export type Data = {
    [key: string]: bigint
}

export class BitPattern {

    pattern: Pattern;

    constructor(pattern: Pattern) {
        this.pattern = pattern;
    }

   /**
    * Fills bigint with data following pattern
    */
    fill(data: Data): bigint {
        let n: bigint = 0n;
        let offset: number = 0;

        for (const element of [ ...this.pattern ].reverse()) {
            const symbol: string = element[1];
            const size: number = element[0];

            const value: bigint = data[symbol];

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
    pull(n: bigint): Data {
        const data: Data = {};
        let offset: number = 0;

        for (const element of [ ...this.pattern ].reverse()) {
            const symbol: string = element[1];
            const size: number = element[0];

            const mask: bigint = (2n ** BigInt(size) - 1n) << BigInt(offset);
            const value: bigint = (n & mask) >> BigInt(offset);

            data[symbol] = value;

            offset += size;
        }

        return data;
    }

}