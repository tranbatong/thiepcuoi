import { CheckCircle2, Send } from 'lucide-react';

export default function PartyRsvpForm({ party, rsvpData, setRsvpData, submitted, submitting, error, onSubmit, onReset }) {
  const update = (field, value) => setRsvpData({ ...rsvpData, [field]: value, partySide: party.id });
  const formStyle = { borderColor: party.border };

  if (submitted) return <div className="min-h-72 p-7 md:p-9 rounded-3xl border bg-white shadow-md flex items-center justify-center text-center" style={formStyle}>
    <div className="space-y-4">
      <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto" />
      <h4 className="font-serif-custom text-2xl text-[#3D3429]">Cảm Ơn Quý Khách!</h4>
      <p className="text-stone-600 text-sm">Gia đình đã ghi nhận phản hồi tham dự của bạn.</p>
      <button type="button" onClick={onReset} className="px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider" style={{ backgroundColor: `${party.accent}1A`, color: party.accent }}>Gửi phản hồi khác</button>
    </div>
  </div>;

  return <form onSubmit={(event) => onSubmit(event, party.id)} className="p-7 md:p-9 rounded-3xl border bg-white shadow-md space-y-4" style={formStyle}>
    <div className="mb-5">
      <p className="text-[10px] uppercase tracking-[0.18em] font-bold" style={{ color: party.accent }}>Đăng ký {party.family.toLowerCase()}</p>
      <h4 className="font-serif-custom text-2xl text-[#3D3429] mt-1">Xác Nhận Tham Dự</h4>
      <p className="text-xs text-stone-500 mt-1">Vui lòng phản hồi trước ngày 24/11/2026.</p>
    </div>
    <input required type="text" placeholder="Họ và tên của bạn *" value={rsvpData.name} onChange={(event) => update('name', event.target.value)} className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2" style={{ '--tw-ring-color': party.accent }} />
    <input type="tel" placeholder="Số điện thoại" value={rsvpData.phone} onChange={(event) => update('phone', event.target.value)} className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2" style={{ '--tw-ring-color': party.accent }} />
    <div className="grid grid-cols-2 gap-3">
      <select value={rsvpData.attending} onChange={(event) => update('attending', event.target.value)} className="min-w-0 px-3 py-3 rounded-xl border border-stone-200 text-sm bg-white"><option value="yes">Sẽ tham dự</option><option value="no">Không thể dự</option></select>
      <select value={rsvpData.guests} onChange={(event) => update('guests', event.target.value)} className="min-w-0 px-3 py-3 rounded-xl border border-stone-200 text-sm bg-white"><option value="1">1 người</option><option value="2">2 người</option><option value="3">3 người</option><option value="4">4+ người</option></select>
    </div>
    <textarea rows={2} placeholder="Lời chúc gửi tới đôi bạn" value={rsvpData.wishes} onChange={(event) => update('wishes', event.target.value)} className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2" style={{ '--tw-ring-color': party.accent }} />
    {error && <p className="text-sm text-red-600" role="alert">{error}</p>}
    <button type="submit" disabled={submitting} className="w-full py-3 text-white rounded-xl font-medium text-sm tracking-wide flex items-center justify-center gap-2 shadow-sm disabled:cursor-not-allowed disabled:opacity-70" style={{ backgroundColor: party.accent }}><Send className="w-4 h-4" />{submitting ? 'Đang gửi...' : 'Gửi Xác Nhận'}</button>
  </form>;
}
