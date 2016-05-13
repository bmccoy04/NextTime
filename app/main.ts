// // this import should be first in order to load some required settings (like globals and reflect-metadata)
// import {nativeScriptBootstrap} from "nativescript-angular/application";
// import {AppComponent} from "./app/app.component";

//nativeScriptBootstrap(AppComponent);

import {nativeScriptBootstrap} from "nativescript-angular/application";
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {NS_ROUTER_DIRECTIVES, NS_ROUTER_PROVIDERS} from "nativescript-angular/router";
import {NavigationComponent} from "./navigation/navigation.component";

// @Component({
//     selector: 'navigation',
//     directives: [NS_ROUTER_DIRECTIVES],
//     template: `<page-router-outlet></page-router-outlet>`
// })
// @RouteConfig([
//     { path: './app/app.component', component: AppComponent, name: 'First', useAsDefault: true },
//     { path: '/second', component: SecondComponent, name: 'Second' },
// ])

// export class NavigationTestPageRouter { }

nativeScriptBootstrap(NavigationComponent, [NS_ROUTER_PROVIDERS]);