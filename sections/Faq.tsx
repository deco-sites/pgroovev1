
import { ImageWidget } from 'apps/admin/widgets.ts';

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
}: Props) {
  return (
    <section>
      <div class="container mx-auto py-12">
        <h2 class="text-3xl font-bold mb-4">{title}</h2>
        <p class="mb-8">{description}</p>
        <a href={cta.href} class={`btn btn-primary ${cta.outline ? "btn-outline" : ""}`}>
          {cta.text}
        </a>
        <div class="mt-12">
          {questions.map((question, index) => (
            <details key={index} class="mb-4 bg-base-200 rounded-box">
              <summary class="font-bold cursor-pointer">{question.title}</summary>
              <div class="p-4">{question.answer}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
