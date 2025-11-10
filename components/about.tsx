"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react" // Tambahkan import ini
import { X } from "lucide-react" // Tambahkan import ini

export default function About() {
  // Tambahkan state untuk modal
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Button clicked, opening modal');
    setIsModalOpen(true);
  }

  console.log('About component rendered, isModalOpen:', isModalOpen);

  return (
    <section id="tentang-kami" className="section about-section">
      <div className="container">
        <div className="about-grid">
          {/* Card utama dengan gambar dan teks */}
          <div className="about-main-card">
            {/* Container gambar */}
            <div className="about-image-container">
              <Image
                src="https://res.cloudinary.com/dqobwse9q/image/upload/v1762294333/shamara_1_jbfudu.avif"
                alt="Samara Asri Wiradadi"
                width={600}
                height={450}
                className="about-image"
                sizes="(max-width: 768px) 100vw, 600px"
                loading="lazy"
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
            </div>

            {/* Konten teks */}
            <div className="about-content">
              <h2 className="about-title">Samara Asri Wiradadi</h2>
              <p className="about-description">
                Berada di Dusun III, Desa Wiradadi, Sokaraja, Samara Asri Wiradadi menghadirkan perumahan Purwokerto yang ideal bagi keluarga muda. Hunian ini dirancang fungsional dengan lingkungan tertata, legalitas aman, dan akses mudah ke pusat kota, sekolah, serta fasilitas sehari-hari. Setiap unit nyaman untuk rumah pertama, dengan desain efisien dan area hijau yang mendukung aktivitas keluarga. Di sini, setiap hari menjadi kesempatan untuk menciptakan momen berharga bersama orang-orang tercinta.
              </p>
              <div>
                {/* Ubah Link menjadi button untuk membuka modal */}
                <button
                  onClick={handleOpenModal}
                  className="about-link"
                  type="button"
                >
                  Baca Selengkapnya
                </button>
              </div>
            </div>
          </div>

          {/* Container statistik */}
          <div className="about-stats-grid">
            {/* Statistik - Projects Completed */}
            <div className="about-stat-card">
              <div className="about-stat-value">1</div>
              <div className="about-stat-label">Perumahan Terbaik di Purwokerto</div>
            </div>

            {/* Statistik - Awards */}
            <div className="about-stat-card">
              <div className="about-stat-value">500+</div>
              <div className="about-stat-label">Keluarga Sapphire</div>
            </div>

            {/* Statistik - Satisfied Clients */}
            <div className="about-stat-card">
              <div className="about-stat-value">5+</div>
              <div className="about-stat-label">CCTV Kawasan</div>
            </div>

            {/* Statistik - Years of Experience */}
            <div className="about-stat-card">
              <div className="about-stat-value">19</div>
              <div className="about-stat-label">Tahun Pengalaman</div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setIsModalOpen(false)}>
              <X />
            </button>
            <div className="modal-content">
              <h2 className="modal-title">Samara Asri Wiradadi</h2>
              <div className="modal-image">
                <Image
                  src="https://res.cloudinary.com/dqobwse9q/image/upload/v1762294333/shamara_1_jbfudu.avif"
                  alt="Samara Asri Wiradadi"
                  width={700}
                  height={400}
                  style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                />
              </div>
              <div className="modal-description">
                <p>
                  Berada di Dusun III, Desa Wiradadi, Sokaraja, Samara Asri Wiradadi menghadirkan perumahan Purwokerto yang ideal bagi keluarga muda. Hunian ini dirancang fungsional dengan lingkungan tertata, legalitas aman, dan akses mudah ke pusat kota, sekolah, serta fasilitas sehari-hari. Setiap unit nyaman untuk rumah pertama, dengan desain efisien dan area hijau yang mendukung aktivitas keluarga. Di sini, setiap hari menjadi kesempatan untuk menciptakan momen berharga bersama orang-orang tercinta.
                </p>

                <h3 className="modal-subtitle">Keunggulan Lokasi</h3>
                <ul className="modal-list">
                  <li>10 menit ke fasilitas kesehatan</li>
                  <li>5 menit ke fasilitas pendidikan</li>
                  <li>5 menit ke pusat perbelanjaan dan pasar tradisional</li>
                  <li>10 menit ke pusat kota Purwokerto</li>
                  <li>Lingkungan tenang, bebas polusi dan kebisingan</li>
                  <li>Dikelilingi area hijau</li>
                </ul>

                <h3 className="modal-subtitle">Fasilitas Premium</h3>
                <ul className="modal-list">
                  <li>Keamanan 24 jam dengan petugas sekuriti dan sistem one gate</li>
                  <li>Dekat jalan utama, memudahkan akses transportasi umum dan mobilitas</li>
                  <li>Ruang terbuka hijau dengan suasana asri dan udara segar</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
