import { Component, OnInit } from '@angular/core';
import { disciplinas } from '../disciplinas';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  disciplinas = disciplinas;
  semestre = 1;

  constructor() { }

  ngOnInit() {
  }

  getDisciplinas(){
    let out = [];
    for(let i in this.disciplinas){
      if(this.disciplinas[i].semestre == this.semestre){
        out.push(this.disciplinas[i]);
      }
    }
    return out;
  }

  getAverage(){
    let sum = 0;
    for(let i in this.getDisciplinas()){
      sum += this.getDisciplinas()[i].nota;
    }
    return sum / this.getDisciplinas().length;
  }

}