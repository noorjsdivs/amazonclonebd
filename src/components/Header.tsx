"use client";
import { useState } from "react";
import Image from "next/image";
import logo from "@/images/logo.png";
import cartImage from "@/images/cartIcon.png";
import { SlLocationPin } from "react-icons/sl";
import { HiOutlineSearch } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { BiCaretDown } from "react-icons/bi";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const { data: session } = useSession();

  return (
    <header className="w-full h-20 bg-amazon_blue text-lightText sticky top-0 z-50">
      <div className="h-full w-full mx-auto inline-flex items-center j gap-1 md:gap-3 px-4">
        {/* Logo */}
        <Link href={"/"}>
          <div className="headerItem">
            <Image src={logo} alt="logo" className="w-28 object-cover mt-1" />
          </div>
        </Link>
        {/* Deliver */}
        <div className="headerItem hidden xl:inline-flex gap-1">
          <SlLocationPin className="text-lg text-white" />
          <div className="text-xs">
            <p>Deliver to</p>
            <p className="text-white font-bold uppercase">Bangladesh</p>
          </div>
        </div>
        {/* Searchbar */}
        <div className="flex-1 h-10 hidden md:inline-flex items-center justify-between relative">
          <input
            type="text"
            placeholder="Search your products here..."
            className="w-full h-full rounded-md px-2 placeholder:text-sm text-base text-black border-[3px] border-transparent outline-none focus-visible:border-amazon_yellow"
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
          />
          {searchText !== "" && (
            <span
              onClick={() => setSearchText("")}
              className="text-xl text-black absolute right-14"
            >
              <IoMdClose />
            </span>
          )}
          <span className="w-12 h-full bg-amazon_yellow text-black text-2xl flex items-center justify-center absolute right-0 rounded-tr-md rounded-br-md">
            <HiOutlineSearch />
          </span>
        </div>
        {/* UserInformation */}
        {session?.user ? (
          <div className="flex items-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%] gap-1">
            <Image
              src={session?.user?.image!}
              alt="userImage"
              width={20}
              height={20}
              className="w-8 h-8 rounded-full object-cover"
            />
            <div className="text-xs text-gray-100 flex flex-col justify-between">
              <p className="text-white font-bold">{session?.user?.name}</p>
              <p>{session?.user?.email}</p>
            </div>
          </div>
        ) : (
          <div
            onClick={() => signIn()}
            className="text-xs text-gray-100 flex flex-col justify-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%]"
          >
            <p>Hello, sign in</p>
            <p className="text-white font-bold flex items-center">
              Account & Lists{" "}
              <span>
                <BiCaretDown />
              </span>
            </p>
          </div>
        )}
        {/* Favorite */}
        <Link
          href={"/favorite"}
          className="text-xs text-gray-100 hidden xl:inline-flex flex-col justify-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%] relative"
        >
          <p>Marked</p>
          <p className="text-white font-bold">& Favorite</p>
          <span className="absolute right-2 top-2 w-4 h-4 border-[1px] border-gray-400 flex items-center justify-center text-xs text-amazon_yellow font-medium rounded-sm">
            0
          </span>
        </Link>
        {/* Cart */}
        <Link
          href={"/cart"}
          className="flex items-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%] relative"
        >
          <Image
            src={cartImage}
            alt="cartImage"
            className="w-auto object-cover h-8"
          />
          <p className="text-xs text-white font-bold mt-3">Cart</p>
          <span className="absolute text-amazon_yellow text-sm top-2 left-[29px] font-semibold">
            0
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
