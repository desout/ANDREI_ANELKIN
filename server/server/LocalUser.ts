export interface LocalUser {
  id?: number;
  name: string;
  dateOfBirth: string;
  dateOfFirstLogin: string;
  dateNextNotification: string;
  information: string;
  token?: string;
}
