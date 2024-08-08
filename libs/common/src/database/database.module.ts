import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('monogodb://127.0.0.1/sleepr')],
})
export class DatabaseModule {}
