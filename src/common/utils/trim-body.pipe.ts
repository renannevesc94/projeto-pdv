import { ArgumentMetadata, PipeTransform } from '@nestjs/common';

export class TrimBodyPipe implements PipeTransform {
  transform(body: any, metadata: ArgumentMetadata) {
    for (const key in body) {
      body[key] = body[key].trim();
    }
    return body;
  }
}
