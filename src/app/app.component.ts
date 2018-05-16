import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  updateData(e) {
    console.log('------------------- update -------------------');
    console.log(e);
  }
}
