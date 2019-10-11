import { Address } from './address';
import { Company } from './company';
import { Geo } from './geo';

export interface Users {

    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
   

}
