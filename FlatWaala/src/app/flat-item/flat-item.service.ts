import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { map, catchError, throwError } from "rxjs";
@Injectable({
    providedIn: 'root'
})
export class FlatItemService{
      constructor(private http:HttpClient){}
      get(type:string){
        const getOptions = {
            params: {type}
        };
        return this.http.get<flatItemReponse>('flatItems', getOptions)
            .pipe(
                map(response=>{return response.flatItems}),
                catchError(this.handleError)
            );
      }

      add(flatItem:any){
        return this.http.post('flatItems', flatItem)
        .pipe(catchError(this.handleError));
      }

      delete(flatItem:any){
        return this.http.delete(`flatItems/${flatItem.id}`)
        .pipe(catchError(this.handleError));
      }

      private handleError(error: HttpErrorResponse){
        console.log('Error.Message: '+error.message);
        return throwError('A data error occurred, please try again!!');
      }
}
interface flatItem{
    id: number,
    name: string,
    type:string,
    facing:string,
    floor: string,
    visitedOn:string,
    isFavorite: boolean,
}

interface flatItemReponse{
    flatItems: flatItem[];
}