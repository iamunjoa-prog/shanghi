// ============================================================
//  상해 여행 데이터 파일
//  장소/식당/카페 추가할 때 이 파일만 수정하면 됩니다.
//
//  📌 장소 추가 방법:
//  해당 day의 items 배열 안에 아래 형식으로 객체 추가:
//
//  {
//    time: "오전",
//    type: "food",          // food | cafe | history | kids | default
//    label: "Dinner",
//    title: "카드 제목",
//    desc: "설명",
//    options: [
//      {
//        name: "식당명",
//        desc: "설명",
//        price: "25위안",          // 선택
//        mapUrl: "고덕지도 URL",
//        dianpingUrl: "...",       // 선택
//        kidsOk: true,             // 선택
//        waiting: "보통",          // 선택
//        review: "실후기 요약",    // 선택 - 직접 가본 후기
//      }
//    ],
//    links: [
//      { label: "지도", url: "https://..." },
//    ]
//  }
//
//  🗺 고덕지도 링크 형식:
//  https://uri.amap.com/search?keyword=중국어검색어&city=上海
//  모바일에서 고덕지도 앱으로 자동 연결됨
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
  { icon: "🗺️", name: "Amap / 高德地图", desc: "중국 현지 지도. 구글맵보다 정확도 훨씬 높음. 필수 설치." },
  { icon: "🏰", name: "Shanghai Disney Resort", desc: "대기시간, 쇼 일정, Premier Access, 티켓 연결 확인용." },
  { icon: "✈️", name: "Trip.com", desc: "호텔/티켓/예약 확인용. 디즈니 티켓 구매 시 앱 연동 확인." },
  { icon: "🧾", name: "Dianping / 大众点评", desc: "맛집 후기·지점 확인. 중국 현지 인기 매장 체크에 유용." },
  { icon: "🌐", name: "Papago / 번역앱", desc: "메뉴판·택시·식당 요청용. 오프라인 번역팩 미리 다운로드." },
];

