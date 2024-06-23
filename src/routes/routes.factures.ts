import { Router } from "express";
import controllers from "../controllers/facture.controllers";
const router = Router();



router.get('/', controllers.getFactures);
router.get('/:numeroFacture', controllers.getById)



export default router