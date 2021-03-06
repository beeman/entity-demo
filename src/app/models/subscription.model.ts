import { Entity } from '../shared';

export class Subscription extends Entity {
  id: number;
  endpoint: string;
  auth: string;
  p256dh: string;
  userId: string;
  topics: string[];
  createdAt?: Date;
  updatedAt?: Date;
}
