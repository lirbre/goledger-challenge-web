import { Loading } from "@/components";
import { ListItem } from "@/components";
import { useModal, useSearch, useCreate } from "@/hooks";
import { SearchProps } from "@/typing/api";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";
import { Form } from "./form";
import {
  CreateTeam,
  CreateDriver,
  CreateCar,
  CreateEvent,
} from "./_ModalBody/_CreateModal";

export interface CreateItemProps {
  docType: string;
  changeValue: string;
  selectedKey?: string;
  prize?: number;
  date?: string;
}

export const List = () => {
  const [searchBar, setSearchBar] = useState<string>("");
  const router = useRouter();
  const { label } = router.query;

  const { callSearch, myRes, isLoading, refetch } = useSearch<SearchProps[]>();
  const { callCreate } = useCreate();

  const { setIsOpen, setTitle, setBody, close } = useModal();

  const createItem = ({
    docType,
    changeValue,
    selectedKey = "",
    prize = 0,
    date = ''
  }: CreateItemProps) => {
    callCreate({
      docType,
      newValue: changeValue,
      refetch,
      selectedKey,
      prize,
      date
    });
    setBody(
      <div className="pt-8">
        <Loading />
      </div>
    );

    const closeTimeout = setTimeout(() => {
      close();
    }, 4000);

    () => clearTimeout(closeTimeout);
  };

  const openCreate = () => {
    setIsOpen(true);
    setTitle(`Create a new ${label} item`);

    switch (true) {
      case label === "team":
        setBody(
          <CreateTeam
            buttonName="Create"
            docType={label as "team"}
            handleClick={createItem}
            title="Create your new Team:"
          />
        );
        break;
      case label === "driver":
        setBody(
          <CreateDriver
            buttonName="Create"
            docType={label as "driver"}
            handleClick={createItem}
            title="Create your new Driver:"
          />
        );
        break;
      case label === "car":
        setBody(
          <CreateCar
            buttonName="Create"
            docType={label as "car"}
            handleClick={createItem}
            title="Create your new Car:"
          />
        );
        break;
      case label === "event":
        setBody(
          <CreateEvent
            buttonName="Create"
            docType={label as "event"}
            handleClick={createItem}
            title="Create your new Event:"
          />
        );
        break;
      default:
        return toast.warn("Label not Supported - Please contact Breno.");
    }
  };

  useEffect(() => {
    if (!label) return;

    callSearch(label as string);
  }, [label]);

  useEffect(() => {
    if (!myRes) return;
    !isLoading && myRes?.length === 0 && router.replace("/404");
  }, [myRes, isLoading]);

  const filteredResult = useMemo(
    () =>
      myRes &&
      [...myRes]?.filter((item) => {
        if (searchBar === "") return true;

        return (
          (item.name || item.model)
            ?.toLowerCase().includes(searchBar.toLowerCase())
        );
      }),
    [myRes, searchBar]
  );

  const mapOptions = useMemo(
    () =>
      !isLoading &&
      filteredResult!.map((item: SearchProps) => (
        <ListItem key={item["@key"]} item={item} refetch={refetch} />
      )),
    [myRes, isLoading, searchBar]
  );

  return (
    <div className="px-3 py-12 flex items-center justify-center max-w-[1134px] mx-auto">
      {!isLoading ? (
        <div style={{ animation: "fadeIn .7s" }} className="w-full">
          <Form searchBar={searchBar} setSearchBar={setSearchBar} />
          <div className="grid md:grid-cols-4 grid-cols-2 gap-3 w-full mt-4">
            <button
              onClick={openCreate}
              className="h-[78px] w-full py-4 px-3 border-[#e2e8f0] border shadow-md flex items-center justify-center rounded-sm hover:opacity-80 transition-all duration-300"
            >
              <small>Add a new item</small>
            </button>
            {filteredResult!.length > 0 ? (
              mapOptions
            ) : (
              <div className="h-[78px] w-full py-4 px-3 border-[#e2e8f0] border shadow-md flex items-center justify-center rounded-sm hover:opacity-80 transition-all duration-300">
                {" "}
                <small className="text-center">
                  Nothing found.
                  <br />
                  Please verify your search.
                </small>
              </div>
            )}
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};
