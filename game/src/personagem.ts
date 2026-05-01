export abstract class personagem {
  public nome: string = "personagem";
  protected forca: number = 0;
  protected vida: number = 0;
  protected cura: number = 0;
  protected imagem: string = "";

  constructor(nome: string, forca: number, vida: number, imagem: string) {
    this.imagem = imagem;
    this.nome = nome;
    this.forca = forca;
    this.vida = vida;
  }

  CountinuaVivo(): boolean {
    return this.vida > 0;
  }

  sofrerAtaque(dano: number): void {
    this.vida = this.vida - dano;

    console.log(
      `${this.nome} recebeu ${dano} de dano. vida atual: ${this.vida} `,
    );
  }

  public abstract atacar(persona: personagem): void;

  getVida() {
    return this.vida;
  }
  getImg () {
   return this.imagem;
  }
}
