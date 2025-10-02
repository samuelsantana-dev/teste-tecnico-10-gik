import Lead from "../models/LeadModels.js";
import { Parser } from "json2csv";

export async function createLead(req, res) {
  try {
    const lead = new Lead(req.body);
    await lead.save();
    console.log("Criado com sucesso");
    res.status(201).json(lead);
  } catch (error) {
    console.error("Erro ao criar lead:", error.message);
    res.status(400).json({ error: error.message });
  }
}

export async function getLeads(req, res) {
  try {
    const { search } = req.query;
    const query = search
      ? { $or: [{ nome: new RegExp(search, "i") }, { email: new RegExp(search, "i") }] }
      : {};

    const leads = await Lead.find(query).sort({ createdAt: -1 });
    res.json(leads);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getLeadById(req, res) {
  try {
    const lead = await Lead.findById(req.params.id);
    if (!lead) return res.status(404).json({ error: "Lead não encontrado" });
    res.json(lead);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function updateLead(req, res) {
  try {
    const lead = await Lead.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!lead) return res.status(404).json({ error: "Lead não encontrado" });
    res.json(lead);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function deleteLead(req, res) {
  try {
    const lead = await Lead.findByIdAndDelete(req.params.id);
    if (!lead) return res.status(404).json({ error: "Lead não encontrado" });
    res.json({ message: "Lead deletado com sucesso" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function exportCSV(req, res) {
  try {
    const leads = await Lead.find();
    const parser = new Parser();
    const csv = parser.parse(leads);

    res.header("Content-Type", "text/csv");
    res.attachment("leads.csv");
    res.send(csv);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
