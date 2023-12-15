import { Textarea } from "@nextui-org/react";

export default function ChatInput({
  className = "w-full"
}: {
  className?: string;
}) {
  return (
    <div className={className}>
      <Textarea
        variant="bordered"
        size="sm"
        minRows={1}
        maxRows={6}
        // label="Description"
        labelPlacement="outside"
        placeholder="Enter your description"
        fullWidth={true}
      />
    </div>
  );
}
