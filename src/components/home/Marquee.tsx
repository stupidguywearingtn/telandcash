
export function Marquee() {
  const items = [
    { text: "SAV Humain & Réactif", isHighlight: false },
    { text: "Livraison Gratuite 24/48h", isHighlight: true },
    { text: "+60 Points de Contrôle", isHighlight: false },
    { text: "Stock Vérifié", isHighlight: false },
    { text: "Certifié", isHighlight: true },
    { text: "Garantie 24 Mois", isHighlight: false },
  ];

  // We quadruple the items strictly for an unnoticeable infinite scroll at different screen sizes
  const scrollItems = [...items, ...items, ...items, ...items];

  return (
    <div className="w-full bg-[#0A0F1E] text-white py-3.5 overflow-hidden border-b border-[#2563EB]/20 relative shadow-[0_4px_24px_rgba(10,15,30,0.5)] z-20">
      
      {/* Decorative side fades for that premium, non-generic look */}
      <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-[#0A0F1E] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-[#0A0F1E] to-transparent z-10 pointer-events-none" />
      
      <div className="marquee-container w-full">
        <div className="marquee-content flex items-center">
          {scrollItems.map((item, index) => (
            <div key={index} className="flex items-center gap-6 md:gap-8 mx-6 md:mx-8 group cursor-default">
              <span className={`text-[11px] md:text-[13px] font-black tracking-[0.18em] uppercase transition-colors duration-300 ${item.isHighlight ? 'text-[#2563EB]' : 'text-slate-300 group-hover:text-white'}`}>
                {item.text}
              </span>
              <span className="text-[#2563EB]/60 text-xs mt-[-2px]">✧</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
