import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const ExporterDashboard = () => {
  const stats = {
    totalExports: 95,
    pendingExports: 25,
    completedExports: 70,
    totalPayments: 180000,
  };

  const chartData = [
    { name: "Pending Exports", value: stats.pendingExports },
    { name: "Completed Exports", value: stats.completedExports },
  ];

  const COLORS = ["#FACC15", "#22C55E"]; // Pending / Completed

  return (
    <div className="space-y-6 text-base-content">
      {/* ---------- Stat Cards ---------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="stat bg-base-100 shadow rounded-xl p-4">
          <div className="stat-title">Total Exports</div>
          <div className="stat-value">{stats.totalExports}</div>
        </div>

        <div className="stat bg-warning/20 dark:bg-warning/10 shadow rounded-xl p-4">
          <div className="stat-title">Pending Exports</div>
          <div className="stat-value text-warning">
            {stats.pendingExports}
          </div>
        </div>

        <div className="stat bg-success/20 dark:bg-success/10 shadow rounded-xl p-4">
          <div className="stat-title">Completed Exports</div>
          <div className="stat-value text-success">
            {stats.completedExports}
          </div>
        </div>

        <div className="stat bg-secondary/20 dark:bg-secondary/10 shadow rounded-xl p-4">
          <div className="stat-title">Total Payments</div>
          <div className="stat-value">
            ৳ {stats.totalPayments}
          </div>
        </div>
      </div>

      {/* ---------- Pie Chart ---------- */}
      <div className="max-w-2xl mx-auto bg-base-100 shadow rounded-xl p-6">
        <h2 className="text-lg font-semibold mb-4 text-center">
          Export Status
        </h2>

        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              outerRadius={100}
              dataKey="value"
              label
            >
              {chartData.map((_, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--fallback-b1, oklch(var(--b1)))",
                borderRadius: "8px",
                border: "none",
              }}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ExporterDashboard;
