function paraPrint(arr, start, end) {
    var gap = end - start;
    var sum = 0;
    if (gap == 0) {
        console.log(arr[start]);
        return;
    }
    if (gap < 0)
        return;
    sum = arr[start] + arr[end];
    console.log(sum);
    paraPrint(arr, start + 1, end - 1);
}
var array = [2, 5, 8, 10, 9];
paraPrint(array, 1, 4);
