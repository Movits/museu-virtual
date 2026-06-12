// Florão divisor: losango com hastes, em traço fino dourado
export default function Ornament({ width = 180 }) {
  return (
    <svg
      width={width}
      height={width * 0.144}
      viewBox="0 0 250 36"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden="true"
      style={{ color: 'var(--gold)', display: 'block', margin: '0 auto' }}
    >
      <line x1="0" y1="18" x2="95" y2="18" opacity="0.55" />
      <line x1="155" y1="18" x2="250" y2="18" opacity="0.55" />
      <path d="M125 6 L137 18 L125 30 L113 18 Z" />
      <path d="M125 11 L132 18 L125 25 L118 18 Z" fill="currentColor" stroke="none" opacity="0.85" />
      <circle cx="103" cy="18" r="2" fill="currentColor" stroke="none" />
      <circle cx="147" cy="18" r="2" fill="currentColor" stroke="none" />
    </svg>
  )
}
