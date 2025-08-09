import { useEffect, useState } from "react"
import { motion } from "framer-motion"

/** Create N hex "dots" randomly across the given width/height */
function useHexField(count = 120) {
  const [hexes, setHexes] = useState([])

  useEffect(() => {
    const make = () => {
      const w = window.innerWidth
      const h = window.innerHeight
      const arr = Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * w,
        top: Math.random() * h,
        delay: Math.random() * 3,
        drift: 10 + Math.random() * 20, // px vertical float amplitude
        size: 2 + Math.random() * 5,  // px - changed from 12 + Math.random() * 10
        opacity: 0.15 + Math.random() * 0.25,
      }))
      setHexes(arr)
    }

    make()
    const onResize = () => make()
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [count])

  return hexes
}

export default function HeroSection() {
  const hexes = useHexField(160)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden
                        bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700">
      {/* Animated hexagon dots covering the whole hero */}
      <div className="pointer-events-none absolute inset-0">
        {hexes.map(h => (
          <motion.div
            key={h.id}
            initial={{ y: 0, opacity: h.opacity }}
            animate={{ y: [0, -h.drift, 0], opacity: [h.opacity, h.opacity + 0.2, h.opacity] }}
            transition={{ duration: 5 + Math.random() * 4, repeat: Infinity, delay: h.delay, ease: "easeInOut" }}
            className="absolute"
            style={{ left: h.left, top: h.top }}
          >
            <div
              className="bg-white"
              style={{
                width: h.size,
                height: h.size,
                opacity: 0.6,
                clipPath:
                  "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)",
                filter: "blur(0.2px)",
              }}
            />
          </motion.div>
        ))}

        {/* soft gradient glow layers */}
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-[28rem] h-[28rem] rounded-full bg-fuchsia-300/10 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-sm">
          Control Spending. Boost Peace of Mind.
        </h1>
        <p className="mt-4 text-base md:text-lg text-white/90">
          Smart subscriptions and wallets for families and schools — simple, fast, and secure.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a
            href="/subscription"
            className="inline-flex items-center rounded-xl px-5 py-3 bg-white text-gray-900 font-medium shadow hover:opacity-90"
          >
            Get Started
          </a>
          <a
            href="/learn-more"
            className="inline-flex items-center rounded-xl px-5 py-3 border border-white/60 text-white hover:bg-white/10"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Curved wave transition at the bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-16 md:h-24"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,64 C480,0 720,128 1200,64 L1200,120 L0,120 Z"
            fill="white"
            fillOpacity="1"
          />
        </svg>
      </div>
    </section>
  )
}
