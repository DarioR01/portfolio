import PortfolioNav from "@/components/PortfolioNav/PortfolioNav";
import Table from "@/components/Table";
import { QUEEN, Queen, GLENTHORNE, KENTON } from "./tablesData";

const About = () => {
  return (
    <>
      <PortfolioNav />
      <main className="container mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <section>
          <h1>Dario Russo</h1>
        </section>
        <section>
          <h2>Job Experience</h2>
        </section>
        <section>
          <h2>Hobbies</h2>
        </section>
        <section>
          <h2>Education</h2>
          <p>
            Below you can find table of my education with grades and everything
          </p>
          <Table name="Queen Mary" description="" data={QUEEN} />
          <Table name="Glenthorne" description="" data={GLENTHORNE} />
          {/* <Table name="Kenton" description="" data={KENTON} /> */}
        </section>
      </main>
    </>
  );
};

export default About;
