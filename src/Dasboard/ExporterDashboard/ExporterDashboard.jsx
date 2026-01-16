import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

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

  const COLORS = ["#FACC15", "#22C55E"]; // Yellow = Pending, Green = Completed

  return (
    <div className="space-y-6">
      {/* ---------- Stat Cards ---------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="stat bg-base-100 shadow rounded-xl p-4">
          <div className="stat-title">Total Exports</div>
          <div className="stat-value">{stats.totalExports}</div>
        </div>

        <div className="stat bg-yellow-100 shadow rounded-xl p-4">
          <div className="stat-title">Pending Exports</div>
          <div className="stat-value">{stats.pendingExports}</div>
        </div>

        <div className="stat bg-green-100 shadow rounded-xl p-4">
          <div className="stat-title">Completed Exports</div>
          <div className="stat-value">{stats.completedExports}</div>
        </div>

        <div className="stat bg-purple-100 shadow rounded-xl p-4">
          <div className="stat-title">Total Payments</div>
          <div className="stat-value">৳ {stats.totalPayments}</div>
        </div>
      </div>

      {/* ---------- Pie Chart ---------- */}
      <div className="max-w-2xl mx-auto bg-base-100 shadow rounded-xl p-4">
        <h2 className="text-lg font-semibold mb-4 text-center">Export Status</h2>
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
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ExporterDashboard;
