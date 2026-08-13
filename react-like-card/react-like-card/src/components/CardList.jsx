import Card from './Card.jsx';

// Centralizing the content here keeps Card.jsx purely presentational —
// it only knows how to render whatever { title, tag, description } it's given.
const TECHNOLOGIES = [
  {
    title: 'React',
    tag: 'library',
    description: 'Build modern and interactive user interfaces from reusable components.',
  },
  {
    title: 'JavaScript',
    tag: 'language',
    description: 'The programming language of the web — runs in every browser, no exceptions.',
  },
  {
    title: 'Python',
    tag: 'language',
    description: 'A beginner-friendly and powerful language for scripting, data, and backends.',
  },
  {
    title: 'Node.js',
    tag: 'runtime',
    description: 'Runs JavaScript outside the browser, powering fast and scalable servers.',
  },
  {
    title: 'MongoDB',
    tag: 'database',
    description: 'A flexible NoSQL database that stores data as JSON-like documents.',
  },
  {
    title: 'Git & GitHub',
    tag: 'tooling',
    description: 'Track every change to your code and collaborate with the rest of the world.',
  },
];

function CardList() {
  return (
    <section className="card-grid" aria-label="Technology cards">
      {TECHNOLOGIES.map((tech) => (
        <Card
          key={tech.title}
          title={tech.title}
          tag={tech.tag}
          description={tech.description}
        />
      ))}
    </section>
  );
}

export default CardList;
