import { useState } from "react";

interface UseFetchProps {
  url: string;
  method?: "GET";
}

export const useFetch = <T,>({ url, method = "GET" }: UseFetchProps) => {
  const [myRes, setMyRes] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const callFetch = () => {
    fetch(url, { method: method })
      .then((res) => res.json())
      .then((res) => {
        setMyRes(res);
      })
      .catch((err) => console.error("something happened -> ", err))
      .finally(() => setIsLoading(false));
  };

  const callRefetch = () => {
    setIsLoading(true);
    callFetch();
  };

  return { callFetch, callRefetch, isLoading, myRes };
};
