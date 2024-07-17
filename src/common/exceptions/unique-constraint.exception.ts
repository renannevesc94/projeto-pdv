import { HttpException, HttpStatus } from '@nestjs/common';

export class UniqueConstraintException extends HttpException {
  constructor(message: string, statusCode?: number) {
    super(message, statusCode | HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
