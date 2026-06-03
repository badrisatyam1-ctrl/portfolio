/**
 * Conditionally join class names, filtering out falsy values.
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Format a number with locale-specific separators.
 */
export function formatNumber(num: number): string {
  return new Intl.NumberFormat().format(num);
}
