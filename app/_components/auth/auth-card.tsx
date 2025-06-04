import Link from "next/link";
import Socials from "../ui/Socials";

interface AuthCardProps {
  children: React.ReactNode;
  cardTitle: string;
  cardText: string;
  footerHref: string;
  footerLabel: string;
  footerText: string;
  showSocials?: boolean;
}

function AuthCard({
  children,
  cardTitle,
  cardText,
  footerHref,
  footerLabel,
  footerText,
  showSocials,
}: AuthCardProps) {
  return (
    <div className="flex flex-col space-y-2.5 w-full md:max-w-[80%]">
      {/*card title */}
      <div>
        <p className="font-semibold text-xl sm:text-lg md:text-xl lg:text-2xl text-center">
          {cardTitle}
        </p>
        {/*card text */}
        <p className="text-center text-sm lg:text-base">{cardText}</p>
      </div>
      {/*card content */}
      <div>{children}</div>
      {/*seperator */}
      <div className="flex items-center gap-x-2 w-full">
        <hr className="w-full border" />
        <span>or</span>
        <hr className="w-full border" />
      </div>
      {/*card socials */}
      {showSocials && <Socials />}
      {/* card footer */}
      <div className="text-sm justify-center w-full flex gap-x-1">
        <span className="">{footerText}</span>
        <Link href={footerHref} className="font-semibold">
          {footerLabel}
        </Link>
      </div>
    </div>
  );
}

export default AuthCard;
