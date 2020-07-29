import moment from 'moment'

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