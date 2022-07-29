import { useState } from "react";

const url =
  "http://ec2-100-25-136-128.compute-1.amazonaws.com/api/query/readAsset";

export const useRead = <T,>() => {
  const [myRes, setMyRes] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const callSearch = (
    docType: "car" | "driver" | "event" | "team",
    key: string
  ) => {
    const body = {
      key: {
        "@assetType": `${docType}`,
        "@key": `${key}`,
      },
    };
    const header = {
      "Content-Type": "application/json",
    };

    fetch(url, { method: "POST", body: JSON.stringify(body), headers: header })
        .then((res) => res.json())
      .then((res) => {
        setMyRes(res);
      })
      .catch((err) => console.error("something happened -> ", err))
      .finally(() => setIsLoading(false));
  };

  return { callSearch, isLoading, myRes };
};
