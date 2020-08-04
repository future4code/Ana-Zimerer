import User from './ClassUser'
import moment from 'moment'

export default class Employee extends User{
    protected admissionDate: moment.Moment
    protected baseSalary: number;
    static BENEFITS_VALUE: number=400;
   
    constructor(
        id: string,
        email: string,
        name: string,
        password: string,
        admissionDate: moment.Moment,
        baseSalary: number
      ) {
        super(id, email, name, password);
        this.admissionDate= admissionDate;
        this.baseSalary= baseSalary;
        console.log("Chamando o construtor da classe Employee")
      }

      public getAdmissionDate(): moment.Moment{
        console.log(` ${this.admissionDate}, ${this.baseSalary}`)
        return this.admissionDate
      }

      public getBaseSalary(): number{
        return this.baseSalary
      }
      
      public calculateTotalSalary(): number{
          const salaryWithBonus= this.baseSalary+ Employee.BENEFITS_VALUE
          return salaryWithBonus
      }
}