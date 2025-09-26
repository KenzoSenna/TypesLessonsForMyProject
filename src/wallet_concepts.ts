type User = {
    name: string,
    createdAT: Date
}

function createUser(name: string): User{
    return {name, createdAT: new Date()}
}
const finalUser = createUser("Kenzo")
console.log(`Bem vindo ${finalUser.name}!\nEntrou em: ${finalUser.createdAT}.`)

interface Admin extends User {
    ban(user: User): void
    kick(user: User): void
}

function promoteUser(user: User):Admin{
    return{
        ...user,
        ban(user_a_ser_banido){
        console.log(`${user_a_ser_banido.name} foi banido por ${this.name}`)
        },
        kick(user_a_ser_banido){
            console.log(`O ${user_a_ser_banido.name} foi banido por ${this.name}`)
        }
    }
}

function adminAction(admin: Admin) {
    const userToBan = createUser("Infrator");
    admin.ban(userToBan);
}

const adminKenzo = promoteUser(finalUser)   
adminAction(adminKenzo)
if (finalUser.name === "Kenzo"){
    const decision: number = 1 | 2
}
else{
    console.log(`Como você ${finalUser.name} não possui permissões de Admin,\n Não foi possível Banir/Kickar o usuário!`)
}