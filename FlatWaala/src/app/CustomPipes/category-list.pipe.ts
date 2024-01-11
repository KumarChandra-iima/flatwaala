import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'CategoryList'
})
export class CategoryListPipe implements PipeTransform {
    transform(flatItems:any) {
        const categories:any = [];
        flatItems.forEach(function(flatItem:any) {
            if (categories.indexOf(flatItem.category) <= -1) {
                categories.push(flatItem.category);
            }
        });
        return categories.join(', ');
    }
}