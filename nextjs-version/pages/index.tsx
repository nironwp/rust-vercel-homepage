import Head from "next/head"
import Image from "next/image"

export default function Home() {
  return (
    <>
    <Head>
        <title>Vercel Homepage UI Clone</title>
    </Head>
    <div id="wrapper">
      <header>
        <h1 className="left">
          <Image width={100} height={250} src="assets/logo.svg" alt="Logo" />
        </h1>

        <nav className="middle">
          <ul>
            <li><a href="#">Solutions</a></li>
            <li><a href="#">Resources</a></li>
            <li><a href="#">Pricing</a></li>
          </ul>
        </nav>

        <div className="right">
          <a className="conf">
            <Image width={120} height={37} src="assets/special-button.svg" alt="Special Conference" />
            <span>Special Conf</span>
          </a>
          <Image width={100} height={50} className="avatar" src="assets/avatar.svg" alt="Avatar" />
        </div>
      </header>
        <main>
          <h1>
            <span>Develop.</span>
            <span>Preview.</span>
            <span>Ship.</span>
          </h1>

          <div className="buttons">
            <button>Start coding.</button>
            <button className="outlined">Get a demo</button>
          </div>

          <h2>
            Vercel combines the best developer experience with an obsessive focus on end-user performance. Our platform enables frontend to do their best work.
          </h2>
        </main>
      <footer>Explore the Vercel way</footer>
    </div>
    </>
  )
}
