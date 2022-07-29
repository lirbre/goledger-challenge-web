import { useModal } from "@/hooks";
import { SearchProps } from "@/typing/api";
import { AiTwotoneEdit, AiFillDelete } from "react-icons/ai";

interface ListItemProps {
  item: SearchProps;
}

export const ListItem = ({ item }: ListItemProps) => {
  const { setIsOpen, setTitle } = useModal();

  const openEdit = () => {
    setIsOpen(true);
    setTitle(`Editing ${item.name || item.model}`);
  };

  const openDelete = () => {
    setIsOpen(true);
    setTitle(`Deleting ${item.name || item.model}`);
  };

  return (
    <div className="h-[78px] w-full py-4 px-2 border-[#e2e8f0] border shadow-md flex items-center justify-between rounded-sm">
      <small>{item["model"] || item["name"]}</small>
      <span className="flex flex-col gap-1">
        <AiTwotoneEdit
          color="1a202c"
          className="hover:opacity-80 cursor-pointer"
          onClick={openEdit}
        />
        <AiFillDelete
          color="1a202c"
          className="hover:opacity-80 cursor-pointer"
          onClick={openDelete}
        />
      </span>
    </div>
  );
};
