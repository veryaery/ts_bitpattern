export declare type Pattern = [number, string][];
export declare type Data = {
    [key: string]: bigint;
};
export declare class BitPattern {
    pattern: Pattern;
    constructor(pattern: Pattern);
    /**
     * Fills bigint with data following pattern
     */
    fill(data: Data): bigint;
    /**
     * Pulls data from bigint following pattern
     */
    pull(n: bigint): Data;
}
