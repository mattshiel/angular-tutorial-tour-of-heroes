import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // Hero property
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  // Default constructor
  constructor() { }

  // OnInit interface method
  ngOnInit() {
  }

}
