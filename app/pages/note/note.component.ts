import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router-deprecated";

@Component({
    selector: 'note',
    templateUrl: "pages/note/note.component.html",
    styleUrls:["pages/note/note.component.css"]
})
export class NoteComponent{
    public note : string;
    public location: string;
    constructor(private _router: Router) { }
    
    public onSave(){
        alert(this.note);
    }
}