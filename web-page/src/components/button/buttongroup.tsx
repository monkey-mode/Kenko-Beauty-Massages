import { Button } from "@nextui-org/react";
import { CameraIcon } from "../../icon/camereicon";
import { HeartIcon } from "../../icon/hearticon";

export default function ButtonGroup() {
  return (
    <div className="flex gap-4 justify-end">
      <Button isIconOnly color="danger" aria-label="Like">
        <HeartIcon />
      </Button>
      <Button
        isIconOnly
        color="warning"
        variant="faded"
        aria-label="Take a photo"
      >
        <CameraIcon />
      </Button>
    </div>
  );
}
