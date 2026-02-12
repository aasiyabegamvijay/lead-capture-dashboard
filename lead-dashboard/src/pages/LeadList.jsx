import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";
import formatDate from "../utils/formatDate";
import LeadChart from "../components/LeadChart";

function LeadList() {
  const [leads, setLeads] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    try {
      const res = await API.get("/leads");
      setLeads(res.data.data);
    } catch (err) {
      console.error("Failed to fetch leads");
    } finally {
      setLoading(false);
    }
  };

  const filteredLeads = leads.filter((lead) =>
    lead.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h2>Lead Dashboard</h2>

      <input
        type="text"
        placeholder="Search by name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <LeadChart leads={filteredLeads} />
      {loading ? (
        <p>Loading leads...</p>
      ) : filteredLeads.length === 0 ? (
        <p>No leads found.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Source</th>
              <th>Date</th>
              <th>Webhook</th>
            </tr>
          </thead>
          <tbody>
            {filteredLeads.map((lead) => (
              <tr key={lead._id}>
                <td>
                  <Link to={`/leads/${lead._id}`}>
                    {lead.name}
                  </Link>
                </td>
                <td>{lead.email}</td>
                <td>{lead.source}</td>
                <td>{formatDate(lead.createdAt)}</td>
                <td>
                  <span className={`status-badge ${lead.webhook_status}`}>
                    {lead.webhook_status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default LeadList;
