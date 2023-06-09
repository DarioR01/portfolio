import Image from "next/image";
import { LinkedIn, GitHub } from "./socialSVG";
import Layout from "@/layouts/Navbar/layout";

const Home = () => {
  return (
    <Layout>
      <main className="container mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex grow">
        <div className="md:grid md:grid-cols-2 items-center">
          <div className="flex flex-col md:order-2">
            {/* <Image
              alt="image"
              src="/profile.png"
              height={700}
              width={700}
              priority
            /> */}
          </div>
          <div>
            <h1>
              <blockquote className="font-bold text-4xl before:content-['—'] before:mr-2 text-gray-500">
                HELLO
              </blockquote>
              <span className="text-7xl">
                <strong>
                  I&#39;m <span className="text-primary">Dario</span> Russo
                </strong>
              </span>
            </h1>

            <p className="font-normal text-xl text-gray-800 mb-12 text-justify">
              A Web Developer based in London with 2 years of experience in
              developing high-quality web applications with a strong passion for
              learning new technologies and solving complex problems.
            </p>

            <a
              href="/DarioRusso_CV.pdf"
              target="_blank"
              className="inline-block bg-primary-500 text-white p-4 text-2xl rounded-md hover:bg-primary-600 shadow-lg mb-6 max-w-20"
            >
              DOWNLOAD CV
            </a>
          </div>
        </div>
      </main>

      <footer className="flex container mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 pb-4 sm:pb-0 sm:mb-10">
        <a
          aria-label="LinkedIn"
          className="mr-4"
          href="https://www.linkedin.com/in/dariorusso052001"
          target="_blank"
        >
          <LinkedIn className="stroke-1 stroke-primary-500/50 hover:stroke-primary-500" />
        </a>
        <a
          aria-label="GitHub"
          className="mr-4"
          href="https://github.com/DarioR01"
          target="_blank"
        >
          <GitHub className="stroke-1 stroke-primary-500/50 hover:stroke-primary-500" />
        </a>
      </footer>
    </Layout>
  );
};

export default Home;
