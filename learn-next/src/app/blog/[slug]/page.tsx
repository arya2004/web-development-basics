import Image from "next/image";
import styles from "./singlePost.module.css";

import { Suspense } from "react";



  

  
  const SinglePostPage = async ({ params }) => {

    console.log(params);
    const { slug } = params;
  
    // FETCH DATA WITH AN API
    // FETCH DATA WITHOUT AN API
    // const post = await getPost(slug);
  
    return (
      <div className={styles.container}>
        {true && (
          <div className={styles.imgContainer}>
            <Image src="/about.png" alt="" fill className={styles.img} />
          </div>
        )}
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{slug}</h1>
          <div className={styles.detail}>
          
            <div className={styles.detailText}>
              <span className={styles.detailTitle}>Published</span>
              <span className={styles.detailValue}>
                12/23/44
              </span>
            </div>
          </div>
          <div className={styles.content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam veniam vitae incidunt pariatur ad fugit dignissimos modi repellendus libero optio tempore earum, aliquid, id ea explicabo placeat alias, voluptatem in!</div>
        </div>
      </div>
    );
  };
  
 
export default SinglePostPage;