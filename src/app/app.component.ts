import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from "@angular/router";
import { filter } from "rxjs";
import { CookieService } from "./services/cookie/cookies.service";

@Component({
  selector: 'navigation-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLogged = false;

  constructor(
    private router: Router,
    private cookieService: CookieService
  ) {}

  ngOnInit() {
    this.routerEvent();
  }

  private setLoggedFlag(): void {
    this.cookieService.getCookie('USER_SESSION')
      .subscribe((result) => this.isLogged = result !== undefined);
  }

  private routerEvent(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => this.setLoggedFlag());
  }
}
