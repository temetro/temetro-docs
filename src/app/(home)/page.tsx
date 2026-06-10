import Image from 'next/image';
import Link from 'next/link';

const sections = [
  {
    title: 'Using temetro',
    description:
      'A tour of the chat, patient record cards, scheduling, tasks, and messaging — written for clinicians, not programmers.',
    href: '/docs/guides/chat',
  },
  {
    title: 'Self-hosting',
    description:
      'Install temetro on your own server with Docker Compose and keep your clinic’s data under your control.',
    href: '/docs/admin/self-hosting',
  },
  {
    title: 'API reference',
    description:
      'Every endpoint with example requests and responses — patients, appointments, prescriptions, tasks, and more.',
    href: '/docs/api',
  },
  {
    title: 'Roadmap & vision',
    description:
      'What works today, what’s planned — including patient-owned records with signed, patient-approved changes.',
    href: '/docs/roadmap',
  },
];

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-4 py-16">
      <div className="flex w-full max-w-3xl flex-col items-center text-center">
        <Image
          src="/logo-dark.png"
          alt="temetro logo"
          width={96}
          height={96}
          className="invert dark:invert-0"
          priority
        />
        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-fd-foreground">
          temetro
        </h1>
        <p className="mt-4 max-w-xl text-lg text-fd-muted-foreground">
          An open-source clinical tool that puts an AI chat between clinicians
          and patient data — ask for a chart, get organized record cards back.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/docs/quickstart"
            className="rounded-lg bg-fd-primary px-5 py-2.5 text-sm font-medium text-fd-primary-foreground transition-opacity hover:opacity-90"
          >
            Get started
          </Link>
          <Link
            href="/docs"
            className="rounded-lg border border-fd-border bg-fd-secondary px-5 py-2.5 text-sm font-medium text-fd-secondary-foreground transition-colors hover:bg-fd-accent"
          >
            Read the docs
          </Link>
        </div>
      </div>

      <div className="mt-16 grid w-full max-w-3xl gap-4 sm:grid-cols-2">
        {sections.map((section) => (
          <Link
            key={section.href}
            href={section.href}
            className="rounded-xl border border-fd-border bg-fd-card p-5 text-left transition-colors hover:bg-fd-accent"
          >
            <h2 className="font-medium text-fd-card-foreground">
              {section.title}
            </h2>
            <p className="mt-2 text-sm text-fd-muted-foreground">
              {section.description}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}
