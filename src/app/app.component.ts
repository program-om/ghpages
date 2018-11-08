import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'; //for routing using id

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private router: Router, private route: ActivatedRoute) { }

  toAbout(){
    this.router.navigate(['about'], {relativeTo: this.route});
  }

  toHome(){
    this.router.navigate(['']);
  }

  toPortfolio(){
    this.router.navigate(['portfolio'])
  }

  toBlog(){
    this.router.navigate(['blog'], {relativeTo: this.route});
  }
}
