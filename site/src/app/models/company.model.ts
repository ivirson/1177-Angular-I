export interface Company {
  name: string;
  description: string;
  adrress: Address;
}

export interface Address {
  street: string;
  number: number;
  district: string;
  city: string;
  state: string;
}
