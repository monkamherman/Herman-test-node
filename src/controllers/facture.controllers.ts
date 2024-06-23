import { Request, Response } from "express";
import { HttpCode } from "../core/constants";
import factures from "../core/constants/facture";


const controllers = {
//acceder a un element
getFactures: ( req: Request, res: Response): void =>{
    res.send(factures).status(HttpCode.OK);
 },


//acceder a un element par id
getFacturesById: (req: Request, res: Response)  => {
    const { numeroFacture } = req.params;
    const one = factures.find(el => el.numeroFacture === numeroFacture)
    if (!one) return res.status(HttpCode.NOT_FOUND).json({msg: "cette facture n'existe pas"});
    res.send(one)
    
}
}

export default controllers