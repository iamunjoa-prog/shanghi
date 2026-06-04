// ============================================================
//  상해 여행 데이터 파일
//  장소/식당/카페 추가할 때 이 파일만 수정하면 됩니다.
//
//  📌 필드 설명:
//  name      : 식당명 (한국어 + 중국어)
//  desc      : 한줄 설명
//  menu      : 추천 메뉴 배열 — ["메뉴1", "메뉴2"]
//  price     : 대략적인 가격대
//  mapUrl    : 고덕지도 딥링크 (uri.amap.com)
//  dianpingUrl: 다이안핑 링크 (선택)
//  kidsOk    : true면 아이 가능 배지 표시
//  waiting   : 웨이팅 예상 텍스트
//  review    : 직접 다녀온 후기 (이탤릭 표시)
// ============================================================

const TRIP_META = {
  title: "Shanghai",
  subtitle: "4박 5일 · 2026",
  tagline: "토~수 · 난징동루 기준 · 아이 동반",
  hotel: "난징동루 센트럴 호텔",
};

const APPS = [
  {
    icon: "💳", name: "Alipay 支付宝",
    desc: "결제, 디디 호출, 미니프로그램 활용. 해외카드 연결 체크.",
    ios: "https://apps.apple.com/kr/app/alipay/id333206289",
    android: "https://play.google.com/store/apps/details?id=com.eg.android.AlipayGphone",
  },
  {
    icon: "💬", name: "WeChat 微信",
    desc: "연락, 일부 매장 QR, 위챗페이 보조. 친구와 공유에도 편함.",
    ios: "https://apps.apple.com/kr/app/wechat/id414478124",
    android: "https://play.google.com/store/apps/details?id=com.tencent.mm",
  },
  {
    icon: "🚕", name: "DiDi 滴滴",
    desc: "아이 동반 여행 필수. 호텔·식당 중국어 주소 복붙용으로 준비.",
    ios: "https://apps.apple.com/kr/app/didi-app/id554499054",
    android: "https://play.google.com/store/apps/details?id=com.sdu.didi.psnger",
  },
  {
    icon: "🗺️", name: "Amap 高德地图",
    desc: "중국 현지 지도. 구글맵보다 정확도 훨씬 높음. 필수 설치.",
    ios: "https://apps.apple.com/kr/app/%EA%B3%A0%EB%8D%95%EC%A7%80%EB%8F%84/id461703208",
    android: "https://play.google.com/store/apps/details?id=com.autonavi.minimap",
  },
  {
    icon: "🏰", name: "Shanghai Disney",
    desc: "대기시간, 쇼 일정, Premier Access, 티켓 연결 확인용.",
    ios: "https://apps.apple.com/kr/app/shanghai-disney-resort/id963237569",
    android: "https://play.google.com/store/apps/details?id=com.disney.shanghaidisneyland.asia",
  },
  {
    icon: "✈️", name: "Trip.com 携程",
    desc: "호텔/티켓/예약 확인용. 디즈니 티켓 구매 시 앱 연동 확인.",
    ios: "https://apps.apple.com/kr/app/trip-com-hotels-flights-trains/id681752345",
    android: "https://play.google.com/store/apps/details?id=ctrip.english",
  },
  {
    icon: "🧾", name: "Dianping 大众点评",
    desc: "맛집 후기·지점 확인. 중국 현지 인기 매장 체크에 유용.",
    ios: "https://apps.apple.com/kr/app/%EB%8B%A4%EC%9D%B4%EC%95%88%ED%95%91/id351091731",
    android: "https://play.google.com/store/apps/details?id=com.dianping.v1",
  },
  {
    icon: "🌐", name: "Papago",
    desc: "메뉴판·택시·식당 요청용. 오프라인 번역팩 미리 다운로드.",
    ios: "https://apps.apple.com/kr/app/naver-papago-ai-translator/id1147874819",
    android: "https://play.google.com/store/apps/details?id=com.naver.labs.translator",
  },
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
            desc: "마늘 가재 전문점. 상해에 왔다는 느낌이 가장 강한 집.",
            menu: ["마늘 롱샤 (蒜蓉龙虾)", "볶음 가재 (麻辣小龙虾)", "마늘 새우"],
            mapUrl: "https://uri.amap.com/search?keyword=红盔甲&city=上海",
            dianpingUrl: "https://www.dianping.com/search/keyword/2/0/%E7%BA%A2%E7%9B%94%E5%AE%B6",
            kidsOk: true,
            waiting: "길 수 있음",
          },
          {
            name: "Ye Shanghai 夜上海",
            desc: "정통 상해 가정식 코스. 깔끔하고 여러 요리를 골고루 맛볼 수 있음.",
            menu: ["홍소육 (红烧肉)", "취하게 찐 게 (醉蟹)", "상해식 볶음 우동"],
            mapUrl: "https://uri.amap.com/search?keyword=夜上海餐厅&city=上海",
            kidsOk: true,
            waiting: "보통",
          },
          {
            name: "산동잡곡전병 山东杂粮煎饼",
            desc: "길거리 크레이프 스타일 전병. 달걀·채소·소스를 넣고 바로 구워줌.",
            menu: ["잡곡 전병 (杂粮煎饼)", "계란 추가 전병", "소시지 전병"],
            mapUrl: "https://uri.amap.com/search?keyword=山东杂粮煎饼&city=上海",
            kidsOk: true,
            waiting: "짧음",
            review: "먹킷리스트 추천 픽. 가볍게 저녁 대신 스낵으로도 OK",
          },
          {
            name: "Yang's Fried Dumpling 小杨生煎",
            desc: "상해식 군만두 전문점. 아래는 바삭, 속에 육즙 가득.",
            menu: ["생전병 (生煎包)", "새우 생전병", "탕면"],
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
            name: "CHAGEE 霸王茶姬",
            desc: "중국 전역에서 보이는 밀크티 브랜드. 상하이 어디서든 심심찮게 볼 수 있음.",
            menu: ["백아절현 (白芽绝炫) ★강추", "고산운무 (高山云雾)", "원기 우롱"],
            mapUrl: "https://uri.amap.com/search?keyword=霸王茶姬&city=上海",
            kidsOk: true,
            review: "백아절현은 꼭 주문. 핫/아이스 둘 다 맛있음 ♥",
          },
          {
            name: "HEYTEA 喜茶",
            desc: "헤이티 간판 메뉴인 포도 음료. 밀크폼이 기본으로 들어가 달콤하고 고소함.",
            menu: ["포도 밀크폼 (葡萄多肉) ★", "딸기 밀크티", "치즈 그린티"],
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
            desc: "양꼬치 전문점이지만 닭똥집·연골·오돌뼈가 진짜 목적. 숯불 구이 분위기.",
            menu: ["닭똥집 꼬치 (鸡胗串) ★", "양 연골 (羊软骨)", "오돌뼈 꼬치", "양고기 꼬치"],
            mapUrl: "https://uri.amap.com/search?keyword=很久以前羊肉串&city=上海",
            dianpingUrl: "https://www.dianping.com/search/keyword/2/0/%E5%BE%88%E4%B9%85%E4%BB%A5%E5%89%8D",
            waiting: "길 수 있음",
            review: "먹킷리스트 추천 픽",
          },
          {
            name: "파기름국수집 大时代美食面馆",
            desc: "파기름으로 볶은 비빔국수 전문점. 심플하지만 중독적인 로컬 면요리.",
            menu: ["파기름 비빔국수 (葱油拌面) ★", "게살 비빔국수", "완탕면"],
            mapUrl: "https://uri.amap.com/search?keyword=大时代美食面馆&city=上海",
            dianpingUrl: "https://www.dianping.com/search/keyword/2/0/%E5%A4%A7%E6%97%B6%E4%BB%A3%E7%BE%8A%E9%A3%9F%E9%9D%A2%E9%A6%86",
            review: "먹킷리스트 추천 픽",
          },
          {
            name: "장씨네게살국수 张氏蟹粉面",
            desc: "상해식 게살을 듬뿍 올린 비빔국수. 가을이 아니면 냉동 게살이지만 맛은 있음.",
            menu: ["게살 비빔국수 (蟹粉拌面) ★", "게살 탕면", "게살 볶음밥"],
            mapUrl: "https://uri.amap.com/search?keyword=张氏蟹粉面&city=上海",
            review: "먹킷리스트 추천 픽",
          },
          {
            name: "점도덕 点都德",
            desc: "광동식 딤섬 전문점. 메뉴가 다양하고 아이들이 좋아하는 메뉴가 많음.",
            menu: ["새우 창펀 (虾肠粉) ★", "홍미 창펀 (红米肠粉)", "하가우 (虾饺)", "오이 무침", "에그타르트"],
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
            desc: "정통 비에누아즈리 베이커리. 빵 퀄리티가 높고 매장 분위기 예쁨.",
            menu: ["British Black Gold Sesame Viennese ★", "크루아상", "밀크 브레드"],
            price: "23위안~",
            mapUrl: "https://uri.amap.com/search?keyword=AMAM+LONBAKERY&city=上海",
            kidsOk: true,
            review: "빵은 맛있지만 음료는 평범했어요. 베이커리 목적으로 방문 추천",
          },
          {
            name: "MANNER Coffee 漫咖啡",
            desc: "현지 직장인들이 즐겨 찾는 가성비 커피 브랜드. 지점이 많아 접근성 최고.",
            menu: ["말차 치즈 라떼 ★", "아메리카노", "라떼"],
            price: "25위안~",
            mapUrl: "https://uri.amap.com/search?keyword=Manner咖啡&city=上海",
            kidsOk: true,
            review: "가성비는 좋은데 엄청 맛있다! 할 정도는 아님. 가볍게 들르기 좋은 곳",
          },
          {
            name: "LV Café 路易威登",
            desc: "루이비통 플래그십 내 카페. 사진 맛집, 럭셔리 감성 체험.",
            menu: ["시그니처 라떼", "LV 케이크"],
            mapUrl: "https://uri.amap.com/search?keyword=LV路易威登咖啡&city=上海",
          },
          {
            name: "% Arabica",
            desc: "일본 감성 스페셜티 커피. 원두 품질 높고 공간도 세련됨.",
            menu: ["핸드드립", "카푸치노", "라떼"],
            mapUrl: "https://uri.amap.com/search?keyword=%25+Arabica+上海&city=上海",
            kidsOk: true,
          },
          {
            name: "Peninsula Lobby 半岛酒店",
            desc: "와이탄 뷰 럭셔리 애프터눈 티. 가격대 있지만 분위기가 압도적.",
            menu: ["애프터눈 티 세트 ★", "스콘 & 클로티드 크림", "샴페인"],
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
            desc: "광동식 딤섬 전문점. 아이들이 좋아하는 메뉴가 많고 가성비 좋음.",
            menu: ["새우 창펀 (虾肠粉) ★", "홍미 창펀", "하가우", "오이무침", "에그타르트"],
            mapUrl: "https://uri.amap.com/search?keyword=点都德&city=上海",
            dianpingUrl: "https://www.dianping.com/search/keyword/2/0/%E7%82%B9%E5%BA%A6%E5%BE%B7",
            kidsOk: true,
            review: "먹킷리스트 추천 픽",
          },
          {
            name: "Jia Jia Tang Bao 佳家汤包",
            desc: "상해 현지인이 인정하는 샤오롱바오 맛집. 육즙이 터지는 정통 탕포.",
            menu: ["게살 샤오롱바오 (蟹粉小笼) ★", "돼지고기 샤오롱바오", "생강 간장 소스 필수"],
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
            name: "아마수작 亚麻手作",
            desc: "직접 만드는 수제 유제품 디저트. 우유 아이스크림이 진짜 핵심 메뉴.",
            menu: ["우유 아이스크림 ★ (15위안)", "쌀모찌 음료 (29위안)", "청포도 스무디"],
            price: "15위안~",
            mapUrl: "https://uri.amap.com/search?keyword=亚麻手作&city=上海",
            kidsOk: true,
            review: "우유 맛이 완전 진해서 치즈처럼 느껴질 정도. 직접 주문·결제만 가능, 테이스트 서비스 있으니 먹어보고 결정. 청포도 스무디도 추천",
          },
          {
            name: "팡팡수제모찌 胖胖手工麻薯",
            desc: "쫄깃한 수제 모찌. 다양한 속재료가 있어 아이들 간식으로 딱.",
            menu: ["말차 모찌 ★", "딸기 모찌", "흑임자 모찌", "망고 모찌"],
            mapUrl: "https://uri.amap.com/search?keyword=胖胖手工麻薯&city=上海",
            kidsOk: true,
            review: "먹킷리스트 추천 픽",
          },
          {
            name: "과일가게 誉家利果业",
            desc: "신선한 제철 과일 전문점. 컵 과일로 바로 먹을 수 있게 손질해줌.",
            menu: ["망고 컵과일 ★", "용안", "제철 과일 모둠"],
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
            name: "스타벅스 星巴克 — 로즈 말차 라떼",
            desc: "중국 한정 메뉴. 장미향이 강해서 특색 있는 음료.",
            menu: ["로즈 말차 라떼 ★ (32위안)", "티바나 샤켄 티", "차이 티 라떼"],
            price: "32위안",
            mapUrl: "https://uri.amap.com/search?keyword=星巴克&city=上海",
            kidsOk: true,
            review: "장미향 가득해서 마음에 들었던 음료. 말차 느낌은 약하지만 충분히 좋음",
          },
          {
            name: "Alila Shanghai 安麓",
            desc: "부티크 호텔 로비 카페. 조용하고 공간이 아름다워 오후 휴식에 최적.",
            menu: ["시그니처 라떼", "애프터눈 티 세트"],
            mapUrl: "https://uri.amap.com/search?keyword=安麓上海&city=上海",
          },
          {
            name: "Luckin Coffee 瑞幸咖啡",
            desc: "중국 최대 커피 체인. 앱으로 미리 주문하면 바로 픽업 가능해 편리.",
            menu: ["버터커피 (生椰拿铁)", "코코넛 라떼 ★", "아메리카노"],
            mapUrl: "https://uri.amap.com/search?keyword=瑞幸咖啡&city=上海",
            kidsOk: true,
            review: "버터커피는 제 입맛엔 별로. 코코넛 라떼가 더 낫다는 후기가 많음. 접근성은 최고",
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
            desc: "가성비 베이징덕 체인. 대동 계열 중 가격이 합리적이고 한국인 후기 많음.",
            menu: ["베이징덕 (北京烤鸭) ★", "오리 오이무침", "오리뼈 수프", "빠삭한 오리 껍질"],
            mapUrl: "https://uri.amap.com/search?keyword=小大董&city=上海",
            dianpingUrl: "https://www.dianping.com/search/keyword/2/0/%E5%B0%8F%E5%A4%A7%E8%91%A3",
            kidsOk: true,
          },
          {
            name: "Quanjude 全聚德",
            desc: "1864년 창업 베이징덕 원조 체인. 전통 방식 그대로의 숯불 오리구이.",
            menu: ["전통 베이징덕 ★", "오리 간 볶음", "오리뼈 탕", "춘권"],
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
        title: "디즈니 내 먹거리",
        options: [
          {
            name: "아마수작 亚麻手作 (디즈니점)",
            desc: "디즈니 내 지점. 예원에서 못 먹었다면 여기서.",
            menu: ["우유 아이스크림 ★ (15위안)", "청포도 스무디"],
            price: "15위안~",
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
        desc: "디즈니 후엔 부모 체력 방전. 호텔 복귀 후 Meituan/Eleme 앱으로 배달 주문.",
        options: [
          {
            name: "마라반 麻辣烫",
            desc: "재료를 골라 무게로 계산하는 마라탕 스타일. 꼬치·채소·면 등 취향껏 선택.",
            menu: ["소고기 꼬치", "버섯류", "두부 피", "당면", "우동면"],
            mapUrl: "https://uri.amap.com/search?keyword=麻辣烫&city=上海",
            kidsOk: true,
          },
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
            desc: "깔끔한 탕 베이스의 훠궈. 마라 자극 없이 아이와 함께 먹기 좋음.",
            menu: ["토마토탕 ★", "백탕 (白湯)", "양고기", "새우", "두부", "버섯 모둠"],
            mapUrl: "https://uri.amap.com/search?keyword=左庭右院火锅&city=上海",
            dianpingUrl: "https://www.dianping.com/search/keyword/2/0/%E5%B7%A6%E5%BA%AD%E5%8F%B3%E8%8B%91",
            kidsOk: true,
          },
          {
            name: "Haidilao 海底捞",
            desc: "서비스가 압도적인 훠궈 체인. 아이들 위해 면 뽑기 쇼도 해줌.",
            menu: ["마라탕", "버섯탕 ★", "USDA 소고기", "새우 완자", "스무디"],
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
