import React from 'react'

function Design() {
  const services = [
    {
      id: 1,
      title: 'Product Strategy & Roadmapping',
      brief:
        'Define north-star metrics, prioritize initiatives, and align stakeholders with a value-driven roadmap.',
      points: [
        'Discovery workshops and stakeholder interviews',
        'KPI definition and success metrics',
        'Quarterly roadmap and delivery plan',
      ],
      icon: '🧭',
    },
    {
      id: 2,
      title: 'UX Research & Prototyping',
      brief:
        'Evidence-based design decisions backed by research, rapid prototyping, and iterative user testing.',
      points: [
        'User personas and journey maps',
        'Clickable prototypes (low to high fidelity)',
        'Usability testing and heuristic evaluation',
      ],
      icon: '🔬',
    },
    {
      id: 3,
      title: 'Interface & Design Systems',
      brief:
        'Consistent, accessible, and scalable UI built on robust tokens and reusable components.',
      points: [
        'Atomic components and theming',
        'WCAG accessibility and contrast checks',
        'Documentation and Figma libraries',
      ],
      icon: '🎨',
    },
    {
      id: 4,
      title: 'Full‑Stack Engineering',
      brief:
        'Performance-first development across web and mobile with CI/CD and observability baked in.',
      points: [
        'React, TypeScript, Node, and serverless',
        'Performance budgets and code-splitting',
        'Automated testing and release pipelines',
      ],
      icon: '⚙️',
    },
    {
      id: 5,
      title: 'Brand & Content',
      brief:
        'Cohesive brand identities with content strategies that speak clearly to your audience.',
      points: [
        'Naming, tone of voice, and messaging',
        'Iconography, illustration, and motion',
        'SEO foundations and content maps',
      ],
      icon: '✍️',
    },
  ]

  const phases = [
    {
      id: 'p1',
      name: '1. Discover',
      desc:
        'Align on goals and constraints. We capture business context, audience needs, and technical realities.',
    },
    {
      id: 'p2',
      name: '2. Define',
      desc:
        'Clarify scope and success metrics. We translate insights into a prioritized backlog and acceptance criteria.',
    },
    {
      id: 'p3',
      name: '3. Design',
      desc:
        'Prototype key flows, validate with real users, and iterate quickly toward a solution that works.',
    },
    {
      id: 'p4',
      name: '4. Deliver',
      desc:
        'Ship to production with quality gates, automation, and analytics to measure impact.',
    },
  ]

  const Section = ({ title, children }) => (
    <section style={{ marginBottom: 32 }}>
      <h2 style={{ fontSize: 22, margin: '0 0 12px', color: '#111827' }}>{title}</h2>
      {children}
    </section>
  )

  return (
    <div style={{ maxWidth: 1100, margin: '24px auto', padding: '0 16px' }}>
      <header style={{ marginBottom: 24 }}>
        <h1 style={{ margin: 0, fontSize: 28, color: '#0f172a' }}>Design & Planning</h1>
        <p style={{ margin: '8px 0 0', color: '#475569' }}>
          We help teams plan, design, and ship customer‑centric products. Below is an overview of our
          planning approach and the services we provide.
        </p>
      </header>

      <Section title="How We Plan (Phases)">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: 16,
          }}
        >
          {phases.map((p) => (
            <div
              key={p.id}
              style={{
                border: '1px solid #e5e7eb',
                borderRadius: 12,
                background: '#fff',
                boxShadow: '0 4px 18px rgba(0,0,0,0.06)',
                padding: 16,
              }}
            >
              <div style={{ fontWeight: 700, color: '#111827', marginBottom: 6 }}>{p.name}</div>
              <div style={{ color: '#374151', fontSize: 14 }}>{p.desc}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Services We Provide">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: 16,
          }}
        >
          {services.map((s) => (
            <div
              key={s.id}
              style={{
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid #e5e7eb',
                borderRadius: 12,
                background: '#fff',
                boxShadow: '0 4px 18px rgba(0,0,0,0.06)',
                padding: 16,
                gap: 10,
              }}
            >
              <div style={{ fontSize: 28 }} aria-hidden>
                {s.icon}
              </div>
              <div style={{ fontWeight: 700, color: '#111827' }}>{s.title}</div>
              <div style={{ color: '#4b5563', fontSize: 14 }}>{s.brief}</div>
              <ul style={{ margin: '6px 0 0 18px', color: '#374151', fontSize: 14 }}>
                {s.points.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <footer style={{ marginTop: 24, color: '#6b7280', fontSize: 13 }}>
        Need something bespoke? We tailor engagements from short audits to long‑term product partnerships.
      </footer>
    </div>
  )
}

export default Design
