export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  birthDate: string;
}

export interface UserDetailType {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  birthDate: string;
  address: {
    address: string;
    city: string;
  };
}
