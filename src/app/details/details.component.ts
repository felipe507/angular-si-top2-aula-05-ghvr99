import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { disciplinas } from '../disciplinas';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  disciplina;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.disciplina = disciplinas[params.get("index")];
    });
  }

}