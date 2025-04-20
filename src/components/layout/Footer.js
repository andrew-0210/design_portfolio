import Image from "next/image";
import Link from "next/link";

const date = new Date().getFullYear();

const Footer = () => {
  return (
    <footer
      className="flex justify-center bg-[#ffdf48] px-[2rem] text-center"
      id="contact"
    >
      <div className="flex flex-col gap-5 py-[2.5rem] md:max-w-[30rem]">
        <h2 className="text-[2rem] font-bold tracking-tight">Get in touch</h2>
        <span className="font-semibold tracking-tight">
          Everything meaningful starts with a conversation. I&apos;m open to
          emails anytime. If there&apos;s something exciting to explore
          together, let&apos;s dive in.
        </span>
        <div className="flex flex-col items-center justify-center gap-2 md:flex-row md:gap-4">
          <a
            className="inline-block min-w-[12rem] cursor-pointer rounded-4xl border border-[#d4d4d4] bg-[#fafafa] px-[1.5rem] py-[0.75rem] text-[0.938rem] font-semibold transition-all transition-discrete duration-300 hover:bg-[#0c2320] hover:text-[#fafafa]"
            href="mailto:andrewmonthero0210@gmail.com"
          >
            Mail Me
          </a>
          <a
            className="inline-block min-w-[12rem] cursor-pointer rounded-4xl border border-[#d4d4d4] bg-[#fafafa] px-[1.5rem] py-[0.75rem] text-[0.938rem] font-semibold transition-all transition-discrete duration-300 hover:bg-[#3374eedd] hover:text-[#fafafa]"
            href="/documents/Andrew_Monthero(UI_UX Designer).pdf"
            download
          >
            Download Resume
          </a>
        </div>
        <div className="flex items-center justify-center gap-4">
          <Link href="https://www.linkedin.com/in/andrew-monthero/">
            <div className="relative h-[1.75rem] w-[1.75rem]">
              <Image src="/icons/linkedin.svg" alt="profile" fill={true} />
            </div>
          </Link>
          <Link href="https://www.instagram.com/artsy_technologist/">
            <div className="relative h-[1.75rem] w-[1.75rem]">
              <Image src="/icons/instagram.svg" alt="profile" fill={true} />
            </div>
          </Link>
        </div>
        <span className="text-[0.875rem] font-semibold">
          &copy; {date} Andrew Monthero
        </span>
      </div>
    </footer>
  );
};

export default Footer;
