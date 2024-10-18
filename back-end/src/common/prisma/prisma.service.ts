import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaClientInitializationError } from '@prisma/client/runtime/library';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect()
      .then(() => {})
      .catch((err: PrismaClientInitializationError) =>
        console.log(err.message + '\n Error Code: ' + err.errorCode),
      );
  }
}
