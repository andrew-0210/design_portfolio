import Image from "next/image";
import Link from "next/link";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

const Navigation = () => {
  return (
    <nav className="px-[1.5rem] py-[1rem] md:px-[2rem]">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between">
        <Link href="/">
          <div className="relative h-[4rem] w-[4rem] md:h-[6.25rem] md:w-[6.25rem]">
            <Image src="/images/profile.svg" alt="profile" fill={true} />
          </div>
        </Link>

        <ul className="flex gap-3 font-bold tracking-tight md:flex-col">
          {links.map((el) => (
            <li key={el.name}>
              <Link
                href={el.href}
                className="hover:font-semibold hover:text-[#3374eedd] text-[0.938rem] md:text-[1rem]"
              >
                {el.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
