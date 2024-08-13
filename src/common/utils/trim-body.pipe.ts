import { ArgumentMetadata, PipeTransform } from '@nestjs/common';

export class TrimBodyPipe implements PipeTransform {
  transform(data: any, metadata: ArgumentMetadata) {
    if (metadata.type === 'body') {
      for (const key in data) {
        if (typeof data[key] === 'string') {
          data[key] = data[key].trim();
        }
      }
      return data;
    }
    return data.trim();
  }
}
