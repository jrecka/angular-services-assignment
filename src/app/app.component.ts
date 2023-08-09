import { Component } from '@angular/core';
import { UsersService } from './users.service';
import { CounterService } from './counter.services';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService]
})
export class AppComponent {
  activeUsers = [];
  inactiveUsers = [];
  constructor(private usersService: UsersService, private counterService: CounterService) {
    this.activeUsers = this.usersService.activeUsers;
    this.inactiveUsers = this.usersService.inactiveUsers;
  }

}
