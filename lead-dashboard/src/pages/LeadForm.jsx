import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function LeadForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    source: "Website",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!formData.name || !formData.email) {
      setError("Name and Email are required");
      return;
    }

    try {
      setLoading(true);

      await API.post("/leads", formData);

      setSuccess("Lead created successfully!");

      // Small delay so user sees success message
      setTimeout(() => {
        navigate("/leads");
      }, 1000);

    } catch (err) {
      setError("Failed to create lead. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h2>Create New Lead</h2>

      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}

      <form onSubmit={handleSubmit} className="form">
        <input
          name="name"
          placeholder="Name *"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Email *"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
        />

        <input
          name="company"
          placeholder="Company"
          value={formData.company}
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
        />

        <select
          name="source"
          value={formData.source}
          onChange={handleChange}
        >
          <option>Website</option>
          <option>Instagram</option>
          <option>Referral</option>
          <option>Other</option>
        </select>

        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Submit Lead →"}
        </button>
      </form>
    </div>
  );
}

export default LeadForm;
