import PortfolioNav from "@/components/PortfolioNav/PortfolioNav";
import Table from "@/components/Table";
import { QUEEN, GLENTHORNE, KENTON } from "./tablesData";
import Image from "next/image";

const About = () => {
  return (
    <>
      <PortfolioNav />
      <main className="container mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-2 sm:py-6 lg:py-8">
        <section className="mb-8">
          <div className="grid grid-cols-5 grid-rows-3 grid-flow-row gap-2 wrap">
            <div className="row-span-2 col-span-2 bg-pink-500 h-full w-full">
              {/* <Image
                src="/about/dario-01.jpg"
                width={0}
                height={0}
                alt="Missing Image Coming Soon!!"
                className="h-full w-full object-cover"
                priority
              /> */}
            </div>
            <div className="col-span-3 bg-blue-500 h-full w-full">
              {/* <Image
                src="/about/dario-02.jpg"
                width={0}
                height={0}
                alt="Missing Image Coming Soon!!"
                className="object-cover"
                priority
              /> */}
            </div>
            <div className="row-span-2 col-span-2 bg-yellow-500 h-full w-full">
              {/* <Image
                src="/about/dario-03.jpg"
                width={0}
                height={0}
                alt="Missing Image Coming Soon!!"
                className="object-cover"
                priority
              /> */}
            </div>
            <div className="row-span-1 col-span-1 bg-slate-500 h-full w-full">
              <Image
                src="/about/dario-04.jpg"
                width={512}
                height={512}
                alt="Picture of Dario next to a Hippopotamus taken in London's Zoo"
                className="object-cover"
                priority
              />
            </div>
            <div className="row-span-1 col-span-2 bg-slate-500 h-full w-full">
              {/* <Image
                src="/about/dario-05.jpg"
                width={0}
                height={0}
                alt="Missing Image Coming Soon!!"
                className="object-cover"
                priority
              /> */}
            </div>
            <div className="row-span-1 col-span-1 h-full w-full">
              <Image
                src="/about/dario-06.jpg"
                width={512}
                height={512}
                alt="Potrait of Dario generated with AI"
                className="object-cover"
                priority
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-7xl font-extrabold text-slate-900 mt-8">
            About Me
          </h1>
          <p className="text-lg font-normal text-justify slate-700 mt-4">
            I have a genuine passion for computer science that runs deep. It all
            started during my childhood, when I developed a fascination with
            computers through the world of video games. The sheer curiosity
            surrounding these magical machines ignited a desire to delve deeper
            into their inner workings. As a result, I chose to pursue an
            educational path centered around computers and all the diverse
            aspects they encompass. It has been an exciting journey of discovery
            and continuous learning.
          </p>
          <p className="text-lg font-normal text-justify slate-700 mt-4">
            After a 22-year journey filled with growth and exploration, here I
            am, Dario Russo, web developer originally from Italy, now living and
            working in the vibrant city of London. Frontend development is my
            forte, and I&#39;m genuinely passionate about crafting fast and
            accessible websites. I may still be in the early stages of my
            career, but I&#39;ve had the incredible opportunity to work as a web
            developer at the BBC for a solid two years. This experience has
            truly fueled my enthusiasm for creating websites that users simply
            can&#39;t resist.
          </p>
          <p className="text-lg font-normal text-justify slate-700 mt-4">
            I am an incredibly driven individual who finds immense satisfaction
            in tackling logical challenges and continuously broadening my
            horizons. While my previous co-workers have acknowledged my
            hardworking nature and knowledge, I remain humbly aware that there
            is always room for growth and learning. I aspire to explore
            opportunities that expand beyond my current skill set, allowing me
            to venture into uncharted territories and unlock new realms of
            knowledge and expertise.
          </p>
          <p className="text-lg font-normal text-justify slate-700 mt-4">
            When I take a break from the computer science realm, I find solace
            and pure joy in playing the piano. It&#39;s a wonderful hobby
            providing a refreshing escape from the world of bugs, red errors,
            and yellow warnings. Slow classical music is the perfect way to
            recharge my mind and get ready for new coding challenges with a
            renewed sense of focus and creativity. I&#39;ve also recently taken
            a plunge into the exciting world of photography. Snapping shots and
            capturing those special moments has become a new passion of mine.
            These hobbies bring a delightful balance to my computer science
            adventures and add some extra flavor to my journey.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-4xl md:text-7xl font-extrabold text-slate-900 mt-8">
            Professional Experience
          </h2>
          <div className="bg-white p-4 rounded-lg mt-4">
            <div className="flex flex-wrap justify-between">
              <h3 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl">
                <span>
                  Trainee Software Engineer
                  <span className="text-lg font-normal text-justify slate-700 before:content-['-'] before:mr-1 pl-6">
                    BBC World Service Team
                  </span>
                </span>
              </h3>
              <span className="block mt-auto">
                <time>September 2021</time> to <time>June 2023</time>
              </span>
            </div>

            <ul className="space-y-4 text-slate-700 list-disc mt-4">
              <li className="ml-5">
                Collaborated closely with product managers, UX designers, and
                testers to ensure the ongoing maintenance of an accessible
                front-end for rendering CMS News. This front-end played a vital
                role in facilitating the successful delivery of 44 news services
                worldwide.
              </li>
              <li className="ml-5">
                By actively pairing with other 2 junior software engineers, I
                successfully contributed to reducing the completion time of pull
                requests (PRs) by 10-20 minutes. Our collaboration focused on
                migrating the legacy component&#39;s library into the main
                repository&#39;s component folder, resulting in improved
                efficiency and streamlined development processes.
              </li>
              <li className="ml-5">
                Took on the responsibility of experimenting with newly created
                component standards. My task involved refactoring two legacy
                promo components into a single compound component. This
                refactoring aimed to provide valuable feedback on the
                effectiveness of the new standards and demonstrate their
                benefits to the team. By making the code more reusable and
                readable, the refactored compound component served as a tangible
                example of how the new standards could enhance the team&#39;s
                development process.
              </li>
              <li className="ml-5">
                Through my advocacy and development efforts, I successfully
                implemented an efficient indexing system for our documentation,
                which was previously scattered across different locations. This
                solution involved creating a centralized index portal utilizing
                storybook, which empowered every team member to swiftly locate
                and access the pertinent documentation they needed. As a result,
                we observed a significant boost in engagement with the
                documentation, coupled with a remarkable reduction in the time
                required to locate it.
              </li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-lg mt-4">
            <div className="flex flex-wrap justify-between">
              <h3 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl">
                <span>
                  Demonstrator
                  <span className="text-lg font-normal text-justify slate-700 before:content-['-'] before:mr-1 pl-6">
                    Queen Mary University of London
                  </span>
                </span>
              </h3>
              <span className="block mt-auto">
                <time>September 2020</time> to <time>September 2021</time>
              </span>
            </div>
            <ul className="space-y-4 text-slate-700 list-disc mt-4">
              <li className="ml-5">
                Providing hands-on guidance and support to first-year students
                during laboratory sessions for the Computer Systems and Networks
                and Procedural Programming modules.
              </li>
              <li className="ml-5">
                I was responsible for guiding students on the purpose and
                approach of the laboratory session, while also providing support
                and addressing any inquiries they had.
              </li>
              <li className="ml-5">
                I had the responsibility of evaluating and grading students&#39;
                lab work and coursework, ensuring fair assessment and
                determining their pass or fail status accordingly.
              </li>
              <li className="ml-5">
                Throughout the session, I effectively managed the simultaneous
                marking of students&#39; lab requests and questions by resolving
                20-30 requests per hour.
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-4xl md:text-7xl font-extrabold text-slate-900 mt-8">
            Education
          </h2>
          <p className="text-lg font-normal text-justify slate-700 mt-4">
            Below, you&#39;ll find a comprehensive overview of my educational
            journey, from my GCSEs to my Bachelor&#39;s degree, including
            relevant grades and accomplishments:
          </p>
          <Table
            name="BSc of Computer Science 1st Degree at Queen Mary University of London"
            data={QUEEN}
          />
          <Table name="Glenthorne High School" data={GLENTHORNE} />
          <Table name="Kenton High School" data={KENTON} />
        </section>
      </main>
    </>
  );
};

export default About;
