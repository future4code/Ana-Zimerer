import moment from 'moment'
moment.locale('pt-br')

type event ={
    name: string,
    description: string ,
    initialDate: moment.Moment,
    finishDate: moment.Moment
}

const AllEvents: event[]=[
    {
        name: 'Campo de geomorfologia',
        description: 'Excursão pra Serra da Canastra',
        initialDate: moment("19 de Outubro de 2012 15:00", 'DD [de] MMM [de] YYYY HH:mm'),
        finishDate: moment("22 de Outubro de 2012 18:00", 'DD [de] MMM [de] YYYY HH:mm')   
    },
    {
        name: 'Aula de Biomolecular',
        description: 'Laboratório - Sala 12',
        initialDate: moment("17 de Outubro de 2012 10:00", 'DD [de] MMM [de] YYYY HH:mm'),
        finishDate: moment("17 de Outubro de 2012 13:00", 'DD [de] MMM [de] YYYY HH:mm')   
    },
]

function showsEvents(events: event[]): void{
    events.forEach((item:event)=>{
        console.log(`
            Nome: ${item.name}
            Descrição: ${item.description}
            Início: ${item.initialDate.format("dddd - DD [de] MMMM [de] YYYY, [ás] HH:mm")}
            Fim: ${item.finishDate.format("dddd - DD [de] MMMM [de] YYYY, [ás] HH:mm")}						
		`);
    })
}

showsEvents(AllEvents)

//Crie uma função que recebe o array de eventos criado no exercício anterior, e imprime algumas informações sobre cada um no console
//
//a) Exiba as informações do evento como uma string com o seguinte formato:
//
//```
//Nome: Festa de aniversário
//Horário de início: Segunda-feira, 25 de Junho de 2020, 12:00
//Horário de fim: 25 de Junho de 2020, 18:30
//Descrição: Festa super animada! Sua presença já é um presente.
//```