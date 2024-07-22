import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Column {
  title: string;
  items: Items[];
}

export interface Items {
  label: string;
  href: string;
}

export interface Subscribe {
  title: string;
  description: string;
  /** @format rich-text */
  instructions: string;
}

export interface Social {
  network: "Facebook" | "Instagram" | "X - Twitter";
  href: string;
  /** @format textarea */
  description?: string;
  icon?: ImageWidget;
}

export interface Props {
  logo?: {
    src?: ImageWidget;
    alt?: string;
  };
  links?: Column[];
  subscribe?: Subscribe;
  madeWith?: {
    label?: string;
    src?: ImageWidget;
    href?: string; // Added the missing closing curly brace here
  };
  copyright?: string;
  bottomLinks?: Items[];
  contactInfo?: {
    email?: string;
    phone?: string;
    address?: string;
  };
  quickLinks?: {
    title?: string;
    links?: {
      label: string;
      href: string;
    }[];
  };
  social?: Social[];
  supportInfo?: {
    title?: string;
    description?: string;
    donationLink?: string;
  };
}

export default function Footer({
  logo = {
    src:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/67120bcd-936a-4ea5-a760-02ed5c4a3d04",
    alt: "Logo",
  },
  links = [
    {
      title: "Quick Links",
      items: [
        { label: "About Us", href: "/about" },
        { label: "Events", href: "/events" },
        { label: "Members", href: "/members" },
        { label: "Contact", href: "/contact" },
      ],
    },
  ],
  subscribe = {
    title: "Subscribe",
    description:
      "Join our newsletter to stay up to date on features and releases.",
    instructions:
      "By subscribing you agree to our <a href='/' target='_blank' class='link'>Privacy Policy</a> and provide consent to receive updates from our company.",
  },
  madeWith = {
    label: "Made with",
    src:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/cc202be0-af57-4b32-b9c9-d1d7dc97bf85",
    href: "https://deco.cx",
  },
  copyright = "© 2024 deco.cx. All rights reserved.",
  bottomLinks = [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
  contactInfo = {
    email: "info@collective.org",
    phone: "(123) 456-7890",
    address: "123 Main Street, City, State, Zip",
  },
  social = [
    { network: "Facebook", href: "https://facebook.com/collective" },
    { network: "Instagram", href: "https://instagram.com/collective" },
    { network: "X - Twitter", href: "https://twitter.com/collective" },
  ],
  supportInfo = {
    title: "Support Us",
    description: "Your donations help us continue our important work.",
    donationLink: "https://donate.collective.org",
  },
}: Props) {
  return (
    <div className="lg:container mx-auto md:max-w-6xl px-4 pt-16 text-sm">
      <div className="flex flex-col gap-20">
        <div className="flex flex-col gap-6 justify-between lg:flex-row">
          <div>
            <Image
              src={logo.src || ""}
              width={100}
              height={28}
              alt={logo.alt || "Logo"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
