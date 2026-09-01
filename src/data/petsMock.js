// TODO: 백엔드 API가 준비되면 이 목데이터 대신 실제 펫 사용률 데이터를 API로 조회하도록 교체하세요.

export const POSITIONS = ["전체", "근거리형", "원거리형", "방어형", "지원형"];

export const petsMock = [
  { id: 1, name: "랩터", position: "근거리형", usageRate: 49.34, playCount: 4489399 },
  { id: 2, name: "세이버", position: "근거리형", usageRate: 50.58, playCount: 4160782 },
  { id: 3, name: "프테라", position: "원거리형", usageRate: 49.53, playCount: 4149817 },
  { id: 4, name: "트리케라", position: "방어형", usageRate: 49.88, playCount: 3901737 },
  { id: 5, name: "마스토돈", position: "방어형", usageRate: 49.11, playCount: 3678460 },
  { id: 6, name: "벨로시", position: "근거리형", usageRate: 49.46, playCount: 3530583 },
  { id: 7, name: "스피노", position: "원거리형", usageRate: 49.31, playCount: 3489430 },
  { id: 8, name: "브라키오", position: "지원형", usageRate: 44.72, playCount: 3210044 },
  { id: 9, name: "안킬로", position: "방어형", usageRate: 47.95, playCount: 3050120 },
  { id: 10, name: "프테로닥틸", position: "원거리형", usageRate: 46.61, playCount: 2988310 },
  { id: 11, name: "테리지노", position: "지원형", usageRate: 45.28, playCount: 2790500 },
  { id: 12, name: "디플로도쿠스", position: "방어형", usageRate: 48.02, playCount: 2650990 },
  { id: 13, name: "알로사우루스", position: "근거리형", usageRate: 51.14, playCount: 2540120 },
  { id: 14, name: "이구아노돈", position: "지원형", usageRate: 43.87, playCount: 2401870 },
  { id: 15, name: "케찰코아틀루스", position: "원거리형", usageRate: 47.39, playCount: 2255310 },
  { id: 16, name: "파키케팔로", position: "방어형", usageRate: 46.05, playCount: 2109980 },
];
