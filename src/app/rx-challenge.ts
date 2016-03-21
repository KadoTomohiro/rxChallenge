import {Component} from 'angular2/core';
import {RouteConfig, Route, Redirect, ROUTER_DIRECTIVES} from 'angular2/router';
import {Simple} from './components/simple/simple';

@Component({
  selector: 'rx-challenge-app',
  providers: [],
  templateUrl: 'app/rx-challenge.html',
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
@RouteConfig([
  new Redirect({path: '/', redirectTo: ['/simple'] }),
  new Route({path: '/simple', name: 'Simple', component: Simple, useAsDefault: true})
])
export class RxChallengeApp {
  defaultMeaning: number = 42;
  
  meaningOfLife(meaning?: number) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}
