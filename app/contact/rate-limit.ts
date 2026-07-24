const windowMs = 10 * 60 * 1000;
const maximumAttempts = 3;
const attempts = new Map<string, number[]>();

export function isRateLimited(key: string | null) {
  if (!key) return false;

  const now = Date.now();
  const activeAttempts = (attempts.get(key) ?? []).filter(
    (timestamp) => now - timestamp < windowMs,
  );

  if (activeAttempts.length >= maximumAttempts) {
    attempts.set(key, activeAttempts);
    return true;
  }

  activeAttempts.push(now);
  attempts.set(key, activeAttempts);

  if (attempts.size > 500) {
    for (const [storedKey, timestamps] of attempts) {
      if (timestamps.every((timestamp) => now - timestamp >= windowMs)) {
        attempts.delete(storedKey);
      }
    }
  }

  return false;
}
