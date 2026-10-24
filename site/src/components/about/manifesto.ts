// The Fourth Wave Manifesto, v1.0 (docs/STRATEGY.md §7). Numbers and titles are fixed;
// the poster, the clause sections and the "Suggest an edit" form all read from this list.
export const MANIFESTO_VERSION = '1.0';
export const MANIFESTO_DATE = '2026-10-24';
export const MANIFESTO_DATE_LABEL = '24 October 2026';

export const CLAUSES = [
  { n: 1, title: 'Feminism is a political project.' },
  { n: 2, title: 'Hope first. Receipts always.' },
  { n: 3, title: 'Nobody is free until everybody is.' },
  { n: 4, title: 'Safety is a right, not a curfew.' },
  { n: 5, title: 'Care is work.' },
  { n: 6, title: 'Our bodies, our data, our decisions.' },
  { n: 7, title: 'A third is the floor, not the ceiling.' },
  { n: 8, title: 'Memory is power.' },
  { n: 9, title: 'Culture is where politics starts.' },
  { n: 10, title: 'Boys and men are invited.' },
  { n: 11, title: 'Institutions must answer.' },
  { n: 12, title: 'We organise in public, with joy.' },
] as const;

export const pad = (n: number) => String(n).padStart(2, '0');
export const clauseId = (n: number) => `clause-${n}`;
