import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import FinanceDetails from './FinanceDetails';
import PhdFinanceAdditionalMain from './PhdFinanceAdditionalMain';

const PhdFinance = () => {
  return (
    <div>
      {/* Main content start here */}
      <div className="container mx-auto   ">
        <div className="lg:mx-[170px] shadow bg-base-100">
          <div className="text-md breadcrumbs md:px-6 lg:mx-6 px-3 ">
            <ul className="text-sky-700 border-b-4 border-sky-700">
              <li>
                <a href="/">
                  <FontAwesomeIcon
                    icon={faHouse}
                    className="h-6 w-4 px-1  "
                  ></FontAwesomeIcon>
                </a>
              </li>
              <li>
                <p>Academic programs</p>
              </li>
              <li>
                <a href="/phd">Doctor of Philosophy (PhD)</a>
              </li>
              <li>
                <p className="text-black"> PhD Islamic Banking and Finance</p>
              </li>
            </ul>
          </div>
          <div className="">
            <div className=" lg:w-full    ">
              <div className=" lg:mx-6  py-3 pb-10  ">
                <h1 className="text-sky-700 text-xl font-bold  px-3 ">
                  Doctor of Philosophy (Islamic Banking and Finance)
                </h1>
                <p className="  px-3 text-justify">Start date: 4 March 2024</p>

                <p className=" px-3">
                  Duration: 3 to 5 years full time (4 to 8 years part time –
                  domestic students only)
                </p>

                <p className=" px-3">CRICOS code: ######</p>

                <p className=" px-3">
                  Location: Sydney Olympic Park, Australia
                </p>
                <button className="ml-3 bg-sky-700 text-lg p-1 rounded-md text-white mb-3 mt-2 px-2">
                  Apply Now
                </button>
                <div className="  ">
                  {/* <h1 className="mb-3 border-t-4 border-sky-700  mx-3 mt-2"></h1> */}
                  <h1 className="mt-6  px-3 text-xl  font-bold text-sky-700">
                    About the program
                  </h1>

                  <p className="  px-3 text-justify mt-3 ">
                    Sydney Islamic Business School (Sydney IBS) offers PhD
                    programs across all disciplines within Islamic Business. The
                    PhD program consists of two components– coursework and
                    research. Before completing their research, Sydney IBS PhD
                    candidates are required to complete 36 units of credit worth
                    of coursework units, usually during their first 18 months of
                    study, to assist them in completing their dissertation. PhD
                    candidates are required to submit a thesis which should not
                    exceed 100,000 words. The thesis must be an original work
                    that not only demonstrates the candidate’s ability to
                    undertake world-class research, but that also makes a
                    substantial contribution to the advancement of knowledge in
                    their chosen area of study. Admission requirements, program
                    structure and program duration vary by discipline. You
                    should carefully review all discipline-specific information
                    before applying for entry to a PhD program.
                  </p>
                  <p className="text-justify mt-3  px-3">
                    Our doctoral training will engage you in numerous aspects of
                    academic life. You will be both a student and a junior
                    research colleague. We provide courses in a wide variety of
                    research methods, and you will work closely with your
                    supervisors to define your research question and develop
                    your thesis. In addition, you will have opportunities to
                    gain teaching and research assistant experience and become
                    involved with the academic community within the Sydney
                    Islamic Business School. You will attend academic
                    conferences, make presentations, organise seminars and
                    contribute to management and academic decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <PhdFinanceAdditionalMain></PhdFinanceAdditionalMain>
            <FinanceDetails></FinanceDetails>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhdFinance;
