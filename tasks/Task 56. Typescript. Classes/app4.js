console.log(1);
try {
    /**код **/
    var a = 2;
    var b = 0;
    if (b == 0)
        throw new Error("Division by zero");

    console.log(a / b);
}
catch (error) {
    console.log(2);
    console.log(error);
}
console.log(3);
