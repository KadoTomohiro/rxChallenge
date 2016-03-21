import {Component} from 'angular2/core';
import * as Rx from 'rxjs/Rx';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'simple',
  templateUrl: 'app/components/simple/simple.html',
  styleUrls: ['app/components/simple/simple.css'],
  providers: [],
  directives: [],
  pipes: []
})
export class Simple {

  numberStream: Observable<number>;

  numbers: number[];

  total: number;

  constructor() {
    this.numberStream = Rx.Observable.range(0,10);

    this.numberStream
      .filter(n => n % 3 === 0)
      .map(n => n * 3)
      .toArray()
      .subscribe(numbers => this.numbers = numbers);

    this.numberStream
      .scan((sum: number, n: number) => sum + n)
      .subscribe((total: number) => this.total = total);
  }

}
