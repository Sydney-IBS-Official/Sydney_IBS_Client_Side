import React from 'react';
import finance from '../../Carosel/Asset/Phd/Islamic finance.jpg';
import economics from '../../Carosel/Asset/Phd/economics.jpg';
import business from '../../Carosel/Asset/Phd/explore 03.jpg';
import Insurance from '../../Carosel/Asset/Phd/Islamic insurance.jpg';
import Management from '../../Carosel/Asset/management.jpg';
import IBusiness from '../../Carosel/Asset/Phd/International-Business.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faHouse } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

const Phd = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container mx-auto  ">
        <div className="lg:mx-[170px] bg-base-100 shadow ">
          <div className=" lg:w-full    ">
            <div className="lg:mx-8 py-3 pb-10  ">
              {/* breadcrumb added here */}
              <div className="text-md breadcrumbs md:px-3 px-3  ">
                <ul className="text-sky-700 border-b-4 border-sky-700 ">
                  <li>
                    <Link to="/" className="font-semibold text-sky-700">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/future" className="font-semibold text-sky-700">
                      Future students
                    </Link>
                  </li>
                  <li>
                    <p className="font-semibold">Academic programs</p>
                  </li>
                  <li>
                    <p className="text-black"> PhD</p>
                  </li>
                </ul>
              </div>
              {/* breadcrumb end */}

              {/* PHD intro start here*/}

              <div className="  ">
                <h1 className="text-sky-700 text-xl font-bold  px-3 ">
                  Doctor of Philosophy (PhD)
                </h1>

                <p className="  px-3 text-justify mt-3 ">
                  SIBS offers PhD programmes across the complete spectrum of
                  business, economics, management, and related fields.
                </p>
                <p className="  px-3 text-justify mt-3 ">
                  PhD applicants at the University are obliged to submit theses
                  that are no more than 100,000 words. The thesis must be an
                  original work that not only exhibits the candidate's capacity
                  for world-class research but also significantly advances
                  knowledge in the field in which they are specialising. PhD
                  applicants are obliged to take a number of graduate-level
                  coursework units before finishing their thesis, typically
                  during their first year of study, to help them with finishing
                  their dissertation.
                </p>
                <p className="text-justify mt-3  px-3">
                  By discipline, admission standards, programme layout, and
                  length vary. Before submitting an application for admission to
                  a PhD programme, you should carefully evaluate all
                  discipline-specific material.
                </p>
                {/* PHD intro end */}

                {/* PhD programs content linked  */}

                <p className="text-justify mt-3  px-3 flex">
                  Read more about Sydney IBS
                  <p
                    onClick={() => navigate('/phdprogram')}
                    className="text-sky-700 px-2 cursor-pointer hover:underline"
                  >
                    PhD programs
                  </p>
                </p>
              </div>
            </div>
          </div>

          {/* PhD Courses  */}

          <div className="lg:mx-12  pb-10 md:px-3">
            {/* PhD Banking and Finance  */}
            <div className="lg:flex md:flex bg-sky-700 shadow p-3 mb-5 gap-5 justify-center items-center">
              <div className="md:w-3/6 lg:w-[20%] ">
                <a href="/phdfinance">
                  <img
                    src={finance}
                    alt=""
                    className="lg:h-32 lg:w-[200px] w-full md:h-32 "
                  />
                </a>
              </div>
              <div className="lg:w-[75%]">
                <a
                  href="/phdfinance"
                  className="text-2xl text-white text-justify"
                >
                  Islamic Banking and Finance
                </a>
                <a href="/phdfinance">
                  <p className="mb-3 text-white mt-5 text-justify">
                    Islamic banking, Islamic finance, or Sharia-compliant
                    finance is banking or financing activity that complies with
                    Sharia and its practical application through the development
                    of Islamic economics.
                  </p>
                </a>
                <p className="text-right  cursor-pointer">
                  <a href="/phdfinance" className="underline text-white">
                    Find out more
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="h-3 w-2 "
                    ></FontAwesomeIcon>
                  </a>
                </p>
              </div>
            </div>

            {/* PhD islamic economics  */}
            <div className="lg:flex md:flex bg-sky-700 shadow p-3 mb-5 gap-5 justify-center items-center">
              <div className="md:w-3/6 lg:w-[20%]">
                <a href="/phdeconomics">
                  <img
                    src={economics}
                    alt=""
                    className="lg:h-32 lg:w-[200px] w-full md:h-32"
                  />
                </a>
              </div>
              <div className="lg:w-[75%]">
                <a href="/phdeconomics">
                  <p className="text-2xl mb-5 text-white">Islamic Economics</p>

                  <p className="mb-3 text-white text-justify">
                    It tries to promote human brotherhood, socio-economic
                    justice and the well-being of all through an integrated role
                    of moral values, market mechanism, families.Islamic
                    economics refers to the
                  </p>
                </a>
                <p className="text-right  cursor-pointer text-white">
                  <a href="/phdeconomics">Find out more</a>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="h-3 w-2"
                  ></FontAwesomeIcon>
                </p>
              </div>
            </div>

            {/* PhD islamic business start here */}
            <div className="lg:flex md:flex bg-sky-700 shadow p-3 mb-5 gap-5 justify-center items-center">
              <div className="md:w-3/6 lg:w-[20%]">
                <a href="/phdbusinesslaw">
                  <img
                    src={business}
                    alt=""
                    className="lg:h-32 lg:w-[200px] w-full md:h-32"
                  />
                </a>
              </div>
              <div className="lg:w-[75%]">
                <a href="/phdbusinesslaw">
                  <p className="text-2xl  mb-5 text-white">
                    Islamic Business Law
                  </p>
                  <p className="mb-3 text-white text-justify">
                    Shariah restrictions on certain financial and trade
                    transactions is the raison d’être for the emergence of
                    Islamic banking. It is, therefore, important for any student
                    of Islamic banking to grasp
                  </p>
                </a>
                <p className="text-right  cursor-pointer text-white">
                  <a href="/phdbusinesslaw">Find out more</a>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="h-3 w-2"
                  ></FontAwesomeIcon>
                </p>
              </div>
            </div>

            {/* PhD islamic Insurance */}
            <div className="lg:flex md:flex bg-sky-700 shadow p-3 mb-5 gap-5 justify-center items-center">
              <div className="md:w-3/6 lg:w-[20%]">
                <a href="/phdinsurance">
                  <img
                    src={Insurance}
                    alt=""
                    className="lg:h-28 lg:w-[200px] w-full md:h-32"
                  />
                </a>
              </div>
              <div className="lg:w-[75%]">
                <a href="/phdinsurance">
                  <p className="text-2xl text-white mb-5">Islamic Insurance</p>
                  <p className="mb-3 text-white text-justify">
                    A Shariah-compliant insurance that can be renewed online.
                    DISCOVER. A Shariah-compliant motor insurance plan that can
                    be easily renewed online , important for any student of
                    Islamic
                  </p>
                </a>
                <p className="text-right  cursor-pointer text-white">
                  <a href="/phdinsurance">Find out more</a>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="h-3 w-2"
                  ></FontAwesomeIcon>
                </p>
              </div>
            </div>

            {/* PhD islamic Management  */}
            <div className="lg:flex md:flex bg-sky-700 shadow p-3 mb-5 gap-5 justify-center items-center">
              <div className="md:w-3/6 lg:w-[20%]">
                <a href="/phdmanagement">
                  <img
                    src={Management}
                    alt=""
                    className="lg:h-32 lg:w-[200px] w-full md:h-32"
                  />
                </a>
              </div>
              <div className="lg:w-[75%]">
                <a href="/phdmanagement">
                  <p className="text-2xl mb-5 text-white">Management</p>
                  <p className="mb-3 text-white text-justify">
                    Management is the coordination and administration of tasks
                    to achieve a goal. Such administration activities include
                    setting the organization’s strategy and coordinating the
                    efforts of staff to
                  </p>
                </a>
                <p className="text-right  cursor-pointer text-white">
                  Find out more
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="h-3 w-2"
                  ></FontAwesomeIcon>
                </p>
              </div>
            </div>

            {/* PhD islamic IBusiness  */}
            <div className="lg:flex md:flex bg-sky-700 shadow p-3 mb-5 gap-5 justify-center items-center">
              <div className="md:w-3/6 lg:w-[20%]">
                <a href="/phdIntbusiness">
                  <img
                    src={IBusiness}
                    alt=""
                    className="lg:h-32 lg:w-[200px] w-full md:h-32"
                  />
                </a>
              </div>
              <div className="lg:w-[75%]">
                <a href="/phdIntbusiness">
                  <p className="text-2xl text-white  mb-5">
                    International Business
                  </p>
                  <p className="mb-3 text-white text-justify">
                    International business relates to any situation where the
                    production or distribution of goods or services crosses
                    country borders. Globalization—the shift toward a more
                    International business
                  </p>
                </a>
                <p className="text-right  cursor-pointer text-white">
                  <a href="/phdIntbusiness"> Find out more</a>

                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="h-3 w-2"
                  ></FontAwesomeIcon>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Phd;
