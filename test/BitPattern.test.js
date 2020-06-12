const { BitPattern } = require("../compiled/index.js");

const pattern = [[ 2, "x" ], [ 3, "y" ], [ 4, "z" ]];
const n = BigInt("0b" + "01" + "010" + "0011");
const data = {
    x: 1n,
    y: 2n,
    z: 3n
};

test("fill", () => {
    const bitpattern = new BitPattern(pattern);
    expect(bitpattern.fill(data)).toBe(n);
});

test("pull", () => {
    const bitpattern = new BitPattern(pattern);
    expect(bitpattern.pull(n)).toStrictEqual(data);
});