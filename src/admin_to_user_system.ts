import prompter = require('prompt-sync')
let users: User[] = [];
let admins: Admin[] = []
type User = {
    name: string,
    createdAT: Date
}

function createUser(name: string): User {
    return { name, createdAT: new Date() }
}


interface Admin extends User {
    ban(user: User): void
    kick(user: User): void
}

function promoteUser(user: User): Admin {
    return {
        ...user,
        ban(user_a_ser_banido) {
            console.log(`${user_a_ser_banido.name} foi banido por ${this.name}`)
        },
        kick(user_a_ser_banido) {
            console.log(`O ${user_a_ser_banido.name} foi banido por ${this.name}`)
        }
    }
}

function adminAction(admin: Admin, desicao: number) {
    const userToBan = createUser("Infrator");
    if (desicao === 1) {

        console.log(`O usuário ${userToBan} foi banido com sucesso!`)
        admin.ban(userToBan);

    }

    if (desicao === 2) {

        console.log(`O usuário ${userToBan} foi kickado com sucesso!`)
        admin.kick(userToBan)

    }
}
function menu() {
    console.log("\nOlá usuário!\nO que você deseja realizar em nosso sistema?\n-------------------"
        , "\n1 - Criar usuário\n2 - Promover usuário\n3 - Selecionar usuário\n4 - Sair")
    const guia = prompter()("O que deseja fazer?\n: ")
    const decisao_1: number = parseInt(guia)

if (decisao_1 === 1) {

    const name_to_be_created = prompter()("Qual o nome do usuário a ser criado?")
    const newUser = createUser(name_to_be_created);

    const alreadyExists = users.some(user => user.name === name_to_be_created);
    if (alreadyExists) {
        console.log(`Usuário ${name_to_be_created} já está registrado!`);
        menu()
    } else {
        users.push(newUser);
        console.log(`Usuário ${newUser.name} criado com sucesso!`);
        menu();
    }
}


    let users_concatenada: string = ""

    if (decisao_1 === 2) {

        for (let i = 1; i < users.length; i++) {
            users_concatenada += `|\t${users[i].name}`
        }
        console.log(`Lista de usuários registrados = ${users_concatenada}`)
         
        const choiced_user_name: string = prompter()("Digite qual usuário você deseja pegar: ");
        const foundUser = users.find(user => user.name === choiced_user_name);
        
        if (foundUser) {
            const promoted_adminn = promoteUser(foundUser);
            admins.push(promoted_adminn)
            console.log(`Usuário ${foundUser.name} promovido a admin!`);
            menu()
        } else {
            console.log(`Usuário ${choiced_user_name} não encontrado.`);
            menu()
        }
        
    }
    if (decisao_1 === 3) {
        const found_user_name = prompter()("Qual usuário você deseja ser? ");
        const user_to_be = users.find(user => user.name === found_user_name);
    
        if (!user_to_be) {
            console.log(`Usuário ${found_user_name} não encontrado.`);
            menu();
            return;
        }
    
        const isAdmin = admins.find(admin => admin.name === user_to_be.name);
    
        if (isAdmin) {
            console.log(`Olá, Admin ${isAdmin.name}!`);
            const acao = parseInt(prompter()("Digite 1 para banir ou 2 para kickar: "));
            adminAction(isAdmin, acao);
            menu();
        } else {
            console.log(`Olá, ${user_to_be.name}! Você não possui permissões de admin.`);
            menu();
        }
    }
    

}



// function adminConsole() {
//     console.log(`Olá usuário ${}`)
// }

// // const adminKenzo = promoteUser(finalUser)

// if (finalUser.name === "Kenzo") {
//     const inp = prompter()("Enter your decision: ");
//     const decision: number = parseInt(inp);
//     if (decision === 1) {
//         adminAction(adminKenzo, decision)
//     }
// }
// else {
//     console.log(`Como você ${finalUser.name} não possui permissões de Admin,\n Não foi possível Banir/Kickar o usuário!`)
// }