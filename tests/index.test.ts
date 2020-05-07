import { main } from '@/index';

describe('index', (): void => {
  test('main', (): void => {
      const result = main();
      expect(result).toBe(1);
  });
});