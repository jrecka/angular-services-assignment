import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { CounterService } from '../counter.services';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  
   users: string[];
   counter: number = 0;

  constructor(private usersService: UsersService, private counterService: CounterService) {}

  ngOnInit(): void {
      this.users = this.usersService.activeUsers;
  }

  setToInactive(id: number) {
    this.usersService.setToInactive(id);
    this.counterService.incermentActiveToInactive();
    this.counter = this.counterService.activeToInactive;
    
  }
  
}
