import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";



ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

function LeadChart({ leads }) {
  const sourceCount = {};

  leads.forEach((lead) => {
    sourceCount[lead.source] =
      (sourceCount[lead.source] || 0) + 1;
  });

  const data = {
    labels: Object.keys(sourceCount),
    datasets: [
      {
        label: "Leads per Source",
        data: Object.values(sourceCount),
        backgroundColor: "#6366f1",
      },
    ],
  };

  return (
    <div style={{ margin: "30px 0" }}>
      <Bar data={data} />
    </div>
  );
}

export default LeadChart;
