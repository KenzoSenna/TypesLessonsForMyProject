// src/ui.ts (refatorado)
import promptSync from 'prompt-sync';
const prompt = promptSync();

import { users, admins, findUserByName, findAdminByName } from './storage';
import { createUser, userExists } from './user.services';
import { promoteToAdmin, performAdminAction } from './admin.services';

function showMenu() {
  console.log(`
Olá usuário!
1 - Criar usuário
2 - Promover usuário
3 - Selecionar usuário
4 - Sair
`);
}

function listUsersAndAdmins() {
  console.log('Usuários registrados:');
  users.forEach(u => console.log(`- ${u.name}`));
  console.log('Administradores registrados:');
  admins.forEach(a => console.log(`- ${a.name}`));
}

function handleCreateUser() {
  const name = prompt('Nome do usuário a ser criado: ');
  if (!name) {
    console.log('Nome inválido');
    return;
  }
  if (userExists(users, name)) {
    console.log(`Usuário ${name} já está registrado!`);
    return;
  }
  const newUser = createUser(name);
  users.push(newUser);
  console.log(`Usuário ${newUser.name} criado com sucesso!`);
}

function handlePromoteUser() {
  listUsersAndAdmins();
  const name = prompt('Digite qual usuário você deseja promover: ');
  const found = findUserByName(name);
  if (!found) {
    console.log(`Usuário ${name} não encontrado.`);
    return;
  }
  const admin = promoteToAdmin(found);
  admins.push(admin);
  console.log(`Usuário ${name} promovido a admin!`);
}

function handleSelectUser() {
  listUsersAndAdmins();
  const name = prompt('Qual usuário você deseja ser? ');
  const user = findUserByName(name);
  if (!user) {
    console.log(`Usuário ${name} não encontrado.`);
    return;
  }
  const admin = findAdminByName(user.name);
  if (admin) {
    const action = parseInt(prompt('Digite 1 para banir ou 2 para kickar: '));
    const target = prompt('Nome do usuário alvo: ');
    if (!target) {
      console.log('Nome do alvo inválido');
      return;
    }
    performAdminAction(admin, action, target);
  } else {
    console.log(`Olá, ${user.name}! Você não possui permissões de admin.`);
  }
}

export function runMenuLoop(): void {
  while (true) {
    showMenu();
    const raw = prompt('O que deseja fazer? ');
    const choice = parseInt(raw);
    switch (choice) {
      case 1:
        handleCreateUser();
        break;
      case 2:
        handlePromoteUser();
        break;
      case 3:
        handleSelectUser();
        break;
      case 4:
        console.log('Saindo...');
        return;
      default:
        console.log('Opção inválida');
    }
  }
}
