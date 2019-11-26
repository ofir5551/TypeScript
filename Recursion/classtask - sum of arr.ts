var array: number[] = [3, 1, 8];

function sum(arr: number[], size: number): number {
    if (size-1 == 0)
        return arr[size-1];

    return arr[size-1] + sum(arr, size-1);
}

var total:number = sum(array, 3);

console.log(`Array: ${array}`);
console.log(`The sum of all elements is: ${total}`);