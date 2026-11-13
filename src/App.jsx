import { useState } from "react";
import WeddingInvitation from "./WeddingInvitation";
import "./OpeningCard.css";

function App() {
  const [isOpening, setIsOpening] = useState(true);
  const [isLeavingCover, setIsLeavingCover] = useState(false);

  const openInvitation = () => {
    setIsLeavingCover(true);
    window.setTimeout(() => {
      setIsOpening(false);
      window.scrollTo({ top: 0, behavior: "auto" });
    }, 700);
  };

  return (
    <div className="w-full min-h-screen">
      {isOpening && (
        <section
          className={`opening-card ${isLeavingCover ? "opening-card--leaving" : ""}`}
          aria-label="Mở thiệp cưới"
        >
          <div className="opening-card__shimmer" />
          <span className="opening-card__double-happiness opening-card__double-happiness--one" aria-hidden="true">囍</span>
          <span className="opening-card__double-happiness opening-card__double-happiness--two" aria-hidden="true">囍</span>
          <span className="opening-card__double-happiness opening-card__double-happiness--three" aria-hidden="true">囍</span>
          <span className="opening-card__double-happiness opening-card__double-happiness--four" aria-hidden="true">囍</span>
          <div className="opening-card__content">
            <div className="opening-card__monogram" aria-hidden="true">囍</div>
            <p className="opening-card__eyebrow">Trân trọng báo tin vui</p>
            <h1 className="opening-card__names">Huyền Trang <span>&amp;</span> Đức Quỳnh</h1>
            <div className="opening-card__divider" aria-hidden="true"><span>♥</span></div>
            <p className="opening-card__date">29 tháng 11, 2026</p>
            <p className="opening-card__invite">Thân mời</p>
            <button className="opening-card__button" onClick={openInvitation} autoFocus>Mở thiệp</button>
          </div>
        </section>
      )}
      <WeddingInvitation />
    </div>
  );
}

export default App;
