import { DEFAULT_SET_FOR_STRING_GENERATOR } from 'src/app/common/constants';

const GeneratorService: (n: number) => string = (n: number) => {
  let result = '';
  for (let i = 0; i < n; i += 1) {
    const randomIndex = Math.floor(Math.random() * DEFAULT_SET_FOR_STRING_GENERATOR.length);
    result = result.concat(DEFAULT_SET_FOR_STRING_GENERATOR[randomIndex]);
  }
  return result;
};

export const GeneratorFactory: (n: number) => string = (n: number) => GeneratorService(n);
