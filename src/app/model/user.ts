import { IUser } from './user-interface';

export class User implements IUser {
  id!: string;
  firstName!: string;
  lastName!: string;
  token!:string;

  constructor(
    firstName: string | null,
    lastName: string | null,
    token:string | null) {
  }
}
