import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router-deprecated";
import {LocationService} from "../../shared/location/location.services";

@Component({
    selector: 'note',
    providers: [LocationService],
    templateUrl: "pages/note/note.component.html",
    styleUrls:["pages/note/note.component.css"]
})
export class NoteComponent{
    public note : string;
    public location: string;
    constructor(private _router: Router, private _location: LocationService) { }
    
    public onSave(){
        //alert(this.note);
        this._location.enableLocationRequest();
        //alert(this._location.latitude + " " + this._location.longitude);
       
    }
}