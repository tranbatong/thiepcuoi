export default function FamilyInformation() {
  return (
    <>
      <section className="py-20 px-4 max-w-5xl mx-auto text-center">
        {/* Câu châm ngôn tình yêu */}
        <div className="mb-14 space-y-3">
          <span className="font-calligraphy text-3xl md:text-4xl text-[#B38B59] block">
            "Yêu thương là cùng nhìn về một hướng"
          </span>
          <p className="text-stone-600 text-sm md:text-base italic max-w-xl mx-auto leading-relaxed">
            Hỡi người làm chồng, hãy yêu vợ mình, như Đức Ki-tô đã yêu Hội
            thánh, phó chính mình vì Hội thánh
          </p>
          <div className="w-16 h-[2px] bg-[#E2C799] mx-auto mt-4"></div>
        </div>

        {/* Khối Gia Đình Hai Bên */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Nhà Trai */}
          <div className="bg-white p-8 md:p-10 rounded-3xl border border-[#EFE7DC] shadow-sm hover:shadow-md transition-shadow relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#C8A97E] text-white text-xs px-6 py-1 rounded-full uppercase tracking-widest font-semibold shadow-sm">
              NHÀ TRAI
            </div>

            <div className="space-y-2 mt-4 mb-8">
              <p className="text-xs font-semibold text-stone-400 uppercase tracking-widest">
                Bố Mẹ Chú Rể
              </p>
              <h4 className="font-serif-custom text-lg md:text-xl text-stone-800 font-semibold">
                Ông: MAI VĂN CHƯƠNG
              </h4>
              <h4 className="font-serif-custom text-lg md:text-xl text-stone-800 font-semibold">
                Bà: PHẠM THỊ HẠNH
              </h4>
              <p className="text-xs text-stone-500 pt-1">
                Trú tại: Thôn Đông Đoài, xã Yên Mạc, Ninh Bình
              </p>
            </div>

            <div className="border-t border-stone-100 pt-6">
              <span className="text-xs text-[#B38B59] uppercase tracking-widest font-semibold block mb-1">
                Quý Nam Út
              </span>
              {/* Chữ ký Chú Rể */}
              <h3 className="font-signature text-5xl md:text-6xl text-[#3D3429] mt-2">
                Đức Quỳnh
              </h3>
            </div>
          </div>

          {/* Nhà Gái */}
          <div className="bg-white p-8 md:p-10 rounded-3xl border border-[#EFE7DC] shadow-sm hover:shadow-md transition-shadow relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#C87D87] text-white text-xs px-6 py-1 rounded-full uppercase tracking-widest font-semibold shadow-sm">
              NHÀ GÁI
            </div>

            <div className="space-y-2 mt-4 mb-8">
              <p className="text-xs font-semibold text-stone-400 uppercase tracking-widest">
                Bố Mẹ Cô Dâu
              </p>
              <h4 className="font-serif-custom text-lg md:text-xl text-stone-800 font-semibold">
                Ông: TRẦN VĂN MỊCH
              </h4>
              <h4 className="font-serif-custom text-lg md:text-xl text-stone-800 font-semibold">
                Bà: NGUYỄN THỊ MỪNG
              </h4>
              <p className="text-xs text-stone-500 pt-1">
                Trú tại: Thôn Vân Mộng, xã Yên Từ, Ninh Bình
              </p>
            </div>

            <div className="border-t border-stone-100 pt-6">
              <span className="text-xs text-[#C87D87] uppercase tracking-widest font-semibold block mb-1">
                Ái Nữ Thứ Hai
              </span>
              {/* Chữ ký Cô Dâu */}
              <h3 className="font-signature text-5xl md:text-6xl text-[#3D3429] mt-2">
                Huyền Trang
              </h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
