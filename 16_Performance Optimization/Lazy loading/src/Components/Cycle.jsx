import React from 'react'
import Section from './Section'

function Cycle() {
  const cycles = [
    {
      id: 1,
      name: 'Roadster 3000',
      price: 499.99,
      buyUrl: '#buy-roadster',
      date: '2025-01-05',
      description:
        'A lightweight aluminum frame road bike designed for speed and efficiency on paved surfaces.',
      image:
        'https://images.unsplash.com/photo-1517940310602-75e1f367c5a7?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 2,
      name: 'Trail Blazer Pro',
      price: 799.0,
      buyUrl: '#buy-trail',
      date: '2025-02-12',
      description:
        'Full-suspension mountain bike built for rugged trails with hydraulic disc brakes.',
      image:
        'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=800&auto=format&fit=crop',
    },
  ]

  const cars = [
    {
      id: 101,
      name: 'Comet X1',
      price: 25999,
      buyUrl: '#buy-comet',
      date: '2025-03-20',
      description:
        'Compact hatchback with excellent fuel efficiency and modern safety features.',
      image:
        'https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=1000&auto=format&fit=crop',
    },
    {
      id: 102,
      name: 'Aurora EV',
      price: 38999,
      buyUrl: '#buy-aurora',
      date: '2025-04-02',
      description:
        'All-electric sedan offering 400km range, fast-charging, and an advanced infotainment system.',
      image:
        'https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1000&auto=format&fit=crop',
    },
  ]

  const Card = ({ item }) => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid #e5e7eb',
        borderRadius: 12,
        overflow: 'hidden',
        background: '#fff',
        boxShadow: '0 4px 18px rgba(0,0,0,0.06)',
      }}
    >
      <div style={{ height: 180, overflow: 'hidden', background: '#f8fafc' }}>
        <img
          src={item.image}
          alt={item.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          loading="lazy"
        />
      </div>
      <div style={{ padding: 16, display: 'grid', gap: 8 }}>
        <h3 style={{ margin: 0, fontSize: 18, color: '#111827' }}>{item.name}</h3>
        <div style={{ fontSize: 12, color: '#6b7280' }}>Added: {new Date(item.date).toDateString()}</div>
        <p style={{ margin: '4px 0 0', fontSize: 14, color: '#374151' }}>{item.description}</p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 12 }}>
          <strong style={{ fontSize: 16, color: '#111827' }}>
            {typeof item.price === 'number' ? `${item.price.toLocaleString()}` : item.price}
          </strong>
          <a
            href={item.buyUrl}
            style={{
              textDecoration: 'none',
              background: '#2563eb',
              color: 'white',
              padding: '8px 12px',
              borderRadius: 8,
              fontSize: 14,
            }}
          >
            Buy
          </a>
        </div>
      </div>
    </div>
  )

  return (
    <div style={{ maxWidth: 1100, margin: '24px auto', padding: '0 16px' }}>
      <header style={{ marginBottom: 24 }}>
        <h1 style={{ margin: 0, fontSize: 28, color: '#0f172a' }}>Products</h1>
        <div style={{ fontSize: 14, color: '#475569' }}>Static demo of cycles and cars</div>
      </header>

      <Section
        title="Cycles"
        items={cycles}
        renderItem={(it) => <Card item={it} />}
      />
      <Section
        title="Cars"
        items={cars}
        renderItem={(it) => <Card item={it} />}
      />
    </div>
  )
}

export default Cycle