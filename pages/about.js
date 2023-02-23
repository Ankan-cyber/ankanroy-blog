import Head from "next/head"

const about = () => {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <div className="container">
        <h1 className="text-center p-4">About Me</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-8 d-flex align-items-center">
              <p className="fs-5">I'm a developer based in India, with a passion for building great applications. I have experience with several technologies including HTML, CSS, JavaScript, React, Next.js and Node.js. In my free time, I enjoy playing video games and watching movies. Welcome to my technology blog, where I explore the latest trends and developments in the tech industry. From software engineering and artificial intelligence to cybersecurity and blockchain, this blog covers a wide range of topics that are relevant to the ever-changing world of technology. Whether you're a developer, a tech enthusiast, or simply curious about what's happening in the world of tech, you'll find plenty of engaging content and insightful analysis here. Join me on this journey of discovery as we navigate the exciting and rapidly evolving world of technology together.</p>
            </div>
            <div className="col-md-4">
              <img src="https://ankanroy.in/images/Ankan.jpg" alt="Profile Picture" className="img-fluid rounded-circle" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default about