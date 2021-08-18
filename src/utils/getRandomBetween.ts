export function getRandomBetween(min: number, max: number): string {
  return String(Math.random() * (max - min) + min);
}
