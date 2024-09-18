import React, { useState } from "react";
import Container from "../common/Container";
import Flex from "../common/Flex";
import Image from "../common/Image";
import List from "../common/List";
import ListItem from "../common/ListItem";
import { Link } from "react-router-dom";
import { FaGithub, FaTimes } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";

const Navigation = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="py-1 border-b-[1px] border-white/20 bg-black absolute w-full top-0 left-0">
      <Container>
        <Flex className=" items-center  justify-between">
          <Link to="/">
            <Image className=" w-[40%] xl:w-[20%]" src="/logo.png" alt="logo" />
          </Link>

          <button
            onClick={() => setToggle(true)}
            className="p-2 rounded-md border-[1px] border-white/20 block md:hidden"
          >
            <HiMenuAlt3 className=" text-2xl text-white" />
          </button>

          <List
            className={` absolute md:static bg-black/90 h-screen md:h-auto flex flex-col md:flex-row justify-center md:justify-end top-0 ${
              toggle ? "left-0" : "left-[-100%]"
            } w-full items-center gap-5 `}
          >
            <button
              className=" block md:hidden"
              onClick={() => setToggle(false)}
            >
              <FaTimes className=" absolute  top-3 right-3 text-2xl text-white" />
            </button>

            <ListItem className=" font-sans font-medium text-xl text-white">
              <Link to="/">Home</Link>
            </ListItem>
            <ListItem className=" font-sans font-medium text-xl text-white">
              <Link to="/about">About</Link>
            </ListItem>
            <ListItem className=" font-sans font-medium text-xl text-white">
              <a
                href="https://github.com/rol2022/reactive-starter"
                target="_blank"
              >
                <FaGithub />
              </a>
            </ListItem>
          </List>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navigation;
