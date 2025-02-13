import {
  GithubIcon,
  HelpIcon,
  Logo,
  PeopleIcon,
  PieChartIcon,
  SettingsIcon,
} from "@/components/icons";
import { Navbar } from "@/components/navbar";
import {
  NavLink as RouterNavLink,
  ScrollRestoration,
  useLocation,
} from "react-router-dom";
import clsx from "clsx";
import { link as linkStyles } from "@heroui/theme";
import { ThemeSwitch } from "@/components/theme-switch";
import { Link } from "@heroui/link";
import Nav from "@/components/nav/nav";
import { useLayoutEffect } from "react";

interface NavLinkProps {
  children: React.ReactNode;
  to: string;
}

const NavLink: React.FC<NavLinkProps> = (props) => {
  const { to, children } = props;

  return (
    <RouterNavLink
      className={({ isActive }) => {
        return clsx(
          linkStyles({ color: "foreground" }),
          "h-12 text-medium",
          isActive && "font-bold"
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
  const location = useLocation();

  // scroll to top of page after a page transition.
  useLayoutEffect(() => {
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <div className="flex w-full">
      <Nav>
        <Nav.AppTitle />

        <ul className="mt-12 flex flex-col gap-1">
          <li>
            <Nav.Link to="/">
              <PieChartIcon size={20} /> Dashboard
            </Nav.Link>
          </li>

          <li>
            <Nav.Link to="/people">
              <PeopleIcon size={20} /> People
            </Nav.Link>
          </li>

          <li>
            <Nav.Link to="/settings">
              <SettingsIcon size={20} /> Settings
            </Nav.Link>
          </li>
        </ul>
      </Nav>
      <div className="relative flex flex-1 flex-col h-screen">
        <div className="flex gap-2 items-center absolute right-5 top-[26px]">
          <ThemeSwitch />
        </div>

        <main className="container mx-auto max-w-7xl px-8 flex-grow pb-16">
          {children}
        </main>
      </div>
    </div>
  );
}
