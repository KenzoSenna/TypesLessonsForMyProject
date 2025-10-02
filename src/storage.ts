import { User, Admin } from "./types";

export const users: User[] = []
export const admins: Admin[] = []

export function findUserByName(name: string): User | undefined{
    return users.find(u => u.name === name)

}

export function findAdminByName(name: string): Admin | undefined{
    return admins.find(a => a.name === name)
}
