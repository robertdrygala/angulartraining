import { IUser } from './user-interface';

export class User implements IUser {
  id!: string;
  firstName!: string;
  lastName!: string;
  token!:string;
  email!:string;

  constructor(
    firstName: string | null,
    lastName: string | null,
    token:string | null) {
  }
}

export class Credentials {
  username!: string;
  password!: string;

  constructor(
    username: string | null,
    password: string | null) {
  }
}