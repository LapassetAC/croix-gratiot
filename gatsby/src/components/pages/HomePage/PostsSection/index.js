import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

const PostsSection = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allSanityPost {
          nodes {
            title
            body
          }
        }
      }
    `
  );

  let posts = data.allSanityPost.nodes;

  return (
    <>
      <ul>
        {posts.map((post, i) => {
          return (
            <li key={i}>
              <div>{post.title}</div>
              <div>{post.body}</div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default PostsSection;
