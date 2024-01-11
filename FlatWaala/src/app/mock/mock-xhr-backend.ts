import { HttpEvent, HttpRequest, HttpResponse, HttpBackend } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';

export class MockXHRBackend implements HttpBackend {

    private flatItems=[
        {
          id:1,
          name:'DCH - Dil Chahta Hai',
          type:'2bhk',
          facing:'East',
          floor:'11/14',
          visitedOn:'01/08/2024',
          isFavorite: false,
        },
        {
          id:2,
          name:'DCH - Dil Chahta Hai',
          type:'3bhk',
          facing:'East',
          floor:'11/14',
          visitedOn:'01/07/2024',
          isFavorite: false,
        },
        {
          id:3,
          name:'Shriram Greenfields',
          type:'2bhk',
          facing:'East',
          floor:'18/18',
          visitedOn:'01/03/2024',
          isFavorite: true,
        },
        {
          id:4,
          name:'Godrej Park Retreat',
          type:'1bhk',
          facing:'East',
          floor:'15/27',
          visitedOn:'01/03/2024',
          isFavorite: true,
        },
        {
          id:5,
          name:'Blue Heights',
          type:'6bhk',
          facing:'East',
          floor:'48/50',
          visitedOn:'01/03/2024',
          isFavorite: true,
        }
      ];

    handle(request: HttpRequest<any>): Observable<HttpEvent<any>> {
        return new Observable((responseObserver: Observer<HttpResponse<any>>) => {
            let responseOptions;
            switch (request.method) {
              case 'GET':
                if (request.urlWithParams.indexOf('flatItems?type=') >= 0 || request.url === 'flatItems') {
                  let type:any;
                  if (request.urlWithParams.indexOf('?') >= 0) {
                    type = request.urlWithParams.split('=')[1];
                    if (type === 'undefined') { type = ''; }
                  }
                  let flatItems;
                  if (type) {
                    flatItems = this.flatItems.filter(i => i.type === type);
                  } else {
                    flatItems = this.flatItems;
                  }
                  responseOptions = {
                    body: {flatItems: JSON.parse(JSON.stringify(flatItems))},
                    status: 200
                  };
                } else {
                  let flatItems;
                  const idToFind = parseInt(request.url.split('/')[1], 10);
                  flatItems = this.flatItems.filter(i => i.id === idToFind);
                  responseOptions = {
                    body: JSON.parse(JSON.stringify(flatItems[0])),
                    status: 200
                  };
                }
                break;
              case 'POST':
                const flatItem = request.body;
                flatItem.id = this._getNewId();
                this.flatItems.push(flatItem);
                responseOptions = {status: 201};
                break;
              case 'DELETE':
                const id = parseInt(request.url.split('/')[1], 10);
                this._deleteFlatItem(id);
                responseOptions = {status: 200};
            }
      
            const responseObject = new HttpResponse(responseOptions);
            responseObserver.next(responseObject);
            responseObserver.complete();
            return () => {
            };
          });
        }
      
        _deleteFlatItem(id:any) {
          const flatItem :any= this.flatItems.find(i => i.id === id);
          const index = this.flatItems.indexOf(flatItem);
          if (index >= 0) {
            this.flatItems.splice(index, 1);
          }
        }
      
        _getNewId() {
          if (this.flatItems.length > 0) {
            return Math.max.apply(Math, this.flatItems.map(flatItem => flatItem.id)) + 1;
          } else {
            return 1;
          }
        
    }
    

}