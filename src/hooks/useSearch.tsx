import { useState } from "react";

const url = "http://ec2-100-25-136-128.compute-1.amazonaws.com/api/query/search"

export const useSearch = <T,>() => {
  const [myRes, setMyRes] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const callSearch = (docType: string ) => {
    const body = {
      query: {
        selector: {
          "@assetType": `${docType}`,
        },
      },
    };
    const header = {
        "Content-Type": "application/json"
    }

    fetch(url, { method: "POST", body: JSON.stringify(body), headers: header })
      .then((res) => res.json())
      .then((res) => {
        setMyRes(res.result);
      })
      .catch((err) => console.error("something happened -> ", err))
      .finally(() => setIsLoading(false));
  };

  const refetch = (doctype: string) => {
    setIsLoading(true)
    callSearch(doctype)
  }

  return { callSearch, isLoading, myRes, refetch };
};
