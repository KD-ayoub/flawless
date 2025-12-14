import React from "react";
import { FaCopy } from "react-icons/fa6";
import { geistSans } from "../fonts";

export function FirstSnippet() {
  return (
    <>
      <div className="bg-[#F0F0F0] rounded-[8px] md:rounded-[20px] p-6">
        {/* Terminal header */}
        <div className="flex justify-between items-center gap-2 mb-4">
          <div className="flex  items-center gap-2">
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-[#ff5f57] rounded-full"></div>
              <div className="w-3 h-3 bg-[#ffbd2e] rounded-full"></div>
              <div className="w-3 h-3 bg-[#28ca42] rounded-full"></div>
            </div>
            <span className={`${geistSans.className} text-gray-400 text-sm ml-2`}>
              RestaurantCard.jsx
            </span>
          </div>
          <button
            onClick={() => {
              const codeText = `<Card
                                              title="Veggie Haven"
                                              location="San Francisco, CA"
                                              rating={4.8}
                                              image={image}
                                              />`;
              navigator.clipboard.writeText(codeText);
            }}
            className="flex items-center cursor-pointer gap-2 px-3 py-1.5 text-gray-400 hover:text-[#4C4C4C] hover:bg-[#6BE1FF] rounded-md transition-colors duration-200"
          >
            <FaCopy className="w-3 h-3" />
            <span className={`${geistSans.className} text-xs`}>Copy</span>
          </button>
        </div>

        {/* Code snippet with proper JSX syntax highlighting */}
        <div className="font-mono text-sm md:text-2xl overflow-x-auto">
          <code className="text-gray-300">
            <span className="text-[#6d28d9]">&lt;</span>
            <span className="text-[#2563eb]">Card</span>
            {"\n"}
            <span className="text-gray-500"> </span>
            <span className="text-[#059669]">title</span>
            <span className="text-gray-500">=</span>
            <span className="text-[#d97706]">"Veggie Haven"</span>
            {"\n"}
            <span className="text-gray-500"> </span>
            <span className="text-[#059669]">location</span>
            <span className="text-gray-500">=</span>
            <span className="text-[#d97706]">"San Francisco, CA"</span>
            {"\n"}
            <span className="text-gray-500"> </span>
            <span className="text-[#059669]">rating</span>
            <span className="text-gray-500">=</span>
            <span className="text-[#db2777]">{`{4.8}`}</span>
            {"\n"}
            <span className="text-gray-500"> </span>
            <span className="text-[#059669]">image</span>
            <span className="text-gray-500">=</span>
            <span className="text-[#db2777]">{`{image}`}</span>
            {"\n"}
            <span className="text-[#6d28d9]">/&gt;</span>
          </code>
        </div>
      </div>
    </>
  );
}

export function SecondSnippet() {
  return (
    <>
      <div className="bg-[#F0F0F0] rounded-[8px] md:rounded-[20px] p-6">
        {/* Terminal header */}
        <div className="flex justify-between items-center gap-2 mb-4">
          <div className="flex  items-center gap-2">
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-[#ff5f57] rounded-full"></div>
              <div className="w-3 h-3 bg-[#ffbd2e] rounded-full"></div>
              <div className="w-3 h-3 bg-[#28ca42] rounded-full"></div>
            </div>
            <span className={`${geistSans.className} text-gray-400 text-sm ml-2`}>
              MapCard.jsx
            </span>
          </div>
          <button
            onClick={() => {
              const codeText = `<MapComponent pins={restaurantLocations} selected={currentSelection} />`;
              navigator.clipboard.writeText(codeText);
            }}
            className="flex items-center cursor-pointer gap-2 px-3 py-1.5 text-gray-400 hover:text-[#4C4C4C] hover:bg-[#6BE1FF] rounded-md transition-colors duration-200"
          >
            <FaCopy className="w-3 h-3" />
            <span className={`${geistSans.className} text-xs`}>Copy</span>
          </button>
        </div>

        {/* Code snippet with proper JSX syntax highlighting */}
        <div className="font-mono text-sm md:text-2xl overflow-x-auto">
          <code className="text-gray-300">
            <span className="text-[#6d28d9]">&lt;</span>
            <span className="text-[#2563eb]">MapComponent</span>
            {"\n"}
            <span className="text-gray-500"> </span>
            <span className="text-[#059669]">pins</span>
            <span className="text-gray-500">=</span>
            <span className="text-[#d97706]">{`{restaurantLocations}`}</span>
            {"\n"}
            <span className="text-gray-500"> </span>
            <span className="text-[#059669]">selected</span>
            <span className="text-gray-500">=</span>
            <span className="text-[#d97706]">{`{currentSelection}`}</span>
            {"\n"}
            <span className="text-[#6d28d9]">/&gt;</span>
          </code>
        </div>
      </div>
    </>
  );
}
export function ThirdSnippet() {
  const codeText = `
<>
  <div className="my-[2.5vw] flex justify-between items-center">
    <div className="flex items-center">
      <p className={\`text-black font-bold text-[4vw] mr-[1vw]\`}>
        4.7
      </p>
      <div>
        <p className={\`text-black font-bold\`}>
          Very good
        </p>
        <p className={\`text-black\`}>
          371 verified reviews
        </p>
      </div>
    </div>
    <div className="flex justify-center">
      <p className={\`text-black font-medium flex text-[1vw]\`}>
        All data verified and stored on the{" "}
        <Image
          draggable={false}
          className="w-[3vw] mx-[0.2vw]"
          src={nearSmall}
          width={0}
          height={0}
          alt="near small"
        />
        Blockchain
      </p>
    </div>
    <button
      onClick={() => setLeaveReview(true)}
      className={\`text-white rounded-[0.3vw] bg-[#01B7E6] p-[0.5vw] text-[1.2vw] w-[12vw]\`}
    >
      Leave a review
    </button>
  </div>
</>
`.trim();
  return (
    <>
      <div className="bg-[#F0F0F0] rounded-[8px] md:rounded-[20px] p-6">
        {/* Header */}
        <div className="flex justify-between items-center gap-2 mb-4">
          <div className="flex items-center gap-2">
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-[#ff5f57] rounded-full" />
              <div className="w-3 h-3 bg-[#ffbd2e] rounded-full" />
              <div className="w-3 h-3 bg-[#28ca42] rounded-full" />
            </div>
            <span className="text-gray-400 text-sm ml-2">ReviewSummary.jsx</span>
          </div>

          <button
            onClick={() => navigator.clipboard.writeText(codeText)}
            className="flex items-center cursor-pointer gap-2 px-3 py-1.5 text-gray-400 hover:text-[#4C4C4C] hover:bg-[#6BE1FF] rounded-md transition-colors duration-200"
          >
            <FaCopy className="w-3 h-3" />
            <span className="text-xs">Copy</span>
          </button>
        </div>

        {/* Colored “code” */}
        <pre className="font-mono text-[12px] md:text-[15px] leading-6 overflow-x-auto">
          <code className="text-gray-300">
            <span className="text-[#6d28d9]">&lt;</span>
            <span className="text-[#6d28d9]">&gt;</span>
            {"\n"}

            <span className="text-gray-500"> </span>
            <span className="text-[#6d28d9]">&lt;</span>
            <span className="text-[#2563eb]">div</span>{" "}
            <span className="text-[#059669]">className</span>
            <span className="text-gray-500">=</span>
            <span className="text-[#d97706]">
              "my-[2.5vw] flex justify-between items-center"
            </span>
            <span className="text-[#6d28d9]">&gt;</span>
            {"\n"}

            <span className="text-gray-500"> </span>
            <span className="text-[#6d28d9]">&lt;</span>
            <span className="text-[#2563eb]">div</span>{" "}
            <span className="text-[#059669]">className</span>
            <span className="text-gray-500">=</span>
            <span className="text-[#d97706]">"flex items-center"</span>
            <span className="text-[#6d28d9]">&gt;</span>
            {"\n"}

            <span className="text-gray-500"> </span>
            <span className="text-[#6d28d9]">&lt;</span>
            <span className="text-[#2563eb]">p</span>{" "}
            <span className="text-[#059669]">className</span>
            <span className="text-gray-500">=</span>
            <span className="text-[#6d28d9]">{`{`}</span>
            <span className="text-[#2563eb]">
              `${"{SatoshiFont.className}"}{" "}
            </span>
            <span className="text-[#d97706]">
              text-black font-bold text-[4vw] mr-[1vw]
            </span>
            <span className="text-[#2563eb]">`</span>
            <span className="text-[#6d28d9]">{`}`}</span>
            <span className="text-[#6d28d9]">&gt;</span>
            <span className="text-[#db2777]">4.7</span>
            <span className="text-[#6d28d9]">&lt;/</span>
            <span className="text-[#2563eb]">p</span>
            <span className="text-[#6d28d9]">&gt;</span>
            {"\n"}

            <span className="text-gray-500"> </span>
            <span className="text-[#6d28d9]">&lt;</span>
            <span className="text-[#2563eb]">div</span>
            <span className="text-[#6d28d9]">&gt;</span>
            {"\n"}

            <span className="text-gray-500"> </span>
            <span className="text-[#6d28d9]">&lt;</span>
            <span className="text-[#2563eb]">p</span>{" "}
            <span className="text-[#059669]">className</span>
            <span className="text-gray-500">=</span>
            <span className="text-[#6d28d9]">{`{`}</span>
            <span className="text-[#2563eb]">
              `${"{SatoshiFont.className}"}{" "}
            </span>
            <span className="text-[#d97706]">text-black font-bold</span>
            <span className="text-[#2563eb]">`</span>
            <span className="text-[#6d28d9]">{`}`}</span>
            <span className="text-[#6d28d9]">&gt;</span>
            <span className="text-[#db2777]">Very good</span>
            <span className="text-[#6d28d9]">&lt;/</span>
            <span className="text-[#2563eb]">p</span>
            <span className="text-[#6d28d9]">&gt;</span>
            {"\n"}

            <span className="text-gray-500"> </span>
            <span className="text-[#6d28d9]">&lt;</span>
            <span className="text-[#2563eb]">p</span>{" "}
            <span className="text-[#059669]">className</span>
            <span className="text-gray-500">=</span>
            <span className="text-[#6d28d9]">{`{`}</span>
            <span className="text-[#2563eb]">
              `${"{SatoshiFont.className}"}{" "}
            </span>
            <span className="text-[#d97706]">text-black</span>
            <span className="text-[#2563eb]">`</span>
            <span className="text-[#6d28d9]">{`}`}</span>
            <span className="text-[#6d28d9]">&gt;</span>
            <span className="text-[#db2777]">371 verified reviews</span>
            <span className="text-[#6d28d9]">&lt;/</span>
            <span className="text-[#2563eb]">p</span>
            <span className="text-[#6d28d9]">&gt;</span>
            {"\n"}

            <span className="text-gray-500"> </span>
            <span className="text-[#6d28d9]">&lt;/</span>
            <span className="text-[#2563eb]">div</span>
            <span className="text-[#6d28d9]">&gt;</span>
            {"\n"}

            <span className="text-gray-500"> </span>
            <span className="text-[#6d28d9]">&lt;</span>
            <span className="text-[#2563eb]">div</span>{" "}
            <span className="text-[#059669]">className</span>
            <span className="text-gray-500">=</span>
            <span className="text-[#d97706]">"flex justify-center"</span>
            <span className="text-[#6d28d9]">&gt;</span>
            {"\n"}

            <span className="text-gray-500"> </span>
            <span className="text-[#6d28d9]">&lt;</span>
            <span className="text-[#2563eb]">p</span>{" "}
            <span className="text-[#059669]">className</span>
            <span className="text-gray-500">=</span>
            <span className="text-[#6d28d9]">{`{`}</span>
            <span className="text-[#2563eb]">
              `${"{SatoshiFont.className}"}{" "}
            </span>
            <span className="text-[#d97706]">
              text-black font-medium flex text-[1vw]
            </span>
            <span className="text-[#2563eb]">`</span>
            <span className="text-[#6d28d9]">{`}`}</span>
            <span className="text-[#6d28d9]">&gt;</span>
            <span className="text-[#db2777]">
              All data verified and stored on the{" "}
            </span>
            {"\n"}

            <span className="text-gray-500"> </span>
            <span className="text-[#6d28d9]">&lt;</span>
            <span className="text-[#2563eb]">Image</span>{" "}
            <span className="text-[#059669]">draggable</span>
            <span className="text-gray-500">=</span>
            <span className="text-[#d97706]">{`{false}`}</span>{" "}
            <span className="text-[#059669]">className</span>
            <span className="text-gray-500">=</span>
            <span className="text-[#d97706]">"w-[3vw] mx-[0.2vw]"</span>{" "}
            <span className="text-[#059669]">src</span>
            <span className="text-gray-500">=</span>
            <span className="text-[#d97706]">{`{nearSmall}`}</span>{" "}
            <span className="text-[#059669]">width</span>
            <span className="text-gray-500">=</span>
            <span className="text-[#d97706]">{`{0}`}</span>{" "}
            <span className="text-[#059669]">height</span>
            <span className="text-gray-500">=</span>
            <span className="text-[#d97706]">{`{0}`}</span>{" "}
            <span className="text-[#059669]">alt</span>
            <span className="text-gray-500">=</span>
            <span className="text-[#d97706]">"near small"</span>
            <span className="text-[#6d28d9]"> /&gt;</span>
            {"\n"}

            <span className="text-gray-500"> </span>
            <span className="text-[#db2777]">Blockchain</span>
            {"\n"}

            <span className="text-gray-500"> </span>
            <span className="text-[#6d28d9]">&lt;/</span>
            <span className="text-[#2563eb]">p</span>
            <span className="text-[#6d28d9]">&gt;</span>
            {"\n"}

            <span className="text-gray-500"> </span>
            <span className="text-[#6d28d9]">&lt;/</span>
            <span className="text-[#2563eb]">div</span>
            <span className="text-[#6d28d9]">&gt;</span>
            {"\n"}

            <span className="text-gray-500"> </span>
            <span className="text-[#6d28d9]">&lt;</span>
            <span className="text-[#2563eb]">button</span>{" "}
            <span className="text-[#059669]">onClick</span>
            <span className="text-gray-500">=</span>
            <span className="text-[#6d28d9]">{`{`}</span>
            <span className="text-[#2563eb]">() =&gt; setLeaveReview(true)</span>
            <span className="text-[#6d28d9]">{`}`}</span>{" "}
            <span className="text-[#059669]">className</span>
            <span className="text-gray-500">=</span>
            <span className="text-[#6d28d9]">{`{`}</span>
            <span className="text-[#2563eb]">
              `${"{SatoshiFont.className}"}{" "}
            </span>
            <span className="text-[#d97706]">
              text-white rounded-[0.3vw] bg-[#01B7E6] p-[0.5vw] text-[1.2vw]
              w-[12vw]
            </span>
            <span className="text-[#2563eb]">`</span>
            <span className="text-[#6d28d9]">{`}`}</span>
            <span className="text-[#6d28d9]">&gt;</span>
            <span className="text-[#db2777]">Leave a review</span>
            <span className="text-[#6d28d9]">&lt;/</span>
            <span className="text-[#2563eb]">button</span>
            <span className="text-[#6d28d9]">&gt;</span>
            {"\n"}

            <span className="text-gray-500"> </span>
            <span className="text-[#6d28d9]">&lt;/</span>
            <span className="text-[#2563eb]">div</span>
            <span className="text-[#6d28d9]">&gt;</span>
            {"\n"}
            <span className="text-[#6d28d9]">&lt;/</span>
            <span className="text-[#6d28d9]">&gt;</span>
          </code>
        </pre>
      </div>
    </>
  );
}
