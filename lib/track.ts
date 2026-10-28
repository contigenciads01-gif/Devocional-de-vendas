export const CHECKOUT_URL =
  process.env.NEXT_PUBLIC_CHECKOUT_URL || "https://pay.kiwify.com.br/placeholder";

type EventPayload = Record<string, string | number | boolean | undefined>;

export function track(eventName: string, payload?: EventPayload) {
  if (typeof window === "undefined") return;

  // Log in dev mode
  if (process.env.NODE_ENV !== "production") {
    console.log(`[Analytics Event] ${eventName}:`, payload);
  }

  // Google Analytics 4
  if (typeof (window as unknown as { gtag?: Function }).gtag === "function") {
    (window as unknown as { gtag: Function }).gtag("event", eventName, payload);
  }

  // Meta Pixel
  if (typeof (window as unknown as { fbq?: Function }).fbq === "function") {
    (window as unknown as { fbq: Function }).fbq("trackCustom", eventName, payload);
  }
}
