import { useEffect, useState } from "react";
import { Gift, Camera } from "lucide-react";

export default function ClosingSection({ photos, onSelectImage, onOpenBrideQr, onOpenGroomQr }) {
  const [activePhoto, setActivePhoto] = useState(0);

  useEffect(() => {
    if (photos.length < 2) return undefined;

    const carouselTimer = setInterval(() => {
      setActivePhoto((current) => (current + 1) % photos.length);
    }, 6000);

    return () => clearInterval(carouselTimer);
  }, [photos.length]);

  return (
    <>
      <section className="py-20 bg-[#F4EDE2] px-4">
        <div className="max-w-5xl mx-auto text-center space-y-16">
          {/* Hộp Mừng Cưới (QR Code) */}
          <div className="bg-white p-8 md:p-12 rounded-3xl border border-[#EFE7DC] shadow-sm max-w-3xl mx-auto space-y-6">
            <Gift className="w-12 h-12 text-[#C8A97E] mx-auto" />
            <span className="font-calligraphy text-4xl text-[#B38B59] block">
              Hộp Mừng Cưới
            </span>
            <p className="text-stone-600 text-sm max-w-md mx-auto leading-relaxed">
              Nếu không thể tham dự trực tiếp, quý vị có thể gửi lời mừng đến
              chú rể và cô dâu qua mã QR dưới đây:
            </p>

            <div className="flex flex-col justify-center gap-3 pt-2 sm:flex-row">
              <button
                onClick={onOpenBrideQr}
                className="px-7 py-3 bg-[#FDF0F0] border border-[#E8C5C8] text-[#C87D87] rounded-xl hover:bg-[#C87D87] hover:text-white transition-colors text-xs font-semibold tracking-wider uppercase"
              >
                Gửi Mừng Cô Dâu
              </button>
              <button
                onClick={onOpenGroomQr}
                className="rounded-xl border border-[#B8D4C1] bg-[#EDF4F0] px-7 py-3 text-xs font-semibold uppercase tracking-wider text-[#5B856D] transition-colors hover:bg-[#5B856D] hover:text-white"
              >
                Gửi Mừng Chú Rể
              </button>
            </div>
          </div>

          {/* Lời Cảm Ơn */}
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="font-calligraphy text-4xl text-[#B38B59] block">
              Lời Cảm Ơn
            </span>
            <h3 className="font-serif-custom text-2xl text-[#3D3429]">
              Hai Gia Đình Xin Chân Thành Cảm Ơn
            </h3>
            <p className="text-stone-600 italic leading-relaxed text-sm md:text-base">
              "Sự hiện diện, lời chúc phúc và tình cảm yêu thương của Quý vị là
              hành trang vô giá để chúng tôi xây dựng một mái ấm gia đình hạnh
              phúc bền lâu. Xin chân thành cảm ơn!"
            </p>
          </div>

          {/* Album Kỷ Niệm Xoay Vòng */}
          <div className="space-y-6 pt-8">
            <div className="text-center">
              <span className="font-calligraphy text-4xl text-[#B38B59] block">
                Album Ảnh Kỷ Niệm
              </span>
              <h3 className="font-serif-custom text-2xl text-[#3D3429] mt-1">
                Khoảnh Khắc Đáng Nhớ
              </h3>
              <p className="text-xs text-stone-400 mt-2 tracking-wide">
                Những kỷ niệm đẹp của chúng mình
              </p>
            </div>

            <div className="relative h-[25rem] md:h-[30rem] overflow-hidden">
              {photos.map((photo, index) => {
                const forwardDistance =
                  (index - activePhoto + photos.length) % photos.length;
                const offset =
                  forwardDistance > photos.length / 2
                    ? forwardDistance - photos.length
                    : forwardDistance;
                const isActive = offset === 0;
                const isVisible = Math.abs(offset) <= 1;

                return (
                  <div
                    key={photo.url}
                    onClick={() => onSelectImage(photo.url)}
                    className="absolute left-1/2 top-0 h-full w-[72%] md:w-[31%] rounded-3xl overflow-hidden cursor-pointer border-4 border-white shadow-xl group"
                    style={{
                      transform: `translateX(-50%) translateX(${offset * 112}%) scale(${isActive ? 1 : 0.84})`,
                      opacity: isVisible ? (isActive ? 1 : 0.5) : 0,
                      zIndex: isActive ? 2 : 1,
                      pointerEvents: isVisible ? "auto" : "none",
                      transition:
                        "transform 1200ms cubic-bezier(0.22, 1, 0.36, 1), opacity 900ms ease",
                    }}
                  >
                    <img
                      src={photo.url}
                      alt={photo.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-30"}`}
                    />
                    <div className="absolute inset-x-0 bottom-0 p-5 text-white text-left">
                      <p className="font-calligraphy text-3xl">{photo.title}</p>
                    </div>
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                      <Camera className="w-7 h-7" />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex justify-center gap-2 pt-1">
              {photos.map((photo, index) => (
                <button
                  key={photo.url}
                  type="button"
                  onClick={() => setActivePhoto(index)}
                  aria-label={`Xem ảnh ${index + 1}`}
                  className={`h-2 rounded-full transition-all duration-500 ${index === activePhoto ? "w-7 bg-[#B38B59]" : "w-2 bg-[#D8C4B0] hover:bg-[#C8A97E]"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="py-10 bg-[#231C14] text-white text-center px-4">
        <div className="max-w-md mx-auto space-y-3">
          <h3 className="font-signature whitespace-nowrap text-[clamp(1.65rem,8.5vw,3rem)] leading-none tracking-tight text-[#E2C799]">
            Đức Quỳnh & Huyền Trang
          </h3>
          <p className="text-[10px] text-stone-400 tracking-widest uppercase">
            HAPPY WEDDING • 29.11.2026
          </p>
        </div>
      </footer>
    </>
  );
}
