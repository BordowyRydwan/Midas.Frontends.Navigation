import { Component } from '@angular/core';
import { assetUrl } from "../../../single-spa/asset-url";
import ComponentState from "../../../enums/component-state";

@Component({
  selector: 'app-not-logged-menu',
  templateUrl: './not-logged-menu.component.html',
  styleUrls: ['./not-logged-menu.component.css']
})
export class NotLoggedMenuComponent {
  state = ComponentState.LOADING
  states = ComponentState;

  logoUrl = assetUrl('logo-dark.png');
}
