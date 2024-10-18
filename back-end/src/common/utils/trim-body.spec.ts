import { TrimBodyPipe } from './trim-body.pipe';
import { ArgumentMetadata } from '@nestjs/common';

describe('TrimBodyPipe', () => {
  let trimBodyPipe: TrimBodyPipe;

  beforeEach(() => {
    trimBodyPipe = new TrimBodyPipe();
  });

  it('should trim all values in the data object when metadata type is body', () => {
    const data = {
      key1: '  value1  ',
      key2: '  value2  ',
    };
    const metadata: ArgumentMetadata = { type: 'body' };

    const result = trimBodyPipe.transform(data, metadata);

    expect(result.key1).toBe('value1');
    expect(result.key2).toBe('value2');
  });

  it('should trim the data string when metadata type is not body', () => {
    const data = '  test string  ';
    const metadata: ArgumentMetadata = { type: 'query' };

    const result = trimBodyPipe.transform(data, metadata);

    expect(result).toBe('test string');
  });
});
