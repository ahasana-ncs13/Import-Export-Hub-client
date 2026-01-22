import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const ImporterDashboard = () => {
  const stats = {
    totalImports: 120,
    pendingImports: 30,
    completedImports: 90,
    totalPayments: 150000,
  };

  const chartData = [
    { name: "Pending Imports", value: stats.pendingImports },
    { name: "Completed Imports", value: stats.completedImports },
  ];

  const COLORS = ["#FACC15", "#22C55E"];

  return (
    <div className="space-y-6 text-base-content">
      {/* ---------- Stat Cards ---------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="stat bg-base-100 shadow rounded-xl p-4">
          <div className="stat-title">Total Imports</div>
          <div className="stat-value">{stats.totalImports}</div>
        </div>

        <div className="stat bg-warning/20 dark:bg-warning/10 shadow rounded-xl p-4">
          <div className="stat-title">Pending Imports</div>
          <div className="stat-value text-warning">
            {stats.pendingImports}
          </div>
        </div>

        <div className="stat bg-success/20 dark:bg-success/10 shadow rounded-xl p-4">
          <div className="stat-title">Completed Imports</div>
          <div className="stat-value text-success">
            {stats.completedImports}
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
          Import Status
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

export default ImporterDashboard;
