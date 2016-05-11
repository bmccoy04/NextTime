import {Component} from "@angular/core";

@Component({
    selector: "my-app",
    template: `
<StackLayout>
    <Label text="Remind Me Next Time" class="title"></Label>
    
    <Button text="Next Time" (tap)="onRemindMe()"></Button>

   
</StackLayout>
`,
})

export class AppComponent {
    
    public onRemindMe() {
   
    }
}
