import { IsNotEmpty } from 'class-validator';

export class GetMoolaLoan {
  @IsNotEmpty()
  id: string;
}
