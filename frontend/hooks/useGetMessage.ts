import useSWR from "swr";

async function fetcher(key: string) {
  return fetch(key).then((res) => res.json() as Promise);
}

export const useGetMessage = (id: number) => {
  const { data, error, isLoading } = useSWR(
    `http://127.0.0.1:8000/system-messages/${id}/`,
    fetcher
  );

  return {
    message: data,
    isLoading,
    isError: error,
  };
};