import { profile } from "@/content/site";

function ChatGptIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M12 2L14.5 7.5L20 8L15.5 12L17 18L12 15L7 18L8.5 12L4 8L9.5 7.5L12 2Z" />
      <path d="M18 14L19.5 17.5L23 18L20.5 20.5L21.5 24L18 22L14.5 24L15.5 20.5L13 18L16.5 17.5L18 14Z" opacity="0.5" />
    </svg>
  );
}

/**
 * "Ask GPT about me" badge — opens ChatGPT with a pre-filled query
 * about Dr. Yousafzai, with the portfolio link included.
 */
export function AskGptBadge({ className = "" }: { className?: string }) {
  const query = `who is ${profile.name}?`;
  const chatGptUrl = `https://chatgpt.com/?q=${encodeURIComponent(query)}`;

  return (
    <a
      href={chatGptUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-2.5 rounded-full border border-ink/15 bg-paper px-5 py-2.5 text-sm text-ink-soft transition-all duration-300 hover:border-oxblood hover:text-oxblood ${className}`}
    >
      <ChatGptIcon />
      <span className="font-medium">Ask GPT about me</span>
      <span
        aria-hidden="true"
        className="transition-transform duration-300 group-hover:translate-x-0.5"
      >
        ↗
      </span>
    </a>
  );
}
