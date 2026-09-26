import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'

const getExperiences = (lang) => {
  if (lang === 'ar') {
    return [
      {
        type: 'work',
        role: 'مطورة React وتطبيقات ويب',
        company: 'Yukatech',
        location: 'إسطنبول، تركيا',
        period: '2026',
        icon: 'bi-window-fullscreen',
        badge: 'تطوير الويب الحديث',
        description:
          'بناء واجهات ويب تفاعلية وتجارب رقمية متجاوبة وسريعة باستخدام أحدث تقنيات React و Bootstrap.',
        achievements: [
          'تصميم وبناء مكونات ويب قابلة لإعادة الاستخدام وتطبيق أفضل ممارسات تجربة المستخدم (UX).',
          'ربط الواجهات الأمامية مع خدمات الـ REST APIs لتدفق البيانات بشكل حي وسلس.',
          'ضمان أعلى معايير التوافق، وسرعة الاستجابة، والتجاوب عبر شاشات الموبايل والحواسيب.',
        ],
        skills: ['React', 'JavaScript (ES6+)', 'REST APIs', 'Bootstrap 5', 'Git'],
      },
      {
        type: 'work',
        role: 'متدربة في هندسة الأنظمة الخلفية والبرمجيات',
        company: 'Pal4it',
        location: 'إسطنبول، تركيا',
        period: '2025',
        icon: 'bi-briefcase-fill',
        badge: 'تدريب عملي متخصص',
        description:
          'المساهمة في بناء الأنظمة الخلفية، وتصميم نقاط الـ RESTful APIs، والتعامل مع قواعد البيانات العلائقية.',
        achievements: [
          'بناء واختبار واجهات برمجية RESTful محكمة مع معالجة الأخطاء وتنظيم استجابات الـ JSON.',
          'التعامل مع نماذج قواعد بيانات SQL Server وربطها بنظام العمل باستخدام EF Core.',
          'العمل ضمن فريق هندسي متكامل ومتابعة عمليات مراجعة الكود وإدارة الفروع بـ Git.',
        ],
        skills: ['C#', 'ASP.NET Core', 'SQL Server', 'EF Core', 'REST APIs'],
      },
      {
        type: 'education',
        role: 'بكالوريوس هندسة الحاسوب',
        company: 'جامعة السلطان محمد الفاتح الوقفية (FSMVU)',
        location: 'إسطنبول، تركيا',
        period: '2023 - 2027 (متوقع)',
        icon: 'bi-mortarboard-fill',
        badge: 'التعليم الأكاديمي',
        description:
          'دراسة أكاديمية متعمقة تشمل حل المشكلات الخوارزمية، ومعمارية الحواسيب، وهندسة البرمجيات، وقواعد البيانات.',
        achievements: [
          'المقررات الأساسية: هياكل البيانات والخوارزميات، البرمجة كائنية التوجه (Java/C#)، وتصميم المعماريات.',
          'الهندسة المنطقية: تصميم ومحاكاة معالج حاسوبي متكامل 16-bit باستخدام أداة Logisim.',
          'مشاريع عملية: تطوير أنظمة إدارة الطلاب وتطبيقات التتبع وقواعد البيانات المتكاملة.',
        ],
        skills: ['Algorithms', 'Data Structures', 'OOP (Java/C#)', 'Computer Architecture', 'Databases'],
      },
      {
        type: 'roots',
        role: 'انطلاقة تطوير الويب والفرونت إند الأساسي',
        company: 'تعلّم ذاتي وبناء مشاريع عملية',
        location: 'إسطنبول، تركيا',
        period: '2022 - 2023',
        icon: 'bi-code-slash',
        badge: 'جذور المسار البرمجي',
        description:
          'بدء الرحلة المهنية والشغف بتطوير الويب منذ عام 2022، عبر إتقان الركائز الأساسية لبناء المواقع المتجاوبة والتفكير المنطقي المنظم.',
        achievements: [
          'إتقان لغة HTML5 الدلالية، وأحدث ميزات التنسيق في CSS3 (Flexbox و Grid)، ومبادئ التصميم المتجاوب.',
          'ترسيخ أساس برمجي قوي في لغة JavaScript الحديثة (ES6+)، معالجة الـ DOM، والأحداث التفاعلية.',
          'بناء مواقع ومشاريع تجريبية واقعية وضعت حجر الأساس للانتقال إلى React والـ Full-Stack.',
        ],
        skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Responsive Web', 'Bootstrap', 'DOM APIs'],
      },
    ]
  }

  if (lang === 'tr') {
    return [
      {
        type: 'work',
        role: 'React & Web Geliştirici',
        company: 'Yukatech',
        location: 'İstanbul, Türkiye',
        period: '2026',
        icon: 'bi-window-fullscreen',
        badge: 'Modern Web Geliştirme',
        description:
          'Modern React ve web teknolojilerini kullanarak hızlı, kullanıcı dostu ve responsive web deneyimleri geliştirildi.',
        achievements: [
          'React ve Bootstrap ile yeniden kullanılabilir bileşen sistemleri ve modern arayüzler inşa edildi.',
          'Sorunsuz veri akışı ve dinamik kullanıcı deneyimi için frontend sistemleri REST API servisleriyle entegre edildi.',
          'Tüm ekran boyutlarında yüksek performans, erişilebilirlik ve akıcı tasarım sağlandı.',
        ],
        skills: ['React', 'JavaScript (ES6+)', 'REST APIs', 'Bootstrap 5', 'Git'],
      },
      {
        type: 'work',
        role: 'Backend / Yazılım Mühendisi Stajyeri',
        company: 'Pal4it',
        location: 'İstanbul, Türkiye',
        period: '2025',
        icon: 'bi-briefcase-fill',
        badge: 'Sektör Stajı',
        description:
          'Backend mimarilerine katkıda bulunuldu; temiz RESTful API uç noktaları ve ilişkisel veri katmanları geliştirildi.',
        achievements: [
          'Yapılandırılmış yanıtlar ve güvenilir hata yönetimi sağlayan RESTful API servisleri tasarlandı.',
          'İş mantığı gereksinimlerini desteklemek için SQL Server veri modelleri ve sorguları üzerinde çalışıldı.',
          'Yazılım mühendisliği iş akışları, kod incelemeleri ve Git sürüm kontrolü ile ekip içi iş birliği yürütüldü.',
        ],
        skills: ['C#', 'ASP.NET Core', 'SQL Server', 'EF Core', 'REST APIs'],
      },
      {
        type: 'education',
        role: 'Bilgisayar Mühendisliği Lisans Derecesi',
        company: 'Fatih Sultan Mehmet Vakıf Üniversitesi (FSMVU)',
        location: 'İstanbul, Türkiye',
        period: '2023 - 2027 (Beklenen)',
        icon: 'bi-mortarboard-fill',
        badge: 'Yüksek Öğrenim',
        description:
          'Algoritmik problem çözme, yazılım mühendisliği, dijital mantık ve sistem programlamayı kapsayan kapsamlı mühendislik eğitimi.',
        achievements: [
          'Temel Dersler: Veri Yapıları ve Algoritmalar, Nesne Yönelimli Programlama (Java/C#), Bilgisayar Mimarisi, Veritabanı Sistemleri.',
          'Donanım & Mantık: Logisim üzerinde çalışan 16-bit işlemci mimarisi tasarlandı ve simüle edildi.',
          'Yazılım Projeleri: Öğrenci yönetim sistemleri, envanter takip uygulamaları ve full-stack platformlar geliştirildi.',
        ],
        skills: ['Algoritmalar', 'Veri Yapıları', 'OOP (Java/C#)', 'Bilgisayar Mimarisi', 'Veritabanları'],
      },
      {
        type: 'roots',
        role: 'Web Geliştirme & Temel Frontend Başlangıcı',
        company: 'Bireysel Gelişim & Uygulamalı Web Projeleri',
        location: 'İstanbul, Türkiye',
        period: '2022 - 2023',
        icon: 'bi-code-slash',
        badge: 'Yolculuk Başlangıcı',
        description:
          '2022 yılında web geliştirme alanına adım atılarak semantik işaretleme, modern CSS düzenleri ve JavaScript mantığı üzerine sağlam temeller kuruldu.',
        achievements: [
          'Semantik HTML5, modern CSS3 (Flexbox, Grid, animasyonlar) ve responsive tasarım prensiplerinde yetkinleşildi.',
          'Modern JavaScript (ES6+), DOM manipülasyonu ve asenkron programlama ile güçlü kodlama temeli atıldı.',
          'React ve Full-Stack mühendisliği aşamalarına zemin hazırlayan pratik arayüzler ve web prototipleri üretildi.',
        ],
        skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Responsive Web', 'Bootstrap', 'DOM APIs'],
      },
    ]
  }

  // Default English
  return [
    {
      type: 'work',
      role: 'React & Web Developer',
      company: 'Yukatech',
      location: 'Istanbul, Turkiye',
      period: '2026',
      icon: 'bi-window-fullscreen',
      badge: 'Modern Web & Frontend',
      description:
        'Developed responsive web interfaces and dynamic web application experiences using modern React and web technologies.',
      achievements: [
        'Implemented modular, reusable UI component systems with React and Bootstrap.',
        'Connected frontend web applications with REST API backend services for seamless user experiences.',
        'Ensured high performance, accessibility, and fluid responsive design across all screen sizes.',
      ],
      skills: ['React', 'JavaScript (ES6+)', 'REST APIs', 'Bootstrap 5', 'Git'],
    },
    {
      type: 'work',
      role: 'Junior Backend / Software Engineer Intern',
      company: 'Pal4it',
      location: 'Istanbul, Turkiye',
      period: '2025',
      icon: 'bi-briefcase-fill',
      badge: 'Industry Internship',
      description:
        'Contributed to backend software systems, designing clean RESTful API endpoints and handling database persistence layers.',
      achievements: [
        'Designed and tested RESTful API endpoints ensuring structured responses and error handling.',
        'Worked with relational database models and queries to support business logic requirements.',
        'Collaborated within software engineering workflows, code reviews, and Git version control.',
      ],
      skills: ['C#', 'ASP.NET Core', 'SQL Server', 'EF Core', 'REST APIs'],
    },
    {
      type: 'education',
      role: 'Bachelor of Science in Computer Engineering',
      company: 'Fatih Sultan Mehmet Vakif University (FSMVU)',
      location: 'Istanbul, Turkiye',
      period: '2023 - 2027 (Expected)',
      icon: 'bi-mortarboard-fill',
      badge: 'Higher Education',
      description:
        'Comprehensive undergraduate curriculum encompassing algorithmic problem solving, software engineering, digital logic, and systems programming.',
      achievements: [
        'Core Studies: Data Structures & Algorithms, Object-Oriented Programming (Java/C#), Computer Architecture, Database Management Systems.',
        'Hardware & Logic: Designed and simulated a functional 16-bit processor architecture in Logisim.',
        'Software Projects: Built student management systems, inventory tracking applications, and full-stack software.',
      ],
      skills: ['Algorithms', 'Data Structures', 'OOP (Java/C#)', 'Computer Architecture', 'Databases'],
    },
    {
      type: 'roots',
      role: 'Web Development Roots & Core Frontend Foundations',
      company: 'Independent Deep-Dive & Practical Web Projects',
      location: 'Istanbul, Turkiye',
      period: '2022 - 2023',
      icon: 'bi-code-slash',
      badge: 'Journey Origin',
      description:
        'Commenced the dedicated web development journey in 2022, building unbreakable foundations in semantic structure, modern CSS architectures, and JavaScript logic.',
      achievements: [
        'Mastered semantic HTML5, modern CSS3 layouts (Flexbox, Grid, micro-animations), and responsive design principles.',
        'Built a solid programming foundation in modern JavaScript (ES6+), DOM events, and asynchronous data handling.',
        'Developed functional web prototypes and interactive interfaces, directly bridging into modern React engineering.',
      ],
      skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Responsive Web', 'Bootstrap', 'DOM APIs'],
    },
  ]
}

