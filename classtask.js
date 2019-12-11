function checkSumDiv3(arr, i) {
    var sum = 0;
    if (arr[i] == undefined)
        return 0;
    sum += checkSumDiv3(arr, i + 1);
    if (i == 0) {
        sum += arr[0];
        console.log("sum is " + sum);
        return (sum % 3 == 0) ? 1 : 0;
    }
    return sum + arr[i];
}
var array = [2, 4, 6];
var sumArr = checkSumDiv3(array, 0);
console.log(sumArr);
