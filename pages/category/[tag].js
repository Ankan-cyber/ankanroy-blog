import Link from 'next/link'
import * as fs from 'fs'

const Tag = (props) => {

    return (
        <>
            <main className="main pt-4">

                <div className="container">

                    <div className="row">
                        <div className="col-md-9">

                            <div className="text-center">
                                <span className="text-muted">Category:</span>
                                <h2>{props.tag}</h2>
                                <hr />
                            </div>

                            <div className="row">
                                {props.allBlogs &&
                                    props.allBlogs.map((e) => {
                                        if (e.tag === props.tag) {
                                            return (
                                                <div className="col-md-6" key={e.title}>
                                                    <article className="card mb-4" key={e.title}>
                                                        <header className="card-header">
                                                            <div className="card-meta">
                                                                <time className="timeago">
                                                                    {e.date}
                                                                </time>{" "}
                                                                in <Link href="/category">{e.tag}</Link>
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
                                                </div>
                                            )
                                        }
                                    })
                                }
                            </div>

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
                                        {props.allBlogs &&
                                            props.allBlogs.slice(1, 3).map((e) => {
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
    )
}

export default Tag;

export async function getStaticPaths() {
    let data = await fs.promises.readdir("blogdata");
    let paths = [];
    let myfile;
    data.map((e) => {
        myfile = { params: { tag: e.replace(".json", "") } }
        paths.push(myfile)
    })
    return {
        paths: paths,
        fallback: true // false or 'blocking'
    };
}
export async function getStaticProps(context) {
    const { tag } = context.params;
    let data = await fs.promises.readdir("blogdata");
    let myfile;
    let allBlogs = [];
    for (let index = 0; index < data.length; index++) {
        const item = data[index];
        myfile = await fs.promises.readFile(('blogdata/' + item), 'utf-8')
        allBlogs.push(JSON.parse(myfile))
    }

    return {
        props: { allBlogs, tag }, // will be passed to the page component as props
    }
}