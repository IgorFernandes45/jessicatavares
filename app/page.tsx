import Image from 'next/image';
import { Instagram, Mail, MapPin } from 'lucide-react';
import { Reveal } from '@/components/reveal';
import { WhatsAppFloat } from '@/components/whatsapp-float';

import { StickyContactBar } from '@/components/sticky-contact-bar';
import { siteConfig } from '@/lib/site-config';

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="max-w-2xl">
      <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#8f7668]">{eyebrow}</p>
      <h2 className="text-3xl leading-tight md:text-5xl">{title}</h2>
    </div>
  );
}

function createWhatsAppUrl(number: string, message: string) {
  const cleanNumber = number.replace(/\D/g, '');
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}

export default function HomePage() {
  const { brand, hero, about, services,  location, contact } = siteConfig;
  const whatsappHref = createWhatsAppUrl(contact.whatsappNumber, contact.whatsappMessage);

  return (
    <main className="pb-28 md:pb-32">
      <header className="sticky top-0 z-40 border-b border-line bg-[rgba(246,241,236,0.82)] backdrop-blur-md">
        <div className="section-shell flex h-20 items-center justify-between gap-4">
          <a href="#inicio" className="text-xl tracking-wide">{brand.name}</a>
          <nav className="hidden gap-8 text-sm md:flex">
            <a href="#sobre">Sobre</a>
            <a href="#servicos">Serviços</a>
            
            <a href="#localizacao">Localização</a>
            <a href="#contato">Contato</a>
          </nav>
          <a href={whatsappHref} target="_blank" rel="noreferrer" className="rounded-full border border-[#3f342f] px-4 py-2 text-sm transition hover:bg-[#3f342f] hover:text-white">
            Entrar em contato
          </a>
        </div>
      </header>

      <section id="inicio" className="hero-grid overflow-hidden pb-16 pt-8 md:pb-24 md:pt-10">
        <div className="section-shell grid items-center gap-8 md:grid-cols-[1.02fr_0.98fr] md:gap-14">
           <Reveal className="relative">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-[#efe6df] p-3 shadow-soft">
              <div className="relative min-h-[560px] overflow-hidden rounded-[2rem] bg-[#ddd4cd]">
                <Image
                  src={hero.image}
                  alt="Imagem principal do curso de maquiagem"
                  fill
                  priority
                  className="object-cover object-center"
                />
              </div>
              <div className="glass-panel absolute bottom-8 left-8 max-w-xs rounded-[1.75rem] border border-white/30 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-[#8f7668]">Destaque</p>
                <h3 className="mt-3 text-2xl">{hero.cardTitle}</h3>
                <p className="mt-2 text-sm leading-7 text-[#68564d]">{hero.cardText}</p>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="max-w-xl py-8 md:py-16">
              <p className="mb-5 text-sm uppercase tracking-[0.4em] text-[#8f7668]">{brand.tagline}</p>
              <h1 className="text-5xl leading-[1.05] md:text-7xl">{hero.title}</h1>
              <p className="mt-6 max-w-lg text-base leading-8 text-[#6f5f57] md:text-lg">{hero.description}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href={whatsappHref} target="_blank" rel="noreferrer" className="rounded-full bg-[#3b302a] px-6 py-3 text-white transition hover:-translate-y-0.5">
                  Saiba mais sobre o curso
                </a>
                <a href="#modulos" className="rounded-full border border-[#bda79b] px-6 py-3 text-[#5e4d45] transition hover:bg-[#ede1d9]">
                  Conheça meu trabalho
                </a>
              </div>
            </div>
          </Reveal>

         
        </div>
      </section>

      <section id="sobre" className="py-20 md:py-28">
        <div className="section-shell grid gap-10 md:grid-cols-[0.95fr_1.05fr] md:gap-14">
          <Reveal>
            <div className="relative min-h-[420px] overflow-hidden rounded-[2.5rem] bg-soft shadow-soft md:min-h-[560px]">
              <Image src={about.image} alt="Sobre o curso" fill className="object-cover object-top" />
            </div>
          </Reveal>
          <Reveal className="flex items-center">
            <div>
              <SectionTitle eyebrow={about.eyebrow} title={about.title} />
              <p className="mt-6 max-w-xl text-base leading-8 text-[#6f5f57] md:text-lg">{about.text}</p>
              <div className="mt-8 space-y-4">
                {about.highlights.map((item) => (
                  <div key={item} className="rounded-3xl border border-line bg-white/50 px-5 py-4">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="servicos" className="bg-[#efe7e2] py-20 md:py-28">
        <div className="section-shell">
          <Reveal>
            <SectionTitle eyebrow={services.eyebrow} title={services.title} />
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
  {services.items.map((item, index) => (
    <Reveal key={item.title} className="h-full">
      <article className="flex h-full flex-col rounded-[2rem] border border-white/60 bg-[rgba(255,255,255,0.52)] p-6 shadow-soft">
        

        <h3 className="mt-4 text-2xl">{item.title}</h3>
        {item.image && (
  <div className="mt-5 overflow-hidden rounded-2xl">
    <div className="relative w-full aspect-[3/4]">
      <Image
        src={item.image}
        alt={item.title}
        fill
        className="object-cover"
      />
    </div>
  </div>
)}

        <p className="mt-4 leading-7 text-[#6c5d55]">
          {item.description}
        </p>

      </article>
    </Reveal>
  ))}
</div>
        </div>
      </section>

      <section id="localizacao" className="bg-[#ece3dc] py-20 md:py-28">
        <div className="section-shell grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:gap-12">
          <Reveal>
            <div>
              <SectionTitle eyebrow={location.eyebrow} title={location.title} />
              <div className="mt-8 rounded-[2rem] bg-white/65 p-6 shadow-soft">
                <div className="flex items-start gap-4">
                  <MapPin className="mt-1" size={22} />
                  <div>
                    <p className="text-lg">{location.address}</p>
                    <p className="mt-2 text-[#6f5f57]">{location.city}</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="overflow-hidden rounded-[2.5rem] border border-white/50 shadow-soft">
              <iframe
                src={location.mapEmbedUrl}
                width="100%"
                height="420"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block min-h-[420px] w-full border-0"
                title="Mapa"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section id="contato" className="py-20 md:py-28">
        <div className="section-shell">
          <Reveal>
            <div className="rounded-[2.75rem] bg-[#332923] px-6 py-10 text-white md:px-14 md:py-16 shadow-soft">
              <p className="text-sm uppercase tracking-[0.35em] text-[#ccb7aa]">{contact.eyebrow}</p>
              <div className="mt-5 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
                <div>
                  <h2 className="max-w-2xl text-3xl leading-tight md:text-5xl">{contact.title}</h2>
                  <p className="mt-5 max-w-xl leading-8 text-[#ddcec5]">{contact.description}</p>
                </div>
                <a href={whatsappHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[#332923] transition hover:-translate-y-0.5">
                  Entrar em contato
                </a>
              </div>
              <div className="mt-10 grid gap-4 md:grid-cols-3">
                <a href={whatsappHref} target="_blank" rel="noreferrer" className="rounded-[1.75rem] border border-white/10 px-5 py-5 text-[#f4eae4]">
                  WhatsApp
                </a>
                <a href={contact.instagram} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-[1.75rem] border border-white/10 px-5 py-5 text-[#f4eae4]">
                  <Instagram size={18} /> Instagram
                </a>
                
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      

      <WhatsAppFloat href={whatsappHref} text={contact.floatingButtonText} />
      <StickyContactBar href={whatsappHref} text="Entrar em contato" />
    </main>
  );
}
