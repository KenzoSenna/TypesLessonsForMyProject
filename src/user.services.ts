import { User } from './types'

export function createUser(name: string): User{
    return {name, createdAT: new Date()}
}

export function userExists(list: User[], name: string): boolean {
    return list.some(u => u.name === name)
}
