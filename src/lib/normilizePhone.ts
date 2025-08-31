export function normalizePhone(input: string): string {
  const cleaned = input.replace(/\D/g, "");
  if (!cleaned) return "";
  if (cleaned.startsWith("371")) return cleaned;
  else if (cleaned.startsWith("8") && cleaned.length === 8) {
    console.log(cleaned, "cleaned");
    return `371${cleaned}`;
  }

  return cleaned;
}
