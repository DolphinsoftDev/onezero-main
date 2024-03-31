export function generateURLWithSearchParams(baseURL: string): string {
  return `${baseURL}${window.location.search}`;
}