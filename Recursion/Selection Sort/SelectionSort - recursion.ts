function selectionSort(arr: number[], i: number, j: number): number[] {
    if (i == arr.length - 1)
        return array;

    var minIndex = i;

    if (arr[minIndex] > arr[j]) {
        minIndex = j;
        var temp: number = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
    }

    if (j == arr.length - 1) {
        j = i;
        return selectionSort(arr, ++i, ++j);
    }
    return selectionSort(arr, i, ++j);
}

var array: number[] = [3, 1, 8, 7];

console.log('array:', array);
var newArray: number[] = selectionSort(array, 0, 1);
console.log('newArray:', newArray);