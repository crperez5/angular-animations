import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { trigger, state, style, transition, animate} from "@angular/animations";
import { WikiService } from './wiki-service.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-root',
  animations: [
    trigger('signal', [
     
        state('go', style({
            'background-color': '#afef20',
            'transform': 'translateY(200%)'
        })),
        state('stop', style({
            'background-color': 'red',
            'transform': 'translateY(0%)'
        })),
        state('attention', style({
          'background-color': 'orange',
          'transform': 'translateY(100%)'
      })),
        transition('* => *', animate(200))
    ])
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  signal = 'go';
  items: Array<string> = [];
  keyup$ = new Subject<string>();

  constructor(private wikiService: WikiService) {
    this.keyup$
      .debounceTime(500)
      .distinctUntilChanged()
      .filter(v => v.length >= 3)
      .switchMap(v => this.wikiService.search(v))
      .subscribe(i => this.items = i);
  }

  ngOnInit() {
    Observable.timer(0, 2000).subscribe(this.changeLight.bind(this));
  }

  changeLight() {
    switch (this.signal) {
      case 'stop':
          this.signal = 'go';
          break;
        case 'attention':
          this.signal = 'stop';
          break;
        case 'go':
          this.signal = 'attention';
          break;
        default:
          break;
    }
  }
}
