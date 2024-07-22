import { ImageWidget } from "apps/admin/widgets.ts";

export interface CTA {
  id?: string;
  href: string;
  text: string;
  outline?: boolean;
}

export interface Question {
  title: string;
  /** @format rich-text */
  answer: string;
}

export interface Props {
  title?: string;
  description?: string;
  cta?: CTA;
  questions?: Question[];
  /**
   * @description The image to be displayed at the top of the FAQ section.
   * @widget ImageWidget
   */
  image?: ImageWidget;
  imageAlt?: string;
}

export default function BlogPosts({
  title = "Frequently Asked Questions",
  description =
    "Find answers to common questions about Primordial Groove and our events at Gratitude Lounge. Learn how to book a performance, get involved with our community, and what facilities and equipment are available.",
  cta = { id: "faq-cta", href: "/contact", text: "Contact Us", outline: true },
  questions = [
    {
      title: "What is Primordial Groove?",
      answer:
        "Primordial Groove is a collective dedicated to empowering local talent by providing a dynamic space for artists, bands, and DJs to connect, collaborate, and grow. We book out dates at Gratitude Lounge to host our events and performances.",
    },
    {
      title: "How can I book a performance at Primordial Groove?",
      answer:
        "To book a performance with Primordial Groove at Gratitude Lounge, visit our 'Showcase Your Talent' page and fill out the booking form. Our team will review your application and get back to you with the next steps.",
    },
    {
      title: "Question #3 text goes here",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut vestibulum ligula. Nam et tellus sit amet magna convallis interdum. Integer fermentum ligula nec velit hendrerit, quis feugiat odio feugiat. Ut vel nisi auctor, rhoncus felis vitae, tempor metus. Fusce ut lectus et ex consectetur ullamcorper. Nulla facilisi. Proin ullamcorper, odio a consectetur posuere, mauris felis rutrum lectus, et convallis est risus vitae nisi. Suspendisse potenti. Donec ultricies consectetur lorem, eget tempor nisi cursus in. Viv",
    },
    {
      title: "What kind of events does Primordial Groove host?",
      answer:
        "We host a variety of events at Gratitude Lounge, including open mic nights, workshops, networking events, and more. Each event is designed to help artists connect, collaborate, and grow.",
    },
    {
      title: "What facilities and equipment are available at Gratitude Lounge?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut vestibulum ligula. Nam et tellus sit amet magna convallis interdum. Integer fermentum ligula nec velit hendrerit, quis feugiat odio feugiat. Ut vel nisi auctor, rhoncus felis vitae, tempor metus. Fusce ut lectus et ex consectetur ullamcorper. Nulla facilisi. Proin ullamcorper, odio a consectetur posuere, mauris felis rutrum lectus, et convallis est risus vitae nisi. Suspendisse potenti. Donec ultricies consectetur lorem, eget tempor nisi cursus in. Viv",
    },
  ],
  image =
    "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/6fe9404a-f69c-472a-b521-78f6c1f87326",
  imageAlt = "FAQ Image",
}: Props) {
  return (
    <section>
      <div className="container mx-auto py-12">
        {image && <img src={image.src} alt={imageAlt} />}
        {/* ... other JSX elements ... */}
      </div>
    </section>
  );
}
