import { Logo } from "@/icon/logo";
import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem
} from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import ThemeSwitch from "./switch/themeswitch";

export default function ChatNavBar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <Navbar className="shadow-md bg-[#5C7042]">
      <NavbarBrand>
        <Logo
          fill={"#ffffff"}
          height={"60px"}
          width={"60px"}
          withBg={false}
          bg={""}
        />
        <p className="font-bold text-inherit">KENKO BEAUTY AND MASSSGE 💆🏻‍♀️</p>
      </NavbarBrand>

      <NavbarContent as="div" justify="end">
        <NavbarItem>
          <Link color="foreground" href="#">
            หน้าแรก
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            โปรโมชัน
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            บริการ
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            ติดต่อเรา
          </Link>
        </NavbarItem>
        <ThemeSwitch
          onClick={() => setTheme(theme == "light" ? "dark" : "light")}
        />
      </NavbarContent>
    </Navbar>
  );
}
