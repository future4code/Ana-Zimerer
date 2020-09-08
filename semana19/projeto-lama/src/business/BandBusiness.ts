import { IdGenerator } from './../services/IdGenerator';
import { InvalidParameterError } from './../error/InvalidParameterError';
import { BandDatabase } from './../data/BandDatabase';
import { BandInputDTO, Band } from './../model/Band';
import { GenericError } from '../error/GenericError';
import { Authenticator } from '../services/Authenticator';

export class BandBusiness {
    async createBand(input: BandInputDTO, token: string): Promise<string | undefined> {

        const authenticator = new Authenticator()
        const authenticationData = authenticator.getData(token)

        if (!token) {
            throw new InvalidParameterError("Invalid token")
        }

        if (!input.name || !input.musicGenre || !input.responsible) {
            throw new GenericError("Fill all the blanks")
        }

        if (authenticationData.role !== "ADMIN") {
            throw new GenericError("Requires admin account ")
        }

        const idGenerator = new IdGenerator()
        const id = idGenerator.generate()

        const bandDatabase = new BandDatabase()
        await bandDatabase.createBand(input, id)

        return id;
    }

    async getBandDetails(idValue: string, nameValue: string, token: string): Promise<Band | undefined> {
        const bandDatabase = new BandDatabase()
        let result: any = ''
        if (!token) {
            throw new InvalidParameterError("Invalid token")
        }

        if (!idValue || (idValue && nameValue)) {
            result = bandDatabase.getBandDetails("NAME", nameValue)
        } else if (!nameValue) {
            result = bandDatabase.getBandDetails("ID", idValue)
        } else {
            result = undefined
        }
        return result
    }
}
