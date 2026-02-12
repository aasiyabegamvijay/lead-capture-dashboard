import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import API from "../services/api";
import formatDate from "../utils/formatDate";

function LeadDetail() {
  const { id } = useParams();
  const [lead, setLead] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLead();
  }, []);

  const fetchLead = async () => {
    try {
      const res = await API.get(`/leads/${id}`);
      setLead(res.data.data);
    } catch (err) {
      console.error("Failed to fetch lead");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (!lead) return <p>Lead not found</p>;

  return (
    <div className="container detail-card">
      <h2>Lead Details</h2>

      <div className="detail-grid">
        <p><strong>Name:</strong> {lead.name}</p>
        <p><strong>Email:</strong> {lead.email}</p>
        <p><strong>Phone:</strong> {lead.phone || "—"}</p>
        <p><strong>Company:</strong> {lead.company || "—"}</p>
        <p><strong>Source:</strong> {lead.source}</p>
        <p><strong>Created At:</strong> {formatDate(lead.createdAt)}</p>
        <p>
          <strong>Webhook Status:</strong>{" "}
          <span className={`status-badge ${lead.webhook_status}`}>
            {lead.webhook_status}
          </span>
        </p>
      </div>

      <Link to="/leads" className="back-link">← Back to Leads</Link>
    </div>
  );
}

export default LeadDetail;
