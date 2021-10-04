import { Component } from "@angular/core";

@Component({
    selector:"about",
    template:"<h4>{{title}} Page...</h4>"
})
export class AboutComponent{
     title:string="About";
}