import Layout from "../components/layout";
import { useRouter } from "next/router";
import { posts } from "../protfile";

const Poste = () => {
  const router = useRouter();

  const currentPost = posts.filter(
    (post) => post.title === router.query.title
  )[0];

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <Layout title={router.query.title} footer={false}>
      <div className="text-center">
        <img
          src={currentPost.imageURL}
          alt=""
          style={{ width: "50%" }}
          className="img-fluid"
        />
        <p className="p-4">{currentPost.content}</p>
      </div>
    </Layout>
  );
};

export default Poste;
