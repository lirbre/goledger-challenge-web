import { Loading } from "@/components";
import { ListItem } from "@/components";
import { useModal, useSearch } from "@/hooks";
import { SearchProps } from "@/typing/api";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import { Form } from "./form";

export const List = () => {
  const [searchBar, setSearchBar] = useState<string>("");
  const router = useRouter();
  const { label } = router.query;

  const { callSearch, myRes, isLoading, refetch } = useSearch<SearchProps[]>();

  const { setIsOpen, setTitle } = useModal();

  const openCreate = () => {
    setIsOpen(true);
    setTitle(`Create a new ${label} item`);
  };

  useEffect(() => {
    if (!label) return;

    callSearch(label as string);
  }, [label]);

  useEffect(() => {
    if (!myRes) return;
    !isLoading && myRes?.length === 0 && router.replace("/404");
    console.log(myRes);
  }, [myRes, isLoading]);

  const filteredResult = useMemo(
    () =>
      myRes &&
      [...myRes]?.filter((item) => {
        if (searchBar === "") return true;

        return (
          (item.name || item.model)
            ?.split("")
            .slice(0, searchBar.length)
            .join("")
            .toLowerCase() === searchBar.toLowerCase()
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
                <small className="text-center">Nothing found.<br/>Please verify your search.</small>
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
