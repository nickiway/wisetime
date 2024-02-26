import { auth } from "@/auth";

import { AnalyticsHeader as Header } from "@/components/analytics/analytics-header";
import { AnalyticsCalendar } from "@/components/analytics/analytics-calendar";
import { Notification } from "@/components/shared/notification";

export default async function AnalyticsPage() {
  const session = await auth();

  return (
    <>
      <Header
        image={session?.user?.image || ""}
        email={session?.user?.email || ""}
      />
      {/* TODO: complete the main part of analytics page */}
      <div className="grid grid-cols-4 gap-5 m-5">
        <div className="col-span-3 bg-white rounded-lg shadow-lg p-5">
          time analytics
        </div>
        <AnalyticsCalendar
          className={"bg-white rounded-lg shadow-lg w-full flex justify-center"}
        />
        {/* TODO: Complete the tasks section at analytics */}
        <div className="col-span-3 row-span-3 bg-white rounded-lg shadow-lg p-5">
          your tasks
        </div>

        {/* TODO: Complete the notification section section at analytics */}

        <Notification
          className="bg-white rounded-lg shadow-lg p-5"
          title="Call with collegues"
          subtitle="Discuss the new project and tasks"
          startDate={new Date().getTime()}
          endDate={new Date().getTime() + 3600 * 1000}
        />
        <Notification
          className="bg-white rounded-lg shadow-lg p-5"
          title="Approval of the new project"
          subtitle="Discuss the new project and tasks"
          startDate={new Date().getTime()}
          endDate={new Date().getTime() + 3600 * 1000}
        />

        <Notification
          className="bg-white rounded-lg shadow-lg p-5"
          title="Fix bugs on the website"
          subtitle="Discuss the new project with PM"
          startDate={new Date().getTime()}
          endDate={new Date().getTime() + 3600 * 1000}
        />
      </div>
    </>
  );
}
