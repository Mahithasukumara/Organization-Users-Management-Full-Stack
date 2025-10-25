import React, { useState } from "react";
import { GoHome } from "react-icons/go";
import { FaAngleRight } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import Pencil from '../assets/pencil.svg'
import Button from '../components/Button.jsx'
const BasicDetails = () => {
  const [mode, setMode] = useState(true);
  // 0 --> edit mode off
  // 1 --> edit mode ON
  return (
    <div>
      <div className="border shadow-md flex flex-col p-5 gap-5 rounded-md">
        <div className="flex gap-3 items-center  py-2 justify-between">
          <div className="flex items-center font-semibold gap-3 text-[#232323] text-[20px]">
            <h3>Profile</h3>
          </div>
          <section className="flex justify-center self-end items-center gap-1">
            <span className="hover:bg-[#e9e3fd] bg-[#f0ebff] rounded cursor-pointer">
              <button 
                onClick={()=>setMode(prev=>!prev)}
                className="p-4 text-white rounded flex justify-center items-center cursor-pointer"
              >
                <img src={ Pencil} alt="" />
              </button>
            </span>
          {!mode && <Button text={"save changes >"} />}
          </section>
        </div>
        <div>
          <hr />
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex items-center font-semibold gap-3 text-[#232323] text-[18px]">
            <h3>Organization details</h3>
          </div>
          <div className=" flex justify-between h-16 gap-3">
            <div className="flex flex-col gap-1 text-[#777777] flex-1 text-[12px]">
              <label htmlFor="name">Organization name</label>
              <input
                type="text"
                placeholder="Text"
                name="name"
                className="py-1 px-3 border h-11 text-[14px] rounded-md border-[#B9C0CB] disabled:bg-[#F5F6F7] disabled:cursor-not-allowed"
                disabled={mode}
              />
            </div>
            <div className="flex flex-col gap-1 text-[#777777] flex-1 text-[12px]">
              <label htmlFor="slug">Organization SLUG</label>
              <input
                type="text"
                placeholder="Text"
                name="name"
                className="py-1 px-3 border h-11 text-[14px] rounded-md border-[#B9C0CB] disabled:bg-[#F5F6F7] disabled:cursor-not-allowed"
                disabled={mode}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex items-center font-semibold gap-3 text-[#232323] text-[18px]">
            <h3>Contact details</h3>
          </div>
          <div className=" flex justify-between h-16 gap-3">
            <div className="flex flex-col gap-1 text-[#777777] flex-1 text-[12px]">
              <label htmlFor="name">Primary Admin name</label>
              <input
                type="text"
                placeholder="Text"
                name="name"
                className="py-1 px-3 border h-11 text-[14px] rounded-md border-[#B9C0CB] disabled:bg-[#F5F6F7] disabled:cursor-not-allowed"
                disabled={mode}
              />
            </div>
            <div className="flex flex-col gap-1 text-[#777777] flex-1 text-[12px]">
              <label htmlFor="slug">Primary Admin Mail-id</label>
              <input
                type="number"
                placeholder="Text"
                name="name"
                className="py-1 px-3 border h-11 text-[14px] rounded-md border-[#B9C0CB] disabled:bg-[#F5F6F7] disabled:cursor-not-allowed"
                disabled={mode}
              />
            </div>
          </div>
          <div className=" flex justify-between h-16 gap-3">
            <div className="flex flex-col gap-1 text-[#777777] flex-1 text-[12px]">
              <label htmlFor="name">Support Email ID</label>
              <input
                type="email"
                placeholder="Text"
                name="name"
                className="py-1 px-3 border h-11 text-[14px] rounded-md border-[#B9C0CB] disabled:bg-[#F5F6F7] disabled:cursor-not-allowed"
                disabled={mode}
              />
            </div>
            <div className="flex flex-col gap-1 text-[#777777] flex-1 text-[12px]">
              <label htmlFor="slug">Phone no</label>
              <input
                type="number"
                placeholder="Text"
                name="name"
                className="py-1 px-3 border h-11 text-[14px] rounded-md border-[#B9C0CB] disabled:bg-[#F5F6F7] disabled:cursor-not-allowed"
                disabled={mode}
              />
            </div>
            <div className="flex flex-col gap-1 text-[#777777] flex-1 text-[12px]">
              <label htmlFor="slug">Alternative phone no</label>
              <input
                type="number"
                placeholder="Text"
                name="name"
                className="py-1 px-3 border h-11 text-[14px] rounded-md border-[#B9C0CB] disabled:bg-[#F5F6F7] disabled:cursor-not-allowed"
                disabled={mode}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex items-center font-semibold gap-3 text-[#232323] text-[18px]">
            <h3>Maximum Allowed Coordinators</h3>
          </div>
          <div className=" flex justify-between h-16 gap-3">
            <div className="flex flex-col gap-1 text-[#777777] flex-1 text-[12px]">
              <label htmlFor="name">Max active Coordinators allowed</label>
              <div class="relative md:w-1/2">
                <select
                  name="user-role"
                  disabled={mode == 0}
                  class="block w-full h-11 rounded-md text-3.5 border border-[#B9C0CB] disabled:bg-[#F5F6F7] disabled:cursor-not-allowed py-2 pl-3 pr-10 text-gray-900  sm:text-sm appearance-none cursor-default"
                >
                  <option value="" disabled selected>
                    Select an option
                  </option>
                  <option value="admin">Admin</option>
                  <option value="coordinator">Co-ordinator</option>
                </select>

                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <svg
                    class="h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.29a.75.75 0 01.02-1.06z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex items-center font-semibold gap-3 text-[#232323] text-[18px]">
            <h3>Timezone</h3>
          </div>
          <div className=" flex justify-between h-16 gap-3">
            <div className="flex flex-col gap-1 text-[#777777] flex-1 text-[12px]">
              <label htmlFor="name">Common name</label>
              <div class="relative">
                <select
                  disabled={mode == 0}
                  class="block w-full h-11 rounded-md text-3.5 border border-[#B9C0CB] disabled:bg-[#F5F6F7] disabled:cursor-not-allowed py-2 pl-3 pr-10 text-gray-900  sm:text-sm appearance-none cursor-default"
                >
                  <option value="" disabled selected>
                    Select an option
                  </option>
                  <option value="admin">Admin</option>
                  <option value="coordinator">Co-ordinator</option>
                </select>

                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <svg
                    class="h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.29a.75.75 0 01.02-1.06z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1 text-[#777777] flex-1 text-[12px]">
              <label htmlFor="slug">Region</label>
              <div class="relative">
                <select
                  disabled={mode == 0}
                  class="block w-full h-11 rounded-md text-3.5 border border-[#B9C0CB] disabled:bg-[#F5F6F7] disabled:cursor-not-allowed py-2 pl-3 pr-10 text-gray-900  sm:text-sm appearance-none cursor-default"
                >
                  <option value="" disabled selected>
                    Select an option
                  </option>
                  <option value="admin">Admin</option>
                  <option value="coordinator">Co-ordinator</option>
                </select>

                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <svg
                    class="h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.29a.75.75 0 01.02-1.06z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex items-center font-semibold gap-3 text-[#232323] text-[18px]">
            <h3>Language</h3>
          </div>
          <div className=" flex justify-between h-16 gap-3">
            <div className="flex flex-col gap-1 text-[#777777] flex-1 text-[12px]">
              <div class="relative mt-1 md:w-1/2">
                <select
                  name="user-role"
                  disabled={mode == 0}
                  class="block w-full h-11 rounded-md text-3.5 border border-[#B9C0CB] disabled:bg-[#F5F6F7] disabled:cursor-not-allowed py-2 pl-3 pr-10 text-gray-900  sm:text-sm appearance-none cursor-default"
                >
                  <option value="" disabled selected>
                    Select an option
                  </option>
                  <option value="admin">Admin</option>
                  <option value="coordinator">Co-ordinator</option>
                </select>

                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <svg
                    class="h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.29a.75.75 0 01.02-1.06z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex items-center font-semibold gap-3 text-[#232323] text-[18px]">
            <h3>Official website URL </h3>
          </div>
          <div className=" flex justify-between h-16 gap-3">
            <div className="flex flex-col gap-1 text-[#777777] flex-1 text-[12px]">
              <label htmlFor="name">website URL</label>
              <input
                type="text"
                placeholder="Text"
                name="name"
                className="py-1 px-3 border h-11 text-[14px] rounded-md border-[#B9C0CB] disabled:bg-[#F5F6F7] disabled:cursor-not-allowed"
                disabled={mode}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicDetails;
