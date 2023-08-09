import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class CounterService {
    allActions = 0;

    countActions() {
       this.allActions =+ 1;

    }
}