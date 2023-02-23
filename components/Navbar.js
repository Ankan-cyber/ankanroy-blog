import Link from 'next/link'
import Script from 'next/script'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-md navbar-light bg-white absolute-top">
                <div className="container">
                    <button
                        className="navbar-toggler order-2 order-md-1"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target=".navbar-collapse"
                        aria-controls="navbar-left navbar-right"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <Link href="/" className="navbar-brand mx-auto order-1 order-md-3"
                        style={{ textTransform: "uppercase" }}>
                        Blog By Ankan Roy
                    </Link>

                    <div
                        className="collapse navbar-collapse order-4 order-md-4"
                        id="navbar-right"
                    >
                        <ul className="navbar-nav ms-auto">
                            <Link href="/about">
                                <li className="nav-item">
                                    <span className="nav-link" style={{ color: "#000 !important" }}>About</span>
                                </li>
                            </Link>
                            <Link href="/contact">
                                <li className="nav-item">
                                    <span className="nav-link" style={{ color: "#000 !important" }}>Contact</span>
                                </li>
                            </Link>
                        </ul>
                        <form className="form-inline" role="search">
                            <input
                                className="search js-search form-control form-control-rounded me-sm-2"
                                type="text"
                                title="Enter search query here.."
                                placeholder="Search.."
                                aria-label="Search"
                            />
                        </form>
                    </div>
                </div>
            </nav>
            <Script src="https://milo.bootlab.io/js/app.js"></Script>
        </>

    )
}

export default Navbar