import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { UniqueConstraintException } from '../exceptions/unique-constraint.exception';

@Catch(PrismaClientKnownRequestError)
export class PrismaRequestExceptionFilter implements ExceptionFilter {
  catch(exception: PrismaClientKnownRequestError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    let customException: UniqueConstraintException;
    switch (exception.code) {
      case 'P2002':
        customException = new UniqueConstraintException(
          `${exception.meta.target} already exists`,
          409,
        );
        break;

      case 'P2007':
        customException = new UniqueConstraintException(
          `Data validation error `,
          404,
        );
        break;
      case 'P2021':
        customException = new UniqueConstraintException(
          `The table ${exception.meta.table} does not exist in the current database.`,
        );
        break;

      case 'P2025':
        customException = new UniqueConstraintException(`Data not found`, 404);
        break;
      default:
        customException = new UniqueConstraintException(
          `Unknown error in database context`,
          500,
        );
        break;
    }

    const status = customException.getStatus();
    response.status(status).json({
      statusCode: status,
      path: request.url,
      message: customException.message,
    });
  }
}
