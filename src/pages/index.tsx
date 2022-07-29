import { useFetch } from "@/hooks";
import { Meta } from "@/layouts";
import { Main } from "@/templates";
import { GetSchemaProps } from "@/typing/api";
import { useEffect, useMemo } from "react";

const Index = () => {
  const { callFetch, myRes, isLoading } = useFetch<GetSchemaProps[]>({
    url: "http://ec2-100-25-136-128.compute-1.amazonaws.com/api/query/getSchema",
  });

  useEffect(() => {
    callFetch();
  }, []);

  useEffect(() => console.log(myRes), [myRes]);

  const mapOptions = useMemo(
    () => !isLoading && myRes?.map((item: GetSchemaProps) => <p key={item.tag}>{item.tag}</p>),
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
      <div>{mapOptions}</div>
    </Main>
  );
};

export default Index; 
