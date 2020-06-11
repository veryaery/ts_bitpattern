import { BitPattern, BitPatternElement } from "./BitPattern";

// [ [ 2, "x" ], [ 3, "y" ], [ 4, "z" ] ]

/*
    [
        {
            symbol: "x",
            size: 2,
            mask: (binary) 110000000
        },
        {
            symbol: "y",
            size: 3
            mask: (binary) 1110000
        },
        {
            symbol: "z",
            size: 4,
            mask: (binary) 1111
        }
    ]
*/

export function create_pattern(pattern: [ number, string ][]): BitPattern {
    const elements: BitPatternElement[] = [];
    let offset: number = 0;

    for (const element of pattern.reverse()) {
        const size: number = element[0];
        let mask: bigint = 0n;

        for (let i = offset; i < offset + size; i++) {
            mask += 2n ** BigInt(i);
        }

        elements.push({
            symbol: element[1],
            size,
            mask
        });

        offset += size;
    }

    return new BitPattern(elements.reverse());
}