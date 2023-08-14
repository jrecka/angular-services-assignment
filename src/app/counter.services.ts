import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class CounterService {
    activeToInactive = 0;
    inactiveToActive = 0;

    incermentActiveToInactive() {
        this.activeToInactive++;
    }
    
    incermentInactiveToActive() {
        this.inactiveToActive++;
    }
}