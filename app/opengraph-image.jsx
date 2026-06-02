import { readFileSync } from 'fs'
import { join } from 'path'
import { ImageResponse } from 'next/og'
import { siteConfig } from '../src/siteConfig'

export const runtime = 'nodejs'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  const logoBuffer = readFileSync(join(process.cwd(), 'public/images/primeseal-logo-transparent.png'))
  const logoSrc = `data:image/png;base64,${logoBuffer.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          backgroundColor: '#030813',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* subtle radial glow */}
        <div
          style={{
            display: 'flex',
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at 50% 40%, rgba(22,95,168,0.35), transparent 60%)',
          }}
        />

        {/* logo */}
        <img
          src={logoSrc}
          width={280}
          height={126}
          style={{ objectFit: 'contain', position: 'relative' }}
        />

        {/* company name */}
        <div
          style={{
            display: 'flex',
            marginTop: '28px',
            fontSize: '64px',
            fontWeight: '800',
            color: '#ffffff',
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
            position: 'relative',
          }}
        >
          {siteConfig.shortName} Waterproofing
        </div>

        {/* tagline */}
        <div
          style={{
            display: 'flex',
            marginTop: '16px',
            fontSize: '26px',
            color: '#9fd0f8',
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            position: 'relative',
          }}
        >
          Dublin Waterproofing Specialists
        </div>

        {/* bottom bar */}
        <div
          style={{
            display: 'flex',
            position: 'absolute',
            bottom: '48px',
            gap: '32px',
          }}
        >
          {['Roofs', 'Balconies', 'Basements', 'Wet Rooms', 'Commercial'].map((item) => (
            <div
              key={item}
              style={{
                display: 'flex',
                border: '1px solid rgba(255,255,255,0.18)',
                background: 'rgba(255,255,255,0.06)',
                borderRadius: '999px',
                padding: '10px 20px',
                fontSize: '20px',
                color: 'rgba(255,255,255,0.78)',
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  )
}
