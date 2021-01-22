import { Request, Response } from 'express'
import inserirEstudantes from '../data/inserirEstudantes'

const criarEstudantes = async(req: Request, res: Response) => {
    let errorCode: number = 400

    try{
        const {name, email, birthdayBody, hobbie, mission_id} = req.body
        const [day, month, year] = birthdayBody.split("/")
        const birthday: Date = new Date (`${year}- ${month}- ${day}`)

        await inserirEstudantes({
            name,
            email,
            birthday,
            hobbie,
            mission_id

        })
        if(!req.body.length){
            errorCode = 422
            throw new Error ("campos não preenchidos")

        }
        
    }catch (e){
        res.status(errorCode).send({
            message: e.message
        })
    }

}