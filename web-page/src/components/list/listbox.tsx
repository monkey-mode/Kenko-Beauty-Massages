import { users } from "@/mock/usersdata";
import { Avatar, Listbox, ListboxItem } from "@nextui-org/react";

export default function ListBox() {
  return (
    <div>
      <Listbox
        aria-label="listbox"
        classNames={{
          base: "max-w-xs",
          list: "max-h-[300px] overflow-scroll"
        }}
        items={users}
        variant="flat"
      >
        {(item) => (
          <ListboxItem
            aria-label={item.name}
            key={item.id}
            textValue={item.name}
          >
            <div className="flex gap-2 items-center">
              <Avatar
                alt={item.name}
                className="flex-shrink-0"
                size="sm"
                src={item.avatar}
              />
              <div className="flex flex-col">
                <span className="text-small">{item.name}</span>
                <span className="text-tiny text-default-400">{item.email}</span>
              </div>
            </div>
          </ListboxItem>
        )}
      </Listbox>
    </div>
  );
}
