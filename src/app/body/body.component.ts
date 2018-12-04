import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  public arrayIcon: any[] = [];

  constructor() {

    this.arrayIcon.push(
      {
        id: 1,
        img: '../../assets/images/competencia.png',
        description: 'Competencias 360º',
      },
      {
        id: 2,
        img: '../../assets/images/metas.png',
        description: 'Metas',
      },
      {
        id: 3,
        img: '../../assets/images/clima.png',
        description: 'Clima Laboral',
      },
      {
        id: 4,
        img: '../../assets/images/pid.png',
        description: 'Plan Individual de Desarrollo',
      }
    )

  }

  ngOnInit() {
  }

}
