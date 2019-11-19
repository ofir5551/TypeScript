function sort(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        var minIndex = i;
        for (var j = i + 1; j < arr.length; j++) {
            if (array[minIndex] > array[j])
                minIndex = j;
            var temp = array[i];
            array[i] = array[minIndex];
            array[minIndex] = temp;
        }
    }
    return array;
}
var array = [3, 1, 8, 7];
console.log('array:', array);
var newArray = sort(array);
console.log('newArray:', newArray);