const DAYS = [
  // ──────────────────────────────────────────────
  //  DAY 1 · 토요일
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
            name: "홍쿠이지아 红盔甲",
            desc: "마늘 롱샤. 상해 온 느낌 확실. 부모 만족도 높지만 껍질 까기 노동 있음.",
            mapUrl: "https://uri.amap.com/search?keyword=红盔甲&city=上海",
            dianpingUrl: "https://www.dianping.com/search/keyword/2/0/%E7%BA%A2%E7%9B%94%E5%AE%B6",
            kidsOk: true,
            waiting: "길 수 있음",
          },
          {
            name: "Ye Shanghai 夜上海",
            desc: "깔끔한 상해식. 첫날 안정픽, 아이 동반 난이도 낮음.",
            mapUrl: "https://uri.amap.com/search?keyword=夜上海餐厅&city=上海",
            kidsOk: true,
            waiting: "보통",
          },
          {
            name: "산동잡곡전병 山东杂粮煎饼",
            desc: "길거리 간식. 아이들이 좋아할 확률 높고 부담 없는 로컬 선택.",
            mapUrl: "https://uri.amap.com/search?keyword=山东杂粮煎饼&city=上海",
            kidsOk: true,
            waiting: "짧음",
            review: "먹킷리스트 추천 픽. 가볍게 저녁 대신 스낵으로도 OK",
          },
          {
            name: "Yang's Fried Dumpling 小杨生煎",
            desc: "생전병 간식/야식. 바삭한 군만두, 아이들이 좋아할 확률 높음.",
            mapUrl: "https://uri.amap.com/search?keyword=小杨生煎&city=上海",
            kidsOk: true,
            waiting: "짧음",
          },
        ],
      },
      {
        time: "밤",
        type: "cafe",
        label: "Tea & Night",
        title: "CHAGEE (패왕차희) + 와이탄 야경",
        desc: "백아절현 꼭 드세요. 핫/아이스 둘 다 맛있음. 밀크티 들고 와이탄 산책. 컨디션 좋으면 황푸강 유람선.",
        options: [
          {
            name: "CHAGEE 霸王茶姬 — 백아절현 추천",
            desc: "상해 어디서든 보이는 패왕차희. 백아절현은 꼭 주문. 핫/아이스 둘 다 맛있음 ♥",
            mapUrl: "https://uri.amap.com/search?keyword=霸王茶姬&city=上海",
            kidsOk: true,
            review: "상하이 어디서든 심심찮게 보임. 백아절현 강추",
          },
          {
            name: "HEYTEA 喜茶 — 포도 밀크폼",
            desc: "포도음료+밀크폼 16위안. 헤이티 간판 메뉴. 상하이에서 쉽게 보이는 브랜드.",
            price: "16위안~",
            mapUrl: "https://uri.amap.com/search?keyword=喜茶&city=上海",
            kidsOk: true,
            review: "포도 밀크폼이 기본이라 좋았음",
          },
        ],
        links: [
          { label: "와이탄 지도", url: "https://uri.amap.com/search?keyword=外滩&city=上海", style: "light" },
        ],
      },
    ],
  },

  // ──────────────────────────────────────────────
  //  DAY 2 · 일요일
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
          { label: "고덕지도", url: "https://uri.amap.com/search?keyword=大韩民国临时政府旧址&city=上海" },
        ],
      },
      {
        time: "점심",
        type: "food",
        label: "Lunch Options",
        title: "친구 합류 후 점심 후보",
        options: [
          {
            name: "헌지우이치엔 很久以前",
            desc: "양꼬치보다 닭똥집·연골·오돌뼈 목적. 인기 많아 지점 선택 중요.",
            mapUrl: "https://uri.amap.com/search?keyword=很久以前羊肉串&city=上海",
            dianpingUrl: "https://www.dianping.com/search/keyword/2/0/%E5%BE%88%E4%B9%85%E4%BB%A5%E5%89%8D",
            waiting: "길 수 있음",
            review: "먹킷리스트 추천 픽",
          },
          {
            name: "파기름국수집 大时代美食面馆",
            desc: "파기름 비빔국수. 먹킷리스트 추천 픽. 로컬 감성 가득한 면요리.",
            mapUrl: "https://uri.amap.com/search?keyword=大时代美食面馆&city=上海",
            dianpingUrl: "https://www.dianping.com/search/keyword/2/0/%E5%A4%A7%E6%97%B6%E4%BB%A3%E7%BE%8E%E9%A3%9F%E9%9D%A2%E9%A6%86",
            review: "먹킷리스트 추천 픽",
          },
          {
            name: "장씨네게살국수 张氏蟹粉面",
            desc: "상해식 게살 비빔국수. 먹킷리스트 추천. 가을 외엔 냉동 게살이지만 맛은 있음.",
            mapUrl: "https://uri.amap.com/search?keyword=张氏蟹粉面&city=上海",
            review: "먹킷리스트 추천 픽",
          },
          {
            name: "점도덕 点都德",
            desc: "아이 편한 딤섬. 홍미창펀·오이무침. 지점 동선 맞으면 강추.",
            mapUrl: "https://uri.amap.com/search?keyword=点都德&city=上海",
            dianpingUrl: "https://www.dianping.com/search/keyword/2/0/%E7%82%B9%E5%BA%A6%E5%BE%B7",
            kidsOk: true,
            waiting: "보통",
            review: "먹킷리스트 추천 픽",
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
          { label: "우캉루", url: "https://uri.amap.com/search?keyword=武康路&city=上海", style: "light" },
          { label: "안푸루", url: "https://uri.amap.com/search?keyword=安福路&city=上海", style: "light" },
          { label: "무캉맨션", url: "https://uri.amap.com/search?keyword=武康大楼&city=上海", style: "light" },
        ],
      },
      {
        time: "카페",
        type: "cafe",
        label: "Cafe Options",
        title: "감성 카페 선택",
        options: [
          {
            name: "AMAM LONBAKERY",
            desc: "British Black Gold Sesame Viennese 23위안. 빵 맛있고 음료는 평범. 베이커리 목적으로 방문 추천.",
            price: "23위안~",
            mapUrl: "https://uri.amap.com/search?keyword=AMAM+LONBAKERY&city=上海",
            kidsOk: true,
            review: "베이커리 보러 갔다가 음료까지 마셨는데, 빵은 맛있지만 음료는 평범했어요",
          },
          {
            name: "MANNER Coffee 漫咖啡 — 말차 치즈 라떼",
            desc: "말차 치즈 라떼 25위안. 가성비 카페로 유명. 지점 많고 회전 빠름.",
            price: "25위안",
            mapUrl: "https://uri.amap.com/search?keyword=Manner咖啡&city=上海",
            kidsOk: true,
            review: "가성비가 좋아서 완전 맛있어~~!! 할 정도는 아니었어요. 가볍게 들르기 좋은 곳",
          },
          {
            name: "LV Café",
            desc: "사진맛집, 럭셔리 감성. 아이와는 짧게 들르기 추천.",
            mapUrl: "https://uri.amap.com/search?keyword=LV路易威登咖啡&city=上海",
          },
          {
            name: "% Arabica",
            desc: "커피 맛·동선 안정. 아이 동반도 부담 적음.",
            mapUrl: "https://uri.amap.com/search?keyword=%25+Arabica+上海&city=上海",
            kidsOk: true,
          },
          {
            name: "Peninsula Lobby 半岛酒店",
            desc: "와이탄 럭셔리 티타임. 가격대 있지만 부모 만족도 높음.",
            mapUrl: "https://uri.amap.com/search?keyword=半岛酒店大堂&city=上海",
          },
        ],
      },
    ],
  },

  // ──────────────────────────────────────────────
  //  DAY 3 · 월요일
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
          { label: "고덕지도", url: "https://uri.amap.com/search?keyword=豫园&city=上海" },
        ],
      },
      {
        time: "브런치",
        type: "food",
        label: "Dim Sum",
        title: "점도덕 or 딤섬 후보",
        options: [
          {
            name: "점도덕 点都德",
            desc: "홍미창펀·딤섬·오이무침. 아이 동반 만족도 높음.",
            mapUrl: "https://uri.amap.com/search?keyword=点都德&city=上海",
            dianpingUrl: "https://www.dianping.com/search/keyword/2/0/%E7%82%B9%E5%BA%A6%E5%BE%B7",
            kidsOk: true,
            review: "먹킷리스트 추천 픽",
          },
          {
            name: "Jia Jia Tang Bao 佳家汤包",
            desc: "샤오롱바오 유명. 대기 가능성 있으나 상해 대표 맛.",
            mapUrl: "https://uri.amap.com/search?keyword=佳家汤包&city=上海",
            waiting: "길 수 있음",
          },
        ],
      },
      {
        time: "간식",
        type: "food",
        label: "Street Snack",
        title: "예원 주변 길거리 간식",
        options: [
          {
            name: "아마수작 亚麻手作 — 우유 아이스크림",
            desc: "쌀모찌 음료(29위안)보다 우유 아이스크림(15위안)이 핵심! 직접 주문·결제만 가능, 테이스트 서비스도 있으니 먹어보고 결정.",
            price: "아이스크림 15위안",
            mapUrl: "https://uri.amap.com/search?keyword=亚麻手作&city=上海",
            kidsOk: true,
            review: "일반적인 우유 맛이 아니라 완전 진해서 치즈처럼 느껴질 정도. 청포도 스무디도 시원하니 맛있음 추천",
          },
          {
            name: "팡팡수제모찌 胖胖手工麻薯",
            desc: "예원 주변 모찌 간식. 먹킷리스트 추천 픽.",
            mapUrl: "https://uri.amap.com/search?keyword=胖胖手工麻薯&city=上海",
            kidsOk: true,
            review: "먹킷리스트 추천 픽",
          },
          {
            name: "과일가게 誉家利果业 Yujiali Fruit",
            desc: "신선한 현지 과일 가게. 먹킷리스트 추천.",
            mapUrl: "https://uri.amap.com/search?keyword=誉家利果业&city=上海",
            kidsOk: true,
            review: "먹킷리스트 추천 픽",
          },
        ],
      },
      {
        time: "오후",
        type: "cafe",
        label: "Slow Afternoon",
        title: "디즈니 전날 카페 휴식",
        desc: "컨디션 좋으면 감성 카페, 피곤하면 테이크아웃 후 호텔 휴식. 체력 아끼는 게 핵심.",
        options: [
          {
            name: "Alila Shanghai",
            desc: "호텔 감성 카페. 차분하고 럭셔리한 오후.",
            mapUrl: "https://uri.amap.com/search?keyword=安麓上海&city=上海",
          },
          {
            name: "스타벅스 — 로즈 말차 라떼",
            desc: "로즈 말차 라떼 32위안. 장미향 가득해서 마음에 들었던 음료. 말차 느낌은 약하지만 충분히 좋음.",
            price: "32위안",
            mapUrl: "https://uri.amap.com/search?keyword=星巴克&city=上海",
            kidsOk: true,
            review: "장미향 가득해서 마음에 들었던 음료. 약간 아쉬움이 있지만 충분히 좋았던 음료",
          },
          {
            name: "Luckin Coffee 瑞幸咖啡 — 버터커피",
            desc: "버터커피가 인기 메뉴. 프랜차이즈라 어디서든 볼 수 있어서 접근성 최고.",
            mapUrl: "https://uri.amap.com/search?keyword=瑞幸咖啡&city=上海",
            kidsOk: true,
            review: "버터 커피가 인기 메뉴라길래 먹어봤는데, 제 입맛엔 별로였어요. 접근성은 최고",
          },
        ],
      },
      {
        time: "저녁",
        type: "food",
        label: "Dinner",
        title: "베이징덕 후보",
        desc: "월요일 저녁에 베이징덕을 넣으면 디즈니 전 맛집 미션 완료. 너무 늦은 식사는 피하기.",
        options: [
          {
            name: "Xiao Dadong 小大董",
            desc: "대동 계열. 가격 합리적이고 한국인 후기 많음. 인민광장/난징서루 지점 동선 좋음.",
            mapUrl: "https://uri.amap.com/search?keyword=小大董&city=上海",
            dianpingUrl: "https://www.dianping.com/search/keyword/2/0/%E5%B0%8F%E5%A4%A7%E8%91%A3",
            kidsOk: true,
          },
          {
            name: "Quanjude 全聚德",
            desc: "베이징덕 원조급 체인. 관광객 친화적이고 가격대 예측 가능. 전통 체인 느낌.",
            mapUrl: "https://uri.amap.com/search?keyword=全聚德&city=上海",
            dianpingUrl: "https://www.dianping.com/search/keyword/2/0/%E5%85%A8%E8%81%9A%E5%BE%B7",
            kidsOk: true,
          },
        ],
      },
    ],
  },

  // ──────────────────────────────────────────────
  //  DAY 4 · 화요일
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
          { label: "고덕지도", url: "https://uri.amap.com/search?keyword=上海迪士尼乐园&city=上海", style: "light" },
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
        time: "간식",
        type: "cafe",
        label: "Disney Snack",
        title: "디즈니 내 음료 & 간식",
        options: [
          {
            name: "아마수작 亚麻手作 (디즈니점)",
            desc: "디즈니 내 아마수작 지점. 우유 아이스크림 필수. 직접 주문·결제만 가능.",
            price: "15위안",
            mapUrl: "https://uri.amap.com/search?keyword=上海迪士尼乐园&city=上海",
            kidsOk: true,
            review: "먹킷리스트 추천 픽 — 디즈니 안에도 있으니 꼭 들를 것",
          },
        ],
      },
      {
        time: "저녁",
        type: "food",
        label: "Delivery",
        title: "마라반 배달",
        desc: "디즈니 후엔 부모 체력 방전 가능성이 높으니 호텔 복귀 후 마라탕/볶음류 배달 추천.",
        links: [
          { label: "마라반 검색", url: "https://uri.amap.com/search?keyword=麻辣烫&city=上海" },
        ],
      },
    ],
  },

  // ──────────────────────────────────────────────
  //  DAY 5 · 수요일
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
        links: [
          { label: "난징동루", url: "https://uri.amap.com/search?keyword=南京东路&city=上海", style: "light" },
        ],
      },
      {
        time: "점심",
        type: "food",
        label: "Hot Pot",
        title: "훠궈 후보",
        options: [
          {
            name: "좌정우원 左庭右院",
            desc: "토마토탕/백탕/약한 마라. 깔끔한 훠궈 후보.",
            mapUrl: "https://uri.amap.com/search?keyword=左庭右院火锅&city=上海",
            dianpingUrl: "https://www.dianping.com/search/keyword/2/0/%E5%B7%A6%E5%BA%AD%E5%8F%B3%E8%8B%91",
            kidsOk: true,
          },
          {
            name: "Haidilao 海底捞",
            desc: "아이 친화·서비스 최고·실패 확률 낮음. 마지막날 안전픽.",
            mapUrl: "https://uri.amap.com/search?keyword=海底捞火锅&city=上海",
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
        links: [
          { label: "푸동공항", url: "https://uri.amap.com/search?keyword=上海浦东国际机场&city=上海", style: "light" },
          { label: "홍차오공항", url: "https://uri.amap.com/search?keyword=上海虹桥国际机场&city=上海", style: "light" },
        ],
      },
    ],
  },
];
