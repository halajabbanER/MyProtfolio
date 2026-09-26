import BrandIcon from './BrandIcon'

export default function TechTicker() {
  const items = [
    { label: 'React', icon: 'React', color: '#06b6d4' },
    { label: 'JavaScript', icon: 'JavaScript', color: '#f59e0b' },
    { label: 'TypeScript', icon: 'TypeScript', color: '#38bdf8' },
    { label: 'C#', icon: 'C#', color: '#a855f7' },
    { label: 'ASP.NET Core', icon: 'ASP.NET Core', color: '#8b5cf6' },
    { label: 'SQL Server', icon: 'SQL Server', color: '#0284c7' },
    { label: 'EF Core', icon: 'EF Core', color: '#0284c7' },
    { label: 'React Native', icon: 'React Native', color: '#22d3ee' },
    { label: 'Python', icon: 'Python', color: '#3b82f6' },
    { label: 'Java', icon: 'Java', color: '#f97316' },
    { label: 'Bootstrap 5', icon: 'Bootstrap 5', color: '#7952b3' },
    { label: 'Git & GitHub', icon: 'Git', color: '#f97316' },
    { label: 'REST APIs', icon: 'REST API', color: '#10b981' },
  ]

  // Keep each loop wider than the viewport so the marquee never exposes a blank gap.
  const loopItems = [...items, ...items]

  return (
    <div className="tech-ticker-wrapper py-3 overflow-hidden border-top border-bottom" aria-label="Technology Skills Ticker">
      <div className="tech-ticker-track d-flex align-items-center">
        {[0, 1].map((groupIndex) => (
          <div className="tech-ticker-group d-flex align-items-center gap-4 flex-shrink-0" key={groupIndex}>
            {loopItems.map((item, itemIndex) => (
              <div
                key={`${groupIndex}-${item.label}-${itemIndex}`}
                className="tech-ticker-item d-flex align-items-center gap-2 flex-shrink-0 px-2 py-1 rounded-pill"
                style={{ '--ticker-color': item.color }}
              >
                <BrandIcon name={item.icon} size={20} className="ticker-brand-icon flex-shrink-0" />
                <span className="ticker-label font-monospace small fw-bold">{item.label}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
