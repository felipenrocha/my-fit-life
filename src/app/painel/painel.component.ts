import { Component, OnInit } from '@angular/core';


const ELEMENT_DATA: Object[] = [
  { numero: 1, nome: 'Sprinter', peso: '-', repeticoes: 15, series: 3 },
  { numero: 2, nome: 'Crucifixo', peso: '15kg', repeticoes: 10, series: 3 },
  { numero: 3, nome: 'Abdominal', peso: '-', repeticoes: 20, series: 3 },
  { numero: 4, nome: 'Flexão', peso: '-', repeticoes: 10, series: 4 },
  { numero: 5, nome: 'Remada', peso: '15kg', repeticoes: 10, series: 3 },
  { numero: 6, nome: 'Serrote', peso: '10kg', repeticoes: 15, series: 3 },
  { numero: 7, nome: 'Elevação Lateral', peso: '-', repeticoes: 20, series: 3 },
  { numero: 8, nome: 'Elevação Frontal', peso: '-', repeticoes: 10, series: 4 },





];
@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})



export class PainelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  myDate = new Date();
  chartType = 'line';

  chartDatasets = [
    { data: [102, 95, 90, 88, 84, 86, 86], label: 'Peso' }
  ];
  displayedColumns: string[] = ['numero', 'nome', 'peso', 'repeticoes', 'series', 'acoes'];
  dataSource = ELEMENT_DATA;
  chartLabels = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'];

  chartColors = [
    {
      backgroundColor: 'rgba(105, 0, 132, .2)',
      borderColor: 'rgba(200, 99, 132, .7)',
      borderWidth: 2,
    },
    {
      backgroundColor: 'rgba(0, 137, 132, .2)',
      borderColor: 'rgba(0, 10, 130, .7)',
      borderWidth: 2,
    }
  ];


  chartType2 = 'line';

  chartDatasets2 = [
    { data: [34, 32, 31, 28, 25, 25, 23, 24], label: 'Percentual de Gordura' }
  ];

  chartLabels2 = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'];

  chartColors2 = [

    {
      backgroundColor: 'rgba(0, 137, 132, .2)',
      borderColor: 'rgba(0, 10, 130, .7)',
      borderWidth: 2,
    }
  ];

  chartOptions: any = {
    responsive: true
  };

  chartClicked(event: any) {
    console.log(event);
  }

  chartHovered(event: any) {
    console.log(event);
  }

}
