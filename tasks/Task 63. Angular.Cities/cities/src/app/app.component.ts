import { createInjectorType } from '@angular/compiler/src/render3/r3_injector_compiler';
import { Component } from '@angular/core';
import { Player } from './Player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    //игроки
    player1: Player = new Player("Вася");
    player2: Player = new Player("Петя");
    // город
    city: string = "Москва";
    currentLetter: string = "нет";
    current1: boolean = true;
    current2: boolean = false;

    addCity($event: any):void{
        if($event.keyCode != 13)
            return;
       
        if(this.player1.cities.length == 0){
            this.player1.cities.push(this.city);
            this.current1 = false;
            this.current2 = true;
            this.currentLetter = this.city[this.city.length-1].toLowerCase();
        }
        
        let firstLetter = this.city[0].toLowerCase(); 
        
        if(this.currentLetter != firstLetter || !this.checkCity(this.city)){
            return;
        }

        this.currentLetter = firstLetter;
        if(this.current1){
            this.player1.cities.push(this.city);
            this.current1 = false;
            this.current2 = true;
        } else {
            this.player2.cities.push(this.city);
            this.current1 = true;
            this.current2 = false;
        }
    }

    checkCity(city:string): boolean{
        if(this.player1.cities.includes(city) || this.player2.cities.includes(city))
            return false;
        
        return true;
    }
}
