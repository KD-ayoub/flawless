import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { geistSans } from "../layout";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function FaqContent() {
  const rightRef = useRef(null);
  const questions = [
    {
      title: "What do you actually do?",
      des: "Brand identity, product, UI/UX, and marketing design, plus web development. Common outputs include brand systems, landing pages, dashboards, pitch decks, and product UI.",
    },
    {
      title: "How do requests and the queue work?",
      des: "Submit as many requests as you need. We work through them in priority order, one active task at a time, so quality stays high. You can reprioritize any time.",
    },
    {
      title: "How fast are deliveries?",
      des: "Most standard design tasks ship in 1 to 2 business days. Complex items like full pages, motion, or multi-state UI take longer; we will give you an ETA per request.",
    },
    {
      title: "How do revisions and feedback work?",
      des: "Unlimited feedback within scope. We guide toward 1 to 2 focused revision rounds for speed. More revisions are welcome, but they extend timelines.",
    },
    {
      title: "How do we collaborate day-to-day?",
      des: "We communicate through Slack, Telegram, Discord, or email. We can also schedule team meetings when needed to review direction or progress.",
    },
    {
      title: "Why not hire full-time?",
      des: "Hiring senior designers, developers, and motion experts individually can easily exceed $450k per year in total salaries and benefits. With Flawless, you get that level of expertise as a flexible, on-demand team.",
    },
    {
      title: "Can I pause, cancel, or get a refund?",
      des: "You can pause or cancel any time going forward. If production has started, refunds are not offered. Terms apply, please read our Terms and Conditions.",
    },
  ];

  return (
    <>
      <div className="h-full grid grid-cols-1 md:grid-cols-2">
        <div className="z-10">
          <p
            className={`${geistSans.className} text-[#7E7E7E] text-sm md:text-base uppercase tracking-[-0.04em] leading-[100%] font-normal`}
          >
            The Flawless Playbook{" "}
          </p>
          <p
            className={`${geistSans.className} my-2 text-black text-[40px] md:text-[50px] capitalize tracking-[-0.04em] leading-[100%] font-normal`}
          >
            Frequently Asked Questions
          </p>
          <p
            className={`${geistSans.className} text-[#585858] text-[18px] md:text-[21px] tracking-[-0.04em] leading-[120%] font-normal`}
          >
            Everything you need to know before working with us.
          </p>
        </div>
        <div ref={rightRef} className="">
          <FaqList items={questions} />
        </div>
      </div>
    </>
  );
}

export function FaqList({ items }) {
  const [openIdx, setOpenIdx] = useState(null);
  const rowsRef = useRef([]);
  const contentRef = useRef([]);
  const arrowRef = useRef([]);

  // collapse all on mount (safe if server rendered)
  useEffect(() => {
    contentRef.current.forEach((el) => {
      if (!el) return;
      gsap.set(el, { height: 0, opacity: 0, display: "none" });
    });
    arrowRef.current.forEach((el) => {
      if (!el) return;
      gsap.set(el, { rotate: 0 }); // pointing up initially
    });
  }, []);

  const open = (i) => {
    const el = contentRef.current[i];
    const arrow = arrowRef.current[i];
    if (!el || !arrow) return;

    // measure target height
    gsap.set(el, { display: "block", height: "auto" });
    const h = el.offsetHeight;

    // start collapsed, then animate to measured height
    gsap.fromTo(
      el,
      { height: 0, opacity: 0 },
      {
        height: h,
        opacity: 1,
        duration: 0.35,
        ease: "power2.out",
        onComplete: () => gsap.set(el, { height: "auto" }),
      }
    );
    gsap.to(arrow, { rotate: 180, duration: 0.25, ease: "power2.out" }); // flip
  };

  const close = (i) => {
    const el = contentRef.current[i];
    const arrow = arrowRef.current[i];
    if (!el || !arrow) return;

    // animate to zero height
    gsap.to(el, {
      height: 0,
      opacity: 0,
      duration: 0.3,
      ease: "power2.inOut",
      onStart: () => gsap.set(el, { overflow: "hidden" }),
      onComplete: () => gsap.set(el, { display: "none" }),
    });
    gsap.to(arrow, { rotate: 0, duration: 0.25, ease: "power2.out" }); // reset
  };

  const toggle = (i) => {
    if (openIdx === i) {
      close(i);
      setOpenIdx(null);
    } else {
      if (openIdx !== null) close(openIdx);
      open(i);
      setOpenIdx(i);
    }
  };

  return (
    <div className="mt-4 md:ml-1">
      {items.map((value, i) => (
        <div
          key={value.title}
          ref={(el) => (rowsRef.current[i] = el)}
          className="border border-white mb-2 rounded-[20px] bg-white/44 backdrop-blur-md shadow-md"
        >
          <button
            onClick={() => toggle(i)}
            className={`${geistSans.className} cursor-pointer w-full p-4 text-left text-black text-base md:text-[20px] tracking-[-0.04em] leading-none font-normal flex items-center justify-between`}
          >
            <span>{value.title}</span>

            {/* single arrow we rotate */}
            <svg
              ref={(el) => (arrowRef.current[i] = el)}
              width="14"
              height="8"
              viewBox="0 0 14 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0"
            >
              <path
                d="M12.9188 0H6.68877H1.07877C0.118772 0 -0.361228 1.16 0.318772 1.84L5.49877 7.02C6.32877 7.85 7.67877 7.85 8.50877 7.02L10.4788 5.05L13.6888 1.84C14.3588 1.16 13.8788 0 12.9188 0Z"
                fill="#171717"
              />
            </svg>
          </button>

          <div
            ref={(el) => (contentRef.current[i] = el)}
            className="will-change-[height,opacity] overflow-hidden"
            aria-hidden={openIdx !== i}
          >
            <p
              className={`${geistSans.className} px-4 pb-4 text-[#585858] text-[14px] md:text-base tracking-[-0.04em] leading-[120%] font-normal`}
            >
              {value.des}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
