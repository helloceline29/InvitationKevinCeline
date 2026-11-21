/* ===== PENGATURAN UNDANGAN — edit file ini saja ===== */
const CONFIG = {
  // Paste your Google Apps Script Web App URL (see apps-script/Code.gs). Empty = demo mode (saved only in this browser).
  rsvpEndpoint: "",
  banks: [
    { id:"mandiri", bank:"Mandiri", name:"Kevin Wang", number:"1050016204244" },
    { id:"bca",     bank:"BCA",     name:"Celine",     number:"5585008653"   }
  ],
  defaultGuest: "Guest",                 // shown if the link has no guest name
  countdownTo: "2026-12-20T12:00:00+07:00", // reception start (WIB)
  maps: {
    groom: "Jl Bukit Barisan II Dalam No 11 B, Medan",
    bride: "Apartemen Grand Jati Junction Tower Eaglewood Unit 18-06, Medan",
    venue: "Wisma Benteng Restaurant, Jl Kapten Maulana Lubis No 6, Medan"
  },
  // Foto galeri (letakkan di assets/gallery/ lalu tulis nama filenya di sini)
  gallery: ["photo-01.jpg","photo-02.jpg","photo-03.jpg","photo-04.jpg","photo-05.jpg","photo-06.jpg","photo-07.jpg","photo-08.jpg","photo-09.jpg","photo-10.jpg"]
};
