import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/user';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-userreg',
  templateUrl: './userreg.component.html',
  styleUrls: ['./userreg.component.scss']
})
export class UserregComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  user:User =new User();
  constructor(private userService: UserService, private router:Router ){}
  adduser(){
    console.log(this.user);
  this.userService.addUsers(this.user).subscribe();
  alert("new user addeed");
  this.router.navigate(['userProducts']);

  }

   
}
 
