// /pages/support/SupportDashboard.jsx
import React from "react";
import BaseLayout from "../../components/baseLayout";
import DashboardBase from "../../components/DashboardBase";
import DashboardExtra from "../../components/DashboardExtra";

export default function SupportDashboard() {
  return (
    <BaseLayout>
      <DashboardBase />
      <DashboardExtra />
    </BaseLayout>
  );
}
