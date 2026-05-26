// ============================================================
//  상해 여행 데이터 파일
//  장소/식당/카페 추가할 때 이 파일만 수정하면 됩니다.
//
//  📌 장소 추가 방법:
//  해당 day의 items 배열 안에 아래 형식으로 객체 추가:
//
//  {
//    time: "오전",          // 시간대 텍스트
//    type: "food",          // food | cafe | history | kids | sightseeing | default
//    label: "Dinner",       // 카드 상단 태그
//    title: "식당명",
//    desc: "설명",
//    options: [             // 후보가 여러 개면 사용 (없으면 생략)
//      {
//        name: "식당명",
//        desc: "설명",
//        mapUrl: "https://maps.google.com/...",
//        dianpingUrl: "https://www.dianping.com/...",  // 선택
//        kidsOk: true,       // 선택
//        waiting: "보통",    // 선택
//      }
//    ],
//    links: [               // 단일 링크 버튼들 (options 없을 때 사용)
//      { label: "지도", url: "https://..." },
//    ]
//  }
// ============================================================

const TRIP_META = {
  title: "Shanghai",
  subtitle: "4박 5일 · 2026",
  tagline: "토~수 · 난징동루 기준 · 아이 동반",
  hotel: "난징동루 센트럴 호텔",
};

const APPS = [
  { icon: "💳", name: "Alipay", desc: "결제, 디디 호출, 미니프로그램 활용. 해외카드 연결 체크." },
  { icon: "💬", name: "WeChat", desc: "연락, 일부 매장 QR, 위챗페이 보조. 친구와 공유에도 편함." },
  { icon: "🚕", name: "DiDi", desc: "아이 동반 여행 필수. 호텔·식당 중국어 주소 복붙용으로 준비." },
  { icon: "🗺️", name: "Amap / 高德地图", desc: "중국 현지 지도 정확도 높음. 구글맵과 병행 추천." },
  { icon: "🏰", name: "Shanghai Disney Resort", desc: "대기시간, 쇼 일정, Premier Access, 티켓 연결 확인용." },
  { icon: "✈️", name: "Trip.com", desc: "호텔/티켓/예약 확인용. 디즈니 티켓 구매 시 앱 연동 확인." },
  { icon: "🧾", name: "Dianping / 大众点评", desc: "맛집 후기·지점 확인. 중국 현지 인기 매장 체크에 유용." },
  { icon: "🌐", name: "Papago / 번역앱", desc: "메뉴판·택시·식당 요청용. 오프라인 번역팩 미리 다운로드." },
];

