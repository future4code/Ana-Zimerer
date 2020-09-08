import { BandBusiness } from './../business/BandBusiness';
import { BandInputDTO } from './../model/Band';
import { Request, Response } from 'express';
import { InvalidParameterError } from '../error/InvalidParameterError';

export class BandController {
    async createBand(req: Request, res: Response) {
        try {
            const input: BandInputDTO = {
                name: req.body.name,
                musicGenre: req.body.music_genre,
                responsible: req.body.responsible
            }

            const token = req.headers.authorization as string

            const bandBusiness = new BandBusiness()
            const bandId = await bandBusiness.createBand(input, token)


            res.status(200).send({ message: "Register a new band!", bandId })
        } catch (error) {
            res.status(error.errorCode || 400).send({ message: error.message })
        }
    }

    async getBandDetail(req: Request, res: Response) {
        try {
            const id = req.body.id
            const name = req.body.name

            const token = req.headers.authorization as string

            const bandBusiness = new BandBusiness()

            if (!id && !name) {
                throw new InvalidParameterError("Requires id or name")
            }

            const response = await bandBusiness.getBandDetails(id, name, token)

            res.status(200).send({ response })

        } catch (error) {
            res.status(error.errorCode || 400).send({ message: error.message })
        }
    }
}

