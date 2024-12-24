import React, { useState } from "react";
import Navbar from "../../components/header/Navbar";
import { MdCall, MdEmail } from "react-icons/md";
import { nessaServices } from "./SupportConfig";
import styled from "styled-components";

const StyleWrapper = styled.div`
  input[type="file"]::file-selector-button {
    height: 40px;
    padding-right: 30px;
    padding-left: 20px;
    border: none;
    cursor: pointer;
  }
`;

const Support = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
    phone: "",
    productName: "",
    productSkuId: "",
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
    if (!formData.productName) newErrors.productName = "Product Name is required.";
    if (!formData.productSkuId) newErrors.productSkuId = "Product SKU Id is required.";
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
      console.log(formData);
      setFormData({
        fullName: "",
        email: "",
        companyName: "",
        phone: "",
        productName: "",
        productSkuId: "",
        file: null,
        message: "",
      });
    }
  };

  return (
    <StyleWrapper>
      <div className="w-full overflow-hidden">
        <Navbar />

        <div className="w-full h-[300px] max-sm:h-[200px] relative flex items-center justify-center">
          <img
            className="w-full h-full object-cover absolute"
            src="/images/solutionsImages/airportpageposter.png"
            alt=""
          />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white relative z-[2]">
            Support
          </h1>
        </div>

        <div className="flex max-md:flex-col relative p-[5vw] gap-6">
          <div className="absolute w-[250px] h-[250px] bg-[var(--light-blue)] opacity-30 right-[-70px] top-[-30px]   rounded-full z-[-1]"></div>


          {/* Form Section */}
          <form
            className="w-1/2 max-md:w-full relative bg-white px-[20px] py-[40px] rounded-lg shadow-lg"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <label className="block text-gray-700">Full Name</label>
                <input
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className={`w-full p-2 border-b-2 font-semibold outline-none focus:border-blue-800 ${
                    errors.fullName ? "border-red-500" : "border-gray-500"
                  } rounded`}
                />
                {errors.fullName && (
                  <span className="text-red-500 text-sm">{errors.fullName}</span>
                )}
              </div>
              <div>
                <label className="block text-gray-700">Email ID</label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full p-2 border-b-2 font-semibold outline-none focus:border-blue-800 ${
                    errors.email ? "border-red-500" : "border-gray-500"
                  } rounded`}
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">{errors.email}</span>
                )}
              </div>
              <div>
                <label className="block text-gray-700">Company Name</label>
                <input
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className="w-full p-2 border-b-2 font-semibold outline-none focus:border-blue-800 border-gray-500 rounded"
                />
              </div>
              <div>
                <label className="block text-gray-700">Phone Number</label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full p-2 border-b-2 font-semibold outline-none focus:border-blue-800 ${
                    errors.phone ? "border-red-500" : "border-gray-500"
                  } rounded`}
                />
                {errors.phone && (
                  <span className="text-red-500 text-sm">{errors.phone}</span>
                )}
              </div>
              <div>
                <label className="block text-gray-700">Product Name</label>
                <input
                  name="productName"
                  value={formData.productName}
                  onChange={handleInputChange}
                  className={`w-full p-2 border-b-2 font-semibold outline-none focus:border-blue-800 ${
                    errors.productName ? "border-red-500" : "border-gray-500"
                  } rounded`}
                />
                {errors.productName && (
                  <span className="text-red-500 text-sm">{errors.productName}</span>
                )}
              </div>
              <div>
                <label className="block text-gray-700">Product SKU ID</label>
                <input
                  name="productSkuId"
                  value={formData.productSkuId}
                  onChange={handleInputChange}
                  className={`w-full p-2 border-b-2 font-semibold outline-none focus:border-blue-800 ${
                    errors.productSkuId ? "border-red-500" : "border-gray-500"
                  } rounded`}
                />
                {errors.productSkuId && (
                  <span className="text-red-500 text-sm">{errors.productSkuId}</span>
                )}
              </div>
            </div>

            <div className="mt-10">
              <label className="block text-gray-700 mb-2">File Upload</label>
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
                className="w-fit h-[40px] border border-gray-500 rounded"
              />
            </div>

            <div className="mt-10">
              <label className="block text-gray-700">Message</label>
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

          {/* Right Section */}
        <div className="w-1/2 max-md:w-full relative bg-white  rounded-lg shadow-lg p-6">
          <div className=" text-4xl font-semibold leading-snug  text-black z-[2] relative">
            Register
            <span className="text-blue-500"> complain</span> and we will contact
            you!!!
          </div>
          <div className="w-full min-h-[100px] p-[20px] rounded-lg">
            <div className="flex items-center mb-2 gap-2">
              <h1>Phone Support</h1>
            </div>
            <div className="flex items-center gap-2">
              <MdCall />
              <h1>+91-9375279778</h1>
            </div>
          </div>
          <div className="w-full min-h-[100px] p-[20px] rounded-lg">
            <div className="flex items-center mb-2 gap-2">
              <h1>Email Support</h1>
            </div>
            <div className="flex items-center gap-2">
              <MdEmail />
              <h1>services@nessa.in</h1>
            </div>
          </div>
          <div className="w-full absolute z-[0] left-0 bottom-0 flex items-end justify-end">
            <img
              className="h-[50%] w-[50%]"
              src="/images/supportImages/light.png"
              alt=""
            />
          </div>
        </div>
      </div>

        {/* Manuals download section */}
        <div className="flex max-md:flex-col max-md: justify-between px-[5vw] py-[50px] mb-[50px] bg-[var(--light-blue)]">
          <div className="w-[60%] max-md:w-full">
            <div className="text-4xl font-semibold leading-snug text-black z-[2] relative">
              <span className="text-blue-500">Manuals</span> Download
            </div>
            <div className="relative mt-7 text-xl mb-4 leading-8 text-zinc-900 max-md:max-w-full">
              Want to study details about our products. Download our Manual and
              know all that you require to be expertise for the light repairing.
            </div>
            <div className="bg-blue-500 w-[250px] text-center py-[10px] mt-[20px] rounded-md text-white">
              Download Manuals
            </div>
          </div>
          <div className="w-[30%] max-md:w-full max-md:mt-[50px] h-[200px] flex items-center justify-center">
            <img
              className="w-full h-full object-contain"
              src="/images/supportImages/manual.png"
              alt=""
            />
          </div>
        </div>

        {/* Nessa Services section */}
        <div className="w-full py-[50px] my-[50px]">
          <div className="text-4xl font-semibold leading-snug text-center text-black z-[2] relative">
            Nessa <span className="text-blue-500">Services</span>
          </div>
          <div className="w-full flex justify-center">
            <div className="flex relative shrink-0 mt-9 h-2.5 bg-[#b3d6f6] rounded-[50px] w-[51px]" />
          </div>
          <div className="grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 px-[5vw] mt-[50px] gap-20 justify-items-center">
            {nessaServices.map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-5">
                <img className="w-[80px] h-[80px]" src={item.img} alt="" />
                <h1 className="text-xl text-center">{item.title}</h1>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7348.649409568016!2d72.54749124151411!3d22.938265850794643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e859f9e9ee219%3A0x4762594d909ba9f2!2sNessa%20Illumination%20Technologies%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1734817362201!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </StyleWrapper>
  );
};

export default Support;