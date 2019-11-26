function mul(x: number, y: number): number {
    if (y == 1)
        return x;
    return x + (mul(x, y - 1));
}

console.log(mul(2,3));