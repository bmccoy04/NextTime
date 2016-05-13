import {Component} from "@angular/core";
import {Router} from "@angular/router-deprecated";

@Component({
    selector: "my-app",
    template: `
<StackLayout>
    
    <Button class="circle" text="Next Time" (tap)="onRemindMe()" ></Button>

   
</StackLayout>
`,
styleUrls: ["pages/app/app.component.css"]
})

export class AppComponent {
    
    constructor(private _router: Router) {
    }
    public onRemindMe() {
        this._router.navigate(["Note"]);;
    }
}
