function sort(arr: number[]): number[] {
    for (var i: number = 0; i < arr.length - 1; i++) {
        var minIndex: number = i;
        for (var j: number = i + 1; j < arr.length; j++) {
            if (arr[minIndex] > arr[j])
                minIndex = j;

            var temp: number = array[i];
            array[i] = array[minIndex];
            array[minIndex] = temp;
        }
    }
    
    return array;
}

var array: number[] = [3, 1, 8, 7];

console.log('array:', array);
var newArray: number[] = sort(array);
console.log('newArray:', newArray);