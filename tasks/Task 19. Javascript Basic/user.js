var userName = "Вася";
const userLastName = "Пупкин";

var userHeight, userWeight;

userHeight = 180, userWeight = 0.89;

var userOldWeight = userWeight;

console.log("Меня зовут " + userName + " " + userLastName + ". Я вешу " + userWeight + " ц. Мой рост - " + userHeight + " см.");

userWeight = userWeight + 10/100;
userHeight -= 2;

console.log(userName + " " + userLastName + " потолстел и стоптался.");

userName = "Петя";
userWeight *= 2;

console.log("Теперь я " + userName + " " + userLastName + " и вешу в " + (userWeight/userOldWeight) + " больше, чем в молодости.");