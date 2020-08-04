export default class Transactions{
    private value: number
    private description: String
    private dateToPay: string

    constructor(
        newValue: number,
        newDescription: string,
        newDateToPay: string,
    ){
        this.value=newValue
        this.description=newDescription
        this.dateToPay=newDateToPay
    }    
}