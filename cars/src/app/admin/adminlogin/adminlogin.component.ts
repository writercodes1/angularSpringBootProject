import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/admin';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss']
})
export class AdminloginComponent implements OnInit{
  constructor(private adminservice:AdminService,private router:Router){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
 admin:Admin =new Admin();
  admincheck(){
    this.adminservice.loginadmin(this.admin).subscribe(data=>{
      console.log(Admin);
      alert("login successfully")
      this.router.navigate(['managepro']);
    },error=>alert("login falid incorrect id and password")
    );
  }
}
