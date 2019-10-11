import { Observable } from 'rxjs';

//https://www.typescriptlang.org/docs/handbook/generics.html
export interface Iservice<T> {
    get():Array<T>; //T[]
    post(data:T):Observable<T>;
    put(data:T):Observable<T>;
    patch(data:T):Observable<T>;
    delete(id:number):void;
}
