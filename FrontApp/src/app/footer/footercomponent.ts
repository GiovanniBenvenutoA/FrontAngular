import { Component } from "@angular/core";

@Component({
    selector: 'app-footer',
    templateUrl: './footercomponent.html'
})

export class FooterComponent {
   public  autor:any = {nombre:'Giovanni',apellido:'Benvenuto' }
}
