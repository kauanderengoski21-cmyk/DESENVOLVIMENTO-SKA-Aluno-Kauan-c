import { personagem } from "./personagem";
export class Serjao extends personagem {
  
    constructor(nome: string, forca: number, vida: number) {
    
        super(
      nome,
      forca,
      vida,
      "https://montinkantigo.s3.amazonaws.com/data/camisas/serjao-aqui-tem-coragem-5c6f2668bccc3-estampa-301.png",
    );
  }

  public atacar(persona: personagem): void {
    console.log(`${this.nome} ataque com uma onca: ${persona.nome}`);
    persona.sofrerAtaque(this.forca);
  }

  public usarHabilidade(opcao: number, persona: Serjao): void {
    switch (opcao) {
      case 1:
        this.atacar(persona);
        break;
      case 2:
        this.PalavrasAbencoadas(persona);
        break;
      case 3:
        this.FacaoMatador(persona);
        break;
     
    }
  }

  public PalavrasAbencoadas(persona: personagem): void {
    const critico = Math.random() < 30;
    const dano = critico ? this.forca * 2 : this.forca;
  }
  public FacaoMatador(persona: personagem): void {
    const dano = this.forca * 50;
    console.log(
      `${this.nome} com esse ataque causou sangramento ${persona.nome}`,
    );
    persona.sofrerAtaque(dano);
  }

  public curar(valor: number): void {
    const vidaAntes = this.vida;
    this.vida = Math.min(this.vida + valor);

    this.log(`${this.nome} curou ${this.vida - vidaAntes} HP`);
  }
}