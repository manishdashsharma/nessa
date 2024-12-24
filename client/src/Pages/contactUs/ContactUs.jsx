import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Navbar from "../../components/header/Navbar";
import { FaLocationDot, FaSquareFacebook } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import styled from "styled-components";

const StyleWrapper = styled.div`
  input[type="file"]::file-selector-button {
    height: 40px;
    background-color: ;
    padding-right: 30px;
    padding-left: 20px;
    border: none;
    cursor: pointer;
  }
`;

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
    phone: "",
    subject: "General Inquiry",
    file: null,
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full Name is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(formData.email)
    ) {
      newErrors.email = "Invalid email address.";
    }
    if (!formData.phone) {
      newErrors.phone = "Phone Number is required.";
    } else if (!/^[0-9]+$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number.";
    }
    if (!formData.message) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      file: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      alert("Message sent successfully!");
      console.log(formData); //  remove latter
      setFormData({
        fullName: "",
        email: "",
        companyName: "",
        phone: "",
        subject: "General Inquiry",
        file: null,
        message: "",
      });
    }
  };

  return (
    <StyleWrapper>
      <div className="w-full overflow-hidden">
        <Navbar />

        <div className="w-full h-[300px] max-sm:h-[200px] relative flex items-center  justify-center ">
          <img
            className="w-full h-full object-cover absolute  "
            src="/images/solutionsImages/airportpageposter.png"
            alt=""
          />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white  relative z-[2]">
            Contact Us
          </h1>
        </div>

        <div className="flex max-md:flex-col relative p-[5vw] gap-6">
          <div className="absolute w-[250px] h-[250px] bg-[var(--light-blue)] opacity-30 right-[-70px] top-[-30px]   rounded-full z-[-1]"></div>

          {/* Left Section */}
          <div className="w-1/2 relative overflow-hidden max-md:w-full p-[10px]  text-white  rounded-lg shadow-lg">
            <div className="w-full min-h-[150px] bg-blue-500 rounded-lg p-[30px]">
              <h1 className="text-4xl font-semibold">Headquater Address</h1>
              <div className="flex items-center justify-center mt-5  gap-10">
                <FaLocationDot className="w-6 h-6" />
                <h1>
                  36-A, Devraj Industrial Park, Pipalaj-Pirana Road,
                  Ahmedabad-382405, Gujarat, India.
                </h1>
              </div>
            </div>
            <div className="flex justify-between mt-5 text-black  gap-5">
              <div className="w-1/2 min-h-[100px] p-[20px] bg-blue-300 rounded-lg">
                <h1 className="font-semibold text-lg mb-2">Domestic inquiry</h1>
                <div className="flex items-center gap-2">
                  <MdCall />
                  <h1>+91-9375279778 / 8690779778</h1>
                </div>
                <div className="flex items-center gap-2">
                  <MdEmail />
                  <h1>sales@nessa.in</h1>
                </div>
              </div>
              <div className="w-1/2 min-h-[100px] p-[20px] bg-blue-300 rounded-lg">
                <h1 className="font-semibold text-lg mb-2">
                  International inquiry
                </h1>
                <div className="flex items-center gap-2">
                  <MdCall />
                  <h1>+91-9375279778</h1>
                </div>
                <div className="flex items-center gap-2">
                  <MdEmail />
                  <h1>sales@nessa.in</h1>
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-5 text-black  gap-5">
              <div className="w-1/2 min-h-[100px] p-[20px] bg-blue-300 rounded-lg">
                <h1 className="font-semibold text-lg mb-2">Service inquiry</h1>
                <div className="flex items-center gap-2">
                  <MdCall />
                  <h1>+91-9375279778</h1>
                </div>
                <div className="flex items-center gap-2">
                  <MdEmail />
                  <h1>sales@nessa.in</h1>
                </div>
              </div>
              <div className="w-1/2 min-h-[100px] p-[20px] bg-blue-300 rounded-lg">
                <h1 className="font-semibold text-lg mb-2">Career inquiry</h1>
                <div className="flex items-center gap-2">
                  <MdCall />
                  <h1>+91-9375279778</h1>
                </div>
                <div className="flex items-center gap-2">
                  <MdEmail />
                  <h1>sales@nessa.in</h1>
                </div>
              </div>
            </div>
            <div className="w-full mt-5 flex flex-col text-black items-center justify-center  min-h-[100px] p-[20px] bg-blue-300 rounded-lg">
              <h1 className="font-semibold text-lg mb-2">CSR inquiry</h1>
              <div className="flex items-center gap-2">
                <MdCall />
                <h1>+91-9375279778</h1>
              </div>
              <div className="flex items-center gap-2">
                <MdEmail />
                <h1>sales@nessa.in</h1>
              </div>
            </div>
            <div className=" w-[200px] h-[200px] z-[-1] rounded-full bg-yellow-400 absolute left-[-20px] bottom-[-80px] "></div>
            <div className="w-[100px] z-[-2] h-[100px] bg-yellow-200 opacity-80 absolute left-[100px] bottom-[50px]  rounded-full"></div>

            <div className="w-full  text-black min-h-[100px]  mt-5 flex items-end justify-end gap-5 p-[20px] text-3xl  rounded-lg">
              <AiFillInstagram />
              <FaSquareXTwitter />
              <FaDiscord />
              <FaSquareFacebook />
            </div>
          </div>

          {/* Right Section */}
          <form
            className="w-1/2 max-md:w-full bg-white px-[20px] py-[40px]  rounded-lg shadow-lg"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <label className="block text-gray-700  ">Full Name</label>
                <input
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className={`w-full p-2 border-b-2 font-semibold outline-none focus:border-blue-800  ${
                    errors.fullName ? "border-red-500" : "border-gray-500"
                  } rounded`}
                />
                {errors.fullName && (
                  <span className="text-red-500 text-sm">
                    {errors.fullName}
                  </span>
                )}
              </div>
              <div>
                <label className="block text-gray-700  ">Email ID</label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full p-2 border-b-2 font-semibold outline-none focus:border-blue-800   ${
                    errors.email ? "border-red-500" : "border-gray-500"
                  } rounded`}
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">{errors.email}</span>
                )}
              </div>
              <div>
                <label className="block text-gray-700  ">Company Name</label>
                <input
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className="w-full p-2 border-b-2 font-semibold outline-none focus:border-blue-800  border-gray-500 rounded"
                />
              </div>
              <div>
                <label className="block text-gray-700  ">Phone Number</label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full p-2 border-b-2 font-semibold outline-none focus:border-blue-800  ${
                    errors.phone ? "border-red-500" : "border-gray-500"
                  } rounded`}
                />
                {errors.phone && (
                  <span className="text-red-500 text-sm">{errors.phone}</span>
                )}
              </div>
            </div>

            <div className="mt-10">
              <label className="block text-gray-700 mb-2  ">
                Select Subject
              </label>
              {[
                "General Inquiry",
                "Domestic Inquiry",
                "Service Inquiry",
                "International Inquiry",
                "CSR Inquiry",
                "Career Inquiry",
              ].map((subject, index) => (
                <label
                  key={index}
                  className="inline-flex items-center mr-6 mb-4 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="subject"
                    value={subject}
                    checked={formData.subject === subject}
                    onChange={handleInputChange}
                    className="form-radio cursor-pointer"
                  />
                  <span className="ml-2">{subject}</span>
                </label>
              ))}
            </div>

            <div className="mt-6">
              <label className="block text-gray-700 mb-2 ">File Upload</label>
              <input
                type="file"
                onChange={(e) => {
                  if (e.target.files[0].size > 1000000) {
                    e.target.value = null;
                    alert("File size exceeds 100KB.");
                  } else {
                    handleFileChange(e);
                  }
                }}
                className="w-fit h-[40px] border    border-gray-500 rounded"
              />
            </div>

            <div className="mt-10">
              <label className="block text-gray-700  ">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className={`w-full p-2 border-b-2 font-semibold outline-none focus:border-blue-800 h-[50px] max-h-[100px] ${
                  errors.message ? "border-red-500" : "border-gray-500"
                } rounded`}
              ></textarea>
              {errors.message && (
                <span className="text-red-500 text-sm">{errors.message}</span>
              )}
            </div>

            <div className="w-full flex justify-end">
              <button
                type="submit"
                className="mt-10 bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        <div className="w-full h-[400px] ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7348.649409568016!2d72.54749124151411!3d22.938265850794643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e859f9e9ee219%3A0x4762594d909ba9f2!2sNessa%20Illumination%20Technologies%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1734817362201!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </StyleWrapper>
  );
};

export default ContactUs;
