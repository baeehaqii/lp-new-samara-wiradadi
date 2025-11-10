import { School, Hospital, TreePine, ShoppingBag } from "lucide-react"

export default function Accessibility() {
  const facilities = [
    {
      icon: <TreePine />,
      title: "Fasilitas Publik",
      items: [
        "2 menit dari SPBU Candimas Karangnanas",
        "8 minutes from Terminal Bus Purwokerto.",
        "10 menit dari Taman Andhang Pangrenan",
        "15 menit dari Alun-Alun Purwokerto",
      ],
    },
    {
      icon: <School />,
      title: "Fasilitas Pendidikan",
      items: [
        "1 menit dari SDN Wiradadi",
        "7 menit dari SMPN 1 Sokaraja",
        "11 menit dari  SMAN 1 Sokaraja",
      ],
    },
    {
      icon: <Hospital />,
      title: "Fasilitas Kesehatan",
      items: ["4 menit dari RS Wiradadi Husada", "7 menit dari RSUD Prof. Dr. Margono Soekarjo", "8 menit dari RS Orthopaedi Purwokerto"],
    },
    {
      icon: <ShoppingBag />,
      title: "Fasilitas Perbelanjaan",
      items: ["5 minutes from Depo Pelita Mall", "11 minutes from Pasar Wage.", "15 minutes from Rita Supermall Purwokerto"],
    },
  ]

  return (
    <section id="aksesibilitas" className="accessibility-section">
      <div className="container">
        <h2 className="section-title">Akses Mudah</h2>
        <h3 className="accessibility-subtitle">Terhubung dengan Segala Kebutuhan</h3>

        <div className="accessibility-grid">
          {facilities.map((facility, index) => (
            <div key={index} className="accessibility-card about-stat-card">
              <div className="accessibility-header">
                <div className="accessibility-icon">{facility.icon}</div>
                <h3 className="accessibility-title">{facility.title}</h3>
              </div>

              <ul className="accessibility-list">
                {facility.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="accessibility-item">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
