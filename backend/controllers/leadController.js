const Lead = require("../models/Lead");
const sendWebhook = require("../services/webhookService");

// Create Lead
exports.createLead = async (req, res) => {
  try {
    const lead = await Lead.create(req.body);

    const webhookStatus = await sendWebhook(lead);

    lead.webhook_status = webhookStatus;
    await lead.save();

    res.status(201).json({
      success: true,
      message: "Lead created successfully",
      data: lead,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Leads
exports.getLeads = async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      count: leads.length,
      data: leads,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Single Lead
exports.getLeadById = async (req, res) => {
  try {
    const lead = await Lead.findById(req.params.id);

    if (!lead) {
      return res.status(404).json({
        success: false,
        message: "Lead not found",
      });
    }

    res.json({
      success: true,
      data: lead,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
