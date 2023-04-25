import { Quicksand } from "next/font/google";
import { IconType } from "react-icons";

const quicksand = Quicksand({ subsets: ["latin"] });

interface HeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const Heading: React.FC<HeadingProps> = ({ title, subtitle, center }) => {
  return (
    <div className={`${center ? "text-center" : "text-start"}`}>
      <div className={`${quicksand.className} font-semibold text-xl`}>
        {title}
      </div>
      <div className="font-light text-neutral-500 mt-2">{subtitle}</div>
    </div>
  );
};

export default Heading;
