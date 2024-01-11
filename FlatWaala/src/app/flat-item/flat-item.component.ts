import { outputAst } from "@angular/compiler";
import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'fw-flat-item',
    templateUrl: './flat-item.component.html',
    styleUrls: ['./flat-item.component.css']
})
export class FlatItemComponent{

    @Input()  flatItem: any;
    @Output() delete:EventEmitter<any>= new EventEmitter();
    name = 'Godrej Park Retreat';

  onDelete() {
    console.log('Deleted');
    this.delete.emit(this.flatItem);
  }
}

