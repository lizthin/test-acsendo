import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  public arrayIcon: any[] = [];
  public arrayCompetition: any[] = [];

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
    this.arrayCompetition.push(
      {
        id: 1,
        img: '../../assets/images/icon1.png',
        tittle: 'Flexible',
        description: 'Adaptable a su modelo de competencias'
      },
      {
        id: 2,
        img: '../../assets/images/icon2.png',
        tittle: 'Multi-Nível',
        description: 'Evaluación de 90º, 180º o 360º'
      },
      {
        id: 3,
        img: '../../assets/images/icon3.png',
        tittle: 'Competencias Especíﬁcas',
        description: 'Competencias de nivel de cargo, departamento, organizacionales y de liderazgo'
      },
      {
        id: 4,
        img: '../../assets/images/icon4.png',
        tittle: 'Resultados Web & Reportes Detallados',
        description: 'Visualice la información fácilmente e interprete los resultados rápidamente'
      },
    )
  }

  ngOnInit() {
  }

}
