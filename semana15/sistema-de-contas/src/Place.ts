export abstract class Place{
    constructor(public cep:string) {}
    
    abstract getCep(): string
}