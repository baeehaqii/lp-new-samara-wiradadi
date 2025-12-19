"use client"

import { Phone, ClipboardList, Percent } from "lucide-react"
import Link from "next/link"

// Declare fbq for TypeScript
declare global {
  interface Window {
    fbq?: (action: string, event: string, params?: Record<string, any>) => void;
  }
}

const nomorWhatsApp = "6287821110008";
const pesan = "Halo, saya tertarik dengan properti Samara Asri Wiradadi";
const linkWhatsApp = `https://wa.me/${nomorWhatsApp}?text=${encodeURIComponent(pesan)}`;

export default function CallToAction() {
  const handleWhatsAppClick = () => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'AddToCart', {
        content_name: 'WhatsApp CTA - Samara Asri Wiradadi',
        content_category: 'CTA Section',
        content_type: 'WhatsApp Button',
        value: 0,
        currency: 'IDR'
      });
    }
  };

  const handlePromoClick = () => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'AddToCart', {
        content_name: 'Promo Button - Samara Asri Wiradadi',
        content_category: 'CTA Section',
        content_type: 'Promo WhatsApp Button',
        value: 0,
        currency: 'IDR'
      });
    }
  };

  return (
    <section id="cta" className="cta-section">
      <div className="container">
        <div className="cta-container">
          <h2 className="cta-title">Tinggal Lebih Tenang, Hidup Lebih Berkualitas</h2>
          <p className="cta-description">
            Waktunya pindah ke hunian yang nyaman, aman, dan sesuai gaya Anda. Cek unitnya sekarang juga!
          </p>

          <div className="cta-buttons">
            <Link
              href={linkWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button cta-button-primary"
              onClick={handleWhatsAppClick}
            >
              <Phone className="cta-button-icon" />
              Whatsapp Kami
            </Link>
            <Link
              //border cta
              href={linkWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button cta-button-outline"
              onClick={handlePromoClick}
            >
              <Percent className="cta-button-icon" />
              Dapatkan Promo
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
