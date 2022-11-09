import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'password-toggle';

  ngOnInit(){
    let eyeicon:any=document.getElementById("eyeicon");
    let password:any=document.getElementById("password");
    eyeicon.onclick=function(){
      debugger
      if(password.type=="password"){
        password.type="text";
        eyeicon.src="/assets/eye-open.png";
      }
      else{
        password.type="password";
        eyeicon.src="/assets/eye-close.png";
      }
    }
  }

}
