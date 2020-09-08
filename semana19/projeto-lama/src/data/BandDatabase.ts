import { BandInputDTO, Band } from './../model/Band';
import { BaseDatabase } from "./BaseDatabase";


export class BandDatabase extends BaseDatabase {
    private static TABLE_NAME = "lama_band"

    public async createBand(
        input: BandInputDTO,
        id: string
    ): Promise<void> {
        try {
            const name: string = input.name
            const music_genre: string = input.musicGenre
            const responsible: string = input.responsible
            await this.getConnection()
                .insert({
                    id,
                    name,
                    music_genre,
                    responsible
                })
                .into(BandDatabase.TABLE_NAME);
        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public async getBandDetails(
        typeOfValue: string,
        value: string
    ): Promise<any> {
        try {
            if (typeOfValue === 'ID') {
                const id = value
                const result = await this.getConnection()
                    .select("*")
                    .from(BandDatabase.TABLE_NAME)
                    .where({ id });
                return result

            } else if (typeOfValue === 'NAME') {
                const result = await this.getConnection()
                    .select("*")
                    .from(BandDatabase.TABLE_NAME)
                    .where({ "name": value })
                return result
            } else {
                console.log("Invalid value of parameter")
                return undefined
            }

        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
}


