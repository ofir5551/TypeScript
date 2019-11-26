function func(x: number): void {
    if (x == 1) {
        console.log(x);
        return;
    }
    console.log(x);
    func(x-1);
}

func(4);