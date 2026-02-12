const axios = require("axios");

const sendWebhook = async (lead) => {
  try {
    await axios.post(process.env.WEBHOOK_URL, {
      name: lead.name,
      email: lead.email,
      source: lead.source,
      created_at: lead.createdAt,
    });

    return "success";
  } catch (error) {
    console.error("Webhook Error:", error.message);
    return "failed";
  }
};

module.exports = sendWebhook;
