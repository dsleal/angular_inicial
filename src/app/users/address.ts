import { Geo } from './geo';

export interface Address {
    id: number;
    name: string;
    username: string;
    email: string;
    geo:Geo;
}
