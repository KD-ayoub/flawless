// "use client";

import Footer from "../../components/Footer";
import DisplayImages from "./DisplayImages";

export default function WorkPage() {
  // const containerRef = useRef(null);

  return (
    <>
      <div className="py-8 sm:py-12 lg:py-16">
        <div
          // ref={containerRef}
          className="max-w-7xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          {/* Responsive Image Container */}
          <DisplayImages/>
        </div>
      </div>
      <Footer />
    </>
  );
}