const DAYS = [
  // ──────────────────────────────────────────────
  //  DAY 1
  // ──────────────────────────────────────────────
  {
    id: "day1",
    dayLabel: "DAY 1 · 토요일",
    title: "난징동루\n와이탄",
    subtitle: "도착일은 호텔 근처에서 상해 첫인상만 제대로.",
    items: [
      {
        time: "오후",
        type: "default",
        label: "Check-in",
        title: "호텔 체크인 → 난징동루 산책",
        desc: "짐 풀고 무리 없이 도보권에서 시작. 아이들이 피곤하면 바로 저녁으로 넘어가기.",
      },
      {
        time: "저녁",
        type: "food",
        label: "Dinner Options",
        title: "첫날 저녁 후보",
        options: [
          {
            name: "홍쿠이지아",
            desc: "마늘 롱샤. 상해 온 느낌 확실. 부모 만족도 높지만 껍질 까기 노동 있음.",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=Hong+Kui+Jia+Shanghai",
            dianpingUrl: "https://www.dianping.com/search/keyword/2/0/%E7%BA%A2%E7%9B%94%E5%AE%B6",
            kidsOk: true,
            waiting: "길 수 있음",
          },
          {
            name: "Ye Shanghai",
            desc: "깔끔한 상해식. 첫날 안정픽, 아이 동반 난이도 낮음.",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=Ye+Shanghai+Restaurant+Shanghai",
            kidsOk: true,
            waiting: "보통",
          },
          {
            name: "Old Shanghai Restaurant",
            desc: "난징동루 로컬 분위기. 활기차고 관광 느낌 강함.",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=Old+Shanghai+Restaurant+Nanjing+Road",
            kidsOk: true,
          },
          {
            name: "Yang's Fried Dumpling",
            desc: "생전병 간식/야식. 아이들이 좋아할 확률 높음.",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=Yang%27s+Fried+Dumpling+Shanghai+Nanjing+Road",
            kidsOk: true,
            waiting: "짧음",
          },
        ],
      },
      {
        time: "밤",
        type: "cafe",
        label: "Tea & Night",
        title: "Chagee + 와이탄 야경",
        desc: "차지 밀크티 들고 와이탄 산책. 컨디션 좋으면 황푸강 유람선, 피곤하면 야경만 보고 복귀.",
        links: [
          { label: "Chagee 찾기", url: "https://www.google.com/maps/search/?api=1&query=Chagee+Nanjing+East+Road+Shanghai" },
          { label: "와이탄 지도", url: "https://www.google.com/maps/search/?api=1&query=The+Bund+Shanghai", style: "light" },
        ],
      },
    ],
  },

  // ──────────────────────────────────────────────
  //  DAY 2
  // ──────────────────────────────────────────────
  {
    id: "day2",
    dayLabel: "DAY 2 · 일요일",
    title: "임시정부\n프랑스조계지",
    subtitle: "친구 합류날. 역사+감성+맛집을 함께 보기 좋음.",
    items: [
      {
        time: "오전",
        type: "history",
        label: "History",
        title: "대한민국 임시정부청사",
        desc: "아이들과 함께 의미 있게 보기 좋은 독립운동 유적지. 이후 신천지/프랑스조계지로 자연스럽게 이동.",
        links: [
          { label: "지도", url: "https://www.google.com/maps/search/?api=1&query=Site+of+the+First+National+Congress+Korean+Provisional+Government+Shanghai" },
        ],
      },
      {
        time: "점심",
        type: "food",
        label: "Lunch Options",
        title: "친구 합류 후 점심 후보",
        options: [
          {
            name: "현지우이치엔",
            desc: "양꼬치보다 닭똥집·연골·오돌뼈 목적. 인기 많아 지점 선택 중요.",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=%E5%BE%88%E4%B9%85%E4%BB%A5%E5%89%8D+%E7%BE%8A%E8%82%89%E4%B8%B2+Shanghai",
            dianpingUrl: "https://www.dianping.com/search/keyword/2/0/%E5%BE%88%E4%B9%85%E4%BB%A5%E5%89%8D",
            waiting: "길 수 있음",
          },
          {
            name: "Di Shui Dong",
            desc: "후난식 볶음류. 향신료는 있지만 한국인 후기가 많고 식사다운 선택.",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=Di+Shui+Dong+Shanghai",
            kidsOk: true,
          },
          {
            name: "소대동 / Xiao Dadong",
            desc: "베이징덕을 이날 넣어도 좋음. 인민광장/난징서루 접근성 체크.",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=Xiao+Dadong+Shanghai",
            dianpingUrl: "https://www.dianping.com/search/keyword/2/0/%E5%B0%8F%E5%A4%A7%E8%91%A3",
            kidsOk: true,
          },
          {
            name: "점도덕",
            desc: "아이 편한 딤섬. 홍미창펀·오이무침. 지점 동선 맞으면 강추.",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=Diandude+Shanghai",
            dianpingUrl: "https://www.dianping.com/search/keyword/2/0/%E7%82%B9%E5%BA%A6%E5%BE%B7",
            kidsOk: true,
            waiting: "보통",
          },
        ],
      },
      {
        time: "오후",
        type: "default",
        label: "Walk",
        title: "우캉루 · 안푸루 · 무캉맨션",
        desc: "상해 감성 산책 핵심. 사진 찍고 카페 쉬는 방식으로 천천히.",
        links: [
          { label: "우캉루", url: "https://www.google.com/maps/search/?api=1&query=Wukang+Road+Shanghai", style: "light" },
          { label: "안푸루", url: "https://www.google.com/maps/search/?api=1&query=Anfu+Road+Shanghai", style: "light" },
        ],
      },
      {
        time: "카페",
        type: "cafe",
        label: "Cafe Options",
        title: "감성 카페 선택",
        options: [
          {
            name: "LV Café",
            desc: "사진맛집, 럭셔리 감성. 아이와는 짧게 들르기 추천.",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=Louis+Vuitton+Cafe+Shanghai",
          },
          {
            name: "% Arabica",
            desc: "커피 맛·동선 안정. 아이 동반도 부담 적음.",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=%25+Arabica+Shanghai",
            kidsOk: true,
          },
          {
            name: "MANNER Coffee",
            desc: "현지 직장인 감성, 지점 많고 회전 빠름.",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=MANNER+Coffee+Shanghai",
            kidsOk: true,
          },
          {
            name: "Peninsula Lobby",
            desc: "와이탄 럭셔리 티타임. 가격대 있지만 부모 만족도 높음.",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=The+Lobby+Peninsula+Shanghai",
          },
        ],
      },
    ],
  },

  // ──────────────────────────────────────────────
  //  DAY 3
  // ──────────────────────────────────────────────
  {
    id: "day3",
    dayLabel: "DAY 3 · 월요일",
    title: "예원\n딤섬",
    subtitle: "디즈니 전날. 맛있게 먹되 체력은 아끼기.",
    items: [
      {
        time: "오전",
        type: "default",
        label: "Sightseeing",
        title: "예원 · 예원상성",
        desc: "전통 중국 분위기. 사람이 많으면 오래 머물지 말고 사진+간식 중심으로.",
        links: [
          { label: "지도", url: "https://www.google.com/maps/search/?api=1&query=Yu+Garden+Shanghai" },
        ],
      },
      {
        time: "브런치",
        type: "food",
        label: "Dim Sum",
        title: "점도덕 or 딤섬 후보",
        options: [
          {
            name: "점도덕 / Diandude",
            desc: "홍미창펀·딤섬·오이무침. 아이 동반 만족도 높음.",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=Diandude+Shanghai",
            dianpingUrl: "https://www.dianping.com/search/keyword/2/0/%E7%82%B9%E5%BA%A6%E5%BE%B7",
            kidsOk: true,
          },
          {
            name: "Jia Jia Tang Bao",
            desc: "샤오롱바오 유명. 대기 가능성 있으나 상해 대표 맛.",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=Jia+Jia+Tang+Bao+Shanghai",
            waiting: "길 수 있음",
          },
        ],
      },
      {
        time: "오후",
        type: "cafe",
        label: "Slow Afternoon",
        title: "Alila Shanghai or 버블티",
        desc: "컨디션 좋으면 호텔 감성 카페, 피곤하면 Heytea/Chagee 테이크아웃 후 호텔 휴식.",
        links: [
          { label: "Alila", url: "https://www.google.com/maps/search/?api=1&query=Alila+Shanghai" },
          { label: "Heytea", url: "https://www.google.com/maps/search/?api=1&query=Heytea+Shanghai", style: "light" },
        ],
      },
      {
        time: "저녁",
        type: "food",
        label: "Dinner",
        title: "베이징덕 후보",
        desc: "월요일 저녁에 베이징덕을 넣으면 화요일 디즈니 전 맛집 미션 완료. 너무 늦은 식사는 피하기.",
        options: [
          {
            name: "Xiao Dadong / 소대동",
            desc: "대동 계열. 가격 합리적이고 한국인 후기 많음. 인민광장/난징서루 지점 동선 좋음.",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=Xiao+Dadong+Shanghai",
            dianpingUrl: "https://www.dianping.com/search/keyword/2/0/%E5%B0%8F%E5%A4%A7%E8%91%A3",
            kidsOk: true,
          },
          {
            name: "Quanjude / 전취덕",
            desc: "베이징덕 원조급 체인. 관광객 친화적이고 가격대 예측 가능. 전통 체인 느낌.",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=Quanjude+Shanghai",
            dianpingUrl: "https://www.dianping.com/search/keyword/2/0/%E5%85%A8%E8%81%9A%E5%BE%B7",
            kidsOk: true,
          },
        ],
      },
    ],
  },

  // ──────────────────────────────────────────────
  //  DAY 4
  // ──────────────────────────────────────────────
  {
    id: "day4",
    dayLabel: "DAY 4 · 화요일",
    title: "Shanghai\nDisneyland",
    subtitle: "화요일 디즈니 올인. 저녁은 배달이 정답.",
    items: [
      {
        time: "아침",
        type: "kids",
        label: "Early Start",
        title: "오픈 전 도착",
        desc: "Shanghai Disney Resort 공식앱에 티켓 연결, 대기시간·쇼 일정 확인. 여권 원본/배터리/보조배터리 체크.",
        links: [
          { label: "공식앱 다운로드", url: "https://www.shanghaidisneyresort.com/download-shanghai-disney-mobile-app/" },
          { label: "지도", url: "https://www.google.com/maps/search/?api=1&query=Shanghai+Disneyland", style: "light" },
        ],
      },
      {
        time: "놀이기구",
        type: "kids",
        label: "Priority",
        title: "우선순위",
        bulletList: ["주토피아", "트론", "캐리비안", "소어링", "일곱난쟁이 / 푸우"],
      },
      {
        time: "저녁",
        type: "food",
        label: "Delivery",
        title: "마라반 배달",
        desc: "디즈니 후엔 부모 체력 방전 가능성이 높으니 호텔 복귀 후 마라탕/볶음류 배달 추천.",
        links: [
          { label: "마라반 검색", url: "https://www.google.com/search?q=%E9%BA%BB%E8%BE%A3%E6%8B%8C+Shanghai+delivery" },
        ],
      },
    ],
  },

  // ──────────────────────────────────────────────
  //  DAY 5
  // ──────────────────────────────────────────────
  {
    id: "day5",
    dayLabel: "DAY 5 · 수요일",
    title: "마지막\n훠궈",
    subtitle: "짐·귀국 고려해서 멀리 가지 않기.",
    items: [
      {
        time: "오전",
        type: "default",
        label: "Shopping",
        title: "난징동루 / 인민광장 가볍게",
        desc: "기념품·버블티·가벼운 산책. 짐 맡기고 움직이면 편함.",
      },
      {
        time: "점심",
        type: "food",
        label: "Hot Pot",
        title: "훠궈 후보",
        options: [
          {
            name: "좌정우원",
            desc: "토마토탕/백탕/약한 마라. 깔끔한 훠궈 후보.",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=Zuo+Ting+You+Yuan+Shanghai",
            dianpingUrl: "https://www.dianping.com/search/keyword/2/0/%E5%B7%A6%E5%BA%AD%E5%8F%B3%E8%8B%91",
            kidsOk: true,
          },
          {
            name: "Haidilao / 하이디라오",
            desc: "아이 친화·서비스 최고·실패 확률 낮음. 마지막날 안전픽.",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=Haidilao+Nanjing+East+Road+Shanghai",
            dianpingUrl: "https://www.dianping.com/search/keyword/2/0/%E6%B5%B7%E5%BA%95%E6%8D%9E",
            kidsOk: true,
          },
        ],
      },
      {
        time: "출발",
        type: "kids",
        label: "Airport",
        title: "공항 이동",
        desc: "아이 동반이면 디디/호텔 택시 추천. 이동 전 Alipay 결제 상태와 여권 확인.",
      },
    ],
  },
];
