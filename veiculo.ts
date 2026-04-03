export class veiculo { 
  constructor( public    marca: string, protected velocidade: number = 0 ) {}

  acelerar(v: number): void {
    this.velocidade += v;
  }

  exibir() {
  console.log ("marca" + this.marca + " " + this.velocidade + "km/h");
  }
  }

