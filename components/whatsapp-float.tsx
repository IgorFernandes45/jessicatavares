import { MessageCircleMore } from 'lucide-react';

export function WhatsAppFloat({ href, text }: { href: string; text: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-24 right-5 z-50 inline-flex items-center gap-3 rounded-full bg-[#2d241f] px-5 py-3 text-sm text-white shadow-soft transition hover:-translate-y-1 md:bottom-7"
    >
      <MessageCircleMore size={18} />
      <span className="hidden sm:inline">{text}</span>
    </a>
  );
}
