import { Camera } from 'lucide-react';

export default function InvitationGallery({ photos, onSelectImage }) {
  return (
    <>
      <section className="py-20 bg-[#F4EDE2] px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <span className="font-calligraphy text-4xl text-[#B38B59] block">
            Lời Mời Nồng Nhiệt
          </span>
          <h2 className="font-serif-custom text-3xl md:text-4xl text-[#3D3429]">
            Trân Trọng Kính Mời
          </h2>
          <p className="text-stone-600 leading-relaxed text-base md:text-lg max-w-2xl mx-auto italic">
            "Sự hiện diện của Quý vị là niềm vinh hạnh lớn nhất và là món quà ý nghĩa nhất dành cho gia đình chúng tôi trong ngày vui trọng đại này."
          </p>

          {/* List ảnh ngắn của cô dâu chú rể */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            {photos.map((photo, index) => (
              <div 
                key={index} 
                className="group relative aspect-[2/3] w-full rounded-2xl overflow-hidden shadow-md cursor-pointer border-2 border-white"
                onClick={() => onSelectImage(photo.url)}
              >
                <img 
                  src={photo.url} 
                  alt={photo.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Camera className="w-8 h-8 text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
