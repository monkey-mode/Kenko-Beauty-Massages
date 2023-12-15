"use client";
import { Avatar, Textarea } from "@nextui-org/react";
import { useState } from "react";

export default function MessageCard() {
  const [isFollowed, setIsFollowed] = useState(false);

  return (
    <div className="flex gap-3 my-4 items-end">
      <Avatar size="sm" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
      <Textarea
        size="sm"
        radius="full"
        isReadOnly
        label="Description"
        variant="flat"
        labelPlacement="outside"
        className="max-w-xs"
        minRows={1}
        value="NextUI is a React UI library that provides a set of accessible, reusable, and beautiful components.mkk"
      />
    </div>
  );
}
