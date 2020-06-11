const { BitPattern } = require("../compiled/BitPattern.js");

const pattern = [[ 2, "x" ], [ 3, "y" ], [ 4, "z" ]];

test("fill", () => {
    const bit_pattern = new BitPattern(pattern);

    expect(bit_pattern.fill({
        x: 1n,
        y: 2n,
        z: 3n
    })).toBe(BigInt("0b" + "01" + "010" + "0011"));
});

test("pull", () => {
    const bit_pattern = new BitPattern(pattern);

    const n = BigInt("0b" + "01" + "010" + "0011");

    expect(bit_pattern.pull(n)).toStrictEqual({
        x: 1n,
        y: 2n,
        z: 3n
    });
});