import { ConfigOptionsModel } from '../models/config-options.model';

export const APP_TITLE = 'book shop';

export const CART_ITEM_COUNT = {
  MIN: 1,
  MAX: 9999,
};

export const DEFAULT_INIT_BOOK_COUNT = 1;

export const DEFAULT_CONFIG_OPTIONS: ConfigOptionsModel = {
  id: '',
  login: '',
  email: '',
};
