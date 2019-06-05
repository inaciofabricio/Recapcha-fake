import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  loading : number = 1;

  euNaoSouRobo(){
    this.loading = 2;
    setTimeout(() => this.loading = 3,2000);
  }
}
