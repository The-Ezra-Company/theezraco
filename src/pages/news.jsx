import { COMPANY_NAME, navigation, ui } from "../config.js";
import { FaMailBulk } from "react-icons/fa";
import NavBar from "../components/navbar";

export default function NewsPage() {
  const items = Array.from({ length: 14 }, (_, i) => `Item ${i + 1}`);

  return (
    <div className="w-full">
      {/* Navbar */}
      <div className="fixed top-0 left-0 z-100 w-full">
        <NavBar />
      </div>

      <div className="h-full w-full bg-black pt-[15vh]">
        {/* Header */}
        <div className="flex items-center justify-center text-[24px] text-white">
          <FaMailBulk className="mt-[6px] mr-[12px] text-[32px] md:text-[192px]" />
          <div className="roboto-bold-italic ml-[64px] text-[192px] tracking-[-0.1em] text-white">
            {COMPANY_NAME}
          </div>
          <div className="mb-[28px] ml-[40px] text-[200px]">News</div>
        </div>

        {/* News Articles */}
        <div className="mx-auto grid max-w-7xl grid-cols-3 gap-4 p-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="rounded-lg bg-blue-500 p-4 text-center text-white"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
