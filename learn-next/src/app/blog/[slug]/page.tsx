import Image from "next/image";
import styles from "./singlePost.module.css";

import { Suspense } from "react";
import PostUser from "@/components/postUser/postUser";



const getData = async (slug) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`, {cache: "no-store"});
  
    if(!res.ok) {
      throw new Error("Something went wrong");
    }
    return res.json();
  }
  

  
  const SinglePostPage = async ({ params }) => {

    console.log(params);
    const { slug } = params;
  
    // FETCH DATA WITH AN API
    // FETCH DATA WITHOUT AN API
     const post = await getData(slug);
  
    return (
      <div className={styles.container}>
        {true && (
          <div className={styles.imgContainer}>
            <Image src="/about.png" alt="" fill className={styles.img} />
          </div>
        )}
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.detail}>
          <PostUser userId={post.userId} />
            <div className={styles.detailText}>
              <span className={styles.detailTitle}>Published</span>
              <span className={styles.detailValue}>
                12/23/44
              </span>
            </div>
          </div>
          <div className={styles.content}>{post.body}</div>
        </div>
      </div>
    );
  };
  
 
export default SinglePostPage;