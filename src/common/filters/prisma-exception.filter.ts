import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { UniqueConstraintException } from '../exceptions/unique-constraint.exception';

@Catch(PrismaClientKnownRequestError)
export class PrismaExceptionFilter implements ExceptionFilter {
  catch(exception: PrismaClientKnownRequestError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    let customException;
    switch (exception.code) {
      case 'P2002':
        customException = new UniqueConstraintException(
          `Unique constraint failed on the ${exception.meta.target}`,
        );
        break;

      case 'P1001':
        customException = new UniqueConstraintException(
          `Unable to access database`,
          401,
        );
        break;
      case 'P2007':
        customException = new UniqueConstraintException(
          `Data validation error `,
          404,
        );
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
