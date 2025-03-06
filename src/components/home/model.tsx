"use client";
import { FaInstagram, FaTwitter } from "react-icons/fa";

export const Bannerlist = [
  {
    title: "Less but better",
    subTitle:
      "This simple phrase is one of our guiding principles. Focus on the most important elements of each garment and let go of everything superfluous.",
    position: "justify-start",
    textAlign: "text-left",
    img: "/banner.jpg",
  },
  {
    title: "Less harm",
    subTitle:
      "We’re continually pushing to reduce our footprint by choosing recycled or natural fibres and non-toxic natural dye processes.",
    position: "justify-start",
    textAlign: "text-left",
    img: "/banner.jpg",
  },
  {
    title: "Be responsible",
    subTitle:
      "As a small growing company, it’s not always easy, but we will always seek the most socially responsible manufacturing options.",
    position: "justify-center",
    textAlign: "text-center",
    img: "/banner.jpg",
  },
  {
    title: "Timeless style",
    subTitle:
      "We are the opposite of fast fashion. We take a thoughtful approach to the entire lifecycle of our products.",
    position: "justify-end",
    textAlign: "text-right",
    img: "/banner.jpg",
  },
];

export const CarouselText = [
  {
    icon: <FaInstagram size={40} />,
    title: `"Oh man! I am so happy with my new garms. Well made, responsibly sourced and a great fit too. I shall be back next payday for more!"`,
    subTitle: "Jimmy Gilzean",
    tag: "Instagram",
  },
  {
    icon: <FaInstagram size={40} />,
    title: `"Always a great day when I get a new package from Morning Apparel. My new backpack is stunning. Thanks guys, you totally rock!"`,
    subTitle: "Linda Knight",
    tag: "Instagram",
  },
  {
    icon: <FaTwitter size={40} />,
    title: `"I must say your customer service is really excellent. No quibbles when I ordered the wrong size. Easy and painless to return and replace. Thanks!"`,
    subTitle: "Brett Robinson",
    tag: "Twitter",
  },
];
