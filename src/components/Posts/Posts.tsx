import React from "react";
import styles from "./Posts.module.scss";
import { postBlockMockData } from "@blog/utils/constants";

const Posts = () => (
  <div className={styles.posts}>
    <div>Posts Section</div>
    {/* map function to delegate the information for each post */}
    <div className={styles.posts_holder}>
      {postBlockMockData.map((postBlockMockData) => (
        <div className={styles.post} key={postBlockMockData.title}>
          <div>{postBlockMockData.title}</div>
          <div>{postBlockMockData.postPhoto}</div>
          <div> {postBlockMockData.postInfo}</div>
        </div>
      ))}
    </div>
  </div>
);

export default Posts;
