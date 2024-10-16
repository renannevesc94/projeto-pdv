import { HttpException, HttpStatus } from '@nestjs/common';

export class UniqueConstraintException extends HttpException {
  constructor(data: string) {
    super(`${data} already exists`, HttpStatus.CONFLICT);
  }
}

export class TableNotFoundException extends HttpException {
  constructor(table: string | null) {
    super(
      `The table ${table} does not exist in the current database.`,
      HttpStatus.NOT_FOUND,
    );
  }
}

export class DataValidationException extends HttpException {
  constructor() {
    super('Data validation error', HttpStatus.BAD_REQUEST);
  }
}

export class RecordNotFoundException extends HttpException {
  constructor(cause: string) {
    super(`${cause}`, HttpStatus.NOT_FOUND);
  }
}

export class ForeignKeyConstraintException extends HttpException {
  constructor(fieldName: string) {
    super(
      `Foreign key constraint error on ${fieldName}`,
      HttpStatus.BAD_REQUEST,
    );
  }
}
