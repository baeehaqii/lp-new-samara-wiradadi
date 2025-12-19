"use client"

import { WhatsAppIcon } from "./icons"

// Declare fbq for TypeScript
declare global {
  interface Window {
    fbq?: (action: string, event: string, params?: Record<string, any>) => void;
  }
}

export default function WhatsAppFloat() {
  const handleClick = () => {
    // Track AddToCart event with Meta Pixel
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'AddToCart', {
        content_name: 'WhatsApp Floating Button - Samara Asri Wiradadi',
        content_category: 'Floating Widget',
        content_type: 'WhatsApp Float Button',
        value: 0,
        currency: 'IDR'
      });
    }

    const nomorWhatsApp = "6287821110008";
    const pesan = "Halo, saya tertarik dengan properti Samara Asri Wiradadi";
    window.open(`https://wa.me/${nomorWhatsApp}?text=${encodeURIComponent(pesan)}`, "_blank");

  }

  return (
    <div className="whatsapp-float" onClick={handleClick}>
      <div className="whatsapp-button">
        <WhatsAppIcon size={28} className="whatsapp-icon" />
      </div>
    </div>
  )
}
