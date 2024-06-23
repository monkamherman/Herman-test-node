import { Request, Response } from "express";
import { HttpCode } from "../core/constants";
import factures from "../core/constants/facture";


const controllers = {
//acceder a un element
getFactures: ( req: Request, res: Response): void =>{
    res.send(factures).status(HttpCode.OK);
 }
}

//acceder a un element par id
getById: (req: Request, res: Response) => {
    const { id } = req.params
    const one = factures.find(el => el.numeroFacture === id)
    if (!one) return res.status(HttpCode.NOT_FOUND).json({msg: "cette facture n'existe pas"});
    res.status(HttpCode.OK)
}


export default controllers