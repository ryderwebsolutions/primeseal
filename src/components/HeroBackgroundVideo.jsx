"use client"

import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export default function HeroBackgroundVideo() {
  const videoRef = useRef(null)
  const containerRef = useRef(null)
  const [autoplayBlocked, setAutoplayBlocked] = useState(false)
  const { scrollY } = useScroll()
  const heroVideoY = useTransform(scrollY, [0, 500], [0, 32])

  useEffect(() => {
    const video = videoRef.current
    const container = containerRef.current
    if (!video) {
      return
    }

    const maybePlay = () => {
      video.muted = true
      const playAttempt = video.play()
      if (playAttempt && typeof playAttempt.catch === 'function') {
        playAttempt.catch(() => setAutoplayBlocked(true))
      } else {
        setAutoplayBlocked(false)
      }
    }

    video.defaultMuted = true
    video.playsInline = true
    maybePlay()

    const onCanPlay = () => maybePlay()
    const onLoadedData = () => maybePlay()

    video.addEventListener('canplay', onCanPlay)
    video.addEventListener('loadeddata', onLoadedData)

    const onFirstInteraction = () => {
      maybePlay()
      window.removeEventListener('touchstart', onFirstInteraction)
      window.removeEventListener('click', onFirstInteraction)
    }

    window.addEventListener('touchstart', onFirstInteraction, { passive: true })
    window.addEventListener('click', onFirstInteraction)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            maybePlay()
          } else {
            video.pause()
          }
        })
      },
      { threshold: 0.1 },
    )

    observer.observe(container || video)
    return () => {
      observer.disconnect()
      video.removeEventListener('canplay', onCanPlay)
      video.removeEventListener('loadeddata', onLoadedData)
      window.removeEventListener('touchstart', onFirstInteraction)
      window.removeEventListener('click', onFirstInteraction)
    }
  }, [])

  return (
    <div ref={containerRef} className="absolute inset-0">
      <img
        className="h-full w-full object-cover"
        src="/media/images/project-06.jpeg"
        alt="PrimeSeal waterproofing project background"
        loading="eager"
        decoding="async"
        width="1920"
        height="1080"
      />
      <motion.div style={{ y: heroVideoY }} className="absolute inset-0">
        <video
          ref={videoRef}
          className={`h-full w-full scale-[1.02] object-cover object-[center_30%] lg:scale-100 lg:object-center transition-opacity duration-500 ${autoplayBlocked ? 'opacity-0' : 'opacity-100'}`}
          src="/media/videos/site-02.mp4"
          poster="/media/images/project-06.jpeg"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onPlaying={() => setAutoplayBlocked(false)}
          onError={() => setAutoplayBlocked(true)}
        />
      </motion.div>
      <div className="absolute inset-0 bg-[#071223]/48" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#071223]/68 via-[#071223]/46 to-[#071223]/34" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_12%,rgba(173,215,248,0.18),transparent_40%)]" />
    </div>
  )
}
