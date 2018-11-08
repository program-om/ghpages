import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.css']
})
export class PortfolioPageComponent implements OnInit {
  pageName = ""

  constructor(private _route: ActivatedRoute) { }
  
  ngOnInit() {
    this.pageName = this._route.snapshot.params.page + ".html"
  }

}
