import { UserDatabase } from './../data/UserDatabase';
import { Request, Response } from "express";
import { UserInputDTO, LoginInputDTO } from "../model/User";
import { UserBusiness } from "../business/UserBusiness";
import { BaseDatabase } from "../data/BaseDatabase";
import { Authenticator } from '../services/Authenticator';

export class UserController {
    async signup(req: Request, res: Response) {
        try {
            const input: UserInputDTO = {
                email: req.body.email,
                name: req.body.name,
                password: req.body.password,
                role: req.body.role
            }

            const userBusiness = new UserBusiness();
            const token = await userBusiness.createUser(input);

            res.status(200).send({ token });

        } catch (error) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }

    async login(req: Request, res: Response) {
        try {
            const input: LoginInputDTO = {
                email: req.body.email,
                password: req.body.password
            }

            const userBusiness = new UserBusiness()
            const token = userBusiness.getUserByEmail(input)

            res.status(200).send({ token })
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }

}