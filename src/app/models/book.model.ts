export enum BookCategories {
  'detective',
  'science fiction',
  'fantasy',
  'novel',
  'comix',
}

export interface BookModel {
  name: string;
  description: string;
  price: number;
  category: BookCategories;
  createDate: number;
  isAvailable: boolean;
}
