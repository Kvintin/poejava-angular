import { ContractType } from './contract-type.model';

export class Job {
  id?: number;
  contractType: ContractType = null;

  title = '';
  company = '';
  city = '';
  zipcode = '';
  description = '';
  startDate = new Date();
  publishedDate = new Date();
}
