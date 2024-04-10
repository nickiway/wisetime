import { AnalyticsCalendar } from "@/components/analytics/calendar";
import { AnalyticsDashboard } from "@/components/analytics/dashboard/dashboard";

export default async function AnalyticsPage() {
  return (
    <div className="container">
      <AnalyticsDashboard />
      <AnalyticsCalendar />
    </div>
  );
}
