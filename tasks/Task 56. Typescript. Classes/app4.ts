console.log(1);
try {
    if(1)
        throw new Error("Ошибочка");
} catch (error) {
    console.log(2);
    console.log(error);
}
console.log(3);