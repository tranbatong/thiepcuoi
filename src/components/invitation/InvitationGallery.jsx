import { useEffect, useState } from "react";
import { Camera } from "lucide-react";

export default function InvitationGallery({ photos, onSelectImage }) {
  const [activePhoto, setActivePhoto] = useState(0);

  useEffect(() => {
    if (photos.length < 2) return undefined;

    const carouselTimer = window.setInterval(() => {
      setActivePhoto((current) => (current + 1) % photos.length);
    }, 3000);

    return () => window.clearInterval(carouselTimer);
  }, [photos.length]);

  return (
    <section className="bg-[#F4EDE2] px-4 py-20">
      <div className="mx-auto max-w-4xl space-y-8 text-center">
        <span className="font-calligraphy block text-4xl text-[#B38B59]">
          Lời Mời Nồng Nhiệt
        </span>
        <h2 className="font-serif-custom text-3xl text-[#3D3429] md:text-4xl">
          Trân Trọng Kính Mời
        </h2>
        <p className="mx-auto max-w-2xl text-base italic leading-relaxed text-stone-600 md:text-lg">
          "Sự hiện diện của Quý vị là niềm vinh hạnh lớn nhất và là món quà ý
          nghĩa nhất dành cho gia đình chúng tôi trong ngày vui trọng đại này."
        </p>

        {/* Cùng kiểu carousel xếp lớp với mục "Khoảnh Khắc Đáng Nhớ". */}
        <div className="space-y-6 pt-6">
          <div className="relative h-[25rem] overflow-hidden md:h-[30rem]">
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
                  className="group absolute left-1/2 top-0 h-full w-[72%] cursor-pointer overflow-hidden rounded-3xl border-4 border-white shadow-xl md:w-[31%]"
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
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-30"}`}
                  />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-left text-white">
                    <p className="font-calligraphy text-3xl">{photo.title}</p>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-white opacity-0 transition-opacity group-hover:opacity-100">
                    <Camera className="h-7 w-7" />
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
  );
}
