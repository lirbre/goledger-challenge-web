import { Loading } from "@/components";
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
    if (!myRes) return
    !isLoading && myRes?.length === 0 && router.replace("/404");
  }, [myRes, isLoading]);

  const mapOptions = useMemo(
    () =>
      !isLoading &&
      myRes?.map((item: SearchProps) => (
        <p key={item["@key"]}>{item["model"] || item["name"]}</p>
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
      {!isLoading ? <div>{mapOptions}</div> : <Loading />}
    </Main>
  );
};

export default Index;
