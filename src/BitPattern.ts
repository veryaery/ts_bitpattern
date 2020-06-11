export type BitPatternElement = {
    symbol: string,
    size: number,
    mask: bigint
}

export class BitPattern {

    pattern: BitPatternElement[];

    constructor(pattern: BitPatternElement[]) {
        this.pattern = pattern;
    }

    

}