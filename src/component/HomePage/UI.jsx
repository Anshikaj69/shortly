import React from "react";
import { useEffect, useState } from "react";
import "./style.css";
import logo from "../../images/logo.svg";
import bluedash from "../../images/blue-dash.png";
import brand from "../../images/icon-brand-recognition.svg";
import detailed from "../../images/icon-detailed-records.svg";
import facebook from "../../images/icon-facebook.svg";
import fully from "../../images/icon-fully-customizable.svg";
import instagram from "../../images/icon-instagram.svg";
import pinterest from "../../images/icon-pinterest.svg";
import twitter from "../../images/icon-twitter.svg";
import working from "../../images/illustration-working.svg";
import LayButton from "./LayButton";

import axios from "axios";

// const getLocalStorage = () => {
//   let links = localStorage.getItem("links");

//   if (links) {
//     return JSON.parse(localStorage.getItem("links"));
//   } else {
//     return [];
//   }
// };

const LocalStorageCopy =(getLocalStorage) =>{
 const linksArray=getLocalStorage();
 useEffect(() => {
  localStorage.setItem("linksArray", JSON.stringify(linksArray));
}, [linksArray]); 
}

function UI() {
  const [text, setText] = useState("");
  const [links, setLinks] = useState([]);



  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!text) {
      alert("Input is Empty");
    } else {
       
      const options = {
        method: 'GET',
        url: 'https://super-url-shortener.p.rapidapi.com/shorten-url',
        params: {
          url: `https://${text}`,
        },
        headers: {
          'X-RapidAPI-Key': '1bdbd312b5msh442de240d8b1d80p1050e7jsn7e6f6b3fb9d4',
          'X-RapidAPI-Host': 'super-url-shortener.p.rapidapi.com'
        }
      };
      
      try {
        const response = await axios.request(options);
       
       const test=text
       console.log(response.data);
       console.log(test)
       if(response.data.success===false) {
        alert("Invalid URL");
        console.log("invalid");
    }
       else {
         
          const resobj = response.data;
          console.log(resobj);
        additems(resobj);
        setText("");
        } 
      } catch (error) {
        console.error(error);
      }
      }
    }
  

  useEffect(() => {
    localStorage.setItem("links", JSON.stringify(links));
  }, [links]);

  const additems = (resobj) => {
    setLinks([resobj,...links]);
  };
  
  console.log(links)
  

  return (
    <div onload={LocalStorageCopy}>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* displays site properly based on user's device */}
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="./images/favicon-32x32.png"
      />
      <link rel="stylesheet" href="/css/style.css" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&family=Roboto:wght@300&display=swap"
        rel="stylesheet"
      />
      <title>Shortly URL shortening API </title>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n    .attribution {\n      font-size: 11px;\n      text-align: center;\n    }\n\n    .attribution a {\n      color: hsl(228, 45%, 44%);\n    }\n  ",
        }}
      />
      <div className="hero relative items-center justify-between">
        <div className="hero__section__container mx-20 mt-6 mb-44 gap-8">
          <header>
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="navigation__links">
              <nav>Features</nav>
              <nav>Pricing</nav>
              <nav>Resources</nav>
            </div>
            <div className="login__signup">
              <nav>Login</nav>
              <button>Sign Up</button>
            </div>
          </header>
          <div className="hero__section">
            <div className="hero__section__text">
              <h1>More than just shorter links</h1>
              <h6>
                Build your brand's recognition and get detailed insights on how
                your links are performing.
              </h6>
              <button className="get-started">Get Started</button>
            </div>
            <div className="hero__section__image">
              <img src={working} alt="img" />
            </div>
          </div>
        </div>
        {/* shortner*/}
        <form className="form" onSubmit={handleSubmit}>
          <div className=" w-4/5 rounded-md absolute -bottom-244 left-106 flex flex-row z-10 bg-[#3B3054] items-center p-10 gap-2 justify-around">
            <input
              type="url"
              placeholder="Enter your link here.."
              className="rounded-md  p-3 w-82 "
              id="input_link"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button
              type="submit"
              method="post"
              className=" p-3 rounded-md w-1/5 bg-given text-white"
              onClick={handleSubmit}
              id="submit_btn"
            >
              Shorten It!
            </button>
          </div>
        </form>
      </div>

      {/*Advanced statistics with tailwind*/}
      <div className="bg-gray-200 ">
        <div className=" p-24 flex flex-col items-center ">
          {/* links */}

          {links.reverse().map((links) => (
            <div className="flex flex-row m-2 w-3/4 p-2 items-center bg-white justify-between" >
              <article>
                <h6>{links.originalUrl}</h6>
              </article>
              <article className="flex flex-row gap-4">
                <button className=" text-cyan-400">
                  {links.shortUrl}
                </button>
                {/* <LayButton copy ={
                  () => {navigator.clipboard.writeText(links.full_short_link);
                  console.log("Copied" , links.full_short_link)}
                } unCopy = {
                  ()=>{
                  navigator.clipboard.writeText("")
                  console.log("uncopied")
                  }
                }>
                  Copy
                </LayButton> */}
                <LayButton  
                onCopy={
                  ()=>{
                  navigator.clipboard.writeText(links.shortUrl);
                  console.log("copied" , links.shortUrl)
                  }} 
                  onUnCopy={()=>{
                  navigator.clipboard.writeText("");
                  console.log("UnCopied")}}>
                    Copy</LayButton>
                {/* <button
                  className="w-full p-1 rounded-md bg-given text-white focus:bg-slate-200"
                  value="Copy"
                  onClick={() => {
                    setButtonText("Copied!");
                    navigator.clipboard.writeText(links.full_short_link);
                  }}
                >
                  {buttonText}
                </button> */}
              </article>
            </div>
          ))}

          <div className="m-24 gap-4 flex flex-col items-center advanced">
            <h1 className="font-bold text-4xl">Advanced Statistics</h1>
            <h6 className="w-3/4 font-normal text-center text-gray-400">
              Track how your links are performing across the web with our
              advanced statistics dashboard.
            </h6>
          </div>
          <div className="flex flex-row gap-4 h-full p-3 justify-between ">
            <div className="bg-white rounded-md flex flex-col gap-4 items-start pt-16 pb-9 px-8 text-left relative w-30 mb-20">
              <h5 className="font-bold text-xl">Brand Recognition</h5>
              <p className="text-gray-400">
                Boost your brand recognition with each click. Generic links
                don't mean a thing. Branded links help instil confidence in your
                content.
              </p>
              <div className="absolute -top-8 left-7 rounded-full bg-[#3B3054] p-4">
                <img src={brand} alt="img" />
              </div>
              <img
                className="absolute top-67 -right-66 w-24 h-152"
                src={bluedash}
                alt=""
              />
            </div>
            <div className="bg-white rounded-md flex  flex-col gap-4 items-start pt-16 pb-9 px-8 text-left relative w-30 mt-10 mb-10">
              <h5 className="font-bold text-xl">Detailed Records</h5>
              <p className="text-gray-400">
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </p>
              <div className="absolute -top-8 left-7 rounded-full bg-[#3B3054] p-4">
                <img src={detailed} alt="img" />
              </div>
              <img
                className="absolute top-67 -right-66 w-24 h-152"
                src={bluedash}
                alt=""
              />
            </div>
            <div className="bg-white rounded-md flex flex-col gap-4 items-start pt-16 pb-9 px-8 text-left relative w-30 mt-20">
              <h5 className="font-bold text-xl">Fully Customizable</h5>
              <p className="text-gray-400">
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
              <div className="absolute -top-8 left-7 rounded-full bg-[#3B3054] p-4">
                <img src={fully} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* boost*/}
      <div className=" flex flex-col justify-center items-center gap-5 p-10 bg-[#3B3054]">
        <h1 className="font-bold text-4xl text-white">
          Boost Your Links Today
        </h1>
        <button className="rounded-full text-white bg-teal-400 p-3 w-1/5">
          Get Started
        </button>
      </div>
      {/*footer*/}
      <div className="bg-[#232127]">
        <div className="grid grid-cols-6 mx-24 py-10  gap-4">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div>
            <span> </span>
          </div>
          <div className="flex flex-col">
            <h3 className="mb-3 text-white">Features</h3>
            <h6 className="text-gray-400">Link Shortening</h6>
            <h6 className="text-gray-400">Branded Links</h6>
            <h6 className="text-gray-400">Analytics</h6>
          </div>
          <div className="flex flex-col">
            <h3>Resources</h3>
            <h6>Blog</h6>
            <h6>Developers</h6>
            <h6>Support</h6>
          </div>
          <div className="flex flex-col">
            <h3>Company</h3>
            <h6>About</h6>
            <h6>Our team</h6>
            <h6>Careers</h6>
            <h6>Contact</h6>
          </div>
          <div className="flex flex-row gap-2">
            <img src={facebook} className="h-5 w-5" alt="logo" />
            <img src={twitter} className="h-5 w-5" alt="logo" />
            <img src={pinterest} className="h-5 w-5" alt="logo" />
            <img src={instagram} className="h-5 w-5" alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UI;