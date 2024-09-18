import React, { useState } from "react";
import Image from "../components/common/Image";

import { useNavigate } from "react-router-dom";
import { Blocks } from "react-loader-spinner";

const Registration = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const handleSubmit = () => {
    setLoading(true);
  };

  return (
    <section className="w-full h-screen flex items-center justify-center">
      <div className="w-[497px]">
        <Image src="/logo.png" className="mx-auto" />
        <h1 className=" font-bold text-[34.4px] text-primary text-center mt-[18px]">
          Get started with easily register
        </h1>
        <p className=" font-bold text-red-500 text-center">{err}</p>
        <p className=" font-normal text-[20.64px] text-primary text-center">
          Free register and you can enjoy it
        </p>

        <div className=" border-[1.72px] border-primary/30 rounded-[9px] w-full  mt-[70px] relative">
          <label
            htmlFor=""
            className=" px-7 bg-white block font-semibold text-[13.76px] text-primary/70 absolute top-[-10px] left-[74px]"
          >
            Email Address
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name=""
            id=" "
            className=" w-full py-[26px] px-[70px] outline-none rounded-lg font-semibold text-[20.64px] text-primary"
          />
        </div>

        <div className=" border-[1.72px] border-primary/30 rounded-[9px] w-full  mt-[70px] relative">
          <label
            htmlFor=""
            className=" px-7 bg-white block font-semibold text-[13.76px] text-primary/70 absolute top-[-10px] left-[74px]"
          >
            Full Name
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            name=""
            id=" "
            className=" w-full py-[26px] px-[70px] outline-none rounded-lg font-semibold text-[20.64px] text-primary"
          />
        </div>

        <div className=" border-[1.72px] border-primary/30 rounded-[9px] w-full  mt-[40px] relative">
          <label
            htmlFor=""
            className=" px-7 bg-white block font-semibold text-[13.76px] text-primary/70 absolute top-[-10px] left-[74px]"
          >
            Passoword
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name=""
            id=" "
            className=" w-full py-[26px] px-[70px] outline-none rounded-lg font-semibold text-[20.64px] text-primary"
          />
        </div>

        {loading ? (
          <div className="text-center flex items-center justify-center">
            <Blocks
              height="80"
              width="80"
              color="#4fa94d"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              visible={true}
            />
          </div>
        ) : (
          <button
            onClick={handleSubmit}
            className="mt-[50px] w-full py-5  bg-secondary font-semibold text-[20.64px] text-white rounded-full"
          >
            Sign up
          </button>
        )}
      </div>
    </section>
  );
};

export default Registration;
