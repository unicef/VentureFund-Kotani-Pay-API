import { Document, ObjectId } from 'mongoose';

export interface TransactionDocumentInterface extends Document {
  _id: ObjectId;
  date: Date;
  amount: number;
  txHash: string;
  description: string;
  status: string;
  type: string;
}
