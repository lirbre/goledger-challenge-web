import { useModal } from "@/hooks";
import { useDelete } from "@/hooks/useDelete";
import { useEdit } from "@/hooks";
import { SearchProps } from "@/typing/api";
import { AiTwotoneEdit, AiFillDelete } from "react-icons/ai";
import Loading from "./loading";
import { DeleteModal } from "./_ModalBody/delete";
import { EditModal } from "./_ModalBody";
import { EditCar, EditEvent, EditDriver } from "./_ModalBody/_EditModal";

interface ListItemProps {
  item: SearchProps;
  refetch(type: string): void;
}

export const ListItem = ({ item, refetch }: ListItemProps) => {
  const { setIsOpen, setTitle, setBody, close } = useModal();
  const { callDelete } = useDelete<any>();
  const { callEdit } = useEdit<any>();

  const deleteItem = () => {
    callDelete({
      docType: item["@assetType"],
      key: item["@key"],
      refetch: refetch,
    }).then(() =>
      setBody(
        <div className="pt-8">
          <Loading />
        </div>
      )
    );

    const closeTimeout = setTimeout(() => {
      close();
    }, 3750);

    () => clearTimeout(closeTimeout);
  };

  const editItem = (
    newValue: string,
    newKey?: string,
    newPrize?: number,
    newDate?: string
  ) => {
    callEdit({
      docType: item["@assetType"],
      key: item["@key"],
      newKey: newKey || "",
      newValue: newValue,
      refetch: refetch,
      newPrize: newPrize || 0,
      newDate: newDate || "",
    }).then(() =>
      setBody(
        <div className="pt-8">
          <Loading />
        </div>
      )
    );

    const closeTimeout = setTimeout(() => {
      close();
    }, 3750);

    () => clearTimeout(closeTimeout);
  };

  const openEdit = () => {
    setIsOpen(true);
    setTitle(`Editing ${item?.name || item?.model || ""}`);

    switch (true) {
      case item["@assetType"] === "car":
        setBody(
          <EditCar
            buttonName="Edit!"
            docType="car"
            handleClick={editItem}
            title={`Update ${item?.model} information:`}
            oldItem={item}
          />
        );
        break;
      case item["@assetType"] === "driver":
        setBody(
          <EditDriver
            buttonName="Edit!"
            handleClick={editItem}
            title={`Update ${item?.name} information:`}
            oldItem={item}
          />
        );
        break;
      case item["@assetType"] === "event":
        setBody(
          <EditEvent
            buttonName="Edit!"
            handleClick={editItem}
            title={`Update ${item?.name} information:`}
            oldItem={item}
          />
        );
        break;
      default:
        setBody(
          <EditModal
            buttonName="Edit!"
            handleClick={editItem}
            oldItem={item}
            title={`Change ${item?.name || item?.model}`}
          />
        );
        break;
    }
  };

  const openDelete = () => {
    setIsOpen(true);
    setTitle(`Deleting ${item.name || item.model}`);
    setBody(
      <DeleteModal
        buttonName="Delete"
        handleClick={deleteItem}
        title={"Do you want to Delete?"}
      />
    );
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
