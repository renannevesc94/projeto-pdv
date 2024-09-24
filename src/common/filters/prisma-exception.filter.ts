import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import {
  DataValidationException,
  ForeignKeyConstraintException,
  RecordNotFoundException,
  TableNotFoundException,
  UniqueConstraintException,
} from '../exceptions/prisma.exception';

@Catch(PrismaClientKnownRequestError)
export class PrismaRequestExceptionFilter implements ExceptionFilter {
  catch(exception: PrismaClientKnownRequestError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    const exceptionMap = {
      P2002: new UniqueConstraintException(exception.meta.target as string),

      P2003: new ForeignKeyConstraintException(
        exception.meta.field_name as string,
      ),

      P2007: new DataValidationException(),

      P2021: new TableNotFoundException(exception.meta.table as string),

      P2025: new RecordNotFoundException(exception.meta.cause as string),
    };

    const customException =
      exceptionMap[exception.code] ||
      new HttpException(
        `Unknown error in database context`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );

    const status = customException.getStatus();
    response.status(status).json({
      statusCode: status,
      path: request.url,
      message: customException.message,
    });
  }
}
