console.log(1);
try {
    /**код **/
    let a: number = 2;
    let b: number = 0;

    if(b == 0)
        throw new Error("Division by zero");
    
    console.log(a/b);

} catch (error) {
    console.log(2);
    console.log(error);
}

console.log(3);