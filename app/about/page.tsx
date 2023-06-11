import PortfolioNav from "@/components/PortfolioNav/PortfolioNav";
import Table from "@/components/Table";
import { QUEEN, Queen, GLENTHORNE, KENTON } from "./tablesData";

const About = () => {
  return (
    <>
      <PortfolioNav />
      <main className="container mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-2 sm:py-6 lg:py-8">
        <section className="mb-8">
          <h1 className="text-7xl font-extrabold text-slate-900">About</h1>
        </section>
        <section className="mb-8">
          <h2 className="text-4xl font-extrabold text-slate-900 mt-8">
            Professional Experience
          </h2>
        </section>
        <section className="mb-8">
          <h2 className="text-4xl font-extrabold text-slate-900 mt-8">
            Hobbies
          </h2>
        </section>
        <section className="mb-8">
          <h2 className="text-4xl font-extrabold text-slate-900 mt-8">
            Education
          </h2>
          <p className="text-lg font-normal text-slate-900 mt-4">
            Below you can find table of my education with grades and everything
          </p>
          <Table
            name="BSc of Computer Science at Queen Mary University of London"
            description=""
            data={QUEEN}
          />
          <Table
            name="Glenthorne High School"
            description=""
            data={GLENTHORNE}
          />
          <Table name="Kenton High School" description="" data={KENTON} />
        </section>
      </main>
    </>
  );
};

export default About;
