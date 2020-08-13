import { Residence } from "./Residencial";

export class ResidentialClient extends Residence{
    constructor(
        public name: string,
        public registrationNumber:number,
        public consumedEnergy: number, 
        private cpf: number,
        residentsQuantity: number,
        cep: string  
    ){
        super(residentsQuantity, cep);
    }
    
    public getCpf(): number{
        return this.cpf
    }

    public calculateBill(): number{
        return this.consumedEnergy * 0.75
    }
}