import { Component, Input} from '@angular/core';
import { Twit } from '../twit';

@Component({
  selector: 'app-twit',
  templateUrl: './twit.component.html',
  styleUrls: ['./twit.component.css']
})
export class TwitComponent{
    @Input()
    twits: Twit[] = [];
}
