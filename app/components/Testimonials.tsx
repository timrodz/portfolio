import { testimonials } from "@data";
import Image from "next/image";

export const Testimonials = () => {
  return (
    <section id="testimonials">
      <h2>Testimonials</h2>
      <hr />
      <p>
        {`Throughout my career, I've had the privilege of working with many
        talented people. Working with them has yielded wonderful experiences and
        partnerships.`}
      </p>
      <div className="testimonial-container mt-10">
        {testimonials.map((t) => (
          <div key={t.name}>
            <div className="testimonial-person pointer-events-none">
              <Image
                src={t.imageUrl}
                alt={t.name}
                width={100}
                height={100}
                className="rounded-full aspect-square object-cover grayscale"
              />
              <div className="flex flex-col gap-1">
                <h3>{t.name}</h3>
                <h4>{t.title}</h4>
              </div>
            </div>
            <blockquote className="testimonial">{t.summary}</blockquote>
          </div>
        ))}
      </div>
    </section>
  );
};
