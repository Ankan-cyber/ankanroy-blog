import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import * as fs from 'fs'

export default function Home(props) {

  const [blogs, setBlogs] = useState(props.allBlogs)


  return (
    <>
      <Head>
        <title>Blog By Ankan Roy</title>
        <meta name="description" content="Blog By Ankan Roy" />
        <meta
          name="keywords"
          content="ankanroy, ankanroy blogs, blogs tech, web development, ankanroy.in"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="main pt-4">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              {blogs &&
                blogs.map((e) => {
                  return (
                    <article className="card mb-4" key={e.title}>
                      <header className="card-header">
                        <div className="card-meta">
                          <time className="timeago">
                            {e.date}
                          </time>{" "}
                          in <Link href={`/category/${e.tag}`}>{e.tag}</Link>
                          {" "} by {e.author}
                        </div>
                        <Link href={`/blogpost/${e.blogUrl}`}>
                          <h4 className="card-title">
                            {e.title}
                          </h4>
                        </Link>
                      </header>
                      <Link href={`/blogpost/${e.blogUrl}`}>
                        <img
                          className="card-img"
                          src={e.imageUrl}
                          alt=""
                        />
                      </Link>
                      <div className="card-body">
                        <p className="card-text">
                          {e.metaDescription}
                        </p>
                      </div>
                    </article>
                  )
                })
              }
            </div>
            <div className="col-md-3 ms-auto">
              <aside className="sidebar sidebar-sticky">
                <div className="card mb-4">
                  <div className="card-body">
                    <h4 className="card-title">Tags</h4>
                    <Link
                      className="btn btn-light btn-sm mb-1"
                      href="/category/technology"
                    >
                      Technology
                    </Link>
                    <Link
                      className="btn btn-light btn-sm mb-1"
                      href="/category/general"
                    >
                      General
                    </Link>
                    <Link
                      className="btn btn-light btn-sm mb-1"
                      href="/category/photography"
                    >
                      Photography
                    </Link>
                  </div>
                </div>
                <div className="card mb-4">
                  <div className="card-body">
                    <h4 className="card-title">Popular stories</h4>
                    {blogs &&
                      blogs.slice(1, 3).map((e) => {
                        return (
                          <div key={e.blogUrl}>
                            <Link href={`/blogpost/${e.blogUrl}`} className="d-inline-block">
                              <h4 className="h6">{e.title}</h4>
                              <img
                                className="card-img"
                                src={e.imageUrl}
                                alt=""
                              />
                            </Link>
                            <time className="timeago" dateTime={e.date}>
                              {e.date}
                            </time>{" "}
                            in {e.tag}
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </main>
    </>
  );

}

export async function getStaticProps(context) {
  let data = await fs.promises.readdir("blogdata");
  let myfile;
  let allBlogs = [];
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    myfile = await fs.promises.readFile(('blogdata/' + item), 'utf-8')
    allBlogs.push(JSON.parse(myfile))
  }

  return {
    props: { allBlogs }, // will be passed to the page component as props
  }
}