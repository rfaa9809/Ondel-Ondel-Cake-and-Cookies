const WA_NUMBER = "6285716275965";

// ============================================================
// Navbar — transparan → gelap saat scroll
// ============================================================
const nav = document.getElementById("mainNav");
window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 40);
});

// ============================================================
// 🛒 WhatsApp Order
//    Dipanggil via onclick di tiap tombol produk
// ============================================================
function orderViaWhatsApp(productName, price) {
  const pesan =
    `Halo Kak Ondel-Ondel! 👋\n` +
    `Saya ingin memesan produk berikut:\n\n` +
    `🍪 *Produk :* ${productName}\n` +
    `💰 *Harga  :* ${price} / toples\n\n` +
    `Mohon isi data saya:\n` +
    `👤 *Nama          :* \n` +
    `📍 *Alamat Lengkap:* \n` +
    `📦 *Jumlah        :* \n` +
    `🚚 *Pengiriman    :* (pickup / kirim)\n\n` +
    `Terima kasih! 🙏`;

  const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(pesan)}`;
  window.open(url, "_blank");
}

// ============================================================
// 📦 Expand / Collapse extra products
// ============================================================
const toggleBtn    = document.getElementById("toggleBtn");
const extraGrid    = document.getElementById("extraGrid");
const extraCards   = document.querySelectorAll(".card-extra");
const divider      = document.getElementById("expandDivider");
const btnText      = document.getElementById("btnText");
const iconShow     = document.getElementById("iconShow");
const iconCollapse = document.getElementById("iconCollapse");
let isExpanded     = false;

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    isExpanded = !isExpanded;

    if (isExpanded) {
      extraGrid.classList.add("open");
      divider.classList.add("visible");
      extraGrid.offsetHeight; // force reflow agar CSS transition jalan
      extraCards.forEach((card, i) => {
        setTimeout(() => card.classList.add("revealed"), i * 80);
      });
      btnText.textContent = "Sembunyikan";
      iconShow.classList.add("hidden");
      iconCollapse.classList.remove("hidden");

      setTimeout(() => {
        extraGrid.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 250);

    } else {
      extraCards.forEach((card) => card.classList.remove("revealed"));
      setTimeout(() => {
        extraGrid.classList.remove("open");
        divider.classList.remove("visible");
      }, 450);
      btnText.textContent = "Lihat Semua Produk";
      iconShow.classList.remove("hidden");
      iconCollapse.classList.add("hidden");
      document
        .getElementById("productSection")
        .scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
}

function switchExploreTab(tab) {
    document.querySelectorAll('.explore-panel').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.explore-tab').forEach(t => t.classList.remove('active-tab'));
    document.getElementById('panel-' + tab).classList.add('active');
    document.getElementById('tab-' + tab).classList.add('active-tab');
}