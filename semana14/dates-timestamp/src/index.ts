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
        initialDate: moment("19 de Outubro de 2022 15:00", 'DD [de] MMM [de] YYYY HH:mm'),
        finishDate: moment("22 de Outubro de 2022 18:00", 'DD [de] MMM [de] YYYY HH:mm')   
    },
    {
        name: 'Aula de Biomolecular',
        description: 'Laboratório - Sala 12',
        initialDate: moment("17 de Outubro de 2020 10:00", 'DD [de] MMM [de] YYYY HH:mm'),
        finishDate: moment("17 de Outubro de 2020 13:00", 'DD [de] MMM [de] YYYY HH:mm')   
    },
]

function showsEvents(events: event[]): void{
    events.forEach((item:event)=>{
        let duration = item.finishDate.diff(item.initialDate, "hours")
        const today: moment.Moment = moment();
        let daysToStart= item.initialDate.diff(today, "days" )
        console.log(`
            Nome: ${item.name}
            Descrição: ${item.description}
            Início: ${item.initialDate.format("dddd - DD [de] MMMM [de] YYYY, [ás] HH:mm")}
            Fim: ${item.finishDate.format("dddd - DD [de] MMMM [de] YYYY, [ás] HH:mm")}	
            Duração: ${duration} horas.	
            Começa em: ${daysToStart} dias			
		`);
    })
}

//showsEvents(AllEvents)
//b) moment.locale('eng-gb')

function createEvent(
    name: string, 
    description: string, 
    initialDate: moment.Moment, 
    finishDate: moment.Moment
): void{
    
    const diffInitialDateAndNow= initialDate.diff(moment(), "seconds");
    const diffFinishDateAndNow= finishDate.diff(moment(), "seconds");

    if (!name || !description || !initialDate || !finishDate){
        console.log('Nâo foi possível criar um novo evento. Erro: ausência de dados')
    }else if(diffFinishDateAndNow <0 && diffInitialDateAndNow<0 ){
        console.log('A data inicial ou final não é válida')
    }else{
        AllEvents.push({name, description, initialDate, finishDate})
    }
}
//createEvent(
//'Observação de anuros', 
//'Atividade no laguinho do Instituto de biologia', 
//moment("30 de Agosto de 2020 07:00", 'DD [de] MMM [de] YYYY HH:mm'),
//moment("30 de Agosto de 2020 11:00", 'DD [de] MMM [de] YYYY HH:mm'))
//
//showsEvents(AllEvents)