import { COMPANY_NAME } from "../config.js";
import { FaMailBulk } from "react-icons/fa";
import NavBar from "../components/navbar";
import NewsPreview from "../components/news/NewsPreview.jsx";

export default function NewsPage() {
  const LOREM_IPSUM_LONG =
    "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.";

  const items = [
    { title: "Breaking News", text: LOREM_IPSUM_LONG },
    {
      title: "Tech Update",
      text: "Latest developments in the tech world are shaking things up. Stay tuned for more!",
    },
    {
      title: "Space Exploration",
      text: "NASA announces new missions to explore the outer reaches of our solar system.",
    },
    { title: "Breaking News", text: LOREM_IPSUM_LONG },
    {
      title: "Tech Update",
      text: "Latest developments in the tech world are shaking things up. Stay tuned for more!",
    },
    {
      title: "Space Exploration",
      text: "NASA announces new missions to explore the outer reaches of our solar system.",
    },
  ];

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat text-white relative"
      style={{
        backgroundImage:
          "url('https://plus.unsplash.com/premium_photo-1676464927572-045026d2a4bd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      {/* Optional: dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Page Content */}
      <div className="relative z-10">
        {/* Navbar */}
        <div className="fixed top-0 left-0 z-100 w-full">
          <NavBar />
        </div>

        {/* Main Content */}
        <div className="pt-[15vh] md:pt-[16vh] lg:pt-[20vh] flex flex-col items-center">
          {/* Header */}
          <div className="flex flex-wrap items-center justify-center text-[24px] md:text-[192px]">
            <FaMailBulk className="mt-[4px] md:mt-[6px] mr-[12px] text-[48px] md:text-[120px] lg:text-[192px]" />
            <div className="roboto-bold-italic text-[48px] tracking-[-0.1em] md:ml-[24px] lg:ml-[64px] md:text-[96px] lg:text-[136px]">
              {COMPANY_NAME}
            </div>
            <div className="inter-normal ml-[8px] text-[48px] md:ml-[24px] lg:ml-[24px] md:text-[96px] lg:text-[128px]">
              News
            </div>
          </div>

          {/* News Grid */}
          <div className="mx-auto mt-[4vh] md:mt-[5vh] lg:mt-[7vh] grid max-w-7xl grid-cols-1 gap-[32px] py-4 px-8 md:grid-cols-2 xl:grid-cols-3">
            {items.map((item, index) => (
              <NewsPreview key={index} title={item.title} text={item.text} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
