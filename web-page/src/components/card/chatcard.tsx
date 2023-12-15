import { CameraIcon } from "@/icon/camereicon";
import { UsersIcon } from "@/icon/usericon";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider
} from "@nextui-org/react";
import GroupTotalAvatar from "../avatar/grouptotalavatar";
import ButtonGroup from "../button/buttongroup";
import ChatInput from "../input/chatinput";
import MessageCard from "./messagecard";

export default function ChatCard() {
  return (
    <Card className="col-span-4 md:col-span-2 h-full">
      <CardHeader className="grid grid-cols-4">
        <GroupTotalAvatar />
        <div className=" col-span-2 text-center">
          <h4 className="font-bold text-large">Group Chat 😎</h4>
          <small className="text-default-500">last seen 34 minute ago</small>
        </div>

        <ButtonGroup />
      </CardHeader>
      <Divider />

      <CardBody className="px-3 text-small">
        <div>
          <MessageCard />
          <MessageCard />

          <MessageCard />
          <MessageCard />
          <MessageCard />
          <MessageCard />
          <MessageCard />
        </div>
      </CardBody>
      <Divider />
      <CardFooter className="grid grid-cols-4">
        <div className=" col-span-1 flex justify-around items-center">
          <Button size="sm" variant="bordered">
            <CameraIcon />
          </Button>
          <Button size="sm" variant="bordered">
            <UsersIcon className=" text-lg" />
          </Button>
        </div>
        <ChatInput className=" col-span-3" />
      </CardFooter>
    </Card>
  );
}
