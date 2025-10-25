import React from 'react'
import { useState } from 'react';
import Button from './Button.jsx';
import Bin from "../assets/bin.svg";
import Drawer from "@mui/material/Drawer";
import PencilEdit from "../assets/penciledit.svg"
const Users = () => {
  const [isOpen, setIsOpen] = useState(false);
    const [error, setError] = useState("hh");
  return (
    <div className="text-black border border-gray-400 rounded-sm">
      <div className="flex justify-between items-center h-14 px-3 py-5">
        <span className="text-[#232323] font-semibold">
          <h4>Users</h4>
        </span>
        <span className="text-white text-sm">
          <Button
            text={"+ Add user"}
            onClick={() => {
              setIsOpen(true);
            }}
          />
        </span>
      </div>
      <div class="w-full bg-white  overflow-hidden">
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead class="bg-gray-100 ">
              <tr className="h-11">
                <th
                  scope="col"
                  className=" text-center text-sm font-medium text-gray-600"
                >
                  Sr. No
                </th>
                <th
                  scope="col"
                  class="pl-5 text-left text-sm font-medium text-gray-600"
                >
                  User name
                </th>
                <th
                  scope="col"
                  class=" text-left text-sm font-medium text-gray-600"
                >
                  Role
                </th>
                <th
                  scope="col"
                  class="pl-3 text-left text-sm font-medium text-gray-600"
                >
                  Action
                </th>
              </tr>
            </thead>

            <tbody class="devide-y divide-gray-200">
              <tr className="text-sm">
                <td class="whitespace-nowrap text-sm text-center ">1</td>
                <td class="px-4 py-4 whitespace-nowrap text-sm text-gray-900 ">
                  <div class="flex items-center gap-3">
                    <span class="font-medium">User name</span>
                  </div>
                </td>
                <td class="py-4 whitespace-nowrap text-gray-700 align-middle">
                  <span class="inline-flex items-center gap-1.5 rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                    <span class="h-2 w-2 rounded-full bg-green-600"></span>
                    Admin
                  </span>
                </td>
                <td class="pl-3 py-4  whitespace-nowrap text-sm text-gray-700 align-middle">
                  <div class="flex gap-4 text-gray-500">
                    <img src={PencilEdit} alt="edit" />
                    <img src={Bin} alt="eye" />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Drawer open={isOpen} anchor="right">
          <div className="w-[600px] h-full flex flex-col gap-3">
            <header className="h-18 flex items-center justify-between py-5 px-4 shadow-sm">
              <span>Add Organization</span>
              <span onClick={() => setIsOpen(false)}>
                <IoClose className="h-5 w-5 text-[#97A1B2] cursor-pointer" />
              </span>
            </header>
            <main className="px-6 border-b border-gray-500 h-full">
              <form action="" className="flex flex-col gap-3">
                <div className=" flex justify-between h-16 gap-3">
                  <div className="flex flex-col gap-1 text-[#777777] flex-1">
                    <label htmlFor="name">Name of organization</label>
                    <input
                      type="text"
                      placeholder="Text"
                      name="name"
                      className="py-1 px-3 border rounded-md border-[#B9C0CB]"
                    />
                  </div>
                  <div className="flex flex-col gap-1 text-[#777777] flex-1">
                    <label htmlFor="slug">Slug</label>
                    <input
                      type="text"
                      placeholder="Type here"
                      name="slug"
                      className="py-1 px-3 border rounded-md border-[#B9C0CB]"
                    />
                  </div>
                </div>
                <div className=" flex justify-between h-16 gap-3">
                  <div className="flex flex-col gap-1 text-[#777777] flex-1">
                    <label htmlFor="mail">Organization mail</label>
                    <input
                      type="text"
                      placeholder="Type here"
                      name="mail"
                      className="py-1 px-3 border rounded-m border-[#B9C0CB] rounded-md"
                    />
                  </div>
                  <div className="flex flex-col gap-1 text-[#777777] flex-1">
                    <label htmlFor="contact">Contact</label>
                    <input
                      type="text"
                      placeholder="Type here"
                      name="contact"
                      className="py-1 px-3 border rounded-md  border-[#B9C0CB]"
                    />
                  </div>
                </div>
              </form>
              <div>
                {error.length > 0 && (
                  <div className="py-3 text-red-500"> This is an error</div>
                )}
              </div>
            </main>
            <footer>
              <div className="flex justify-end gap-3 py-3 px-4">
                <button className="py-2.5 px-4 bg-[#F0EBFF] text-[#6834ff] rounded flex justify-center items-center cursor-pointer">
                  Cancel
                </button>
                <Button text={"Add"} onClick={() => {}} />
              </div>
            </footer>
          </div>
        </Drawer>
      </div>
    </div>
  );
}

export default Users;
