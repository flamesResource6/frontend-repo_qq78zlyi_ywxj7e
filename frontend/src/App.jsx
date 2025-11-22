import React from 'react'

const Section = ({ id, title, children }) => (
  <section id={id} className="max-w-6xl mx-auto px-6 py-16 border-b border-white/10">
    {title && (
      <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-amber-400 mb-6 uppercase">
        {title}
      </h2>
    )}
    <div className="text-white/90 leading-relaxed text-lg md:text-xl font-light">
      {children}
    </div>
  </section>
)

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur bg-black/60 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-amber-400"></div>
            <span className="text-sm tracking-widest text-white/80">KOLEKSI KALPATARU</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
            <a href="#home" className="hover:text-white transition">Beranda</a>
            <a href="#manifesto" className="hover:text-white transition">Manifesto</a>
            <a href="#vault" className="hover:text-white transition">Koleksi</a>
            <a href="#delivery" className="hover:text-white transition">Layanan</a>
            <a href="#contact" className="hover:text-white transition">Audiensi</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black/40" />
        <div className="relative max-w-6xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
              Berhenti Mencari Oleh-Oleh Khas Malang di Sini.
            </h1>
            <p className="mt-6 text-white/80 text-lg md:text-xl">
              Kami hanya mengkurasi apa yang sebenarnya Anda inginkan: Hype terbaik dari seluruh Indonesia, kini di Jl. Kalpataru.
            </p>
            <div className="mt-10 flex items-center gap-4">
              <a href="#vault" className="px-6 py-3 bg-amber-400 text-black font-bold uppercase tracking-wider hover:bg-amber-300 transition">
                Lihat Koleksi (Jika Anda Berani)
              </a>
              <a href="#manifesto" className="px-6 py-3 border border-white/20 text-white/80 hover:text-white hover:border-white/40 transition">
                Kenapa Kami Sombong?
              </a>
            </div>
            <p className="mt-6 text-amber-400 text-sm tracking-widest uppercase">Malang punya apel. Kami punya selera.</p>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-xl bg-gradient-to-br from-zinc-900 to-black border border-white/10 p-6 flex items-center justify-center">
              <div className="w-full h-full rounded bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.08),transparent_60%)] flex items-center justify-center">
                <div className="text-center">
                  <div className="text-white/50 text-sm mb-3">The Hall of Fame</div>
                  <div className="text-5xl">🍫🥮🥧</div>
                  <div className="mt-3 text-white/60">Produk difoto layaknya permata di atas marmer hitam.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manifesto Summary */}
      <Section id="manifesto" title="Kenapa Kami Sombong?">
        <p>
          Sederhana. Kami lelah melihat orang Malang menghabiskan waktu dan tiket untuk sesuatu yang seharusnya bisa mereka nikmati di sini. Kami melakukan riset. Kami memilih yang terbaik. Kami membawa Tiramisusu, Bakpia, dan Pie Susu premium ke depan pintu Anda. Anggap kami sebagai taste-filter pribadi Anda. Anda tidak perlu berterima kasih.
        </p>
      </Section>

      {/* Featured Collection */}
      <Section id="vault" title="Pilihan Tak Terbantahkan Bulan Ini">
        <div className="grid md:grid-cols-4 gap-6">
          {[{
            name: 'Tiramisusu by Chocomory', tag:'Histeria Bandung', desc:'Kelembutan yang viral. Kini tanpa macet Pasteur.'
          },{
            name: 'Bakpia Pathok', tag:'Standar Emas Jogja', desc:'Lupakan yang lain. Ini tolok ukur bakpia.'
          },{
            name: 'Pie Susu by Cimory', tag:'Dambaan dari Bali', desc:'Creamy, tak terbantahkan, tentu kami punya.'
          },{
            name: 'Falala Chocolate', tag:'Elegansi Bali', desc:'Intisari Dewata tanpa keramaian turis.'
          }].map((p, i) => (
            <div key={i} className="group border border-white/10 rounded-xl p-6 bg-zinc-950/60 hover:bg-zinc-900/50 transition">
              <div className="text-xs tracking-widest text-amber-400 uppercase">{p.tag}</div>
              <h3 className="mt-2 text-xl font-bold">{p.name}</h3>
              <p className="mt-3 text-white/70">{p.desc}</p>
              <button className="mt-6 w-full px-4 py-2 bg-white text-black font-semibold tracking-wide hover:bg-amber-400 transition">
                Tambah ke Koleksi
              </button>
            </div>
          ))}
        </div>
      </Section>

      {/* Delivery Standard */}
      <Section id="delivery" title="Layanan Kami: Kecepatan di Atas Keramahan">
        <ul className="space-y-6">
          <li>
            <h4 className="text-white font-semibold">Kecepatan Superior</h4>
            <p className="text-white/70">Kami menjamin kesegaran yang sama seperti Anda membelinya langsung (atau lebih baik, karena Anda tidak perlu berjuang mendapatkannya).</p>
          </li>
          <li>
            <h4 className="text-white font-semibold">Pengemasan Tak Tersentuh</h4>
            <p className="text-white/70">Produk dikirim dalam kemasan premium kami. Agar oleh-oleh Anda tidak terlihat seperti jasa titip biasa.</p>
          </li>
          <li>
            <h4 className="text-white font-semibold">Area Layanan (Malang Raya)</h4>
            <p className="text-white/70">Kami melayani zona Malang Raya. Jika Anda berada di luar zona, silakan hubungi asisten pribadi kami. Kami mungkin akan mempertimbangkannya.</p>
          </li>
        </ul>
      </Section>

      {/* FAQ */}
      <Section id="faq" title="Pertanyaan Anda yang Terlalu Jelas">
        <div className="space-y-6">
          <div>
            <div className="font-semibold">Kenapa tidak ada oleh-oleh khas Malang sama sekali?</div>
            <p className="text-white/70">Jl. Sanan sudah penuh dengan keripik tempe. Kami di sini untuk sesuatu yang berbeda. Sesuatu yang lebih.</p>
          </div>
          <div>
            <div className="font-semibold">Apakah ini produk asli?</div>
            <p className="text-white/70">Kami tidak punya waktu, atau selera, untuk barang palsu. Hanya 100% otentik, 100% viral.</p>
          </div>
          <div>
            <div className="font-semibold">Lokasinya di Jl. Kalpataru? Agak tersembunyi, ya?</div>
            <p className="text-white/70">Eksklusivitas tidak berteriak di pinggir jalan raya. Hanya yang serius yang akan menemukan kami.</p>
          </div>
          <div>
            <div className="font-semibold">Kenapa harganya premium?</div>
            <p className="text-white/70">Anda membayar untuk kurasi. Anda membayar untuk kenyamanan. Anda membayar untuk fakta bahwa Anda tidak perlu ke Bandung akhir pekan ini.</p>
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Minta Audiensi">
        <p className="mb-6">Kami sangat sibuk mengkurasi produk berikutnya. Tapi jika memang ada hal yang sangat penting, tim kami akan meninjaunya.</p>
        <form className="grid md:grid-cols-2 gap-6">
          <input className="bg-transparent border border-white/20 px-4 py-3 outline-none placeholder-white/40" placeholder="Nama" />
          <input className="bg-transparent border border-white/20 px-4 py-3 outline-none placeholder-white/40" placeholder="Email" />
          <input className="md:col-span-2 bg-transparent border border-white/20 px-4 py-3 outline-none placeholder-white/40" placeholder="Subjek Urgensi Anda" />
          <textarea rows="5" className="md:col-span-2 bg-transparent border border-white/20 px-4 py-3 outline-none placeholder-white/40" placeholder="Pesan" />
          <button className="md:col-span-2 px-6 py-3 bg-amber-400 text-black font-bold uppercase tracking-wider hover:bg-amber-300 transition">Kirim (Jika Penting)</button>
        </form>
      </Section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 text-center text-white/50 text-sm">
        Jl. Kalpataru, Malang — Koleksi Kalpataru. "Kami tidak jual oleh-oleh Malang. Kami jual yang lebih baik."
      </footer>
    </div>
  )
}

export default App
