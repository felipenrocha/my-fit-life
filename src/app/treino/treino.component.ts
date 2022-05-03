import { Component, OnInit } from '@angular/core';
import { Exercicio, Treino } from '../models/treino';


const treino: Treino = {
  dia: 'Terça-Feira',
  exercicios: [

    {
      numero: 1, nome: 'Crucifixo', peso: '15kg', repeticoes: 10, series: 3, url: "NB_1mCfIOLU",
      descricao: "O crucifixo é uma boa opção para quem busca hipertrofia ou uma maior definição do peito. Isso porque os movimentos de adução e abdução dos ombros (abrir e fechar) propostos pelo exercício têm um efeito bastante focado no principal músculo da região, o peitoral maior, contribuindo para um resultado ainda melhor. O crucifixo pode ser realizado de diversas maneiras: com halteres no banco reto, inclinado ou declinado, na máquina ou na polia. E, por recrutar somente uma articulação (monoarticular), tem execução simples e pode ser realizado por alunos de todos os níveis."
    },
    {
      numero: 2, nome: 'Abdominal', peso: '-', repeticoes: 20, series: 3, url: "mfkfUkj24co",
      descricao: "Você irá deitar no solo, com a barriga voltada para cima, joelhos flexionados apontados para o teto e pés firmes no chão alinhados com seu quadril. Incline o tronco para frente como se fosse encostar o peito nos joelhos."
    },
    {
      numero: 3, nome: 'Flexão', peso: '-', repeticoes: 10, series: 4, url: 'lkvSelJ0tQ8',
      descricao: "Uma flexão consiste em fazer baixar o corpo de forma uniforme até que o peito fique a uma mão travessa do solo, sem lhe tocar e de seguida regressar a posição inicial."
    },
    {
      numero: 4, nome: 'Remada Unilateral', peso: '15kg', repeticoes: 10, series: 3, url: "EUisRaNkCd4",
      descricao: "Contribui para melhorar a postura Isso ocorre pois, além de fortalecer os músculos das costas, a remada unilateral com halter ativa estruturas profundas do abdômen (core) para evitar a rotação do tronco durante e execução, o que ajuda a manter a coluna mais ereta no dia a dia."
    },
    {
      numero: 5, nome: 'Elevação Lateral', peso: '-', repeticoes: 20, series: 3, url: "W5hRdgwEoEA",
      descricao: "Faça um leve contração abdominal e mantenha braços posicionados ao lado do corpo com a palma das mãos voltadas para o corpo; Deixe os cotovelos relaxados; Eleve os braços lateralmente, sem flexioná-los, até que as mãos atinjam a altura dos ombros."
    },
    {
      numero: 6, nome: 'Sprinter', peso: '-', repeticoes: 15, series: 3, url: "9hHt_1OTQL8",
      descricao: "Esse exercício é tido como um dos mais difíceis, devendo ser feita por quem já está fisicamente preparado, ele usa somente o peso do próprio corpo. Além disso, o exercício pode melhorar a postura e aliviar as dores na coluna, deixando o corpo mais estável.    Para fazer esse exercício, você precisa ficar de bruços no chão, apoiando os cotovelos e antebraços, deixando-os alinhados ao ombro. Deixe as pontas dos pés no chão, no mesmo nível dos ombros. Fique nessa posição por 30 segundos, continue respirando regularmente e comece novamente."
    },
    {
      numero: 7, nome: 'Elevação Frontal', peso: '-', repeticoes: 10, series: 4, url: "RUzWF4aDt7g",
      descricao: "A elevação frontal é um exercício de musculação. Este exercício é um exercício isolado que isola a flexão do ombro. Atua principalmente no deltóide anterior, com assistência do serrátil anterior, do bíceps braquial e das partes claviculares do peitoral maior."
    }

  ]



};

@Component({
  selector: 'app-treino',
  templateUrl: './treino.component.html',
  styleUrls: ['./treino.component.css']
})
export class TreinoComponent implements OnInit {

  constructor() { }
  myDate = new Date();
  //  index of current exercise
  currentExercicioIndex = 0;
  // quantidade de exericios 
  exerciciosLength: number = treino.exercicios.length
  currentExercicio: Exercicio = treino.exercicios[this.currentExercicioIndex]

  ngOnInit(): void {
    console.log(treino.exercicios.length);

  }
  nextExercise() {
    this.currentExercicioIndex++;
    this.currentExercicio = treino.exercicios[this.currentExercicioIndex]

  }
  previousExercise() {
    this.currentExercicioIndex--;
    this.currentExercicio = treino.exercicios[this.currentExercicioIndex]


  }

}




