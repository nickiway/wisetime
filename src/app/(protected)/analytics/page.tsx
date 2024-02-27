import { auth } from "@/auth";

import { AnalyticsHeader as Header } from "@/components/analytics/analytics-header";
import { AnalyticsCalendar as Calendar } from "@/components/analytics/analytics-calendar";
import { Notification } from "@/components/shared/notification";
import { TimeChart } from "@/components/analytics/time-chart";

export default async function AnalyticsPage() {
  const session = await auth();

  const data = [
    {
      label: "6:00 AM",
      value: 4000,
    },
    {
      label: "9:00 AM",
      value: 3000,
    },
    {
      label: "12:00 PM",
      value: 2000,
    },
    {
      label: "3:00 PM",
      value: 2780,
    },
    {
      label: "6:00 PM",
      value: 1890,
    },
    {
      label: "9:00 PM",
      value: 2390,
    },
    {
      label: "00:00 AM",
      value: 3490,
    },
  ];
  return (
    <>
      <Header
        image={session?.user?.image || ""}
        email={session?.user?.email || ""}
      />

      <div className="md:grid grid-cols-4 gap-5 m-5">
        <section className="col-span-2 lg:col-span-3 analytics-container">
          <h1 className="text-2xl p-5 capitalize">time analytics</h1>
          <div>
            <TimeChart data={data} />
          </div>
        </section>

        <section className="col-span-2 lg:col-span-1 analytics-container flex justify-center">
          <Calendar />
        </section>

        {/* TODO: Complete the tasks section at analytics */}
        <section className="col-span-3 row-span-3 analytics-container">
          your tasks
        </section>

        {/* TODO: Complete the notification section section at analytics */}
        <Notification
          className="analytics-container"
          title="Call with collegues"
          subtitle="Discuss the new project and tasks"
          startDate={new Date().getTime()}
          endDate={new Date().getTime() + 3600 * 1000}
        />
        <Notification
          className="analytics-container"
          title="Approval of the new project"
          subtitle="Discuss the new project and tasks"
          startDate={new Date().getTime()}
          endDate={new Date().getTime() + 3600 * 1000}
        />
        <Notification
          className="analytics-container"
          title="Fix bugs on the website"
          subtitle="Discuss the new project with PM"
          startDate={new Date().getTime()}
          endDate={new Date().getTime() + 3600 * 1000}
        />
      </div>
    </>
  );
}
