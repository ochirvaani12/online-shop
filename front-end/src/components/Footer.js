import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <div className="w-full flex h-48 mt-10">
      <div className=" w-48 m-4" style={{ marginLeft: "10%" }}>
        <div className="text-xl mb-3">Тусламж</div>
        <div className="text-[#BBBBBB]">Хэрэглэх заавар</div>
        <div className="text-[#BBBBBB]">Үйлчилгээны нөхцөл</div>
      </div>
      <div className="w-48 m-4">
        <div className="text-xl mb-3">Холбоо барих</div>
        <div className="text-[#BBBBBB]">Утас: 99913414</div>
        <div className="text-[#BBBBBB]">
          <EmailIcon /> Shop.mn
        </div>
      </div>
      <div className="w-48 m-4">
        <div className="text-xl mb-3">Холбоосууд</div>
        <div className="text-[#BBBBBB]">
          <FacebookIcon />
        </div>
        <div className="text-[#BBBBBB]">
          <InstagramIcon />
        </div>
        <div className="text-[#BBBBBB]">
          <YouTubeIcon />
        </div>
      </div>
    </div>
  );
};

export default Footer;
