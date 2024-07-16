export enum Roles {
  OPERADOR = 'OPERADOR',
  SUPERVISOR = 'SUPERVISOR',
  ADMINISTRADOR = 'ADMINISTRADOR',
}

export class User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: Roles;

  constructor(
    id: string,
    name: string,
    email: string,
    password: string,
    role: Roles,
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.role = role;
  }
}
