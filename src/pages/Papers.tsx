import FooterSection from "@/components/FooterSection";
import Navbar from "@/components/Navbar";
import { LuNotepadText } from "react-icons/lu";
import { BsCheck2Circle } from "react-icons/bs";
import { LuCalendar } from "react-icons/lu";
import { GoClock } from "react-icons/go";
import springerLogo from "@/assets/springerLogo.jpg";

const Papers = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="my-36">
        {/* Title  */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-8">
            <img
              src={springerLogo}
              alt="springer-logo"
              className="w-44 h-20 "
            />
            <div>
              <h2 className="pt-8 text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
                Call for Papers
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-icosom-500 to-icosom-teal mx-auto mb-6 rounded-full"></div>
            </div>
          </div>
          <p className="pt-8 text-lg text-gray-600 max-w-3xl mx-auto">
            Our conference covers a wide range of topics across statistics,
            optimization, and machine learning disciplines.
          </p>
        </div>

        {/* Guidelines  */}
        <div className="mt-24">
          <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-4 mx-auto gap-8">
            {/* left grid */}
            <div className="col-span-1 lg:col-span-3 rounded-xl border">
              {/* content  */}
              <div className="p-4 flex flex-col justify-center items-center gap-8">
                {/* Main Heading  */}
                <div className="flex gap-2">
                  <LuNotepadText className="h-8 w-8" />
                  <h1 className="text-2xl font-semibold">
                    Submission Guidelines
                  </h1>
                </div>

                {/* Author Guidelines  */}
                <div className="w-full flex flex-col gap-4">
                  {/* Title  */}
                  <div className="flex items-center gap-2">
                    <BsCheck2Circle className="h-6 w-6 text-green-600" />
                    <span className="text-lg font-semibold">
                      Author Guidelines
                    </span>
                  </div>
                  {/* content  */}
                  <div className="px-6 text-left text-neutral-600">
                    <div>
                      <p>
                        We invite researchers, academics, and professionals to
                        submit abstracts and full length papers for oral and
                        poster presentations at the 1<sup>st</sup> International
                        Conference on Statistics, Optimization and Machine
                        Learning (ICOSOM 2026).
                      </p>
                      <p className="text-red-500 font-medium">NOTE :</p>
                      <p className="font-medium">
                        1. Those who do not wish to publish their papers in the
                        conference proceedings are required to submit only the
                        abstract (Scopus indexed Springer Conference
                        proceedings).
                      </p>
                      <p className="font-medium">
                        2. Details of Scopus indexed conference proceedings and
                        special issue submissions in journals (scopus & Web of
                        Science indexed) will be coming shortly.
                      </p>
                      {/* <p className="font-medium">
                        3. For the purpose of double-blind peer review, author
                        details should not be included in the paper.
                      </p> */}
                      <div>
                        <p className="font-medium">
                          3. Use the following templates for paper submission:
                        </p>
                        <div className="flex flex-col pl-4">
                          <a
                            className="text-blue-500 underline cursor-pointer"
                            target="_blank"
                            href="https://www.springer.com/gp/authors-editors/conference-proceedings/editors/word-template/19338734?srsltid=AfmBOoo3tWqYnT5XUN8QaJTWcV9RVIyrnvpx3NCZ_uBKBXEZOTlS_xwz "
                          >
                            Word Template
                          </a>
                          <a
                            className="text-blue-500 underline cursor-pointer"
                            href="https://www.overleaf.com/latex/templates/springer-lecture-notes-in-computer-science/kzwwpvhwnvfj#.WtR5Hy5ua71"
                          >
                            Latex Template
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Abstract Submission Guidelines  */}
                <div className="w-full flex flex-col gap-4">
                  {/* Title  */}
                  <div className="flex items-center gap-2">
                    <BsCheck2Circle className="h-6 w-6" />
                    <span className="text-lg font-semibold">
                      Abstract Submission Guidelines
                    </span>
                  </div>
                  {/* content  */}
                  <div className="px-6 text-left text-neutral-600">
                    <ul className="flex flex-col gap-2">
                      <li>
                        <span className="text-neutral-900 font-semibold">
                          1.{" "}
                        </span>
                        Abstracts should be maximum 250 words, clearly
                        describing the research problem, methodology, results,
                        and conclusions.
                      </li>
                      <li>
                        <span className="text-neutral-900 font-semibold">
                          2.{" "}
                        </span>
                        Include 3-5 keywords that best represent the content of
                        your research. Submissions must be in English.
                      </li>
                      <li>
                        <span className="text-neutral-900 font-semibold">
                          3.{" "}
                        </span>
                        Supporting documents (optional) should be in DOCX/PDF
                        format, maximum 5MB.
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Paper Submission Guidelines  */}
                <div className="w-full flex flex-col gap-4">
                  {/* Title  */}
                  <div className="flex items-center gap-2">
                    <BsCheck2Circle className="h-6 w-6" />
                    <span className="text-lg font-semibold">
                      Paper Submission Guidelines
                    </span>
                  </div>
                  {/* content  */}
                  <div className="px-6 text-left text-neutral-600">
                    <p>
                      Full papers (if required after abstract acceptance) should
                      be formatted according to the conference template, in
                      between 10-15 pages including references.
                    </p>
                    <ul className="flex flex-col gap-2">
                      <li>
                        <span className="text-neutral-900 font-semibold">
                          1.{" "}
                        </span>
                        The user will need to have a CMT account before they try
                        to submit their paper.
                      </li>
                      <li>
                        <span className="text-neutral-900 font-semibold">
                          2.{" "}
                        </span>
                        Here is a link to create the account:{" "}
                        <a
                          className="text-blue-500 underline"
                          target="_blank"
                          href="https://cmt3.research.microsoft.com/docs/help/general/account-creation.html"
                        >
                          Click here
                        </a>
                      </li>
                      <li>
                        <span className="text-neutral-900 font-semibold">
                          3.{" "}
                        </span>
                        Here is a link for authors on how to submit a paper:{" "}
                        <a
                          className="text-blue-500 underline"
                          target="_blank"
                          href="https://cmt3.research.microsoft.com/docs/help/author/author-submission-form.html"
                        >
                          Click here
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Poster Submission Guidelines  */}
                <div className="w-full flex flex-col">
                  {/* Title  */}
                  <div className="flex items-center gap-2">
                    <BsCheck2Circle className="h-6 w-6" />
                    <span className="text-lg font-semibold">
                      Poster Submission Guidelines (After Abstract Acceptance)
                    </span>
                  </div>
                  {/* content  */}
                  <div className="px-6 text-left text-neutral-600">
                    <ul className="flex flex-col gap-2">
                      <li>
                        <span className="text-neutral-900 font-semibold">
                          1.{" "}
                        </span>
                        The poster should measure 60 cm in width and 90 cm in
                        height, with the layout in portrait orientation to
                        ensure consistency across the display area.
                      </li>
                      <li>
                        <span className="text-neutral-900 font-semibold">
                          2.{" "}
                        </span>
                        A high-resolution PDF version of the poster must be
                        submitted by the abstract submission deadline for review
                        and inclusion in the conference materials.
                      </li>
                      <li>
                        <span className="text-neutral-900 font-semibold">
                          3.{" "}
                        </span>
                        Presenters are expected to be present beside their
                        posters during the designated poster session times to
                        engage with attendees, explain their research, and
                        answer queries.
                      </li>
                      <li>
                        <span className="text-neutral-900 font-semibold">
                          4.{" "}
                        </span>
                        Presenters are requested to submit posters in their CMT
                        account.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Right grid  */}
            <div className="col-span-1 ">
              {/* content  */}
              <div className="flex flex-col gap-8">
                {/* Segment 1 - Important Dates  */}
                <div className="w-full p-4 border rounded-lg">
                  {/* Title  */}
                  <div className="flex justify-center items-center gap-2">
                    <LuCalendar className="h-6 w-6" />{" "}
                    <span className="text-xl font-semibold">
                      Important Dates
                    </span>
                  </div>

                  {/* Dates  */}
                  <div className="mt-4 p-2 flex flex-col gap-2">
                    <div>
                      {/* Event Heading  */}
                      <div className="flex gap-2">
                        <GoClock className="h-4 w-4 shrink-0" />

                        <div>
                          <h1 className="text-sm font-medium">
                            Full Paper / Abstract / Poster Submission Deadline
                          </h1>
                          <p className="text-left text-neutral-600">
                            December 15, 2025
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      {/* Event Heading  */}
                      <div className="flex gap-2">
                        <GoClock className="h-4 w-4" />

                        <div>
                          <h1 className="text-sm font-medium">
                            Notification of Acceptance
                          </h1>
                          <p className="text-left text-neutral-600">
                            January 15, 2026
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      {/* Event Heading  */}
                      <div className="flex gap-2">
                        <GoClock className="h-4 w-4" />

                        <div>
                          <h1 className="text-sm font-medium">
                            Early Registration Deadline
                          </h1>
                          <p className="text-left text-neutral-600">
                            January 31, 2026
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      {/* Event Heading  */}
                      <div className="flex gap-2">
                        <GoClock className="h-4 w-4" />

                        <div>
                          <h1 className="text-sm font-medium">
                            Camera Ready Submission Deadline
                          </h1>
                          <p className="text-left text-neutral-600">
                            February 15, 2026
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      {/* Event Heading  */}
                      <div className="flex gap-2">
                        <GoClock className="h-4 w-4" />

                        <div>
                          <h1 className="text-sm font-medium">
                            Late Registration Deadline
                          </h1>
                          <p className="text-left text-neutral-600">
                            February 15, 2026
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      {/* Event Heading  */}
                      <div className="flex gap-2">
                        <GoClock className="h-4 w-4" />

                        <div>
                          <h1 className="text-sm font-medium">
                            Conference Dates
                          </h1>
                          <p className="text-left text-neutral-600">
                            February 27-28, 2026
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Where to Submit */}
                <div className="w-full p-4 border rounded-lg">
                  <div className="flex gap-2">
                    <BsCheck2Circle className="h-6 w-6" />{" "}
                    <div>
                      <h1 className="text-xl font-semibold">Where to Submit</h1>
                      <p className="text-left text-neutral-600">
                        Follow this{" "}
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 underline"
                          href="https://cmt3.research.microsoft.com/ICOSOM2026/Submission/Index"
                        >
                          Link
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* CMT Acknowledgement  */}
                {/* <div className="w-full p-4 border rounded-lg">
                  <div className="flex gap-2 justify-center">
                    <BsCheck2Circle className="h-6 w-6 shrink-0" />
                    <div className="flex flex-col">
                      <span className="text-xl font-semibold">
                        CMT Acknowledgement
                      </span>
                      <p>
                        The Microsoft CMT service was used for managing the
                        peer-reviewing process for this conference. This service
                        was provided for free by Microsoft and they bore all
                        expenses, including costs for Azure cloud services as
                        well as for software development and support.
                      </p>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default Papers;
