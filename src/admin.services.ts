import {User, Admin} from './types'

export function promoteToAdmin(user: User): Admin{
    return{
        ...user,
        ban(user_a_ser_banido) {
            console.log(`${user_a_ser_banido.name} foi banido por ${this.name}`)
        },
        kick(user_a_ser_banido) {
            console.log(`O ${user_a_ser_banido.name} foi banido por ${this.name}`)
        }
    }
}

export function performAdminAction(admin: Admin, decision: number, targetName: string){
    const target: User = { name: targetName, createdAT: new Date()}
    if (decision === 1) {
        console.log(`O usuário ${target.name} foi banido com sucesso!`);
        admin.ban(target);
      } else if (decision === 2) {
        console.log(`O usuário ${target.name} foi kickado com sucesso!`);
        admin.kick(target);
      } else {
        console.log('Ação inválida');
      }
}
