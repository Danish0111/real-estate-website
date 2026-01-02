import SearchProperty from "@/components/SearchProperty";
import ServiceCard from "@/components/ServiceCard";
import { HomeIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const services = [
    {
      id: 1,
      title: "Personalized Property Search",
      description:
        "We provide tailored property search services to match your unique preferences and needs.",
      icon: "/search.png",
    },
    {
      id: 2,
      title: "Exclusive Listings & Offers",
      description:
        "Access exclusive listings and deals on premium properties not available elsewhere.",
      icon: "/building.png",
    },
    {
      id: 3,
      title: "Expert Real Estate Agents",
      description:
        "Work with experienced agents who guide you through every step of the home buying journey.",
      icon: "/lender.png",
    },
    {
      id: 4,
      title: "Luxury Homes & Apartments",
      description:
        "Discover luxury homes and apartments curated to provide the best in comfort and elegance.",
      icon: "/star.png",
    },
    {
      id: 5,
      title: "Transparent Process",
      description:
        "We ensure a clear and straightforward process with no hidden fees or surprises.",
      icon: "/progress.png",
    },
    {
      id: 6,
      title: "Investment Opportunities",
      description:
        "Explore lucrative real estate investment opportunities with high potential returns.",
      icon: "/save-money.png",
    },
  ];

  return (
    <div className="overflow-hidden">
      <section className="relative min-h-screen flex flex-col items-start justify-self-center justify-center px-6 md:mt-20">
        <div className="grid gap-6 max-w-5xl md:grid-cols-2 text-center md:text-left">

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold">
            Find a place you
            <div>will call home</div>
          </h1>

          <p className="text-gray-400 text-base sm:text-lg mt-4">
            With us you will find not just accommodation, but a place where your
            new life begins, full of cosiness and possibilities.
          </p>
        </div>

        <button className="mt-8 max-md:w-full bg-black text-white px-6 py-3 rounded hover:bg-black/90 transition">
          Book a call
        </button>

        <div className="relative w-full max-w-6xl">
          <Image
            src="/home-illustration.png"
            alt="Home Illustration"
            width={1300}
            height={600}
            className="w-full h-auto"
            priority
          />
        </div>
      </section>

      <section className="px-6 py-10 md:py-24">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-12 text-center">
            Why choose us?
          </h1>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          
        </div>
      </section>


    </div>
  );
}
