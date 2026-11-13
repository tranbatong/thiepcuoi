import { Calendar, Home } from 'lucide-react';

export default function Ceremonies() {
  return (
    <>
      <section className="py-20 bg-[#F4EDE2] px-4">
        <div className="max-w-5xl mx-auto text-center">
          <span className="font-calligraphy text-4xl text-[#B38B59] block">Nghi Lễ Truyền Thống</span>
          <h2 className="font-serif-custom text-3xl md:text-5xl text-[#3D3429] mt-1 mb-12">Tiệc Nhà Gái & Lễ Cưới</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Tiệc Nhà Gái */}
            <div className="bg-white p-8 rounded-3xl border border-[#E8C5C8] shadow-sm text-left relative">
              <div className="inline-block px-4 py-1 bg-[#FDF0F0] text-[#C87D87] text-xs font-bold rounded-full uppercase tracking-wider mb-4">
                Tại Nhà Gái
              </div>
              <h3 className="font-serif-custom text-2xl text-[#3D3429] font-bold mb-3">TIỆC NHÀ GÁI</h3>
              <p className="text-stone-600 text-sm mb-6 leading-relaxed">
                Nhà gái trân trọng đãi tiệc thân mật cùng gia đình và bạn bè.
              </p>

              <div className="space-y-3 text-stone-700 text-sm border-t border-stone-100 pt-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-[#C87D87]" />
                  <span><strong>Thời gian:</strong> 18:00 - 28/11/2026</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Home className="w-5 h-5 text-[#C87D87] shrink-0 mt-0.5" />
                  <span><strong>Địa điểm:</strong> Tư Gia Nhà Gái - Thôn Vân Mộng, xã Yên Từ, Ninh Bình</span>
                </div>
              </div>
            </div>

            {/* Lễ Cưới */}
            <div className="bg-white p-8 rounded-3xl border border-[#E2C799] shadow-sm text-left relative">
              <div className="inline-block px-4 py-1 bg-[#F4EDE2] text-[#A68050] text-xs font-bold rounded-full uppercase tracking-wider mb-4">
                Tại Nhà Gái
              </div>
              <h3 className="font-serif-custom text-2xl text-[#3D3429] font-bold mb-3">LỄ CƯỚI</h3>
              <p className="text-stone-600 text-sm mb-6 leading-relaxed">
                Buổi lễ chính thức mừng ngày vui của hai gia đình.
              </p>

              <div className="space-y-3 text-stone-700 text-sm border-t border-stone-100 pt-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-[#C8A97E]" />
                  <span><strong>Thời gian:</strong> 12:00 - 29/11/2026</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Home className="w-5 h-5 text-[#C8A97E] shrink-0 mt-0.5" />
                  <span><strong>Địa điểm:</strong> Tư Gia Nhà Gái - Thôn Vân Mộng, xã Yên Từ, Ninh Bình</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
