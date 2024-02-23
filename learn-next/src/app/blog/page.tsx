import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {cache: "no-store"});

  if(!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
}

const BlogPage = async ({params, searchParams}) => {

    const posts = await getData();

    console.log(params);
    console.log(searchParams);  
    console.log(posts);
    return (
        <div className={styles.container}>


                {posts.map((post: any) => (
                    
                    <div className={styles.post}>
                         <PostCard post={post} key={post.id}/>
       
                    </div>
                )

                )}
            
       
  
        </div>
    );
}

export default BlogPage;