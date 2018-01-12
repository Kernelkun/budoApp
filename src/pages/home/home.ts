import { Component, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  ball;
  garden;
  output;
  maxY;
  maxX;

  constructor(public navCtrl: NavController, private elRef: ElementRef) {

  }

  ngInit() {
    // window.addEventListener('deviceorientation', this.handleOrientation);

  }

  ngAfterViewInit() {
    this.ball = this.elRef.nativeElement.querySelector('.card');
    this.garden = this.elRef.nativeElement.querySelector('.container');
    this.output = this.elRef.nativeElement.querySelector('.output');

    this.maxX = this.garden.clientWidth - this.ball.clientWidth;
    this.maxY = this.garden.clientHeight - this.ball.clientHeight;
  }

  handleOrientation(event) {
    var x = event.beta;  // In degree in the range [-180,180]
    var y = event.gamma; // In degree in the range [-90,90]

    this.output.innerHTML = "beta : " + x + "\n";
    this.output.innerHTML += "gamma: " + y + "\n";

    // Because we don't want to have the device upside down
    // We constrain the x value to the range [-90,90]
    if (x > 90) { x = 90 };
    if (x < -90) { x = -90 };

    // To make computation easier we shift the range of 
    // x and y to [0,180]
    x += 90;
    y += 90;

    this.ball.style.transform = 'rotateX(' + (this.maxX * x / 180 - 50) + 'deg) rotateY(' + (this.maxY * y / 180 - 50) + 'deg)';
  }


}
