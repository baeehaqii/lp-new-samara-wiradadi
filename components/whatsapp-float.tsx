"use client"

import { WhatsAppIcon } from "./icons"

export default function WhatsAppFloat() {
  const handleClick = () => {
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
