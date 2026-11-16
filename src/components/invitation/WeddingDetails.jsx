import { CalendarDays, Clock3, MapPin } from "lucide-react";
import PartyRsvpForm from "./PartyRsvpForm";

const PARTIES = [
  {
    id: "bride_party",
    family: "Nhà Gái",
    title: "Tiệc Nhà Gái & Lễ Cưới",
    accent: "#C87D87",
    border: "#E8C5C8",
    partyTime: "18:00 - Thứ Bảy, 28/11/2026",
    ceremonyTime: "12:00 - Chủ Nhật, 29/11/2026",
    location: "Tư Gia Nhà Gái - Thôn Vân Mộng, xã Yên Từ, Ninh Bình",
  },
  {
    id: "groom_party",
    family: "Nhà Trai",
    title: "Tiệc Nhà Trai & Lễ Cưới",
    accent: "#A68050",
    border: "#E2C799",
    partyTime: "17:00 - Thứ Bảy, 28/11/2026",
    ceremonyTime: "14:00 - Chủ Nhật, 29/11/2026",
    location: "Tư Gia Nhà Trai - Thôn Đông Đoài, xã Yên Mạc",
  },
];

export default function WeddingDetails({
  rsvpData,
  setRsvpData,
  rsvpSubmittedFor,
  rsvpSubmittingFor,
  rsvpError,
  onSubmit,
  onReset,
}) {
  return (
    <section className="py-20 px-4 max-w-5xl mx-auto">
      <div className="text-center mb-14">
        <span className="font-calligraphy text-4xl text-[#B38B59] block">
          Tiệc Cưới Mừng
        </span>
        <h2 className="font-serif-custom text-3xl md:text-5xl text-[#3D3429] mt-1">
          Thông Tin Tiệc & Đăng Ký
        </h2>
      </div>

      <div className="space-y-10">
        {PARTIES.map((party) => (
          <PartySection key={party.id} party={party} />
        ))}
      </div>

      <section className="mt-16">
        <div className="text-center mb-8">
          <span className="font-calligraphy text-3xl text-[#B38B59] block">
            Hồi Âm Thiệp Mời
          </span>
          <h3 className="font-serif-custom text-2xl md:text-3xl text-[#3D3429] mt-1">
            Xác Nhận Tham Dự
          </h3>
          <p className="text-sm text-stone-500 mt-2">
            Vui lòng phản hồi trước ngày 24/11/2026 để hai gia đình chuẩn bị chu
            đáo.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-6">
          {PARTIES.map((party) => (
            <PartyRsvpForm
              key={party.id}
              party={party}
              rsvpData={rsvpData}
              setRsvpData={setRsvpData}
              submitted={rsvpSubmittedFor === party.id}
              submitting={rsvpSubmittingFor === party.id}
              error={rsvpError?.partySide === party.id ? rsvpError.message : null}
              onSubmit={onSubmit}
              onReset={onReset}
            />
          ))}
        </div>
      </section>
    </section>
  );
}

function PartySection({ party }) {
  return (
    <section
      className="overflow-hidden rounded-[2rem] border bg-white shadow-[0_18px_45px_rgba(61,52,41,0.08)]"
      style={{ borderColor: party.border }}
    >
      <div
        className="border-b px-5 py-6 sm:px-8 md:px-10 md:py-7"
        style={{
          backgroundColor: `${party.accent}10`,
          borderColor: party.border,
        }}
      >
        <div className="flex flex-col items-center gap-2 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="min-w-0">
            <span
              className="inline-flex rounded-full bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em]"
              style={{ color: party.accent }}
            >
              {party.family}
            </span>
            <h3 className="mt-2 font-serif-custom text-2xl leading-tight text-[#3D3429] md:text-3xl">
              {party.title}
            </h3>
          </div>
          <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-white/85 px-3 py-1.5 text-xs font-medium text-stone-600 shadow-sm">
            <CalendarDays
              className="h-3.5 w-3.5"
              style={{ color: party.accent }}
              aria-hidden="true"
            />
            28–29.11.2026
          </span>
        </div>
      </div>
      <div
        className="grid gap-4 p-4 sm:p-5 md:grid-cols-2 md:p-7"
        style={{ backgroundColor: `${party.accent}06` }}
      >
        <EventInfo
          title={`Tiệc ${party.family}`}
          time={party.partyTime}
          location={party.location}
          accent={party.accent}
          border={party.border}
        />
        <EventInfo
          title="Lễ Cưới"
          time={party.ceremonyTime}
          location={party.location}
          accent={party.accent}
          border={party.border}
        />
      </div>
    </section>
  );
}

function EventInfo({ title, time, location, accent, border }) {
  return (
    <article
      className="min-w-0 rounded-2xl border bg-white p-5 shadow-sm"
      style={{ borderColor: border }}
    >
      <p
        className="mb-5 text-xs font-bold uppercase tracking-[0.14em]"
        style={{ color: accent }}
      >
        {title}
      </p>
      <div className="space-y-4">
        <InfoRow icon={Clock3} label="Thời gian" value={time} accent={accent} />
        <InfoRow
          icon={MapPin}
          label="Địa điểm"
          value={location}
          accent={accent}
        />
      </div>
    </article>
  );
}

function InfoRow({ icon: Icon, label, value, accent }) {
  return (
    <div className="flex items-start gap-3">
      <span
        className="grid h-9 w-9 shrink-0 place-items-center rounded-xl"
        style={{ backgroundColor: `${accent}18` }}
      >
        <Icon
          className="h-4 w-4"
          style={{ color: accent }}
          aria-hidden="true"
        />
      </span>
      <div className="min-w-0 pt-0.5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-stone-400">
          {label}
        </p>
        <p className="mt-0.5 break-words text-sm leading-6 text-stone-700">
          {value}
        </p>
      </div>
    </div>
  );
}
