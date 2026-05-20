"use client"

import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export default function HeroBackgroundVideo() {
  const videoRef = useRef(null)
  const containerRef = useRef(null)
  const [autoplayBlocked, setAutoplayBlocked] = useState(false)
  const { scrollY } = useScroll()
  const heroVideoY = useTransform(scrollY, [0, 500], [0, 45])

  useEffect(() => {
    const video = videoRef.current
    if (!video) {
      return
    }

    const maybePlay = () => {
      const playAttempt = video.play()
      if (playAttempt && typeof playAttempt.catch === 'function') {
        playAttempt.catch(() => setAutoplayBlocked(true))
      }
    }

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
      { threshold: 0.35 },
    )

    observer.observe(video)
    return () => observer.disconnect()
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
          className={`h-full w-full object-cover transition-opacity duration-300 ${autoplayBlocked ? 'opacity-0' : 'opacity-100'}`}
          src="/media/videos/site-02.mp4"
          poster="/media/images/project-06.jpeg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onPlaying={() => setAutoplayBlocked(false)}
          onError={() => setAutoplayBlocked(true)}
        />
      </motion.div>
      <div className="absolute inset-0 bg-[#071223]/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#071223]/76 via-[#071223]/58 to-[#071223]/50" />
    </div>
  )
}
