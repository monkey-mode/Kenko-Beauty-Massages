import { Avatar, Badge, Chip } from "@nextui-org/react";
import { useState } from "react";

export default function UserCard() {
  const [isFollowed, setIsFollowed] = useState(false);

  return (
    <div className="flex gap-5">
      <Badge content="5" color="danger" placement="top-right">
        <Avatar
          isBordered
          as="button"
          className="transition-transform"
          color="secondary"
          name="Jason Hughes"
          size="sm"
          src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
        />
      </Badge>

      <div className="flex flex-col gap-1 items-start justify-center">
        <h4 className="text-small font-semibold leading-none text-default-600">
          Zoey Lang
        </h4>
        <Chip size="sm" color="success" variant="dot">
          online
        </Chip>
      </div>
    </div>
  );
}
