import { useRouter } from 'next/router'
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

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
                                        <Link href="post-image.html" className="d-inline-block">
                                            <h4 className="h6">The blind man</h4>
                                            <img
                                                className="card-img"
                                                src="https://milo.bootlab.io/img/articles/2.jpg"
                                                alt=""
                                            />
                                        </Link>
                                        <time className="timeago" dateTime="2021-09-03 20:00">
                                            3 october 2021
                                        </time>{" "}
                                        in Lifestyle
                                        <Link
                                            href="post-image.html"
                                            className="d-inline-block mt-3"
                                        >
                                            <h4 className="h6">Crying on the news</h4>
                                            <img
                                                className="card-img"
                                                src="https://milo.bootlab.io/img/articles/3.jpg"
                                                alt=""
                                            />
                                        </Link>
                                        <time className="timeago" dateTime="2021-07-16 20:00">
                                            16 july 2021
                                        </time>{" "}
                                        in Work
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

export async function getServerSideProps(context) {

    const { slug } = context.query;
    let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
    let myBlog = await data.json()

    return {
        props: { myBlog }, // will be passed to the page component as props
    }
}