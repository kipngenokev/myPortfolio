import { useEffect } from 'react';

export default function useBodyLock(locked) {
  useEffect(() => {
    if (!locked) return;
    document.body.classList.add('is-locked');
    return () => document.body.classList.remove('is-locked');
  }, [locked]);
}
