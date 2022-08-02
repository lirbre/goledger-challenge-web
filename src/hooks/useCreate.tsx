import { useState } from "react";
import { toast } from "react-toastify";

const url =
  "http://ec2-100-25-136-128.compute-1.amazonaws.com/api/invoke/createAsset";

interface CallCreateProps {
  docType: string;
  newValue: string;
  refetch(type: string): void;
  selectedKey?: string;
  prize?: number;
  date?: string;
}

export const useCreate = <T,>() => {
  const [myRes, setMyRes] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const callCreate = async ({
    docType,
    newValue,
    refetch,
    selectedKey,
    prize,
    date,
  }: CallCreateProps) => {
    let body;

    switch (true) {
      case docType === "driver":
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
        break;

      case docType === "car":
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
        break;

      case docType === "event":
        body = {
          asset: [
            {
              "@assetType": "event",
              name: newValue,
              prize: prize,
              date: new Date(date!).toISOString(),
              winner: { "@key": selectedKey },
            },
          ],
        };
        break;

      default:
        body = {
          asset: [
            {
              "@assetType": "team",
              name: newValue,
              id: Math.ceil(Math.random() * 100 + 999),
            },
          ],
        };
        break;
    }

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
        setMyRes(res);
        toast.success(`Successfully - ${docType} created!`)
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
