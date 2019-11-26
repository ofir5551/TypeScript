var str: string = "Ariel";

function reverse(str: string, size: number): string {
    if (size - 1 == 0)
        return str[0];

    return str[size - 1] + reverse(str, size - 1);
}

var strnew: string = reverse(str, str.length);

console.log(`Original string is: ${str}`);
console.log(`Reversed string is: ${strnew}`);