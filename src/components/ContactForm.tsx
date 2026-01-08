"use client";
import { useState , useEffect } from "react";
import { toast } from "sonner";
import { ArrowRightIcon , ArrowDownIcon } from "@heroicons/react/24/solid";
import { AddContact } from "@/app/api/contact/action";
// import BlackHole from "./BlackHole";
export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showForm , setShowForm] = useState(false);
  const [mounted, setMounted] = useState(false);

  

  useEffect(() => {
  if (showForm) {
    requestAnimationFrame(() => setMounted(true));
  }
}, [showForm]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast("Please enter a valid email address !", {
        style: {
          backgroundColor: "#dc2626",
          color: "white",
          fontWeight: "600",
        },
      });
      return;
    }

    const payload = {
      name: name,
      email: email,
      message: message,
    };

    setLoading(true);
    try {
      const res = await AddContact(payload);

      if (res) {
        toast("Contact Established.", {
          description: "You will be contacted as soon as possible.",
          style: {
            backgroundColor: "#16a34a",
            color: "white",
            border: "1px solid #15803d",
            fontWeight: "600",
          },
        });

        setName("");
        setEmail("");
        setMessage("");
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (

     <> 
     
    
      <div  className={`w-full space-y-20 lg:flex gap-20 transition-all ease-out duration-700 ${mounted ? "opacity-100 "  : "opacity-0"}  `}>   


       <div className="lg:w-1/2">
          <div className="hidden lg:block border-t-4 gap-10 border-t-white p-4 w-24 lg:w-48"></div>
          <div className="h-full w-full space-y-10 ">
            <h1 className="w-full lg:text-3xl xl:text-5xl tracking-widest text-center lg:text-start ">
              Interested in working together ? Let’s talk
              <ArrowRightIcon className="hidden lg:inline  w-20 h-20 text-blue-700  ml-3" />
              <ArrowDownIcon className=" inline lg:hidden w-10 h-10 text-blue-700  ml-3" />
            </h1>
          </div>
        </div>

      
       <form
      onSubmit={handleSubmit}
      className=" flex flex-col lg:w-1/3 sm:p-10 sm:px-30 md:p-0 space-y-10"
    >
      <div className="transition-all duration-900 hover:border-white border-b border-gray-500">
        <input
          required
          type="text"
          className="w-full pb-10 lg:placeholder:text-lg xl:placeholder:text-2xl placeholder:text-white outline-none text-lg xl:text-2xl "
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
      </div>
      <div className="transition-all duration-300 hover:border-white border-b border-gray-500">
        <input
          required
          type="e-mail"
          className="w-full pb-10 lg:placeholder:text-lg xl:placeholder:text-2xl placeholder:text-white outline-none  "
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
        />
      </div>
      <div className="transition-all duration-300 hover:border-white border-b border-gray-500">
        <textarea
          required
          className=" resize-none w-full pb-10 lg:placeholder:text-lg xl:placeholder:text-2xl placeholder:text-white outline-none"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder=" Describe your project"
        />
      </div>
      <div className="flex space-x-5">
        <div className="group flex space-x-2 p-2 d mt-5 ">
          <button
            type="submit"
            className="flex items-center lg:placeholder:text-lg xl:placeholder:text-2xl cursor-pointer"
          >
            <p className="border-b border-gray-500 transition-all duration-300 group-hover:border-white">
              Contact me
            </p>
            <ArrowRightIcon className="w-8 transition-all duration-300 group-hover:ml-4 ml-2" />
          </button>
        </div>
        {loading && (
          <p className="flex justify-center items-center mt-5 ">
            <span className="w-4 h-4 mr-2 border-2 border-t-transparent border-blue-500 rounded-full animate-spin"></span>
            Sending...
          </p>
        )}
      </div>
    </form>
    
    
    </div>
     
  
    


     
     </>

    
  );
}
