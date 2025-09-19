//? styles
import blogs from "./blog.module.css";

//? packages
import { useParams } from "react-router-dom";
import { useEffect } from "react";

//? hooks
import { blogHook } from "../../hooks/blogHook.jsx";

//? component
export default function Blog() {
  let params = useParams();
  const { blog, fetchBlog, fetchBlogById } = blogHook();

  useEffect(() => {
    if (blog.length === 0) {
      if (params.id) {
        fetchBlogById(params.id);
      } else {
        fetchBlog();
      }
    }
  }, [blog]);

  return (
    <section className={blogs.container}>
      {params.id ? (
        <>
          <img src={blog.image} alt={blog.title} />
          <main>
            <hgroup>
              <h1>{blog.title}</h1>
              <time dateTime={blog.created}>
                Oprettet d.{" "}
                {new Date(blog.created).toLocaleDateString("da-DK", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </hgroup>

            <article>
              {blog.length !== 0 ? (
                blog.description.split(".").map((sentense, index) => {
                  if (sentense.length == 0) return null;
                  return <p key={index}>{sentense}.</p>;
                })
              ) : (
                <p>Loading...</p>
              )}
            </article>
          </main>
        </>
      ) : blog.length !== 0 ? (
        blog.map((blog) => {
          return (
            <article key={blog._id}>
              <img src={blog.image} alt={blog.title} />
              <hgroup>
                <h1>{blog.title}</h1>
                <p>{blog.teaser}</p>
              </hgroup>
              <a href={`/blog/${blog._id}`}>LÆS MERE</a>
            </article>
          );
        })
      ) : (
        <article>
          <p>Loading...</p>
        </article>
      )}
    </section>
  );
}
