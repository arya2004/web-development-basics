import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";

const BlogPage = ({params, searchParams}) => {

    console.log(params);
    console.log(searchParams);  
    return (
        <div className={styles.container}>
       
        <PostCard post={{title: "Post 1", body: "This is the first post"}}/>
        <PostCard post={{title: "Post 2", body: "This is the second post"}}/>
        <PostCard post={{title: "Post 3", body: "This is the third post"}}/>
        <PostCard post={{title: "Post 4", body: "This is the fourth post"}}/>
        <PostCard post={{title: "Post 5", body: "This is the fifth post"}}/>

        </div>
    );
}

export default BlogPage;