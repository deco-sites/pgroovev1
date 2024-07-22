import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Props {
  title?: string;
  description?: string;
  image?: ImageWidget;
  button?: {
    text: string;
    href: string;
  };
}

export default function Hero({
  title = "Here's a hero component for you to showcase your app",
  description = "This subheading is fully editable, remember?",
  image =
    "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/682eb374-def2-4e85-a45d-b3a7ff8a31a9",
  button = {
    text: "Get Started",
    href: "/",
  },
}: Props) {
  return (
    <div class="lg:container md:max-w-6xl lg:mx-auto mx-4 text-sm py-12 lg:py-28">
      <div class="flex flex-col gap-4 justify-between lg:flex-row">
        <div class="space-y-6 lg:w-1/2">
          <h2 class="text-4xl leading-snug">
            {title}
          </h2>
          <p class="text-lg">
            {description}
          </p>
          <button class="btn btn-primary" href={button.href}>
            {button.text}
          </button>
        </div>
        <div class="lg:w-1/2">
          <Image
            width={640}
            class="w-full object-fit z-10"
            sizes="(max-width: 640px) 100vw, 30vw"
            src={image}
            alt="Hero Image"
            decoding="async"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
