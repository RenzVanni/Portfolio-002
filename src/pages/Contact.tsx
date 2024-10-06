import { Link } from "react-router-dom";
import { HOME } from "../constants/Slugs";
import { IoArrowBackOutline } from "react-icons/io5";
import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

type Prop = {
  name: string;
  email: string;
  subject: string;
  content: string;
};

const Contact = () => {
  const [data, setData] = useState<Prop>({
    name: "",
    email: "",
    subject: "",
    content: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    const { name, email, subject, content } = data;
    if (name && email && subject && content) {
      try {
        await axios
          .post(`${import.meta.env.VITE_DOMAIN}`, {
            email,
            name,
            subject,
            content,
          })
          .then((res) => {
            if (res.data) {
              console.log(res.data);
              toast("Message Sent!");
              setData({ name: "", email: "", subject: "", content: "" });
            }
          })
          .catch((err) => {
            toast.error(err.message);
            throw new Error(err.message);
          });
      } catch (error: any) {
        console.log(error.message);
        throw new Error(error.message);
      }
    }
  };
  return (
    <div className="w-full overflow-y-scroll flex flex-col-reverse lg:flex-row lg:flex-1 lg:overflow-y-hidden">
      <div className="w-full p-3 lg:flex-1 lg:flex lg:flex-col lg:p-10">
        <div className="mb-6 hidden lg:block">
          <Link to={HOME}>
            <IoArrowBackOutline className="text-2xl" />
          </Link>
        </div>

        <p className="font-bold text-3xl mb-6">Contact Me</p>
        <div className="flex-1">
          <form
            action=""
            onSubmit={handleSubmit}
            className="flex flex-col flex-1 "
          >
            <div className="flex flex-col md:flex-row md:space-x-2">
              <div className="relative md:mb-10">
                <input
                  type="text"
                  id="inputField"
                  className="peer h-10 w-full bg-transparent border-b-2 border-border placeholder-transparent outline-none mb-3 "
                  placeholder="Enter text"
                  value={data.name}
                  onChange={(e) =>
                    setData((prev) => ({ ...prev, name: e.target.value }))
                  }
                />
                <label
                  // for="inputField"
                  className="absolute left-0 -top-3.5 text-sm transition-all transform peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-2 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:left-0 peer-focus:text-[12px] "
                >
                  Your Name
                </label>
              </div>
              <div className="relative flex-1">
                <input
                  type="text"
                  id="inputField"
                  className="peer h-10 w-full bg-transparent border-b-2 border-border placeholder-transparent outline-none mb-3"
                  placeholder="Enter text"
                  value={data.email}
                  onChange={(e) =>
                    setData((prev) => ({ ...prev, email: e.target.value }))
                  }
                />
                <label
                  // for="inputField"
                  className="absolute left-0 -top-3.5 text-sm transition-all transform peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-2 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:left-0 peer-focus:text-[12px] "
                >
                  Your Email
                </label>
              </div>
            </div>
            <div className="relative mb-10 ">
              <input
                type="text"
                id="inputField"
                className="peer h-10 w-full bg-transparent border-b-2 border-border placeholder-transparent outline-none"
                placeholder="Enter text"
                value={data.subject}
                onChange={(e) =>
                  setData((prev) => ({ ...prev, subject: e.target.value }))
                }
              />
              <label
                // for="inputField"
                className="absolute left-0 -top-3.5 text-sm transition-all transform peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-2 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:left-0 peer-focus:text-[12px] "
              >
                Your Subject
              </label>
            </div>
            <div className="flex flex-col h-[150px]">
              <label htmlFor="">Message</label>
              <textarea
                name=""
                id=""
                className=" h-full resize-none border-b-2 border-border bg-transparent outline-none mb-6"
                value={data.content}
                onChange={(e) =>
                  setData((prev) => ({ ...prev, content: e.target.value }))
                }
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-border text-primary font-semibold rounded-md py-2"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="bg-background2 p-3 lg:flex lg:w-2/4">
        <div className="h-full lg:h-5/5 shadow-2xl mb-6">
          <img
            src="/images/cat.jpg"
            alt="img"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Contact;
