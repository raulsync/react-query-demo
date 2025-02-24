import { useSuspenseQuery } from "@tanstack/react-query";
import postQueryOptions from "../queryOptions/postQueryOptions";

function PostCards() {
  const { data } = useSuspenseQuery(postQueryOptions());
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "700px",
      }}
    >
      <div
        style={{
          border: "1px solid white",
          borderRadius: "5px",
          width: "50%",
          height: "50%",
          alignContent: "center",
          padding: "10px",
        }}
      >
        {data[1].body}
      </div>
    </div>
  );
}

export default PostCards;
