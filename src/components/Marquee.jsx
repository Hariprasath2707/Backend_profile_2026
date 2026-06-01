import { marquee } from '../data/content'

export default function Marquee() {
  const items = [...marquee, ...marquee] // duplicated for seamless loop
  return (
    <div className="border-y border-line py-5 overflow-hidden bg-surface/40">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {items.map((item, i) => (
          <span key={i} className="flex items-center font-display text-2xl sm:text-3xl tracking-tightest px-8">
            {item}
            {/* small hollow-ring separator */}
            <span className="ml-8 inline-block w-2.5 h-2.5 rounded-full border-2 border-accent/70" aria-hidden />
          </span>
        ))}
      </div>
    </div>
  )
}
