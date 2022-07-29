import { Loading } from "@/components";
import { useFetch } from "@/hooks";
import { Meta } from "@/layouts";
import { Main } from "@/templates";
import { GetSchemaProps } from "@/typing/api";
import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";

const Index = () => {
  const router = useRouter();
  const { callFetch, myRes, isLoading } = useFetch<GetSchemaProps[]>({
    url: "http://ec2-100-25-136-128.compute-1.amazonaws.com/api/query/getSchema",
  });

  useEffect(() => {
    callFetch();
  }, []);

  useEffect(() => console.log(myRes), [myRes]);

  const mapOptions = useMemo(
    () =>
      !isLoading &&
      myRes?.map((item: GetSchemaProps) => (
        <button
          key={item.tag}
          onClick={() => router.push(`list/${item.tag}`)}
          className="w-full bg-[#020202]/10 p-3 rounded-md shadow-lg hover:shadow-md transition-all duration-300 hover:opacity-80"
        >
          <p className="text-[#020202]">{item.label}s</p>
        </button>
      )),
    [myRes]
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
      <div className="max-w-[1134px] w-full mx-auto flex flex-col justify-center px-3 py-12 ">
        {!isLoading ? (
          <>
            <h5 className="text-[#1a202c]">What are you Looking for?</h5>
            <div className="mt-8 grid gap-3 lg:grid-cols-4 grid-cols-2 w-full">
              {mapOptions}
            </div>
          </>
        ) : (
          <Loading/>
        )}
      </div>
    </Main>
  );
};

export default Index;
