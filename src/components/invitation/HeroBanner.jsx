import { Heart, ChevronRight } from 'lucide-react';

export default function HeroBanner({ timeLeft, heroImage }) {
  return (
    <>
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        {/* Background Image Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000 scale-105 filter brightness-[0.65]"
          style={{ backgroundImage: heroImage ? `url('${heroImage}')` : undefined }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1F1811]/90 via-[#1F1811]/50 to-transparent" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-white space-y-6 pt-10">
          <p className="font-calligraphy text-3xl md:text-4xl text-[#E2C799] tracking-wider mb-2">
            Thiệp Mời Đám Cưới
          </p>
          
          <div className="space-y-4">
            <p className="tracking-[0.3em] uppercase text-xs md:text-sm text-stone-300 font-light">
              SAVE THE DATE • TRÂN TRỌNG BÁO TIN
            </p>

            {/* Signature Names */}
            <div className="py-2">
              <h1 className="font-signature text-5xl md:text-7xl text-white tracking-wide drop-shadow-md">
                Đức Quỳnh
              </h1>
              <div className="flex items-center justify-center my-3 space-x-4">
                <span className="h-[1px] w-16 md:w-28 bg-[#E2C799]/80"></span>
                <Heart className="w-6 h-6 text-[#E2C799] fill-[#E2C799] animate-pulse" />
                <span className="h-[1px] w-16 md:w-28 bg-[#E2C799]/80"></span>
              </div>
              <h1 className="font-signature text-5xl md:text-7xl text-white tracking-wide drop-shadow-md">
                Huyền Trang
              </h1>
            </div>
          </div>

          <p className="font-calligraphy text-xl md:text-3xl text-[#E2C799] italic">
            "Hành trình tình yêu & Trọn đời bên nhau"
          </p>

          <div className="pt-2 inline-block">
            <div className="border border-[#E2C799]/60 backdrop-blur-md bg-black/30 px-8 py-3 rounded-full text-sm md:text-base font-light tracking-widest uppercase text-stone-200">
              29 • 11 • 2026
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="pt-6 grid grid-cols-4 gap-2 md:gap-4 max-w-md mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/20">
              <span className="block text-2xl md:text-4xl font-serif-custom font-bold text-[#E2C799]">{timeLeft.days}</span>
              <span className="text-[10px] md:text-xs uppercase tracking-wider text-stone-300">Ngày</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/20">
              <span className="block text-2xl md:text-4xl font-serif-custom font-bold text-[#E2C799]">{timeLeft.hours}</span>
              <span className="text-[10px] md:text-xs uppercase tracking-wider text-stone-300">Giờ</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/20">
              <span className="block text-2xl md:text-4xl font-serif-custom font-bold text-[#E2C799]">{timeLeft.minutes}</span>
              <span className="text-[10px] md:text-xs uppercase tracking-wider text-stone-300">Phút</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/20">
              <span className="block text-2xl md:text-4xl font-serif-custom font-bold text-[#E2C799]">{timeLeft.seconds}</span>
              <span className="text-[10px] md:text-xs uppercase tracking-wider text-stone-300">Giây</span>
            </div>
          </div>
        </div>

        {/* Scroll Arrow */}
        <div className="absolute bottom-6 z-10 flex flex-col items-center opacity-75 animate-bounce">
          <ChevronRight className="w-6 h-6 text-[#E2C799] rotate-90" />
        </div>
      </section>

    </>
  );
}
