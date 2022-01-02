import { Router } from "express";

const router = Router();

router.get('/families', (req, res) => {
    return res.status(200).send();
});

export default router;
