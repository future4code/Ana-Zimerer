import Employee from './ClassEmployee'
export default class Seller extends Employee{
    private salesQuantity: number=0;
    static SELLING_COMMISSION: number= 5;

    constructor(
        id: string,
        email: string,
        name: string,
        password: string,
        admissionDate: moment.Moment,
        baseSalary: number,
        salesQuantity: number
      ) {
        super(id, email, name, password, admissionDate, baseSalary);
        console.log("Chamando o construtor da classe Seller" )
        this.salesQuantity=salesQuantity
    }
    public showProperties():void{
        console.log(this.baseSalary, this.admissionDate)
    }

    public setSalesQuantity(value:number): void {
        this.salesQuantity+=value
        console.log('Novo qtde adicionada ' + this.salesQuantity)
    }
    public calculateTotalSalary(): number {
        const salaryWithBonus=super.calculateTotalSalary()
        let total=salaryWithBonus+ Employee.BENEFITS_VALUE+ this.salesQuantity*Seller.SELLING_COMMISSION;
        return total
    }
}







//