import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CoreService } from '@kotanicore/services';
import { CreateUserDto } from '@kotanicore/repository/dtos/createUser.dto';
import { SetKycDto } from '@kotanicore/repository/dtos/setKyc.dto';
import { GetBalanceDto } from '@kotanicore/repository/dtos/getBalance.dto';
import { AuthService, JwtAuthGuard } from '@kotanicore/auth';
import { LoginDto } from '@kotanicore/repository/dtos/login.dto';
import { GetUserDto } from '@kotanicore/repository/dtos/getUser.dto';

@Controller()
export class AppController {
  constructor(
    private readonly authService: AuthService,
    private readonly appService: AppService,
    private readonly coreService: CoreService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('login')
  async login(@Body() data: LoginDto) {
    const user = await this.authService.validateUser(data.phone, data.password);
    console.log({user});
    
    if (user) {
      await this.authService.login(user, '');
    } else {
      throw new HttpException('Wrong Credentials', HttpStatus.UNAUTHORIZED);
    }
    return;
  }

  @Post('create')
  async createUser(@Body() createUser: CreateUserDto) {
    return await this.coreService.createUser(createUser);
  }

  @UseGuards(JwtAuthGuard)
  @Post('kyc')
  async addUserKyc(@Body() setKycData: SetKycDto) {
    return await this.coreService.setUserKyc(setKycData, 'userId');
  }

  @UseGuards(JwtAuthGuard)
  @Get('balance')
  async getBalance(@Body() body: GetBalanceDto): Promise<any> {
    return await this.coreService.getBalance(body.phoneNumber);
  }

  @Get('all-users')
  async getAllUsers() {
    const usercount = await this.coreService.listUsers();
    return {
      usercount: usercount,
    };
  }

  // send ObjectId
  @Get("user")
  async getUser(@Body() body: GetUserDto): Promise<any>{
    return await this.coreService.getUser(body.id)
  }

  @Get('transactions')
  async getTransactions(){
    const transactions = await this.coreService.listTransactions();
    return {
      transactions: transactions,
    }
  }
}
