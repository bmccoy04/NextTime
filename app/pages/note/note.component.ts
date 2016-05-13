import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router-deprecated";

@Component({
    selector: 'note',
    template: `<StackLayout>
    <Label text="Remind Me:" class="title"></Label>
    
    <TextView class="textbox" hint="NextTime" text="{{ note }}"></TextView>
   
    <Button text="Save" (tap)="onSave()" ></Button>
   
</StackLayout>`,
styles:["pages/note/note.component.css"]
})
export class NoteComponent{
    public note : string;
    
    constructor(private _router: Router) { }
    
    public onSave(){
        alert(this.note);
    }
}