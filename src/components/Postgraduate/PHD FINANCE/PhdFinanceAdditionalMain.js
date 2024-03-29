import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const PhdFinanceAdditionalMain = () => {
  return (
    <div className="">
      <div className="w-50 text-2xl  font-bold cursor-pointer   text-center">
        <button className="bg-sky-700  pr-16 pb-5 pt-5 pl-16">
          <p className=" text-white  "> Program overview</p>
        </button>
      </div>

      {/* Overview main content start */}
      <div className="grid lg:grid-cols-2 gap-1  sm:grid-cols-1 m-5 lg:mx-12 mb-11">
        <div class=" hover:bg-sky-300  bg-sky-700 p-5">
          {/* Research areas */}
          <div className="">
            <div className="items-center w-full text-center ">
              <FontAwesomeIcon
                icon={faBookOpen}
                className="text-white"
              ></FontAwesomeIcon>
            </div>
            <div className="">
              <a href="#Research">
                <h2 className=" text-xl font-bold cursor-pointer  text-white text-center p-2">
                  Research areas
                </h2>
              </a>
            </div>
          </div>
        </div>

        {/* Program structure */}
        <div class=" hover:bg-sky-300 bg-sky-700 p-5">
          <div className="">
            <div className="items-center w-full text-center ">
              <FontAwesomeIcon
                icon={faBookOpen}
                className="text-white"
              ></FontAwesomeIcon>
            </div>
            <div className="">
              <a href="#structure">
                {' '}
                <h2 className=" text-xl font-bold cursor-pointer  text-white text-center p-2">
                  Program structure
                </h2>
              </a>
            </div>
          </div>
        </div>

        {/* Admission requirements */}
        <div class=" hover:bg-sky-300 bg-sky-700 p-5">
          <div className="">
            <div className="items-center w-full text-center ">
              <FontAwesomeIcon
                icon={faBookOpen}
                className="
								text-white"
              ></FontAwesomeIcon>
            </div>
            <div className="">
              <a href="#Admission">
                {' '}
                <h2 className=" text-xl font-bold cursor-pointer  text-white text-center p-2">
                  Admission requirements
                </h2>
              </a>
            </div>
          </div>
        </div>

        {/* Course outcomes */}
        <div class=" hover:bg-sky-300 bg-sky-700 p-5">
          <div className="">
            <div className="items-center w-full text-center">
              <FontAwesomeIcon
                icon={faBookOpen}
                className="text-white"
              ></FontAwesomeIcon>
            </div>
            <div className="">
              <a href="#outcome">
                <h2 className=" text-xl font-bold cursor-pointer  text-white text-center p-2">
                  Course outcomes
                </h2>
              </a>
            </div>
          </div>
        </div>

        {/* Fees | Scholarship */}
        <div class=" hover:bg-sky-300 bg-sky-700 p-5">
          <div className="">
            <div className="items-center w-full text-center ">
              <FontAwesomeIcon
                icon={faBookOpen}
                className="text-white"
              ></FontAwesomeIcon>
            </div>
            <div className="">
              <a href="#Fees">
                <h2 className=" text-xl font-bold cursor-pointer  text-white text-center p-2">
                  Fees | Scholarships
                </h2>
              </a>
            </div>
          </div>
        </div>

        {/* Application Process */}
        <div class=" hover:bg-sky-300 bg-sky-700 p-5">
          <div className="">
            <div className="items-center w-full text-center ">
              <FontAwesomeIcon
                icon={faBookOpen}
                className="text-white"
              ></FontAwesomeIcon>
            </div>
            <div className="">
              <a href="#Application">
                <h2 className=" text-xl font-bold cursor-pointer  text-white text-center p-2">
                  Application Process
                </h2>
              </a>
            </div>
          </div>
        </div>
        {/* Application Process end*/}
      </div>
    </div>
  );
};

export default PhdFinanceAdditionalMain;
