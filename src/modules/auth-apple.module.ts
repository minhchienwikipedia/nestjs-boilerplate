import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthAppleController } from 'src/controllers/app/v1/auth-apple.controller';
import { AuthModule } from 'src/modules/auth.module';
import { AuthAppleService } from 'src/services/auth-apple.service';

@Module({
  imports: [ConfigModule, AuthModule],
  providers: [AuthAppleService],
  exports: [AuthAppleService],
  controllers: [AuthAppleController],
})
export class AuthAppleModule {}
