import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from '@kotanicore/auth/auth.service';
import { JwtStrategy } from '@kotanicore/auth/guards/jwt.strategy';
import { RepositoryModule } from '@kotanicore/repository';

@Module({
  imports: [
    RepositoryModule,
    PassportModule,
    JwtModule.register({ secret: process.env.JWT_SECRET }),
  ],
  exports: [AuthService],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
