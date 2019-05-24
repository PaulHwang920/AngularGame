import { Component, OnInit } from '@angular/core';
import { resetCompiledComponents } from '@angular/core/src/render3/jit/module';

@Component({
  selector: 'app-rps-game',
  templateUrl: './rps-game.component.html',
  styleUrls: ['./rps-game.component.scss']
})
export class RpsGameComponent implements OnInit {

  losses: any;
  wins: any;

  constructor() { }

  ngOnInit() {
    this.reset();
  }
  play(userChoice: string) {
    document.getElementById('player').innerHTML = '';
    document.getElementById('opponent').innerHTML = '';
    document.getElementById('results').innerHTML = '';

    const computerChoicer = Math.random();
    let computerChoice = '';
    if (computerChoicer < 0.34) {
      computerChoice = 'rock';
    } else if (computerChoicer <= 0.67) {
      computerChoice = 'paper';
    } else {
      computerChoice = 'scissors';
    }

    const winner = this.compare(userChoice, computerChoice);
    document.getElementById('results').innerHTML = winner;
    document.getElementById('wins').innerHTML = this.wins;
    document.getElementById('losses').innerHTML = this.losses;
  }

  compare(choice1, choice2) {
    if (choice1 === choice2) {
      return 'Tie!';
    } else if (choice1 === 'rock') {
      if (choice2 === 'scissors') {
        this.wins++;
        return 'You win!';
      } else {
        this.losses++;
        return 'You lose!';
      }
    } else if (choice1 === 'paper') {
      if (choice2 === 'rock') {
        this.wins++;
        return 'You win!';
      } else {
        this.losses++;
        return 'You lose!';
      }
    } else if (choice1 === 'scissors') {
      if (choice2 === 'rock') {
        this.losses++;
        return 'You lose!';
      } else {
        this.wins++;
        return 'You win!';
      }
    }
  }

  reset() {
    this.losses = 0;
    this.wins = 0;
    document.getElementById('wins').innerHTML = this.wins;
    document.getElementById('losses').innerHTML = this.losses;
  }

}