export default function JourneyPage() {
  const { t, language } = useLanguage()
  const experiences = getExperiences(language)

  return (
    <div className="journey-page animate-fade-in py-5">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-700 mx-auto mb-5">
          <span className="badge category-badge mb-2">{t.journey.badge}</span>
          <h1 className="fw-black display-5 mb-3">{t.journey.title}</h1>
          <p className="lead text-muted">
            {t.journey.lead}
          </p>
        </div>

        {/* Timeline Component */}
        <div className="timeline-wrapper position-relative max-w-900 mx-auto mb-5">
          <div className="timeline-line position-absolute top-0 bottom-0 start-0 ms-md-4 ms-3"></div>

          <div className="d-flex flex-column gap-5">
            {experiences.map((item, index) => (
              <div key={`${item.role}-${index}`} className="timeline-entry position-relative ps-5 ps-md-6">
                {/* Timeline Icon Marker */}
                <div className="timeline-marker position-absolute top-0 start-0 rounded-circle d-flex align-items-center justify-content-center shadow">
                  <i className={`bi ${item.icon} text-white fs-5`}></i>
                </div>

                {/* Timeline Card */}
                <div className="card timeline-card border-0 shadow-sm p-4 p-md-5 rounded-4 transition-card">
                  <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-2 mb-3">
                    <div>
                      <span className="badge bg-teal-subtle text-teal me-2 mb-1">{item.badge}</span>
                      <span className="badge bg-secondary-subtle text-muted mb-1">
                        <i className="bi bi-geo-alt me-1"></i>
                        {item.location}
                      </span>
                      <h2 className="h4 fw-bold mb-1 mt-2 text-ink">{item.role}</h2>
                      <div className="fw-semibold text-teal fs-6">{item.company}</div>
                    </div>

                    <div className="timeline-badge-year text-md-end">
                      <span className="badge bg-dark-glass text-teal font-monospace fs-6 px-3 py-2 rounded-3 border">
                        <i className="bi bi-calendar3 me-1"></i> {item.period}
                      </span>
                    </div>
                  </div>

                  <p className="text-muted mb-4">{item.description}</p>

                  <h6 className="fw-bold small text-uppercase text-muted mb-2">{t.journey.keyContributions}</h6>
                  <ul className="list-unstyled d-flex flex-column gap-2 mb-4">
                    {item.achievements.map((ach, i) => (
                      <li key={i} className="d-flex align-items-start gap-2 small text-muted">
                        <i className="bi bi-check-circle-fill text-teal mt-1 flex-shrink-0"></i>
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-3 border-top d-flex flex-wrap gap-1">
                    {item.skills.map((skill) => (
                      <span key={skill} className="badge tech-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="row g-4 my-5 pt-3">
          {t.journey.highlights.map((h, i) => (
            <div className="col-md-4" key={i}>
              <div className="p-4 rounded-4 bg-subtle h-100 border transition-card">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <span className="badge bg-teal text-white rounded-pill px-2">0{i + 1}</span>
                  <h3 className="h6 fw-bold mb-0 text-ink">{h.title}</h3>
                </div>
                <p className="text-muted small mb-0">{h.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center p-5 rounded-4 bg-card border shadow-sm max-w-700 mx-auto">
          <h2 className="h4 fw-bold mb-2">{t.home.ctaTitle}</h2>
          <p className="text-muted small mb-4">
            {t.home.ctaDesc}
          </p>
          <div className="d-flex justify-content-center gap-3">
            <a href="/cv.pdf" download className="btn btn-teal d-inline-flex align-items-center gap-2">
              <i className="bi bi-download"></i>
              <span>{t.journey.resumeBtn}</span>
            </a>
            <Link to="/contact" className="btn btn-outline-custom">
              <span>{t.journey.contactBtn}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
