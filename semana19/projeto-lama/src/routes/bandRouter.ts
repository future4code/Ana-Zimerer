import { userRouter } from './userRouter';
import { BandController } from './../controller/BandController';
import express from 'express';

export const bandRouter = express.Router()

const bandController = new BandController()

bandRouter.post("/", bandController.createBand)
bandRouter.get("/details", bandController.getBandDetail)


