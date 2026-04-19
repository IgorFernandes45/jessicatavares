import { MessageCircleMore } from 'lucide-react';

export function StickyContactBar({ href, text }: { href: string; text: string }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 md:px-6 md:pb-6">
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="mx-auto flex max-w-3xl items-center justify-center gap-3 rounded-full bg-[#2d241f] px-6 py-4 text-sm font-medium text-white shadow-soft transition hover:-translate-y-0.5"
      >
        <MessageCircleMore size={18} />
        {text}
      </a>
    </div>
  );
}
