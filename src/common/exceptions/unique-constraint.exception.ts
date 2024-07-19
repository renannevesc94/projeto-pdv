import { HttpException } from '@nestjs/common';

export class UniqueConstraintException extends HttpException {
  constructor(message: string, statusCode?: number) {
    super(message, statusCode);
  }
}
