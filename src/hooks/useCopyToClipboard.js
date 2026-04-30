import { useCallback, useEffect, useRef, useState } from 'react';

export default function useCopyToClipboard(resetMs = 1800) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef(null);

  const copy = useCallback(
    async (text) => {
      try {
        if (navigator.clipboard?.writeText) {
          await navigator.clipboard.writeText(text);
        } else {
          const ta = document.createElement('textarea');
          ta.value = text;
          ta.setAttribute('readonly', '');
          ta.style.position = 'fixed';
          ta.style.opacity = '0';
          document.body.appendChild(ta);
          ta.select();
          document.execCommand('copy');
          document.body.removeChild(ta);
        }
        setCopied(true);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => setCopied(false), resetMs);
        return true;
      } catch {
        setCopied(false);
        return false;
      }
    },
    [resetMs]
  );

  useEffect(() => () => timeoutRef.current && clearTimeout(timeoutRef.current), []);

  return { copied, copy };
}
