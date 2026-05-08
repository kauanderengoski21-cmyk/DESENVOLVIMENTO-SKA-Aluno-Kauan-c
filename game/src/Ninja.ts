import { personagem } from "./personagem";

export class Ninja extends personagem {
      
    constructor(nome: string, forca: number, vida: number) {
        super(nome, forca, vida, "https://henchman4hire.com/wp-content/uploads/2019/04/mk-ninja-ranking-17.png");
    }

    
    public atacar(persona: personagem): void {
        console.log(`${this.nome} atacou com katana ${persona.nome}`);
        persona.sofrerAtaque(this.forca);
    }

    
    public shuriken (persona: personagem): void {
        const dano = this.forca * 1.5;
        console.log(`${this.nome} usou usou sua shurikens ${persona.nome}`);
        persona.sofrerAtaque(dano);
    }

    
    public BleedSword (persona: personagem): void {
        const critico = Math.random() < 0.3; 
        const dano = critico ? this.forca * 2 : this.forca;

        console.log(`${this.nome} tentou um Ataque Crítico em ${persona.nome}`);

        if (critico) {
            this.log("CRÍTICO!");
        }

        persona.sofrerAtaque(dano);
    }

    
    public curar(valor: number): void {
        const vidaAntes = this.vida;
        this.vida = Math.min(this.vida + valor, );

        this.log(`${this.nome} curou ${this.vida - vidaAntes} HP`);
    }

}