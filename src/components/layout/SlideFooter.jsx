export default function SlideFooter() {
  return (
    <div style={{
      position: 'absolute', bottom: 0, left: 0, right: 0,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '10px 32px',
      borderTop: '1px solid rgba(0,32,96,0.15)',
    }}>
      {/* Left: Realizado por Dorian Ticona / ©2026 */}
      <div style={{
        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 2,
      }}>
        <span style={{ fontFamily: "'Fira Sans Extra Condensed', Arial, sans-serif", fontSize: 23, fontWeight: 600, letterSpacing: '-0.3px', color: '#0a1628', lineHeight: 1 }}>
          Realizado por{' '}
          <span style={{ color: '#1C4DC1' }}>Dorian Ticona</span>
        </span>
        <span style={{ fontFamily: "'Fira Sans Extra Condensed', Arial, sans-serif", fontSize: 18, fontWeight: 600, letterSpacing: '-0.3px', color: '#4D5156', lineHeight: 1 }}>
          © 2026
        </span>
      </div>

      {/* Right: UPB logo + Universidad Privada Boliviana */}
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8 }}>
        <img src="/image1.png" alt="UPB" style={{ height: 29, objectFit: 'contain', display: 'block' }} />
        <span style={{
          fontFamily: "'Fira Sans Extra Condensed', Arial, sans-serif",
          fontSize: 23, fontWeight: 600, letterSpacing: '-0.3px', color: '#1C4DC1',
        }}>
          Universidad Privada Boliviana
        </span>
      </div>
    </div>
  )
}
