import React, { useState, useEffect, useRef } from "react";
import { Menu, X, Heart, Users, GraduationCap, MapPin, Gift } from "lucide-react";
import j1 from "./assets/jukkal_1.jpeg";
import j2 from "./assets/jukkal_2.jpeg";
import j3 from "./assets/jukkal_3.jpeg";
import j4 from "./assets/jukkal_4.jpeg";
import j5 from "./assets/jukkal_5.jpeg";
import j6 from "./assets/jukkal_6.jpeg";

const gallery = [j2, j4, j5];


// =============================================
// ShareAPairUSA – React (JS) – Enhanced Home
// Adds modern aesthetics, hover effects, and an image carousel.
// All content blocks include comments so you can easily swap in your real text/images later.
// =============================================

export default function ShareAPairUSA() {
  const [currentPage, setCurrentPage] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Our Story", page: "story" },
    { name: "Programs", page: "programs" },
    { name: "Projection", page: "projection" },
    { name: "Get Involved", page: "involved" },
    { name: "Contact", page: "contact" },
  ];

  // ======================
  // Navigation (header)
  // ======================
  const Navigation = () => (
    <nav className="bg-[#603813] fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Brand */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => {
              setCurrentPage("home");
              setMobileMenuOpen(false);
            }}
          >
            <img
             src="./src/company_logo2.png"
             alt="ShareAPairUSA Logo"
             className="w-16 h-16 object-contain rounded-2xl"/>

            <div className="ml-4">
              <div className="text-xl font-bold text-white">ShareAPairUSA</div>
              <div className="text-sm text-white">Every kid deserves safe steps</div>
            </div>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => setCurrentPage(item.page)}
                className={`relative inline-flex items-center font-medium transition-colors hover:text-white-600 ${
                  currentPage === item.page ? "text-white" : "text-white/80"
                }`}
              >
                {item.name}
                {/* Fancy hover underline */}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-blue-600 transition-all group-hover:w-full" />
              </button>
            ))}
            <button
              onClick={() => setCurrentPage("involved")}
              className="bg-white-900 text-white px-5 py-2 rounded-full hover:bg-white-800 transition-colors font-medium shadow-sm"
            >
              Donate
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen((v) => !v)}
            className="md:hidden text-white-700"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => {
                  setCurrentPage(item.page);
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left text-gray-700 hover:text-blue-600 py-2 font-medium"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => {
                setCurrentPage("involved");
                setMobileMenuOpen(false);
              }}
              className="w-full bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors font-medium"
            >
              Donate
            </button>
          </div>
        </div>
      )}
    </nav>
  );

  // ======================
  // REUSABLE: Section title
  // ======================
  const SectionTitle = ({ overline, title, desc, center = false }) => (
    <div className={`mb-10 ${center ? "text-center max-w-3xl mx-auto" : ""}`}>
      {overline && (
        <div className="inline-block text-xs tracking-widest uppercase font-semibold text-blue-700/80 bg-blue-50 px-3 py-1 rounded-full mb-3">
          {overline}
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">{title}</h2>
      {desc && <p className="text-gray-600 mt-3">{desc}</p>}
    </div>
  );

  // ======================
  // REUSABLE: Simple image carousel
  // Notes:
  // - Replace the placeholder URLs with your real image links later.
  // - Autoplays every 4s, pauses on hover, includes Prev/Next & dots.
  // ======================
  const ImageCarousel = ({ images = [] }) => {
    const [index, setIndex] = useState(0);
    const timerRef = useRef(null);
    const total = images.length;

    useEffect(() => {
      // autoplay every 4s
      start();
      return stop; // cleanup on unmount
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [index, total]);

    const start = () => {
      stop();
      timerRef.current = setTimeout(() => setIndex((i) => (i + 1) % total), 4000);
    };
    const stop = () => timerRef.current && clearTimeout(timerRef.current);

    if (!total) return null;

    return (
      <div
        className="group relative overflow-hidden rounded-3xl bg-gray-100 shadow-lg"
        onMouseEnter={stop}
        onMouseLeave={start}
      >
        {/* Slides */}
        <div className="relative h-[360px] md:h-[420px]">
          {images.map((src, i) => (
            <img
              key={src + i}
              src={src}
              alt={`carousel-${i}`}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          {/* subtle gradient overlay for legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        </div>

        {/* Controls */}
        <button
          aria-label="Previous slide"
          onClick={() => setIndex((i) => (i - 1 + total) % total)}
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 backdrop-blur px-3 py-2 text-gray-900 shadow transition group-hover:opacity-100 opacity-0"
        >
          ❮
        </button>
        <button
          aria-label="Next slide"
          onClick={() => setIndex((i) => (i + 1) % total)}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 backdrop-blur px-3 py-2 text-gray-900 shadow transition group-hover:opacity-100 opacity-0"
        >
          ❯
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2.5 w-2.5 rounded-full transition ${
                i === index ? "bg-white" : "bg-white/50 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    );
  };

  // ======================
  // Home Page (enhanced)
  // ======================
  const HomePage = () => (
    <div className="pt-20">
      {/* HERO – headline + CTA, with subtle hover micro‑interactions */}
      <section className="bg-gradient-to-r from-[#F5EBD8] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 ">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white/95 rounded-3xl p-8 md:p-12 shadow-2xl transition hover:-translate-y-1 hover:shadow-3xl">
              <p className="text-xs font-semibold tracking-widest text-brown-700/80 mb-3">INSPIRED BY EVERY KID'S DREAM</p>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                Put shoes on little feet. <span className="transparent-bg-gradient-to-r from-[#F5EBD8]">Open doors to school.</span>
              </h1>
              <p className="text-brown-600 text-lg mb-8 leading-relaxed">
                        ShareAPairUSA exists to help children reach school safely with durable footwear, school kits, and foot‑health education.
                        </p>
                        <div className="flex flex-wrap gap-4 mb-8">
                        <button
                          onClick={() => setCurrentPage("involved")}
                          className="bg-gray-900 text-white px-8 py-3 rounded-full hover:-translate-y-0.5 hover:bg-gray-800 transition transform font-medium flex items-center gap-2 shadow-sm"
                        >
                          <Gift size={20} /> Donate
                        </button>
                        <button
                          onClick={() => setCurrentPage("involved")}
                          className="bg-white text-gray-900 px-8 py-3 rounded-full hover:-translate-y-0.5 transition transform font-medium border-2 border-gray-900 flex items-center gap-2"
                        >
                          <Users size={20} /> Volunteer
                        </button>
                        </div>
                        <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 border-2 border-gray-600 rounded-full flex items-center justify-center">✓</div>
                          501(c)(3) pending
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={20} /> Based in USA • Serving rural India
                        </div>
                        </div>
                      </div>

                      {/* IMAGE CAROUSEL – swap these URLs later */}
                      <div className="hidden md:block">
                        <ImageCarousel
                        images={[
                          // using a local imported image from your assets folder
                          j1,
                          j3,
                          j6,
                         // "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1200",
                          /*"https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200",*/
                          /*"https://images.unsplash.com/photo-1520975922284-732b1110d259?w=1200", */
                          //"https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200",
                        ]}
                        />
                      </div>
                      </div>
                    </div>
                    </section>

                    {/* QUICK STATS – keep existing but add hover lift */}
      <section className="bg-Brown-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            center
            overline=""
            title="Making Steps Count"
            desc=""
          />
          <div className="grid md:grid-cols-3 gap-8 text-white">
            {[
              {
                v: "Fuel the Mission",
                lines: [
                  "Full sponsorship for rural schools would provide:",
                  "Durable footwear for every child",
                  "One set of clothing",
                  "Basic hygiene essentials (soap, comb, toothpaste, etc.)",
                  "Delivery through local partnerships with school staff and community leaders",
                  "Rural 3rd world countries ~ $25",
                  "Rural US ~ $75 per child",
                ],
              },
              { v: "Health Protection Starts From the Ground Up", lines: [" Providing durable footwear helps protect children from cuts, infections, and diseases caused by walking barefoot in unhygienic conditions. With proper shoes, the risk of foot wounds, fungal infections, and other preventable illnesses is greatly reduced—keeping children healthier, safer, and more active in school. "] },
              { v: "Confident Minds, Brighter Futures", lines: [" When children have clean clothes, sturdy shoes, and basic essentials, they can focus on learning instead of daily discomforts."] },
            ].map((s) => (
              <div
                key={s.v + s.lines[0]}
                className="bg-[#F5EBD8] rounded-2xl p-8 shadow-md text-center transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="text-2xl font-bold text-[#603813] mb-4">{s.v}</div>

                {/* If there's only one line, render plain text; otherwise render as bullets */}
                {s.lines.length === 1 ? (
                  <div className="text-[#603813]">{s.lines[0]}</div>
                ) : (
                  <ul className="text-[#603813] list-disc list-inside space-y-1 text-left max-w-md mx-auto">
                    {s.lines.map((line, idx) => (
                      <li key={idx}>{line}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE CARDS – add your own copy later */}
      <section className="py-16 bg-brown">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            center
            overline=""
            title="Protection • Attendance • Confidence"
            desc="Three simple pillars to explain the impact in plain language."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Protection & Health",
                body:
                  "Cuts, infections, and injuries are common on rocky paths. Proper footwear protects every step.",
              },
              {
                title: "Attendance & Learning",
                body:
                  "Comfortable feet mean consistent school attendance—and better focus in the classroom.",
              },
              {
                title: "Dignity & Confidence",
                body:
                  "A simple pair of shoes can restore dignity and help children walk with pride.",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="group relative overflow-hidden rounded-2xl border bg-[#F5EBD8] p-6 shadow-sm transition hover:shadow-xl"
              >
                {/* Accent gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-white-50 to-brown-50 opacity-0 group-hover:opacity-100 transition" />
                <div className="relative">
                  <h3 className="text-xl font-bold text-brown-900">{c.title}</h3>
                  <p className="text-brown-600 mt-2">{c.body}</p>
                  <div className="mt-4 inline-flex items-center text-brown-700 font-medium group-hover:translate-x-1 transition">
                    Learn more →
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* GALLERY PREVIEW – simple image grid with hover zoom */}
<section className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <SectionTitle
      center
      overline=""
      title="Recent Moments"
      desc="A glimpse of our journey so far."
    />

    {/* Gallery grid rendering imported images */}
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
      {gallery.map((src, i) => (
        <div
          key={i}
          className="relative overflow-hidden rounded-2xl bg-gray-200 group h-56"
        >
          <img
            src={src}
            alt={`gallery-${i + 1}`}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition" />
        </div>
      ))}
    </div>
  </div>
</section>


      {/* TESTIMONIAL – swap text later */ /*https://picsum.photos/seed/shareapair-${n}/800/600*/ }
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl p-10 md:p-14 bg-[#F5EBD8] text-[#603813] shadow-xl">
            <p className="text-lg md:text-xl leading-relaxed">
              {/* Replace with a parent/teacher quote later */}
              “Make decisions based on hope and possibility. Make decisions based on what should happen, not what shouldn't”
            </p>
            <div className="mt-4 opacity-90">— Michelle Obama</div>
          </div>
        </div>
      </section>

      {/* CTA STRIP – nudge to Programs/Donate */}
      <section className="py-14 bg-[#603813]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold">Every step matters. Help a child reach school safely.</h3>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <button onClick={() => setCurrentPage("programs")} className="bg-black/30 backdrop-blur px-6 py-3 rounded-full font-semibold hover:bg-black/40 transition">
              Explore Programs
            </button>
            <button onClick={() => setCurrentPage("involved")} className="bg-black/30 backdrop-blur px-6 py-3 rounded-full font-semibold hover:bg-black/40 transition">
              Donate / Volunteer
            </button>
          </div>
        </div>
      </section> 
    </div> 
  ); 

  // ======================
  // Other pages (unchanged content with minor polish)
  // ======================
  const StoryPage = () => (
    <div className="pt-20">
      <div className="bg-gradient-to-r from-[#F5EBD8] to-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
          <p className="text-xl text-brown-100">A mission born from faith, compassion, and the call to serve</p>
        </div>
      </div>
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <section>
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">The Inspiration Behind ShareAPairUSA.org</h2>
            <p className="text-brown-600 text-center">
              ShareAPairUSA.org began with a single moment that opened our hearts.
              During a visit from New York to several schools in rural Jukkal, India, on August 15, 2024, I saw children walking barefoot on hot, rough roads, dressed in worn-out clothes, yet smiling brightly, their eyes filled with hope as they celebrated India’s Independence Day.
              Spending time with these children in their schools, surrounded by unhygienic conditions, deeply moved us.
              <br />
              Witnessing such poverty while on vacation changed our perspective on life and what truly matters.
              <br />
              We realized that no child should have to walk through life without dignity or protection. And so, ShareAPairUSA was born to bring comfort, confidence, and hope to underprivileged children, helping them take a step toward a brighter and more promising future. 
              <br /> ShareAPairUSA raises funds to give every child the comfort and confidence to take their next step starting in Jukkal, India, and reaching far beyond. 


            </p>
          </section>
          <section className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#F5EBD8] rounded-xl p-8">
              <Heart className="text-brown-600 mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
              <p className="text-brown-600">Provide durable footwear, school supplies, and foot‑health education so children can pursue education with dignity and confidence.</p>
            </div>
            <div className="bg-[#F5EBD8] rounded-xl p-8">
              <GraduationCap className="text-brown-600 mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-2">Our Vision</h3>
              <p className="text-brown-600">A world where every child has the basic necessities to learn—starting with the simple gift of shoes.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );

  const ProgramBlock = ({ index, title, imageLabel, flip = false, children }) => (
    <div className={`grid md:grid-cols-2 gap-12 items-center ${flip ? "md:[&>div:first-child]:order-2" : ""}`}>
      <div className="bg-gray-200 rounded-2xl h-80 flex items-center justify-center">
        <p className="text-gray-500">[Photo: {imageLabel}]</p>
      </div>
      <div>
        <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">Program {index}</div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
        <p className="text-gray-600">{children}</p>
      </div>
    </div>
  );

  const ProgramsPage = () => (
    <div className="pt-20">
      <div className="bg-gradient-to-r from-[#F5EBD8] text-brown py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Programs</h1>
          <p className="text-xl text-brown-100">Three ways we're making a lasting difference</p>
        </div>
      </div>
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <ProgramBlock index="01" title="Shoe Distribution" imageLabel="Children receiving shoes">
            Durable shoes for rough terrain, proper sizing/fitting, follow‑ups, and replacements as kids grow.
          </ProgramBlock>
          <ProgramBlock index="02" title="School Supply Kits" imageLabel="School supplies distribution" flip>
            Notebooks, pencils, backpacks, basic hygiene items, and age‑appropriate learning tools.
          </ProgramBlock>
          <ProgramBlock index="03" title="Foot Health Education" imageLabel="Education session with children">
            Hygiene workshops, injury prevention, teacher training, and ongoing support.
          </ProgramBlock>

          <div className="bg-[#F5EBD8] rounded-2xl p-12 text-center text-brown">
            <h2 className="text-3xl font-bold mb-4">Want to Support Our Programs?</h2>
            <p className="text-xl text-black mb-8 max-w-2xl mx-auto">
              Your donation directly funds shoes, school supplies, and education for children in need.
            </p>
            <button
              onClick={() => setCurrentPage("involved")}
              className="bg-[#603813] text-white px-8 py-3 rounded-full hover:bg-brown-50 transition-colors font-medium text-lg"
            >
              Get Involved
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const ProjectionCard = ({ year, title, items }) => (
    <div className="bg-gradient-to-r from-[#F5EBD8] rounded-xl p-8">
      <div className="flex items-start gap-10">
        <div className="bg-[#603813] text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl flex-shrink-0">
          {year}
        </div>
        <div>
          <h3 className="text-2xl font-bold text-Brown-900 mb-3">{title}</h3>
          <ul className="space-y-2 text-Black-600">
            {items.map((it) => (
              <li key={it} className="flex items-start">
                <span className="text-black-600 mr-2 mt-1">•</span>
                {it}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

  const ProjectionPage = () => (
    <div className="pt-20">
      <div className="bg-gradient-to-r from-[#F5EBD8] text-black py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projection</h1>
          <p className="text-xl text-brown-100">Looking ahead with faith and purpose</p>
        </div>
      </div>

      <div className="py-16 bg-brown">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <ProjectionCard year="2026" title="Immediate Goals" items={[
            "Distribute 1,000+ pairs of shoes to children in Jukkal",
            "Partner with 5 additional schools in the region",
            "Complete 501(c)(3) nonprofit status",
            "Launch foot health education in all partner schools",
          ]} />
          <ProjectionCard year="2027" title="Growth Phase" items={[
            "Expand to neighboring villages and communities",
            "Establish a local distribution center in India",
            "Train local coordinators to lead programs",
            "Reach 2,500+ children with our programs",
          ]} />
          <ProjectionCard year="2028+" title="Long-term Vision" items={[
            "Create a sustainable, community‑led model",
            "Expand to other regions in India with greatest need",
            "Develop partnerships with international organizations",
            "Reach 10,000+ children annually with comprehensive support",
          ]} />
        </div>
      </div>
    </div>
  );

  const InvolvedPage = () => (
    <div className="pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold mb-8">Get Involved</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#F5EBD8] border rounded-2xl p-10">
            <h2 className="text-2xl font-bold mb-2">Donate</h2>
            <p className="text-gray-600 mb-4">Your gift funds shoes, supplies, and education. Thank you!</p>
            <button className="border border-gray-900 px-6 py-3 rounded-full hover:bg-gray-50 -transition">Give Now</button>
          </div>
          <div className="bg-[#F5EBD8] border rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-2">Volunteer</h2>
            <p className="text-gray-600 mb-4">Help with events, packing, logistics, or outreach.</p>
            <button className="border border-gray-900 px-6 py-3 rounded-full hover:bg-gray-50">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );

  const ContactPage = () => (
    <div className="pt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold mb-8">Contact</h1>
        <form className="grid md:grid-cols-2 gap-4">
          <label className="flex flex-col gap-1">
            <span className="text-sm text-gray-700">Name</span>
            <input className="border rounded-xl px-3 py-2" placeholder="Your name" />
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-sm text-gray-700">Email</span>
            <input type="email" className="border rounded-xl px-3 py-2" placeholder="you@example.com" />
          </label>
          <label className="flex flex-col gap-1 md:col-span-2">
            <span className="text-sm text-gray-700">Message</span>
            <textarea rows={5} className="border rounded-xl px-3 py-2" placeholder="Say hello…" />
          </label>
          <div className="md:col-span-2">
            <button className="bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-800">Send</button>
          </div>
        </form>
      </div>
    </div>
  );

  const Footer = () => (
    <footer className="bg-[#F5EBD8] text-black-100 mt-10">
      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-[#603813] grid place-items-center text-white font-black">P</div>
            <span className="font-semibold">ShareAPairUSA</span>
          </div>
          <p className="mt-3 text-sm text-brown-300">
            Inspired by schoolchildren in Jukkal, India walking barefoot on rough terrain. We provide durable shoes so they can reach the classroom safely.
          </p>
        </div>
        <div>
          <p className="font-semibold">Organization</p>
          <ul className="mt-3 space-y-2 text-sm text-brown-300">
            <li><button onClick={() => setCurrentPage("story")} className="hover:underline">Our Story</button></li>
            <li><button onClick={() => setCurrentPage("programs")} className="hover:underline">Programs</button></li>
            <li><button onClick={() => setCurrentPage("projection")} className="hover:underline">Projection</button></li>
            <li><button onClick={() => setCurrentPage("involved")} className="hover:underline">Get Involved</button></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold">Contact</p>
          <ul className="mt-3 space-y-2 text-sm text-brown-300">
            <li>shareapairusa@gmail.com</li>
            <li>(516)-756-9803</li>
            <li>Long Island, NY • USA</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold">Transparency</p>
          <ul className="mt-3 space-y-2 text-sm text-brown-300">
            <li>501(c)(3) status: <span className="text-brown-100">Pending</span></li>
            <li>Annual report: 2025 (coming soon)</li>
            <li>Privacy & terms</li>
          </ul>
        </div>
      </div>
      <div className="h-px bg-white/10" />
      <div className="max-w-6xl mx-auto px-4 py-6 text-xs text-brown-400 flex flex-wrap items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} ShareAPairUSA.org. All rights reserved.</p>
        <p className="flex items-center gap-1">🌐 Built with love for children’s education.</p>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen bg-white text-brown-900">
      <Navigation />
      {currentPage === "home" && <HomePage />}
      {currentPage === "story" && <StoryPage />}
      {currentPage === "programs" && <ProgramsPage />}
      {currentPage === "projection" && <ProjectionPage />}
      {currentPage === "involved" && <InvolvedPage />}
      {currentPage === "contact" && <ContactPage />}
      <Footer />
    </div>
  );
}
