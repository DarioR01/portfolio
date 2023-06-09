import PortfolioNav from "@/components/PortfolioNav/PortfolioNav";

const About = () => {
  return (
    <div className="snap-y snap-mandatory overflow-y-scroll h-screen scroll-smooth">
      <section className="min-h-screen snap-start">
        <PortfolioNav />
        <h1>Section 1</h1>
      </section>
      <section className="min-h-screen flex items-center justify-center text-7xl snap-start">
        <h1>Section 2</h1>
      </section>
      <section className="min-h-screen flex items-center justify-center text-7xl snap-start">
        <h1>Section 3</h1>
      </section>
      <section className="min-h-screen flex items-center justify-center text-7xl snap-start">
        <h1>Section 4</h1>
      </section>
    </div>
  );
};

export default About;
