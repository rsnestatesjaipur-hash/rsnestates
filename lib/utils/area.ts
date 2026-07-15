export type AreaUnit =
  | "Sq.ft"
  | "Sq.yd"
  | "Sq.m"
  | "Acre"
  | "Hectare";

export function calculateArea(
  length: number,
  width: number
): number {
  return (
    Number(length || 0) *
    Number(width || 0)
  );
}

export function formatArea(
  area: number
): string {
  return Number(area).toLocaleString(
    "en-IN",
    {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }
  );
}