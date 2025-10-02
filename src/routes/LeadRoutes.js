import express from "express";
import * as LeadsController from "../controllers/LeadController.js";

const router = express.Router();

router.post("/create/", LeadsController.createLead);
router.get("/list/", LeadsController.getLeads);
router.get("/listUnic/:id", LeadsController.getLeadById);
router.put("/update/:id", LeadsController.updateLead);
router.delete("/delete/:id", LeadsController.deleteLead);
router.get("/export/csv", LeadsController.exportCSV);

export default router;
