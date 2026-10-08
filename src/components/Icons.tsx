type IconProps = {
  className?: string;
};

/** Pootafdruk, het terugkerende beeldmerk uit het logo */
export function Poot({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <ellipse cx="6.2" cy="9.6" rx="2.3" ry="3" />
      <ellipse cx="11" cy="6.6" rx="2.4" ry="3.2" />
      <ellipse cx="16.2" cy="7.6" rx="2.3" ry="3" />
      <ellipse cx="20" cy="11.8" rx="2" ry="2.6" />
      <path d="M12.4 12.2c2.7 0 5.4 2 6.1 4.4.6 2-.7 3.8-2.8 3.8-1.2 0-2.2-.5-3.3-.5s-2.1.5-3.3.5c-2.1 0-3.4-1.8-2.8-3.8.7-2.4 3.4-4.4 6.1-4.4Z" />
    </svg>
  );
}

export function Blad({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M20 3c-9 0-15 3.8-15 11 0 2.2.7 4.1 1.9 5.5L4 22.4 5.4 23.8l2.9-2.9C9.7 22 11.6 22.6 13.7 22.6 19.4 22.6 21 15.5 20 3ZM8.4 18.6c-.5-.8-.8-1.8-.8-3 0-4.7 3.8-7.6 10-8.3-3.8 1.2-7 3.9-9.2 11.3Z" />
    </svg>
  );
}

export function Hart({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 21s-7.8-4.9-9.8-9.4C.5 7.9 2.6 4 6.4 4c2.3 0 3.9 1.3 5.6 3.4C13.7 5.3 15.3 4 17.6 4c3.8 0 5.9 3.9 4.2 7.6C19.8 16.1 12 21 12 21Z" />
    </svg>
  );
}

export function Telefoon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M6.6 3h3.1l1.7 4.3-2.2 1.5c.9 2 2.5 3.6 4.5 4.6l1.5-2.2 4.3 1.7v3.1c0 1.1-.9 2-2 2C10.1 18 6 13.9 6 5c0-1.1.5-2 .6-2Z" />
    </svg>
  );
}

export function Mail({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm1.8 2L12 12.2 19.2 7H4.8Z" />
    </svg>
  );
}

export function Speld({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 2c4 0 7 3 7 7 0 5.2-7 13-7 13S5 14.2 5 9c0-4 3-7 7-7Zm0 4.6A2.6 2.6 0 1 0 12 12a2.6 2.6 0 0 0 0-5.4Z" />
    </svg>
  );
}

export function Klok({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1 4v6.2l4 2.4-.9 1.6L11 13V6h2Z" />
    </svg>
  );
}

export function Bus({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M3 13.5 4.6 8A2 2 0 0 1 6.5 6.5h11A2 2 0 0 1 19.4 8L21 13.5V19h-2.5v-1.5h-13V19H3v-5.5Zm2.4-.5h13.2l-1.1-4.2a.5.5 0 0 0-.5-.3H7a.5.5 0 0 0-.5.3L5.4 13Zm1.3 3.3a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4Zm10.6 0a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4Z" />
    </svg>
  );
}

export function Camera({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M9.2 4h5.6l1.3 2H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.9l1.3-2ZM12 9a4.3 4.3 0 1 0 0 8.6A4.3 4.3 0 0 0 12 9Zm0 2a2.3 2.3 0 1 1 0 4.6 2.3 2.3 0 0 1 0-4.6Z" />
    </svg>
  );
}

export function Schild({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 2 20 5v6.4c0 5-3.4 9.3-8 10.6-4.6-1.3-8-5.6-8-10.6V5l8-3Zm-1 13.8 5.3-5.3-1.5-1.4L11 13l-1.9-1.9-1.4 1.5 3.3 3.2Z" />
    </svg>
  );
}

export function Vink({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M9.6 17.3 4.3 12l1.4-1.4 3.9 3.9 8.7-8.7L19.7 7 9.6 17.3Z" />
    </svg>
  );
}

export function Pijl({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="m13.2 5 7 7-7 7-1.4-1.4 4.6-4.6H4v-2h12.4l-4.6-4.6L13.2 5Z" />
    </svg>
  );
}

export function Chevron({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 15.4 5.6 9l1.4-1.4 5 5 5-5L18.4 9 12 15.4Z" />
    </svg>
  );
}

export function WhatsApp({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm0 2a8 8 0 1 1-4.2 14.8l-.4-.2-2.7.7.7-2.6-.2-.4A8 8 0 0 1 12 4Zm-3.5 4c-.2 0-.5.1-.7.4-.3.3-.9.9-.9 2.1s.9 2.4 1 2.6c.2.2 1.8 2.9 4.5 3.9 2.2.9 2.7.7 3.2.7.5 0 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.6-.3l-2-1c-.3-.1-.5-.1-.7.2l-.7.9c-.1.2-.3.2-.5.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.1-.3 0-.4.1-.5l.5-.6c.1-.2.2-.3.3-.5 0-.2 0-.4-.1-.5l-.8-2c-.2-.5-.4-.5-.6-.5Z" />
    </svg>
  );
}

export function Instagram({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.4-2.6a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z" />
    </svg>
  );
}

export function Facebook({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M13.5 22v-8h2.7l.4-3.1h-3.1V8.9c0-.9.3-1.5 1.6-1.5h1.6V4.6c-.3 0-1.3-.1-2.4-.1-2.4 0-4.1 1.5-4.1 4.2v2.2H7.5V14h2.7v8h3.3Z" />
    </svg>
  );
}
