import type { FC } from "react";
import { AsideContainer } from "../containers/aside-container";
import { Button } from "../ui/button";
import { PlusIcon } from "lucide-react";

export const Calendar: FC = () => {
  return (
    <AsideContainer title="Календар поїздок" className="p-0 pt-16">
      <div className="p-6 border border-foreground/30 flex flex-col gap-4 shadow-md">
        <Button
          variant="outline"
          className="border! border-foreground/30! w-full"
        >
          <PlusIcon className="me-2" />
          <span>Купити квиток</span>
        </Button>
        {/* TODO: Put here calendar from some library */}
        <form>
          <input type="date" />
        </form>
      </div>
    </AsideContainer>
  );
};
