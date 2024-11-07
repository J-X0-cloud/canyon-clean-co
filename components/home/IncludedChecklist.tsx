import Image from "next/image";
import { CheckList } from "@/components/ui/CheckList";
import { roomChecklists } from "@/lib/data/home";
import { images } from "@/lib/data/images";

export function IncludedChecklist() {
  const photo = images.lowScentProducts;

  return (
    <section className="section" id="included">
      <div className="wrap included">
        <div className="included-media">
          <Image
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            sizes="(max-width: 980px) 100vw, 45vw"
          />
          <div className="note-card">
            <strong>Low-scent by default</strong>
            <p>
              Plant-based products that are safe around kids, pets and hardwood. Fragrance-free on
              request.
            </p>
          </div>
        </div>
        <div>
          <p className="kicker">The checklist</p>
          <h2>What every clean includes</h2>
          <p className="muted">
            The same list goes with every crew, so nothing depends on who shows up that day. Deep
            and move-out cleans add the extras column.
          </p>
          <div className="rooms">
            {roomChecklists.map((room) => (
              <div className="room" key={room.room}>
                <h3>{room.room}</h3>
                <CheckList items={room.items} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
