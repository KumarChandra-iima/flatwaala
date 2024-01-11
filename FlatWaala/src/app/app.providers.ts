import { InjectionToken } from "@angular/core";

export const lookupListsToken = new InjectionToken('lookupListsToken');
export const lookupLists={
    types:['1bhk', '2bhk', '3bhk','5bhk','6bhk'],
    builders:['Godrej', 'Shriram', 'Shobha', 'Ozone Urbana', 'Imperial']
};
