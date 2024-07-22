import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "../components/ui/Icon.tsx";

export interface CTA {
  href: string;
  text: string;
  outline?: boolean;
  /**
   * @format color-input
   * @description The color of the button text.
   */
  textColor?: string;
  /**
   * @format color-input
   * @description The background color of the button.
   */
  bgColor?: string;
}

export interface Nav {
  logo?: {
    src?: ImageWidget;
    alt?: string;
  };
  navLinks?: {
    label?: string;
    url?: string;
  }[];
  navButtons?: CTA[];
}

export interface Props {
  navigation: Nav;
}

export default function Header({
  navigation,
}: Props) {
  const {
    logo = {
      src:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/67120bcd-936a-4ea5-a760-02ed5c4a3d04",
      alt: "Logo",
    },
    navLinks = [
      { label: "Home", url: "/" },
      { label: "About us", url: "/" },
      { label: "Pricing", url: "/" },
      { label: "Contact", url: "/" },
    ],
    navButtons = [
      {
        href: "/",
        text: "Change me",
        outline: false,
        bgColor: "#000",
        textColor: "#fff",
      },
      {
        href: "/",
        text: "Change me",
        outline: true,
        bgColor: "#fff",
        textColor: "#000",
      },
    ],
  } = navigation;

  return (
    <nav className="drawer drawer-end">
      <input id="mobile-drawer-nav" type="checkbox" className="drawer-toggle" />

      {/* main content */}
      <div className="drawer-content container lg:px-0 px-4 flex gap-8 items-center justify-between py-4">
        <a href="/">
          <Image src={logo.src || ""} width={100} height={28} alt={logo.alt} />
        </a>

        <div className="hidden items-center justify-between lg:flex w-full">
          <ul className="flex">
            {navLinks.map((link) => (
              <li key={link.url}>
                <a
                  href={link.url}
                  aria-label={link.label}
                  className="link no-underline hover:underline p-4"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ul className="flex gap-3">
            {navButtons.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : "_self"}
                className={`font-normal btn btn-primary ${
                  item.outline && "btn-outline"
                }`}
                style={{
                  backgroundColor: item.bgColor,
                  color: item.textColor,
                }}
              >
                {item.text}
              </a>
            ))}
          </ul>
        </div>

        <label
          htmlFor="mobile-drawer-nav"
          className="flex lg:hidden btn btn-ghost drawer-button"
        >
          <Icon id="Bars3" size={24} strokeWidth={0.1} />
        </label>
      </div>

      {/* sidebar */}
      <aside className="drawer-side z-50">
        {/* Close when clicking on overlay */}
        <label
          htmlFor="mobile-drawer-nav"
          aria-label="close sidebar"
          className="drawer-overlay"
        />

        <div className="flex flex-col gap-8 min-h-full w-80 bg-base-100 text-base-content">
          <a className="p-4" href="/">
            <Image
              src={logo.src || ""}
              width={100}
              height={28}
              alt={logo.alt}
            />
          </a>

          <ul className="menu">
            {navLinks.map((link) => (
              <li key={link.url}>
                <a href={link.url} aria-label={link.label}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <ul className="p-4 flex items-center gap-3">
            {navButtons.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : "_self"}
                className={`font-normal btn btn-primary ${
                  item.outline && "btn-outline"
                }`}
                style={{
                  backgroundColor: item.bgColor,
                  color: item.textColor,
                }}
              >
                {item.text}
              </a>
            ))}
          </ul>
        </div>
      </aside>
    </nav>
  );
}
