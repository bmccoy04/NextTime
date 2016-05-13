
import {nativeScriptBootstrap} from "nativescript-angular/application";
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {NS_ROUTER_DIRECTIVES, NS_ROUTER_PROVIDERS} from "nativescript-angular/router";
import {NavigationComponent} from "./navigation/navigation.component";


nativeScriptBootstrap(NavigationComponent, [NS_ROUTER_PROVIDERS]);