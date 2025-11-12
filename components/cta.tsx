import { Phone, ClipboardList, Percent } from "lucide-react"
import Link from "next/link"

const nomorWhatsApp = "6287821110008";
const pesan = "Halo, saya tertarik dengan properti Samara Asri Wiradadi";
const linkWhatsApp= `https://wa.me/${nomorWhatsApp}?text=${encodeURIComponent(pesan)}`;

export default function CallToAction() {
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
