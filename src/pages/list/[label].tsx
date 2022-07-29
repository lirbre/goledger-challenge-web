import { Loading } from "@/components";
import { ListItem } from "@/components";
import { useSearch } from "@/hooks";
import { Meta } from "@/layouts";
import { Main } from "@/templates";
import { SearchProps } from "@/typing/api";
import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";

const Index = () => {
  const router = useRouter();
  const { label } = router.query;
  const { callSearch, myRes, isLoading } = useSearch<SearchProps[]>();

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
    <Main
      meta={
        <Meta
          title="GoLedger - Challenge"
          description="Repositório para o desafio de front-end do processo seletivo de 1/2022"
        />
      }
    >
      <div className="px-3 py-12 flex items-center justify-center max-w-[1134px] mx-auto">
        {!isLoading ? (
          <div
            style={{ animation: "fadeIn .7s" }}
            className="grid md:grid-cols-4 grid-cols-2 gap-3 w-full"
          >
            {mapOptions}
            <button className="h-[78px] w-full py-4 px-3 border-[#e2e8f0] border shadow-md flex items-center justify-center rounded-sm hover:opacity-80 transition-all duration-300">
              <small>Add a new item</small>
            </button>
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </Main>
  );
};

export default Index;
