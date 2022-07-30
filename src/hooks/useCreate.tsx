import { useState } from "react";

const url =
  "http://ec2-100-25-136-128.compute-1.amazonaws.com/api/invoke/createAsset";

interface CallCreateProps {
  docType: string;
  newValue: string;
  refetch(type: string): void;
  selectedKey?: string;
  newPrize?: number;
}

export const useCreate = <T,>() => {
  const [myRes, setMyRes] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const callCreate = async ({
    docType,
    newValue,
    refetch,
    selectedKey,
    newPrize,
  }: CallCreateProps) => {
    let body;

    if (docType === "team") {
      body = {
        asset: [
          {
            "@assetType": "team",
            name: newValue,
            id: Math.ceil(Math.random() * 100 + 999),
          },
        ],
      };
    }

    if (docType === "driver") {
      body = {
        asset: [
          {
            "@assetType": "driver",
            name: newValue,
            id: Math.ceil(Math.random() * 100 + 999 * 2),
            team: { "@key": selectedKey },
          },
        ],
      };
    }

    if (docType === "car") {
      body = {
        asset: [
          {
            "@assetType": "car",
            model: newValue,
            id: Math.ceil(Math.random() * 100 + 999 * 3),
            driver: { "@key": selectedKey },
          },
        ],
      };
    }

    if (docType === "event") {
      body = {
        asset: [
          {
            "@assetType": "event",
            name: newValue,
            prize: newPrize,
            date: new Date().toISOString(),
            winner: { "@key": selectedKey },
          },
        ],
      };
    }

    console.log("try to create -> ", body);

    const header = {
      "Content-Type": "application/json",
    };

    fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: header,
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("created value, -> ", res);
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

  return { callCreate, isLoading, myRes };
};
