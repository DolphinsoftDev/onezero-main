export function validateEmail(email: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function isValidIsraeliPhone(phone: string): boolean {
  const regex = /\b05\d{8}\b/;
  return regex.test(phone);
}
