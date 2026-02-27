// Simple in-memory rate limiter (use Redis in production)
type RateLimitStore = {
  [key: string]: {
    count: number;
    resetTime: number;
    blocked: boolean;
  };
};

const store: RateLimitStore = {};

export const rateLimit = {
  // Check if action is allowed
  check: (key: string, maxAttempts: number = 5, windowMs: number = 15 * 60 * 1000): boolean => {
    const now = Date.now();
    const record = store[key];

    // Clean up old entries
    if (record && now > record.resetTime) {
      delete store[key];
      return true;
    }

    // Check if blocked
    if (record?.blocked) {
      return false;
    }

    // Initialize or increment
    if (!record) {
      store[key] = {
        count: 1,
        resetTime: now + windowMs,
        blocked: false,
      };
      return true;
    }

    // Increment count
    record.count++;

    // Block if exceeded
    if (record.count > maxAttempts) {
      record.blocked = true;
      return false;
    }

    return true;
  },

  // Reset rate limit for a key
  reset: (key: string): void => {
    delete store[key];
  },

  // Get remaining attempts
  remaining: (key: string, maxAttempts: number = 5): number => {
    const record = store[key];
    if (!record) return maxAttempts;
    return Math.max(0, maxAttempts - record.count);
  },

  // Get time until reset
  timeUntilReset: (key: string): number => {
    const record = store[key];
    if (!record) return 0;
    return Math.max(0, record.resetTime - Date.now());
  },
};

// Get client identifier (IP or fingerprint)
export const getClientId = (): string => {
  // In browser, use a simple fingerprint
  // In production, use server-side IP detection
  if (typeof window !== 'undefined') {
    return `browser-${navigator.userAgent.slice(0, 50)}`;
  }
  return 'server';
};

// Format time remaining
export const formatTimeRemaining = (ms: number): string => {
  const minutes = Math.ceil(ms / 60000);
  if (minutes === 1) return '1 minute';
  return `${minutes} minutes`;
};
