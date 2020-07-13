import {Company} from './Company';

export interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  company: Company;
}
