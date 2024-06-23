import { Router } from "express";
import controllers from "../controllers/facture.controllers";
const router = Router();



router.get('/', controllers.getFactures);
router.get('/:numeroFacture', controllers.getFacturesById);



export default router