import { useState } from "react";

const url =
  "http://ec2-100-25-136-128.compute-1.amazonaws.com/api/invoke/updateAsset";

interface CallEditProps {
    docType: string
    key: string
    newValue: string
    refetch(key: string): void
}

export const useEdit = <T,>() => {
  const [myRes, setMyRes] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const callEdit = async ({ docType, key, newValue, refetch }: CallEditProps) => {
    let body;

    console.log(newValue)

    if (docType === "car") {
      body = {
        update: {
          "@assetType": `${docType}`,
          "@key": `${key}`,
          model: `${newValue}`,
          "@lastTouchBy": "https://www.linkedin.com/in/lirbre/",
        },
      };
    } else {
      body = {
        update: {
          "@assetType": `${docType}`,
          "@key": `${key}`,
          name: `${newValue}`,
          "@lastTouchBy": "https://www.linkedin.com/in/lirbre/",
        },
      };
    }

    const header = {
      "Content-Type": "application/json",
    };

    fetch(url, { method: "PUT", body: JSON.stringify(body), headers: header })
      .then((res) => res.json())
      .then((res) => {
        console.log("new value, -> ", res);
        setMyRes(res);
      })
      .catch((err) => console.error("something happened -> ", err))
      .finally(() => {
        setIsLoading(false);
        const callRefetch = setTimeout(() => {
          refetch(docType);
        }, 500);

        () => clearTimeout(callRefetch);
      });
  };

  return { callEdit, isLoading, myRes };
};
