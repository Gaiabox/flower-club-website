import Link from "next/link";
import Image from "next/image";
import BrandFilm from "@/components/BrandFilm";
import { websites } from "@/lib/portfolio";
export default function SelectedWork() {
  const jade = websites.find((site) => site.slug === "jade-lilly")!;
  return (
    <div className="selected-work-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <article>
        <Link href="/work/jade-lilly">
          <div className="relative aspect-[4/3] overflow-hidden bg-navy">
            <Image
              src={jade.image}
              alt={jade.alt}
              fill
              sizes="(max-width: 640px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
          <div className="asset-caption"><h3 className="text-cream text-xl font-bold mt-4">Jade Lilly</h3>
        <p>
          Website designed &amp; built by The Flower Club
        </p></div></Link>
      </article>
      <article>
        <Link href="/work#brand-identity">
          <div className="relative aspect-[4/3] bg-cream">
            <Image
              src="/assets/images/bean-locks.png"
              alt="Bean Locks logo design"
              fill
              sizes="(max-width: 640px) 100vw, 30vw"
              className="object-contain p-4 md:p-5"
            />
          </div>
          <div className="asset-caption"><h3 className="text-cream text-xl font-bold mt-4">Bean Locks</h3>
        <p>Logo design &amp; brand identity</p></div></Link>
      </article>
      <article>
        <Link href="/work/fire-and-ash-cigar-carts">
          <div className="relative aspect-[4/3] overflow-hidden bg-navy">
            <Image
              src="/assets/images/fire-ash-cigar-carts.jpg"
              alt="Fire & Ash Cigar Carts website designed and built by The Flower Club"
              fill
              sizes="(max-width: 640px) 100vw, 40vw"
              className="object-cover object-top"
            />
          </div>
          <div className="asset-caption"><h3 className="text-cream text-xl font-bold mt-4">
            Fire &amp; Ash Cigar Carts
          </h3>
        <p>
          Custom website, configurator, and CRM connection
        </p></div></Link>
      </article>
      <div className="selected-film-row sm:col-span-2 lg:col-span-3">
      <article>
        <BrandFilm
          src="/assets/videos/fc-bloomfire.mp4"
          poster="/assets/images/fc-bloomfire-thumb.jpg"
          title="Operation Bloomfire"
          meta="Made for The Flower Club · AI-assisted animation"
          aspect="9/16"
        />
      </article>
      <article>
        <BrandFilm
          src="/assets/videos/makers-mark-culturecon.mp4"
          poster="/assets/images/makers-mark-culturecon-thumb.jpg"
          title="Maker’s Mark × CultureCon"
          meta="Brand activation · Event content"
          aspect="16/9"
        />
      </article>
      <article>
        <BrandFilm
          src="/assets/videos/fc-hoops.mp4"
          poster="/assets/images/fc-hoops-thumb.jpg"
          title="Club Ball"
          meta="Made for The Flower Club · Motion design"
          aspect="3/4"
        />
      </article>
      </div>
    </div>
  );
}
