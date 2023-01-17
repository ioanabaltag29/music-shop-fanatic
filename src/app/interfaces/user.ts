export interface User {
    id: number,
    name: string,
    surname: string,
    email: string,
    password: string,
    password_repeat: string,
    logged_in: boolean
}
