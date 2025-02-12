import {
  GithubIcon,
  HelpIcon,
  Logo,
  PeopleIcon,
  PieChartIcon,
  SettingsIcon,
} from "@/components/icons";
import { Navbar } from "@/components/navbar";
import { NavLink as RouterNavLink } from "react-router-dom";
import clsx from "clsx";
import { link as linkStyles } from "@heroui/theme";
import { ThemeSwitch } from "@/components/theme-switch";
import { Link } from "@heroui/link";

interface NavLinkProps {
  children: React.ReactNode;
  to: string;
}

const NavLink: React.FC<NavLinkProps> = (props) => {
  const { to, children } = props;

  return (
    <RouterNavLink
      className={({ isActive }) => {
        console.log("isActive", isActive);

        return clsx(
          linkStyles({ color: "foreground" }),
          "h-12 text-medium",
          isActive && "text-primary"
        );
      }}
      to={to}
    >
      {children}
    </RouterNavLink>
  );
};

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full">
      <div className="relative h-screen w-80">
        <nav className="fixed bg-default-100 border-r border-default-200 px-6 h-full w-80">
          <Link
            className="flex justify-start items-center gap-1 my-6 mb-20 relative left-[-8px]"
            color="foreground"
            href="/"
          >
            <Logo />
            <p className="font-bold text-inherit">APPY APP</p>
          </Link>

          <div className="flex flex-col gap-4">
            <NavLink to="/">
              <div className="flex items-center gap-3">
                <PieChartIcon width={24} height={24} /> Dashboard
              </div>
            </NavLink>

            <NavLink to="/people">
              <div className="flex items-center gap-3">
                <PeopleIcon width={24} height={24} /> People
              </div>
            </NavLink>

            <NavLink to="/settings">
              <div className="flex items-center gap-3">
                <SettingsIcon width={24} height={24} /> Settings
              </div>
            </NavLink>

            <NavLink to="/help">
              <div className="flex items-center gap-3">
                <HelpIcon width={24} height={24} /> Help
              </div>
            </NavLink>
          </div>
        </nav>
      </div>

      <div className="relative flex flex-1 flex-col h-screen">
        {/* <Navbar /> */}

        <div className="flex gap-2 items-center absolute right-6 h-16">
          <Link isExternal href={"/blah"}>
            <GithubIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
        </div>

        <main className="container mx-auto max-w-7xl px-6 flex-grow pb-16">
          {children}
        </main>
      </div>
    </div>
  );
}
