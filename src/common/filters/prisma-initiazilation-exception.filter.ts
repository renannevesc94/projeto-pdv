import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { PrismaClientInitializationError } from '@prisma/client/runtime/library';

@Catch(PrismaClientInitializationError)
export class PrismaInitiazilationExceptionFilter implements ExceptionFilter {
  catch(exception: PrismaClientInitializationError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const request = ctx.getRequest();
    const response = ctx.getResponse();

    response.status(500).json({
      statusCode: 500,
      path: request.url,
      timeStamp: new Date().toISOString(),
      message: 'Database access failure',
    });
  }
}
