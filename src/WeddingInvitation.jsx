import { useCallback, useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import HeroBanner from './components/invitation/HeroBanner';
import FamilyInformation from './components/invitation/FamilyInformation';
import InvitationGallery from './components/invitation/InvitationGallery';
import WeddingDetails from './components/invitation/WeddingDetails';
import LocationMaps from './components/invitation/LocationMaps';
import ClosingSection from './components/invitation/ClosingSection';

const WEDDING_DATE = new Date('2026-11-29T12:00:00').getTime();
const LOCAL_WEDDING_IMAGES = import.meta.glob('./assets/img/*.{jpg,jpeg,png,webp}', { eager: true, import: 'default' });
const QR_IMAGE = LOCAL_WEDDING_IMAGES['./assets/img/anhqr.jpg'];
const IMAGE_FILENAMES = ['anh1.jpg', 'anh2.jpg', 'anh3.jpg', 'anh4.jpg', 'anh5.jpg', 'anh6.jpg', 'anh7.jpg'];
const PHOTO_TITLES = ['Khoảnh khắc hạnh phúc', 'Yêu thương', 'Ngày vui', 'Duyên lành', 'Trọn đời bên nhau', 'Kỷ niệm đẹp', 'Hành trình mới'];
const FULL_ALBUM_PHOTOS = IMAGE_FILENAMES.map((filename, index) => ({
  url: LOCAL_WEDDING_IMAGES[`./assets/img/${filename}`],
  title: PHOTO_TITLES[index] ?? `Khoảnh khắc ${index + 1}`,
})).filter((photo) => photo.url);
// Hiển thị 5 khoảnh khắc tại phần lời mời (anh3 đến anh7).
const INITIAL_COUPLE_PHOTOS = FULL_ALBUM_PHOTOS.slice(2, 7);

export default function WeddingInvitation({ onMusicReady }) {
  const musicPlayerRef = useRef(null);
  const isMusicRequestedRef = useRef(false);
  const [selectedImg, setSelectedImg] = useState(null);
  const [isQrOpen, setIsQrOpen] = useState(false);
  const [rsvpSubmittedFor, setRsvpSubmittedFor] = useState(null);
  const [rsvpData, setRsvpData] = useState({ name: '', phone: '', attending: 'yes', partySide: 'groom_party', guests: '1', wishes: '' });
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Alex+Brush&family=Great+Vibes&family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Montserrat:wght@300;400;500;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  useEffect(() => {
    const updateCountdown = () => {
      const difference = Math.max(0, WEDDING_DATE - Date.now());
      setTimeLeft({ days: Math.floor(difference / 86400000), hours: Math.floor((difference % 86400000) / 3600000), minutes: Math.floor((difference % 3600000) / 60000), seconds: Math.floor((difference % 60000) / 1000) });
    };
    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  const startMusic = useCallback(() => {
    isMusicRequestedRef.current = true;
    musicPlayerRef.current?.contentWindow?.postMessage(JSON.stringify({ event: 'command', func: 'playVideo', args: [] }), '*');
  }, []);

  useEffect(() => {
    onMusicReady(startMusic);
    return () => onMusicReady(null);
  }, [onMusicReady, startMusic]);

  const handleRsvpSubmit = (event, partySide) => {
    event.preventDefault();
    setRsvpData((data) => ({ ...data, partySide }));
    setRsvpSubmittedFor(partySide);
  };

  return <div className="min-h-screen bg-[#FAF6F0] text-[#3D3429] font-sans relative selection:bg-[#E2C799] selection:text-white">
    <style>{`.font-calligraphy{font-family:'Great Vibes',cursive}.font-signature{font-family:'Alex Brush',cursive}.font-serif-custom{font-family:'Playfair Display',serif}`}</style>
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-25"><div className="absolute -top-10 left-1/4 w-72 h-72 rounded-full bg-[#E8C5C8] blur-3xl animate-pulse" /><div className="absolute bottom-10 right-1/4 w-96 h-96 rounded-full bg-[#E2C799] blur-3xl animate-pulse delay-1000" /></div>
    <iframe ref={musicPlayerRef} onLoad={() => { if (isMusicRequestedRef.current) startMusic(); }} className="fixed w-px h-px opacity-0 pointer-events-none" title="Mãi Mãi Bên Nhau — Noo Phước Thịnh" src="https://www.youtube-nocookie.com/embed/lFnR-K5n_dM?autoplay=0&enablejsapi=1&playsinline=1&rel=0&loop=1&playlist=lFnR-K5n_dM" allow="autoplay; encrypted-media" />
    <HeroBanner timeLeft={timeLeft} heroImage={FULL_ALBUM_PHOTOS[0]?.url} />
    <FamilyInformation />
    <InvitationGallery photos={INITIAL_COUPLE_PHOTOS} onSelectImage={setSelectedImg} />
    <WeddingDetails rsvpData={rsvpData} setRsvpData={setRsvpData} rsvpSubmittedFor={rsvpSubmittedFor} onSubmit={handleRsvpSubmit} onReset={() => setRsvpSubmittedFor(null)} />
    <LocationMaps />
    <ClosingSection photos={FULL_ALBUM_PHOTOS} onSelectImage={setSelectedImg} onOpenQr={() => setIsQrOpen(true)} />
    {selectedImg && <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm" onClick={() => setSelectedImg(null)}><div className="relative max-w-4xl w-full max-h-[90vh]"><button onClick={() => setSelectedImg(null)} className="absolute -top-12 right-0 text-white hover:text-[#E2C799] p-2"><X className="w-8 h-8" /></button><img src={selectedImg} alt="Enlarged" className="w-full h-auto max-h-[85vh] object-contain rounded-xl mx-auto" /></div></div>}
    {isQrOpen && <QrModal onClose={() => setIsQrOpen(false)} />}
  </div>;
}

function QrModal({ onClose }) {
  return <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm" onClick={onClose}><div className="relative max-h-[90vh] w-full max-w-sm overflow-y-auto rounded-3xl bg-white p-5 text-center shadow-2xl sm:p-6" onClick={(event) => event.stopPropagation()}><button onClick={onClose} className="absolute top-4 right-4 text-stone-400 hover:text-stone-700"><X className="w-6 h-6" /></button><span className="inline-block rounded-full bg-[#FDF0F0] px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#C87D87]">Cô Dâu: Huyền Trang</span><div className="my-4 flex justify-center"><img src={QR_IMAGE} alt="Mã QR chuyển khoản cho Trần Thị Huyền Trang" className="max-h-[55vh] w-full max-w-[280px] rounded-2xl object-contain shadow-sm" /></div><div className="space-y-1 text-sm text-stone-600"><p className="font-semibold text-stone-800">TRẦN THỊ HUYỀN TRANG</p><p className="font-mono text-base font-semibold tracking-wide text-stone-900">STK: 0328259002</p><p className="pt-1 text-xs italic text-stone-400">Nội dung: [Tên bạn] mừng cưới</p></div></div></div>;
}
