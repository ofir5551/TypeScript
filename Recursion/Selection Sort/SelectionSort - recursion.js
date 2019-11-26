function sort(arr, i, j, minIndex) {
    if (i == arr.length - 1)
        return array;
    minIndex = i;
    if (arr[minIndex] > arr[j]) {
        minIndex = j;
        var temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
    }
    if (j == arr.length - 1) {
        j = i;
        return sort(arr, ++i, ++j, minIndex);
    }
    return sort(arr, i, ++j, minIndex);
}
var array = [3, 1, 8, 7];
console.log('array:', array);
var newArray = sort(array, 0, 1, 0);
console.log('newArray:', newArray);
