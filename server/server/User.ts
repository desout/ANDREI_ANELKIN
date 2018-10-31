
export interface User {
  id?: number;
  name: string;
  password?: string;
  dateOfBirth: string;
  dateOfFirstLogin: string;
  dateNextNotification: string;
  information: string;

}
export function createUser(name: string,
                           password: string,
                           dateOfBirth: string,
                           dateOfFirstLogin: string,
                           dateNextNotification: string,
                           information: string): User {
  return {
    name: name,
    password: password,
    dateOfBirth: dateOfBirth,
    dateOfFirstLogin: dateOfFirstLogin,
    dateNextNotification: dateNextNotification,
    information: information
  };
}

