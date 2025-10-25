
import React, { useState } from 'react';
import { FaAngleRight } from 'react-icons/fa6';
import { FiSearch } from 'react-icons/fi';
import { GoHome } from 'react-icons/go';
import OrganizationCard from '../components/OrgCard';
import BasicDetails from '../components/BasicDetails';
import Users from '../components/Users';

const Org = () => {
  const [tab, setTab] = useState(1);
  return (
    <div className="text-black flex flex-col gap-6 px-[70px]">
      <div className="text-[#777777] flex gap-3 items-center  py-2 justify-between">
        <div className="flex items-center gap-3">
          <section className="">
            <span>
              <GoHome className="h-5 w-5 font-400  " />
            </span>
          </section>
          <section className="">
            <span>
              <FaAngleRight className="h-3 w-3  " />
            </span>
          </section>
          <section>Manage B2B organization</section>
          <section className="">
            <span>
              <FaAngleRight className="h-3 w-3  " />
            </span>
          </section>
          <section>Organization details</section>
        </div>
      </div>
      <div>
        <OrganizationCard
          orgName="Massachusetts Institute of Technology"
          mail="gitam@gitam.in"
          contact="+91 9676456543"
          url="Gitam.edu"
        />
      </div>
      <div className=" flex h-8 gap-2 items-center">
        <span
          className={`h-8 flex justify-center items-center rounded-md py-1.5 px-4 cursor-pointer ${
            tab === 0
              ? "bg-[#F0EBFF] text-[#6834FF]"
              : "bg-[#F5F6F7] text-[#777777]"
          }`}
          onClick={() => setTab(0)}
        >
          Basic details
        </span>
        <span
          className={`h-8 flex justify-center items-center rounded-md py-1.5 px-4 cursor-pointer ${
            tab === 1
              ? "bg-[#F0EBFF] text-[#6834FF]"
              : "bg-[#F5F6F7] text-[#777777]"
          }`}
          onClick={() => setTab(1)}
        >
          Users
        </span>
      </div>
      <div>
        {tab==0? <BasicDetails/> : <Users/>}
      </div>
    </div>
  );
}

export default Org
