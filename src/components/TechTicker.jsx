import BrandIcon from './BrandIcon'

export default function TechTicker() {
  const items = [
    { label: 'React', color: '#61dafb' },
    { label: 'JavaScript', color: '#f7df1e' },
    { label: 'TypeScript', color: '#3178c6' },
    { label: 'C#', color: '#9b4993' },
    { label: 'ASP.NET Core', color: '#512bd4' },
    { label: 'SQL Server', color: '#cc292b' },
    { label: 'React Native', color: '#38bdf8' },
    { label: 'Bootstrap 5', color: '#7952b3' },
    { label: 'Python', color: '#3776ab' },
    { label: 'Java', color: '#ea2d2e' },
    { label: 'HTML5', color: '#e34f26' },
    { label: 'CSS3', color: '#1572b6' },
    { label: 'Git', color: '#f05032' },
    { label: 'GitHub', color: '#181717' },
    { label: 'EF Core', color: '#68217a' },
    { label: 'REST APIs', color: '#10b981' },
    { label: 'Full-Stack Web', color: '#ec4899' },
  ]

  const loopItems = [...items, ...items]

  return (
    <div className="tech-ticker-wrapper py-3 overflow-hidden border-top border-bottom" aria-label="Technologies Marquee">
      <div className="tech-ticker-track d-flex align-items-center">
        {[0, 1].map((groupIndex) => (
          <div className="tech-ticker-group d-flex align-items-center gap-4 flex-shrink-0 pe-4" key={groupIndex}>
            {loopItems.map((item, itemIndex) => (
              <div
                key={`${groupIndex}-${item.label}-${itemIndex}`}
                className="tech-ticker-item d-flex align-items-center gap-2 flex-shrink-0"
                style={{ '--ticker-color': item.color }}
              >
                <div className="ticker-icon-wrap d-flex align-items-center justify-content-center">
                  <BrandIcon name={item.label} size={20} />
                </div>
                <span className="ticker-label font-monospace small fw-bold">{item.label}</span>
                <span className="ticker-sep text-muted opacity-25 ms-2">•</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
