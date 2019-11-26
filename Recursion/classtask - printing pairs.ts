/* 
Write a function (without loops) that gets
an array, starting point, ending point,
and prints parallel pairs' sums.

[2, 5, 8, 10, 9]  -->  11,15,8
*/

function paraPrint(arr: number[], start: number, end: number): void {
    var gap: number = end - start;
    var sum = 0;

    if (gap == 0) {
        console.log(arr[start]);
        return;
    }
    if (gap < 0) return;

    sum = arr[start] + arr[end];
    console.log(sum);

    paraPrint(arr, start + 1, end - 1);
}

var array: number[] = [2, 5, 8, 10, 9];
paraPrint(array, 0, 4);