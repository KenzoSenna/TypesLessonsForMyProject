"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prompter = require("prompt-sync");
let users = [];
let admins = [];
function createUser(name) {
    return { name, createdAT: new Date() };
}
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
function adminAction(admin, desicao) {
    const userToBan = createUser("Infrator");
    if (desicao === 1) {
        console.log(`O usuário ${userToBan} foi banido com sucesso!`);
        admin.ban(userToBan);
    }
    if (desicao === 2) {
        console.log(`O usuário ${userToBan} foi kickado com sucesso!`);
        admin.kick(userToBan);
    }
}

function show_menu_actions(){
        console.log(`
    Olá usuário!
    O que você deseja realizar em nosso sistema?
    -------------------
    1 - Criar usuário
    2 - Promover usuário
    3 - Selecionar usuário
    4 - Sair
    `);
}

function menu() {
    show_menu_actions()    
    const guia = prompter()(": ");
    const decisao_1 = parseInt(guia);
    if (decisao_1 === 1) {
        const name_to_be_created = prompter()("Nome do usuário a ser criado: ");
        const newUser = createUser(name_to_be_created);
        const alreadyExists = users.some(user => user.name === name_to_be_created);
        if (alreadyExists) {
            console.log(`Usuário ${name_to_be_created} já está registrado!`);
            menu();
        }
        else {
            users.push(newUser);
            console.log(`Usuário ${newUser.name} criado com sucesso!`);
            menu();
        }
    }
    if (decisao_1 === 2) {
        let users_concatenada = "";
        for (let i = 1; i < users.length; i++) {
            users_concatenada += `|\t${users[i].name}`;
        }
        console.log(`Lista de usuários registrados = ${users_concatenada}`);
        const choiced_user_name = prompter()("Digite qual usuário você deseja pegar: ");
        const foundUser = users.find(user => user.name === choiced_user_name);
        if (foundUser) {
            const promoted_adminn = promoteUser(foundUser);
            admins.push(promoted_adminn);
            console.log(`Usuário ${foundUser.name} promovido a admin!`);
            menu();
        }
        else {
            console.log(`Usuário ${choiced_user_name} não encontrado.`);
            menu();
        }
    }
    if (decisao_1 === 3) {
        console.log("Qual usuário você deseja ser?")
        const found_user_name = prompter()(": ");
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
            if (acao != 1 | 2){
                console.log("Amigão, digitou errado aí")
            }   
            adminAction(isAdmin, acao);
            menu();
        }
        else {
            console.log(`Olá, ${user_to_be.name}! Você não possui permissões de admin.`);
            menu();
        }
    }
    if (decisao_1 === 4){
        console.log("Saindo...")
        return
    }
}

menu()