import {Component} from "@angular/core";
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {NS_ROUTER_DIRECTIVES, NS_ROUTER_PROVIDERS} from "nativescript-angular/router";
import {AppComponent} from "../pages/app/app.component";
import {NoteComponent} from "../pages/note/note.component";

@Component({
    selector: 'navigation',
    directives: [NS_ROUTER_DIRECTIVES],
    template: `<page-router-outlet></page-router-outlet>`
})

@RouteConfig([
    { path: '/app', component: AppComponent, name: 'App',  useAsDefault: true},
    { path: '/note', component: NoteComponent, name: 'Note' },
])

export class NavigationComponent { }
