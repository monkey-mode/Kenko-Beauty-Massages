import { CameraIcon } from "@/icon/camereicon";
import { UsersIcon } from "@/icon/usericon";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider
} from "@nextui-org/react";
import React from "react";

export default function InfoCard() {
  const [isFollowed, setIsFollowed] = React.useState(false);

  return (
    <Card className="col-span-4 md:col-span-1">
      <CardHeader className="justify-between">
        <h2 className="text-small font-semibold leading-none text-default-600">
          Contact Information
        </h2>
        <h1 className="font-bold leading-none text-default-600">...</h1>
      </CardHeader>
      <Divider />
      <CardBody className="px-3 py-3 text-small align-top items-center">
        <Avatar
          src="https://i.pravatar.cc/150?u=a04258114e29026302d"
          size="lg"
        />
        <h5 className="font-bold">Partner 😎</h5>
        <small className="text-default-500">13 members</small>
        <div className="flex gap-4 items-center">
          <Button variant="bordered">
            <CameraIcon />
          </Button>
          <Button variant="bordered">
            <UsersIcon />
          </Button>
        </div>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">4</p>
          <p className=" text-default-400 text-small">Following</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">97.1K</p>
          <p className="text-default-400 text-small">Followers</p>
        </div>
      </CardFooter>
    </Card>
  );
}
