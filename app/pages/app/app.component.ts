import {Component} from "@angular/core";
import {Router} from "@angular/router-deprecated";

@Component({
    selector: "my-app",
    template: `
<StackLayout>
    <Label text="Remind Me Next Time"
      class="title"></Label>
    
    <Button text="Next Time" (tap)="onRemindMe()" ></Button>

   
</StackLayout>
`,
})

export class AppComponent {
    
    constructor(private _router: Router) {
    }
    public onRemindMe() {
        this._router.navigate(["Note"]);;
    }
}
