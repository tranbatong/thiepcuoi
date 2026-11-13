import { Navigation } from 'lucide-react';

export default function LocationMaps() {
  return (
    <>
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="font-calligraphy text-4xl text-[#B38B59] block">Chỉ Đường Chi Tiết</span>
          <h2 className="font-serif-custom text-3xl md:text-5xl text-[#3D3429] mt-1">Bản Đồ Định Vị</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Map Nhà Trai */}
          <div className="bg-white p-6 rounded-3xl border border-[#EFE7DC] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-serif-custom text-xl font-bold text-[#3D3429]">Vị Trí Nhà Trai</h4>
                <span className="text-xs bg-[#F4EDE2] text-[#A68050] px-3 py-1 rounded-full font-semibold">Xã Yên Mạc</span>
              </div>
              <p className="text-xs text-stone-500 mb-4">Thôn Đông Đoài, xã Yên Mạc</p>
              
              {/* Simulated Map Iframe View */}
              <div className="w-full h-64 bg-stone-100 rounded-2xl overflow-hidden relative border border-stone-200 mb-4">
                <iframe 
                  title="Google Maps Nhà Trai"
                  src="https://www.google.com/maps?q=Th%C3%B4n%20%C4%90%C3%B4ng%20%C4%90o%C3%A0i%2C%20x%C3%A3%20Y%C3%AAn%20M%E1%BA%A1c&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>
            </div>

            <a 
              href="https://www.google.com/maps/search/?api=1&query=Th%C3%B4n%20%C4%90%C3%B4ng%20%C4%90o%C3%A0i%2C%20x%C3%A3%20Y%C3%AAn%20M%E1%BA%A1c"
              target="_blank" 
              rel="noreferrer"
              className="w-full py-3 bg-[#C8A97E] text-white rounded-xl hover:bg-[#B39368] transition-colors text-xs font-semibold uppercase tracking-wider flex items-center justify-center space-x-2 shadow-sm"
            >
              <Navigation className="w-4 h-4" />
              <span>Mở Google Maps Đến Nhà Trai</span>
            </a>
          </div>

          {/* Map Nhà Gái */}
          <div className="bg-white p-6 rounded-3xl border border-[#EFE7DC] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-serif-custom text-xl font-bold text-[#3D3429]">Nhà Thờ Giáo Xứ Quảng Phúc</h4>
                <span className="text-xs bg-[#FDF0F0] text-[#C87D87] px-3 py-1 rounded-full font-semibold">Địa điểm cử hành lễ</span>
              </div>
              <p className="text-xs text-stone-500 mb-4">Nhà thờ Giáo xứ Quảng Phúc, Yên Từ, Ninh Bình</p>

              <div className="w-full h-64 bg-stone-100 rounded-2xl overflow-hidden relative border border-stone-200 mb-4">
                <iframe
                  title="Google Maps Nhà thờ Giáo xứ Quảng Phúc"
                  src="https://www.google.com/maps?q=Nh%C3%A0%20th%E1%BB%9D%20Gi%C3%A1o%20x%E1%BB%A9%20Qu%E1%BA%A3ng%20Ph%C3%BAc%2C%20Y%C3%AAn%20T%E1%BB%AB%2C%20Ninh%20B%C3%ACnh&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Nh%C3%A0%20th%E1%BB%9D%20Gi%C3%A1o%20x%E1%BB%A9%20Qu%E1%BA%A3ng%20Ph%C3%BAc%2C%20Y%C3%AAn%20T%E1%BB%AB%2C%20Ninh%20B%C3%ACnh"
              target="_blank"
              rel="noreferrer"
              className="w-full py-3 bg-[#C87D87] text-white rounded-xl hover:bg-[#B56B75] transition-colors text-xs font-semibold uppercase tracking-wider flex items-center justify-center space-x-2 shadow-sm"
            >
              <Navigation className="w-4 h-4" />
              <span>Mở Google Maps Đến Nhà Thờ</span>
            </a>
          </div>
        </div>
      </section>

    </>
  );
}
