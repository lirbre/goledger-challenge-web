import { useState } from "react";
import { toast } from "react-toastify";

const url =
  "http://ec2-100-25-136-128.compute-1.amazonaws.com/api/invoke/updateAsset";

interface CallEditProps {
  docType: string;
  key: string;
  newValue: string;
  refetch(key: string): void;
  newKey: string;
  newPrize: number;
  newDate: string;
}

export const useEdit = <T,>() => {
  const [myRes, setMyRes] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const callEdit = async ({
    docType,
    key,
    newValue,
    refetch,
    newKey,
    newPrize,
    newDate,
  }: CallEditProps) => {
    let body;

    switch (true) {
      case docType === "car":
        body = {
          update: {
            "@assetType": `${docType}`,
            "@key": `${key}`,
            model: `${newValue}`,
            "@lastTouchBy": "https://www.linkedin.com/in/lirbre/",
            driver: {
              "@key": newKey,
            },
          },
        };
        break;

      case docType === "driver":
        body = {
          update: {
            "@assetType": `${docType}`,
            "@key": `${key}`,
            name: `${newValue}`,
            "@lastTouchBy": "https://www.linkedin.com/in/lirbre/",
            team: {
              "@key": newKey,
            },
          },
        };
        break;

      case docType === "event":
        body = {
          update: {
            "@assetType": `${docType}`,
            "@key": `${key}`,
            name: `${newValue}`,
            "@lastTouchBy": "https://www.linkedin.com/in/lirbre/",
            prize: newPrize,
            date: new Date(newDate!).toISOString(),
            winner: {
              "@key": newKey,
            },
          },
        };
        break;

      default:
        body = {
          update: {
            "@assetType": `${docType}`,
            "@key": `${key}`,
            name: `${newValue}`,
            "@lastTouchBy": "https://www.linkedin.com/in/lirbre/",
          },
        };
        break;
    }

    console.log(body);

    const header = {
      "Content-Type": "application/json",
    };

    fetch(url, { method: "PUT", body: JSON.stringify(body), headers: header })
      .then((res) => res.json())
      .then((res) => {
        setMyRes(res);
        toast.success(`Successfully - ${docType} updated!`)
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
