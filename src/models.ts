//export interface Product {
//  id: number;
//  name: string;
//  price: number;
//  brand?: any;
//  images?: string[];
//  rating: number;
//}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}