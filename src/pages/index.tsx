import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

export function JNCIA_Junos() {
  return (
    <StaticImage
      src="../images/JNCIA-Junos.png"
      alt="Juniper Networks JNCIA-Junos"
      width={200}
    />
  )
}

const IndexPage = () => {
  return (
    <main className="relative min-h-screen bg-white dark:bg-black">
      <title>Home • Louis Jarasius</title>
      <h1 className="text-3xl text-center text-black dark:text-white">Louis Jarasius</h1>
      <JNCIA_Junos></JNCIA_Junos>
      <footer className="absolute inset-x-0 bottom-0 text-center text-black dark:text-white">
        <p>Built with ❤️ using Gatsby, Tailwind CSS, Sass and Cloudflare Pages.</p>
        <p>© {new Date().getFullYear()} Louis Jarasius. All rights reserved.</p>
      </footer>
    </main>
  )
}

export default IndexPage
