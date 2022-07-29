import { Loading } from "@/components";
import { ListItem } from "@/components";
import { useModal, useSearch } from "@/hooks";
import { SearchProps } from "@/typing/api";
import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";

export const List = () => {
  const router = useRouter();
  const { label } = router.query;
  const { callSearch, myRes, isLoading } = useSearch<SearchProps[]>();
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

  const mapOptions = useMemo(
    () =>
      !isLoading &&
      myRes?.map((item: SearchProps) => (
        <ListItem key={item["@key"]} item={item} />
      )),
    [myRes, isLoading]
  );

  return (
    <div className="px-3 py-12 flex items-center justify-center max-w-[1134px] mx-auto">
      {!isLoading ? (
        <div
          style={{ animation: "fadeIn .7s" }}
          className="grid md:grid-cols-4 grid-cols-2 gap-3 w-full"
        >
          <button
            onClick={openCreate}
            className="h-[78px] w-full py-4 px-3 border-[#e2e8f0] border shadow-md flex items-center justify-center rounded-sm hover:opacity-80 transition-all duration-300"
          >
            <small>Add a new item</small>
          </button>
          {mapOptions}
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};
