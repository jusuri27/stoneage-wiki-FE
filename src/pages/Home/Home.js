import React, { useMemo, useState } from "react";
import { petsMock, POSITIONS } from "../../data/petsMock";
import "./Home.css";

const POSITION_SLUG = {
  근거리형: "melee",
  원거리형: "ranged",
  방어형: "defense",
  지원형: "support",
};

const AVATAR_COLORS = ["#f97316", "#38bdf8", "#a78bfa", "#34d399", "#f472b6", "#fbbf24"];

const getAvatarColor = (name) => {
  const hash = Array.from(name).reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return AVATAR_COLORS[hash % AVATAR_COLORS.length];
};

const Home = () => {
  const [activePosition, setActivePosition] = useState("전체");

  const rankedPets = useMemo(() => {
    const filtered =
      activePosition === "전체"
        ? petsMock
        : petsMock.filter((pet) => pet.position === activePosition);
    return [...filtered].sort((a, b) => b.usageRate - a.usageRate);
  }, [activePosition]);

  return (
    <div className="home-container">
      <div className="pet-rank-card">
        <div className="pet-rank-tabs" role="tablist" aria-label="포지션 필터">
          {POSITIONS.map((position) => (
            <button
              key={position}
              type="button"
              role="tab"
              aria-selected={activePosition === position}
              className={`pet-rank-tab ${activePosition === position ? "active" : ""}`}
              onClick={() => setActivePosition(position)}
            >
              {position}
            </button>
          ))}
        </div>

        <div className="pet-rank-table-wrapper">
          <table className="pet-rank-table">
            <thead>
              <tr>
                <th className="col-rank">순번</th>
                <th className="col-name">펫이름</th>
                <th className="col-rate">펫 사용률</th>
                <th className="col-position">포지션</th>
              </tr>
            </thead>
            <tbody>
              {rankedPets.map((pet, index) => {
                const rank = index + 1;
                return (
                  <tr key={pet.id}>
                    <td className="col-rank" data-label="순번">
                      <span className={`rank-badge ${rank <= 3 ? `rank-${rank}` : ""}`}>
                        {rank}
                      </span>
                    </td>
                    <td className="col-name" data-label="펫이름">
                      <div className="pet-name-cell">
                        <span
                          className="pet-avatar"
                          style={{ backgroundColor: getAvatarColor(pet.name) }}
                        >
                          {pet.name.charAt(0)}
                        </span>
                        <span className="pet-name-text">{pet.name}</span>
                      </div>
                    </td>
                    <td className="col-rate" data-label="펫 사용률">
                      <div className="usage-rate-cell">
                        <div className="usage-rate-bar-track">
                          <div
                            className="usage-rate-bar-fill"
                            style={{ width: `${pet.usageRate}%` }}
                          />
                        </div>
                        <span className="usage-rate-value">
                          {pet.usageRate.toFixed(2)}%
                        </span>
                      </div>
                    </td>
                    <td className="col-position" data-label="포지션">
                      <span
                        className={`position-badge position-${POSITION_SLUG[pet.position]}`}
                      >
                        {pet.position}
                      </span>
                    </td>
                  </tr>
                );
              })}
              {rankedPets.length === 0 && (
                <tr>
                  <td className="empty-row" colSpan={4}>
                    해당 포지션의 펫이 없습니다.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
