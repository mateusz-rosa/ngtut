import { Component, OnInit } from '@angular/core';
import { Dog } from '../dog';
import { DOGS } from '../mock-heroes';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})
export class DogsComponent implements OnInit {

  dogs = DOGS;
  constructor() { }

  ngOnInit() {
  }

}
