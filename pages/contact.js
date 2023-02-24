import React from 'react'

const contact = () => {
    return (
        <>
            <main className="main pt-4">

                <div className="container">
                    <div className="row">
                        <div className="col-md-8 mx-auto">

                            <article className="card mb-4">
                                <header className="card-header text-center">
                                    <h1 className="card-title">Get in touch</h1>
                                </header>
                                <div className="card-body">

                                    <p>Thank you for visiting my blog! If you have any questions, comments, or feedback, please feel free to contact me using the form below. I always welcome your thoughts and suggestions, and I will do my best to respond to your message as soon as possible. Your input is valuable to me and will help me improve the content and experience of my blog. Thank you for your support!</p>

                                    <form id="contact-form" method="post" action="https://formspree.io/f/xzbqrqel">
                                        <label>Name</label>
                                        <input className="input-field" type="text" name="name" required />
                                        <label>Subject</label>
                                        <input className="input-field" type="text" name="subject" required />
                                        <label>Email</label>
                                        <input className="input-field" type="text" name="email" required pattern="^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$" />
                                        <label>Message</label>
                                        <textarea className="input-field" name="message"></textarea>
                                        <input id="submit-btn" type="submit" value="Send" />
                                    </form>

                                </div>
                            </article>

                        </div>
                    </div>
                </div>

            </main>

        </>
    )
}

export default contact