import Image from "next/image";
import { images } from "@/lib/data/images";
import { dayOfExpectations } from "@/lib/data/services";

export function WhatToExpect() {
  const photo = images.carpetDetail;

  return (
    <section className="section">
      <div className="wrap expect">
        <div className="expect-media">
          <Image
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            sizes="(max-width: 980px) 100vw, 50vw"
          />
        </div>
        <div>
          <p className="kicker">Good to know</p>
          <h2>What to expect on the day</h2>
          <ul className="expect-list">
            {dayOfExpectations.map((item) => (
              <li key={item.title}>
                <strong>{item.title}</strong> {item.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
