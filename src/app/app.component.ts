import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  duration: string;
  primes: number[] = [];
  table;
  firstNth = 0;

  firstNthPrimeNumbers = 10;

  ngOnInit() {
    this.generateFirstNthPrimeNumbers(this.firstNthPrimeNumbers);
  }

  isPrimeNumber(num: number) {
    let iterator = 2;
    let conclusion = true;

    while (iterator < num) {
      if ((num % iterator) === 0) {
        conclusion = false;
        break;
      }
      iterator++;
    }

    return conclusion;
  }

  castToNumber(num) {
    this.firstNthPrimeNumbers = num;
    return parseInt(num, 10);
  }

  generateTable(primes: number[]) {
    const primesLength = primes.length;
    let verticalRowStart = 0;
    let horizontalRowStart = 0;

    this.table = [];

    while (verticalRowStart < primesLength) {
      const newRow: number[] = [];
      while (horizontalRowStart < primesLength) {
        newRow.push(primes[verticalRowStart] * primes[horizontalRowStart]);
        horizontalRowStart++;
      }
      this.table.push(newRow);
      verticalRowStart++;
      horizontalRowStart = 0;
    }
  }

  generateFirstNthPrimeNumbers(nth) {
    const nthNumber = this.castToNumber(nth);
    this.primes = [];
    let initial = 2;
    this.primes = [initial];

    const initialTime = performance.now();

    while (this.primes.length < nthNumber) {
      initial++;
      if (this.isPrimeNumber(initial)) {
        this.primes.push(initial);
      }
    }

    this.generateTable(this.primes);
    this.duration = `${(performance.now() - initialTime).toFixed(2)}s`;
  }

}
