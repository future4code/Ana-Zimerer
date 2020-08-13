import { Place } from "./Place";

export class Commerce extends Place {
   
    constructor(
      protected floorsQuantity: number,
       
      cep: string
    ) {
      super(cep);
    }

    getCep(): string {
        return this.cep
    }
    public getFloorsQuantity(): number{
        return this.floorsQuantity
    }
  }