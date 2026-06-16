import { NewsChannel } from "@/components/landing/NewsChannel";
import { NewsChannelSecond } from "@/components/landing/NewsChannelSecond";
import { NewsChannelThird } from "@/components/landing/NewsChannelThird";

export function ProfessionalJourney() {
  return (
    <section id="journey" className="bg-background pb-12 pt-8 sm:pb-16 sm:pt-10">
      <div className="container mx-auto px-4">
        <div className="mb-8 sm:mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Career
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Professional Journey
          </h2>
        </div>

        <div className="flex flex-col gap-8 overflow-visible py-1 sm:gap-10">
          <NewsChannel />
          <NewsChannelSecond />
          <NewsChannelThird />
        </div>
      </div>
    </section>
  );
}
