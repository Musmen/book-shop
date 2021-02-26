import { BookModel, BookCategories } from '../models/book.model';

export const mockBooksList: BookModel[] = [
  {
    name: 'Sherlock Holmes',
    description: `Sherlock Holmes is a fictional private detective
      created by British author Sir Arthur Conan Doyl`,
    price: 300,
    category: BookCategories.detective,
    createDate: 1613916337459,
    isAvailable: true,
  },
  {
    name: 'X-Men',
    description: `Jonathan Hickman/'s X-Men reboot should be the brightest
      day of the mutant race - but the original X-Men are breaking slowly apart`,
    price: 15,
    category: BookCategories.comix,
    createDate: 1613910000000,
    isAvailable: true,
  },
  {
    name: 'Gone With the Wind',
    description: `Gone with the Wind is a 1936 American epic historical novel by Margaret Mitchell`,
    price: 241,
    category: BookCategories.novel,
    createDate: 1613500000000,
    isAvailable: true,
  },
  {
    name: 'My New Book',
    description: `It is my new book, not ready yet...`,
    price: 1000,
    category: BookCategories['science fiction'],
    createDate: Date.now(),
    isAvailable: false,
  },
];
