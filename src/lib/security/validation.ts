// Email validation with strict regex
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email) && email.length <= 254;
};

// Sanitize string input to prevent XSS
export const sanitizeInput = (input: string): string => {
  return input
    .replace(/[<>]/g, '') // Remove < and >
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers
    .trim()
    .slice(0, 1000); // Limit length
};

// Validate URL
export const validateURL = (url: string): boolean => {
  try {
    const urlObj = new URL(url);
    return ['http:', 'https:'].includes(urlObj.protocol);
  } catch {
    return false;
  }
};

// Password strength validation
export const validatePassword = (password: string): { valid: boolean; message: string } => {
  if (password.length < 12) {
    return { valid: false, message: 'Password must be at least 12 characters' };
  }
  if (!/[A-Z]/.test(password)) {
    return { valid: false, message: 'Password must contain uppercase letter' };
  }
  if (!/[a-z]/.test(password)) {
    return { valid: false, message: 'Password must contain lowercase letter' };
  }
  if (!/[0-9]/.test(password)) {
    return { valid: false, message: 'Password must contain number' };
  }
  if (!/[^A-Za-z0-9]/.test(password)) {
    return { valid: false, message: 'Password must contain special character' };
  }
  return { valid: true, message: 'Password is strong' };
};

// Check for common SQL injection patterns
export const detectSQLInjection = (input: string): boolean => {
  const sqlPatterns = [
    /(\bOR\b|\bAND\b).*=.*=/i,
    /UNION.*SELECT/i,
    /DROP.*TABLE/i,
    /INSERT.*INTO/i,
    /DELETE.*FROM/i,
    /--/,
    /;.*DROP/i,
    /'\s*OR\s*'1'\s*=\s*'1/i,
  ];

  return sqlPatterns.some(pattern => pattern.test(input));
};

// Validate form submission timing (detect bots)
export const validateFormTiming = (startTime: number): boolean => {
  const elapsed = Date.now() - startTime;
  // Human takes at least 2 seconds to fill form
  return elapsed > 2000 && elapsed < 300000; // Less than 5 minutes
};

// Check honeypot field (should be empty)
export const checkHoneypot = (value: string): boolean => {
  return value === '';
};
