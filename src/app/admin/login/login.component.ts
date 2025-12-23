import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/user';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
constructor(private userService: UserService,
  private router:Router){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
user:User =new User();

userlogin(){
  console.log(this.user);
  this.userService.loginuser(this.user).subscribe(data=>{
    alert("login successfully")
    this.router.navigate(['userproducts']);
  },error=>alert("login falid incorrect id and password")
  );
 
}

}
