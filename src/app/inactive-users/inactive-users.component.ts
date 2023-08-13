import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { CounterService } from '../counter.services';
@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users: string[];
  counter: number = 0;

  constructor(private usersService: UsersService, private counterService: CounterService) {}

  ngOnInit(): void {
      this.users = this.usersService.inactiveUsers;
  }

  setToActive(id: number) {
    this.usersService.setToActive(id);
    this.counterService.incermentInactiveToActive();
    this.counter = this.counterService.inactiveToActive;
  
  }
}
