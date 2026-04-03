import { funcionario } from "./funcionario";

export class Funcionario {
    public nome: string;
    protected salario: number;

    constructor(nome: string, salario: number) {
        this.nome = nome;
        this.salario = salario;
    }

    ganharAumento(valor: number): number {
        this.salario += valor;
        return this.salario;
    }

    falar(): void {
        console.log("Eu sou um funcionário.");
    }

    mostrarSalario(): number {
        return this.salario;
    }
}