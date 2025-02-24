// import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import "./App.css";
// import postQueryOptions from "./queryOptions/postQueryOptions";
import { Suspense } from "react";
import PostCards from "./components/PostCards";
// import { useState } from "react";

function App() {
  // const [id, setId] = useState(1);

  // we specify id in query key if we dont then nothing happened at all when we click on increment button
  // when we know data is always defined then we use useSuspensequery instead of useQuery and whenever we use react Suspense we use useSupensequery instead of useQuery

  // const { data, isLoading, refetch, error } = useQuery(postQueryOptions());
  // const { data, isLoading, refetch, error } = useSuspenseQuery(
  //   postQueryOptions()
  // );

  // if (error) {
  //   console.log("something went wrong");
  // }
  return (
    // <div>
    //   <h1>React Query</h1>
    //   <div>
    //     {isLoading ? (
    //       <p>Please wait....</p>
    //     ) : (
    //       JSON.stringify(data)?.slice(0, 1000)
    //     )}
    //   </div>
    //   {/* <button onClick={() => setId((prev) => prev + 1)}>
    //     Increment id by 1
    //   </button> */}
    //   <button onClick={() => refetch()}>Refetch the data</button>
    // </div>

    <Suspense fallback={<h3>Please wait...</h3>}>
      <PostCards />
    </Suspense>
  );
}

export default App;
// when we refetch the data with same queykey it always get return from the cache and data not fetch again and again
