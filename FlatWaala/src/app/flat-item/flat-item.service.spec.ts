import { FlatItemService } from "./flat-item.service";
import { HttpClient } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
describe('Flat List Service', ()=>{
    let service: FlatItemService;

    beforeEach(()=>{
        TestBed.configureTestingModule({
            providers:[
                {provide: HttpClient, useValue: jasmine.createSpyObj('HttpClient', ['get','post','delete'])}
            ],
        })
        .compileComponents();

        service = TestBed.inject(FlatItemService);
    }) ;
    // it('should return a Flat List with 5 Flats', (done: DoneFn)=>{
    //     service.get('all').then((response:any)=>{
    //         expect(response.length).toBe(5);
    //         done();
    //     });
    // });

    it('should be created', ()=>{
        expect(service).toBeTruthy();
    });

});
