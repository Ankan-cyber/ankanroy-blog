import Link from "next/link"

const Footer = () => {
    return (
        <>
            {/* <div className="site-newsletter">
                <div className="container">
                    <div className="text-center">
                        <h3 className="h4 mb-2">Subscribe to our newsletter</h3>
                        <p className="text-muted">
                            Join our monthly newsletter and never miss out on new stories and
                            promotions.
                        </p>

                        <div className="row">
                            <div className="col-xs-12 col-sm-9 col-md-7 col-lg-5 ms-auto me-auto">
                                <div className="input-group mb-3 mt-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Email address"
                                        aria-label="Email address"
                                    />
                                    <span className="input-group-btn">
                                        <button className="btn btn-secondary" type="button">
                                            Subscribe
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>*/}

            <footer className="site-footer bg-dark" style={{ boxShadow: "0 0 20px 5px #5d0320" }}>
                <div className="container">
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <Link className="nav-link" href="#">
                                Privacy policy
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#">
                                Terms
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#">
                                Feedback
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#">
                                Advertise
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/contact">
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <div className="copy">
                        &copy; Ankan Roy 2023
                        <br />
                        All rights reserved
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer