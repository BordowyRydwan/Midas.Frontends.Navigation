import { Component } from '@angular/core';
import { assetUrl } from "../../../single-spa/asset-url";
import ComponentState from "../../../enums/component-state";

@Component({
  selector: 'app-logged-menu',
  templateUrl: './logged-menu.component.html',
  styleUrls: ['./logged-menu.component.css']
})
export class LoggedMenuComponent {
  state = ComponentState.LOADING
  states = ComponentState;

  logoUrl = assetUrl('logo-dark.png');
}
