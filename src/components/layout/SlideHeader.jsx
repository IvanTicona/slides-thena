
export default function SlideHeader({ slideIndex }) {
  return (
    <div style={{
      position: 'absolute', top: 0, left: 0, right: 0,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '14px 32px',
      borderBottom: '1px solid rgba(0,32,96,0.15)',
      zIndex: 10,
    }}>
      <span
        style={{
          fontFamily: "'Fira Sans Extra Condensed', Arial, sans-serif",
          fontSize: 25, fontWeight: 600, letterSpacing: '-0.3px', lineHeight: 1,
          color: '#1C4DC1', textTransform: 'uppercase',
        }}
      >
        DEFENSA INTERNA
      </span>

      <span style={{
        fontFamily: "'Fira Sans Extra Condensed', Arial, sans-serif",
        fontSize: 29, fontWeight: 600, letterSpacing: '-0.3px', color: '#0a1628', lineHeight: 1,
      }}>
        {slideIndex + 1}
      </span>
    </div>
  )
}
