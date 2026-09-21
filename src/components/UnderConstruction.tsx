import { HeroAnimation } from './HeroAnimation'

const CONTACTS = [
  {
    email: 'mukeshvats90@gmail.com',
    icon: 'email' as const,
  },
  {
    email: 'simran.sharma@shipzeka.com',
    icon: 'handshake' as const,
  },
] as const

/** Iconify: famicons:mail-open and fa6-solid:handshake */
function ContactIcon({ name }: { name: 'email' | 'handshake' }) {
  if (name === 'email') {
    return (
      <svg
        viewBox="0 0 512 512"
        aria-hidden
        className="size-[1.15em] shrink-0 text-[#90bb2d]"
      >
        <path
          fill="currentColor"
          d="M448.67 154.45L274.1 68.2a41.1 41.1 0 0 0-36.2 0L63.33 154.45A55.6 55.6 0 0 0 32 204.53v184.61c0 30.88 25.42 56 56.67 56h334.66c31.25 0 56.67-25.12 56.67-56V204.53a55.6 55.6 0 0 0-31.33-50.08M252.38 96.82a8.22 8.22 0 0 1 7.24 0L429 180.48l-172 85a8.22 8.22 0 0 1-7.24 0L80.35 181.81Z"
        />
      </svg>
    )
  }

  return (
    <svg
      viewBox="0 0 640 512"
      aria-hidden
      className="h-[1.1em] w-[1.4em] shrink-0 text-[#90bb2d]"
    >
      <path
        fill="currentColor"
        d="m323.4 85.2l-96.8 78.4c-16.1 13-19.2 36.4-7 53.1c12.9 17.8 38 21.3 55.3 7.8l99.3-77.2c7-5.4 17-4.2 22.5 2.8s4.2 17-2.8 22.5L373 188.8l139 128V128h-.7l-3.9-2.5L434.8 79c-15.3-9.8-33.2-15-51.4-15c-21.8 0-43 7.5-60 21.2m22.8 124.4l-51.7 40.2c-31.5 24.6-77.2 18.2-100.8-14.2c-22.2-30.5-16.6-73.1 12.7-96.8l83.2-67.3c-11.6-4.9-24.1-7.4-36.8-7.4C234 64 215.7 69.6 200 80l-72 48v224h28.2l91.4 83.4c19.6 17.9 49.9 16.5 67.8-3.1c5.5-6.1 9.2-13.2 11.1-20.6l17 15.6c19.5 17.9 49.9 16.6 67.8-2.9c4.5-4.9 7.8-10.6 9.9-16.5c19.4 13 45.8 10.3 62.1-7.5c17.9-19.5 16.6-49.9-2.9-67.8zM16 128c-8.8 0-16 7.2-16 16v208c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V128zm32 192a16 16 0 1 1 0 32a16 16 0 1 1 0-32m496-192v224c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V144c0-8.8-7.2-16-16-16zm32 208a16 16 0 1 1 32 0a16 16 0 1 1-32 0"
      />
    </svg>
  )
}

export default function UnderConstruction() {
  return (
    <div className="relative flex h-dvh flex-col overflow-hidden bg-[#08243A] text-white md:h-auto md:min-h-dvh md:overflow-visible">
      <header className="relative z-20 shrink-0 px-[clamp(1.25rem,3.2vw,2rem)] pt-[clamp(0.75rem,2.4vw,1.75rem)]">
        <img
          src="/images/Logo.png"
          alt="Shipzeka — Aadyantam Ekagatih"
          className="h-auto w-[clamp(8.5rem,14.6vw,15.75rem)]"
        />
      </header>

      <section className="relative z-20 mt-[clamp(0.75rem,4vh,3.5rem)] flex shrink-0 flex-col items-center px-4 text-center">
        <h1 className="font-sans text-[clamp(1.85rem,6.3vw,6.8125rem)] font-bold leading-none tracking-[-0.025em]">
          Under Construction
        </h1>
        <p className="mt-[clamp(0.45rem,2.5vh,2.15rem)] font-sans text-[clamp(1.05rem,2.9vw,3.125rem)] font-semibold leading-none tracking-[-0.02em]">
          The Wait Will Be{' '}
          <span className="font-serif text-[1.05em] font-medium italic text-[#90bb2d]">
            Worth It
          </span>
        </p>
      </section>

      <div className="relative z-20 mt-[clamp(0.85rem,4.5vh,4.4rem)] shrink-0">
        <div className="flex w-full items-center gap-3 px-1 sm:gap-6">
          <div className="h-px min-w-0 flex-1 bg-[#e0e3e6]/80" />
          <p className="max-w-[70%] shrink-0 text-center font-ui text-[clamp(0.52rem,0.95vw,0.75rem)] font-normal uppercase tracking-[0.16em] text-white sm:max-w-none sm:tracking-[0.22em]">
            Until then, feel free to reach out to us
          </p>
          <div className="h-px min-w-0 flex-1 bg-[#e0e3e6]/80" />
        </div>

        <div className="mt-[clamp(0.5rem,1.6vh,1.15rem)] mb-2 flex flex-col items-center justify-center gap-2 sm:mb-4 sm:flex-row sm:gap-14">
          {CONTACTS.map(({ email, icon }) => (
            <a
              key={email}
              href={`mailto:${email}`}
              className="flex items-center gap-2.5 font-sans text-[clamp(0.85rem,1.15vw,1.05rem)] whitespace-nowrap text-white [overflow-wrap:normal] transition-opacity hover:opacity-80"
            >
              <ContactIcon name={icon} />
              <span>{email}</span>
            </a>
          ))}
        </div>
      </div>

      <div className="relative mt-auto min-h-0 w-full flex-1 overflow-hidden md:flex-none md:overflow-visible md:aspect-[1440/896]">
        <p
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-[10%] z-0 text-center font-sans text-[clamp(3.25rem,18.5vw,16.5rem)] font-extrabold leading-none tracking-[-0.04em] text-[#173539] select-none"
        >
          Shipzeka
        </p>
        <div className="absolute inset-0 z-10">
          <HeroAnimation />
        </div>
        <footer className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex items-end justify-between gap-4 px-[clamp(1.25rem,3.2vw,2rem)] pb-[clamp(0.7rem,1.6vw,1.15rem)] font-mono text-[clamp(0.65rem,0.85vw,0.8rem)] font-normal text-white">
          <p>© 2026 Shipzeka. All rights reserved.</p>
          <p className="text-right">India, New Delhi</p>
        </footer>
      </div>
    </div>
  )
}
