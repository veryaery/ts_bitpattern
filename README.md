# BitPattern

Encode fixed size numbers in numbers

## Installing

```
npm i git+https://github.com/nyaaery/ts_bitpattern.git
```

## Example

```ts
const bitpattern: BitPattern = new BitPattern([[ 8, "x" ], [ 16, "y" ]]);

bitpattern.fill({
    x: 100n,
    y: 2100n
});
/*
    6555700n
             x = 100   y = 2100
    (binary) 1100100   0000100000110100
*/

bitpattern.pull(6555700n);
/*
    {
        x: 100n,
        y: 2100n
    }
*/
```