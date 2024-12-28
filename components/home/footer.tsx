import React from "react";
import MaxWidthContainer from "../layouts/max-width-container";

const Footer = () => {
  return (
    <MaxWidthContainer className="md:py-10 py-10 border-t">
      <div className="grid grid-cols-1 gap-20 md:grid-cols-2">
        <div>
          <h1 className="font-bold text-2xl">SAHAJ YATRA</h1>
          <p className="text-sm">A product by Pramis Gurung</p>
        </div>
        <SocialsTechUsed />
        <BottomFooter />
      </div>
    </MaxWidthContainer>
  );
};

const SocialsTechUsed = () => {
  return (
    <div className="flex gap-12 md:justify-end">
      <div className="flex flex-col space-y-2">
        <h3 className="font-bold">Socials</h3>
        <a>Facebook</a>
        <a>Instagraam</a>
      </div>
      <div className="flex flex-col space-y-2">
        <h3 className="font-bold">Socials</h3>
        <a>Facebook</a>
        <a>Instagraam</a>
        <a>Githhub</a>
        <a>LinkedIn</a>
      </div>
      <div className="flex flex-col space-y-2">
        <h3 className="font-bold">Socials</h3>
        <a>Facebook</a>
        <a>Instagraam</a>
      </div>
    </div>
  );
};

const BottomFooter = () => {
  return (
    <div className="flex justify-between">
      <div>Made with ❤️ by Pramis</div>
    </div>
  );
};

export default Footer;
