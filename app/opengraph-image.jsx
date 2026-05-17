import { ImageResponse } from 'next/og'
import { siteConfig } from '../src/siteConfig'

export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #030813 0%, #0a1221 45%, #12375f 100%)',
          color: 'white',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            display: 'flex',
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at 18% 20%, rgba(181,230,29,0.20), transparent 32%), radial-gradient(circle at 84% 10%, rgba(22,95,168,0.55), transparent 35%)',
          }}
        />
        <div
          style={{
            display: 'flex',
            position: 'absolute',
            right: -80,
            top: 120,
            width: 380,
            height: 380,
            borderRadius: 999,
            background: 'rgba(181,230,29,0.12)',
            filter: 'blur(30px)',
          }}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '64px 72px',
            width: '100%',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                alignSelf: 'flex-start',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: 999,
                padding: '10px 18px',
                fontSize: 26,
                letterSpacing: '0.24em',
                textTransform: 'uppercase',
                color: '#b5e61d',
              }}
            >
              Premium Waterproofing Specialists
            </div>
            <div style={{ display: 'flex', fontSize: 78, lineHeight: 0.95, fontWeight: 800, maxWidth: 780, textTransform: 'uppercase' }}>
              {siteConfig.shortName} Waterproofing
            </div>
            <div style={{ display: 'flex', fontSize: 34, maxWidth: 860, lineHeight: 1.25, color: 'rgba(255,255,255,0.82)' }}>
              Protecting roofs, balconies, basements, and commercial properties across Dublin and Ireland.
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <div style={{ display: 'flex', gap: 14 }}>
              {['Real project media', 'Residential & commercial', 'Detail-led systems'].map((item) => (
                <div
                  key={item}
                  style={{
                    display: 'flex',
                    border: '1px solid rgba(255,255,255,0.14)',
                    background: 'rgba(255,255,255,0.06)',
                    borderRadius: 999,
                    padding: '12px 18px',
                    fontSize: 24,
                    color: 'rgba(255,255,255,0.85)',
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 8 }}>
              <div style={{ display: 'flex', fontSize: 30, fontWeight: 700 }}>{siteConfig.phone}</div>
              <div style={{ display: 'flex', fontSize: 22, color: 'rgba(255,255,255,0.68)' }}>{siteConfig.location}</div>
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  )
}
