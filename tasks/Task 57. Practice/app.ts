import {SuperUser} from "./SuperUser";

const superUser:SuperUser = new SuperUser("Аня", false, 180);
superUser.print();
console.log(superUser.isAdult());