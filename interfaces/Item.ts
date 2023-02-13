export interface Item {
  id?: number;
  fullName: string;
  title: string;
  description: string;
  imgURL?: string;
  lat: number;
  lng: number;
  state?: 'PUB' | 'DEL';
  email?: string;
  userId?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface UpdateItem {
  fullName: string;
  title: string;
  description: string;
  lat: number;
  lng: number;
  state: string;
  email: string;
  userId: number;
}
