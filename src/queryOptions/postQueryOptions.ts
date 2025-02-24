import { queryOptions } from "@tanstack/react-query";

//based on query key react-query able to cache the data
export default function postQueryOptions() {
  return queryOptions({ queryKey: ["posts"], queryFn: getPosts });
}

const getPosts = async (): Promise<Posts[]> => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  return response.json();
};

type Posts = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
