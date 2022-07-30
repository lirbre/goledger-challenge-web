import { useState } from "react";

const url =
  "http://ec2-100-25-136-128.compute-1.amazonaws.com/api/invoke/deleteAsset";

interface CallDeleteProps {
  docType: string;
  key: string;
  refetch(type: string): void
}

export const useDelete = <T,>() => {
  const [myRes, setMyRes] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const callDelete = async ({ docType, key, refetch }: CallDeleteProps) => {
    const body = {
      key: {
        "@assetType": `${docType}`,
        "@key": `${key}`,
      },
    };

    console.log(body)
    const header = {
      "Content-Type": "application/json",
    };

    fetch(url, {
      method: "DELETE",
      body: JSON.stringify(body),
      headers: header,
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("deleted value, -> ", res);
        setMyRes(res);
      })
      .catch((err) => console.error("something happened -> ", err))
      .finally(() => {
        setIsLoading(false)

        const callRefetch = setTimeout(() => {
            refetch(docType);
          }, 500);
      
          () => clearTimeout(callRefetch);
      });
  };

  return { callDelete, isLoading, myRes };
};
