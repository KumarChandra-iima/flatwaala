import { Component, OnInit} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FlatItemService } from "../flat-item/flat-item.service";
import { Suchi } from "../types";
import { farjiData } from "../farji-data";
@Component({
    selector: 'fw-flat-item-list',
    templateUrl: './flat-item-list.component.html',
    styleUrls: ['./flat-item-list.component.css']
})
export class FlatItemListComponent implements OnInit{
    suchi:Suchi[]=[];
    flatItems: any;
    type='';
    constructor(private flatItemService: FlatItemService,
      private activatedRoute: ActivatedRoute){}
    ngOnInit() {
      this.getFlatItems(this.type);
      this.activatedRoute.paramMap
      .subscribe(paramMap=>{
        let inputType='';
        var type:any = paramMap.get('type');
        if(!(type.toLowerCase()==='all')){
          inputType=type;
        }
        this.getFlatItems(inputType);
        this.suchi = farjiData;
      });
      }
    
   
    name = 'Godrej Park Retreat';
   
    
    getFlatItems(type:string){
      this.type=type;
    this.flatItemService.get(type)
      .subscribe(flatItems=>{
        this.flatItems = flatItems;
      });
    }

    onFlatItemDelete(flatItem: any){
      this.flatItemService.delete(flatItem)
      .subscribe(()=>{
        this.getFlatItems(this.type);
      })
    }
}

