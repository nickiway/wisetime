import { Button } from "@/components/ui/button";

export const TaskFilterPannel = () => {
  return (
    <div className="flex gap-5 flex-wrap px-5">
      <Button className="text-blue-700 bg-blue-100 hover:bg-blue-200">
        All
      </Button>
      <Button className="text-red-700 bg-red-100 hover:bg-red-200">
        To Do
      </Button>
      <Button className="text-orange-700 bg-orange-100 hover:bg-orange-200">
        In Progress
      </Button>
      <Button className="text-green-700 bg-green-100 hover:bg-green-200">
        Done
      </Button>
    </div>
  );
};
