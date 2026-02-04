import { Container } from './ui/Container';

export function FooterStats() {
  const stats = [
    { value: '30+', label: 'Countries Exported' },
    { value: '15+', label: 'Years Experience' },
    { value: '500 K+', label: 'Units Monthly' },
  ];

  return (
    <div className="bg-[var(--color-accent)] text-white py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
          {stats.map((s) => (
            <div key={s.label} className="pt-8 md:pt-0 md:px-4">
              <div className="text-4xl md:text-5xl font-bold mb-2">{s.value}</div>
              <div className="text-white/80 uppercase tracking-wider text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
