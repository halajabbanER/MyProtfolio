export default function TechTicker() {
  const items = [
    { label: 'React', color: '#06b6d4' },
    { label: 'JavaScript', color: '#f59e0b' },
    { label: 'ASP.NET Core', color: '#8b5cf6' },
    { label: 'C#', color: '#a855f7' },
    { label: 'SQL Server', color: '#0284c7' },
    { label: 'TypeScript', color: '#38bdf8' },
    { label: 'React Native', color: '#22d3ee' },
    { label: 'Bootstrap 5', color: '#7952b3' },
    { label: 'REST APIs', color: '#10b981' },
    { label: 'EF Core', color: '#ec4899' },
    { label: 'Git & GitHub', color: '#f97316' },
    { label: 'Full-Stack Web', color: '#06b6d4' },
  ]

  // Keep each loop wider than the viewport so the marquee never exposes a blank gap.
  const loopItems = [...items, ...items]

  return (
    <div className="tech-ticker-wrapper py-3 overflow-hidden border-top border-bottom">
      <div className="tech-ticker-track d-flex align-items-center">
        {[0, 1].map((groupIndex) => (
          <div className="tech-ticker-group d-flex align-items-center gap-4 flex-shrink-0" key={groupIndex}>
            {loopItems.map((item, itemIndex) => (
              <div
                key={`${groupIndex}-${item.label}-${itemIndex}`}
                className="tech-ticker-item d-flex align-items-center gap-2 flex-shrink-0"
                style={{ '--ticker-color': item.color }}
              >
                <span
                  className="ticker-bullet"
                  style={{ backgroundColor: item.color, boxShadow: `0 0 8px ${item.color}` }}
                ></span>
                <span className="ticker-label font-monospace small fw-bold">{item.label}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

