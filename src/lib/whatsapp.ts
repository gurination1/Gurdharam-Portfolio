export const WHATSAPP_NUMBER = "916280333252";

export function getWhatsAppUrl(message: string): string {
  return `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`;
}
