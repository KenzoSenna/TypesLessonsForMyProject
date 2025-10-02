export type User = {
    name: string,
    createdAT: Date
}

export interface Admin extends User {
    ban(user: User): void
    kick(user: User): void
}
