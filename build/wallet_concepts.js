"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(name) {
    return { name, createdAT: new Date() };
}
const finalUser = createUser("Kenzo");
console.log(`Bem vindo ${finalUser.name}!\nEntrou em: ${finalUser.createdAT}.`);
function promoteUser(user) {
    return {
        ...user,
        ban(user_a_ser_banido) {
            console.log(`${user_a_ser_banido.name} foi banido por ${this.name}`);
        },
        kick(user_a_ser_banido) {
            console.log(`O ${user_a_ser_banido.name} foi banido por ${this.name}`);
        }
    };
}
function adminAction(admin) {
    const userToBan = createUser("Infrator");
    admin.ban(userToBan);
}
if (finalUser.name === "Kenzo") {
    const adminKenzo = promoteUser(finalUser);
    adminAction(adminKenzo);
}
