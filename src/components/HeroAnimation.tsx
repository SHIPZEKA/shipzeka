import { useEffect, useState, type ComponentType } from 'react'

type LottiePlayer = ComponentType<{
  src: object
  loop?: boolean
  autoplay?: boolean
  className?: string
  rendererSettings?: {
    preserveAspectRatio?: string
  }
}>

export function HeroAnimation() {
  const [Lottie, setLottie] = useState<LottiePlayer | null>(null)
  const [animationData, setAnimationData] = useState<object | null>(null)

  useEffect(() => {
    let cancelled = false

    void Promise.all([
      import('lottie-react'),
      fetch('/lottie/supply-chain-and-shipping.json').then((res) => {
        if (!res.ok) throw new Error('Failed to load Lottie JSON')
        return res.json() as Promise<object>
      }),
    ]).then(([lottieMod, data]) => {
      if (cancelled) return
      setLottie(() => lottieMod.Lottie as LottiePlayer)
      setAnimationData(data)
    })

    return () => {
      cancelled = true
    }
  }, [])

  if (!Lottie || !animationData) return null

  return (
    <div className="flex h-full w-full items-end justify-center">
      <Lottie
        src={animationData}
        loop={true}
        autoplay={true}
        className="block h-auto w-full max-w-full aspect-[1440/896]"
        rendererSettings={{
          preserveAspectRatio: 'xMidYMid meet',
        }}
      />
    </div>
  )
}
