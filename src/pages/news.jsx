import { COMPANY_NAME } from "../config.js";
import { FaMailBulk } from "react-icons/fa";
import { Link } from "react-router-dom";
import { news_items } from "../utils/news_list.jsx";
import NavBar from "../components/navbar";
import NewsCard from "../components/news/NewsCard.jsx";

export default function NewsPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden text-white">
      {/* Background Layer */}
      <div className="absolute inset-0">
        {/* Base Color*/}
        <div className="absolute inset-0 bg-slate-800" />

        {/* Image Overlay With Fade to Transparent */}
        <div
          className="absolute top-0 left-0 h-[110vh] w-full bg-cover bg-top bg-no-repeat"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1549880181-56a44cf4a9a5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
            maskImage:
              "linear-gradient(to bottom, black 5%, rgba(0,0,0,0.7) 65%, rgba(0,0,0,0.3) 80%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 5%, rgba(0,0,0,0.7) 65%, rgba(0,0,0,0.3) 80%, transparent 100%)",
          }}
        />

        <div
          className="pointer-events-none absolute top-[35vh] left-0 h-[100vh] w-full backdrop-blur-3xl md:h-[75vh]"
          style={{
            maskImage: "linear-gradient(to top, black 0%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to top, black 0%, transparent 100%)",
          }}
        />

        {/* Dark Tint */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Page Content */}
      <div className="relative z-10">
        {/* Navbar */}
        <div className="fixed top-0 left-0 z-50 w-full">
          <NavBar />
        </div>

        {/* Main Content */}
        <div className="flex flex-col items-center pt-[15vh] md:pt-[16vh] lg:pt-[20vh]">
          {/* Header */}
          <div className="flex flex-wrap items-center justify-center text-[24px] md:text-[192px]">
            <FaMailBulk className="mt-[4px] mr-[12px] text-[48px] md:mt-[6px] md:text-[120px] lg:text-[192px]" />
            <div className="roboto-bold-italic text-[48px] tracking-[-0.1em] md:ml-[24px] md:text-[96px] lg:ml-[64px] lg:text-[136px]">
              {COMPANY_NAME}
            </div>
            <div className="inter-normal ml-[8px] text-[48px] md:ml-[24px] md:text-[96px] lg:ml-[24px] lg:text-[128px]">
              News
            </div>
          </div>

          {/* News Grid */}
          <div className="mx-auto mt-[4vh] grid max-w-7xl grid-cols-1 gap-[32px] px-8 py-4 md:mt-[5vh] md:grid-cols-2 lg:mt-[7vh] xl:grid-cols-3">
            {news_items.map((item, index) => (
              <Link key={item.slug} to={`/news/${item.slug}`}>
                <NewsCard key={index} title={item.title} text={item.text} image={item.image} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
