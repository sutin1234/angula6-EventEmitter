import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-data-store',
  templateUrl: './data-store.component.html',
  styleUrls: ['./data-store.component.css']
})
export class DataStoreComponent implements OnInit {
  @Output() updateParam = new EventEmitter();
  counter: any = 0;
  html_content = '';
  constructor() {}

  ngOnInit() {
    setInterval(() => {
      this.html_content = new Date()
          .getTime()
          .toString();
      this.updateParam.emit(this.html_content + ' OK');
    }, 5000);
  }

  valueChange() {
    this.counter = this.counter + 1;
    this.updateParam.emit(this.counter);
    console.log('valueChanged ' + this.counter);
  }
}
