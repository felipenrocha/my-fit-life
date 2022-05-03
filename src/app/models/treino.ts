import { ThisReceiver } from "@angular/compiler";

export class Treino {
    dia: string;
    exercicios: Exercicio[];
    constructor(dia: string, exercicios: Exercicio[]){
        this.dia = dia
        this.exercicios = exercicios
    }
}

export class Exercicio {
    numero: number;
    nome: string;
    peso: string;
    repeticoes: number;
    series: number;
    descricao?: string
    url?: string;
    constructor(numero: number, nome: string, peso:string, repeticoes: number, series: number, descricao?: string, url?: string){
        this.numero = numero
        this.nome = nome
        this.peso = peso
        this.series = series
        this.repeticoes = repeticoes
        if (descricao) {
            this.descricao = descricao
        }
        if (url) {
            this.url = url
        }
    
    }

}