import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import * as fs from 'fs';

const Slug = (props) => {

    const [blog, setBlog] = useState(props.myBlog);


    return (
        <>
            <Head>
                <title>{blog && blog.title}</title>
                <meta name="description" content={blog && blog.metaDescription} />
            </Head>
            <main className="main pt-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <article className="card mb-4">
                                <header className="card-header text-center">
                                    <div className="card-meta">
                                        <time className="timeago">
                                            {blog && blog.date}
                                        </time>{" "}
                                        in <Link href="/category">{blog && blog.tag}</Link>
                                        {" "} by {blog && blog.author}
                                    </div>
                                    <h1 className="card-title">{blog && blog.title}</h1>
                                </header>
                                <img className="card-img" src={blog && blog.imageUrl} alt="" />

                                <div className="card-body">
                                    {blog && blog.content.map((item, index) => {
                                        if (item.type === "heading") {
                                            return <h3 key={index}>{item.text}</h3>
                                        }
                                        else if (item.type === "paragraph") {
                                            return <p key={index}>{item.text}</p>
                                        }
                                        else if (item.type === "code") {
                                            return <pre key={index}>
                                                <code>{item.text}</code>
                                            </pre>
                                        }
                                        else {
                                            return ""
                                        }
                                    })}
                                    <hr />

                                </div>
                            </article>
                        </div>
                        <div className="col-md-3 ms-auto">
                            <aside className="sidebar sidebar-sticky">
                                <div className="card mb-4">
                                    <div className="card-body">
                                        <h4 className="card-title">Tags</h4>
                                        <Link
                                            className="btn btn-light btn-sm mb-1"
                                            href="page-category.html"
                                        >
                                            Journey
                                        </Link>
                                        <Link
                                            className="btn btn-light btn-sm mb-1"
                                            href="page-category.html"
                                        >
                                            Work
                                        </Link>
                                        <Link
                                            className="btn btn-light btn-sm mb-1"
                                            href="page-category.html"
                                        >
                                            Lifestype
                                        </Link>
                                        <Link
                                            className="btn btn-light btn-sm mb-1"
                                            href="page-category.html"
                                        >
                                            Photography
                                        </Link>
                                        <Link
                                            className="btn btn-light btn-sm mb-1"
                                            href="page-category.html"
                                        >
                                            Food & Drinks
                                        </Link>
                                    </div>
                                </div>
                                <div className="card mb-4">
                                    <div className="card-body">
                                        <h4 className="card-title">Popular stories</h4>
                                        {props.allBlogs &&
                                            props.allBlogs.slice(1, 3).map((e) => {
                                                return (
                                                    <>
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
                                                    </>
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
    )
}

export default Slug;

export async function getStaticPaths() {
    let data = await fs.promises.readdir("blogdata");
    let paths = [];
    let myfile;
    data.map((e) => {
        myfile = { params: { slug: e } }
        paths.push(myfile)
    })
    return {
        paths: paths,
        fallback: true // false or 'blocking'
    };
}
export async function getStaticProps(context) {
    const { slug } = context.params;
    let myfile;
    let allBlogs = [];
    let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`, 'utf-8')
    let data = await fs.promises.readdir("blogdata");
    for (let index = 0; index < data.length; index++) {
        const item = data[index];
        myfile = await fs.promises.readFile(('blogdata/' + item), 'utf-8')
        allBlogs.push(JSON.parse(myfile))
    }
    return {
        props: { myBlog: JSON.parse(myBlog), allBlogs }, // will be passed to the page component as props
    }
}