const projects = [
  {
    id: 'fqled',
    display: true,
    star: false,
    title: '삼성 FQLED 소개 페이지 (Future of Display)',
    thumb: true,
    date: '2020-08-24',
    endDate: '2020-11-27',
    tech: [0, 2, 3, 4, 18],
    type: [1],
    client: '삼성전자',
    url: null,
    gitUrl: null,
    desc: '삼성 퀀텀 TV의 소개 페이지 구축 프로젝트입니다. GSAP의 타임라인과 Canvas API를 사용하면서도 가볍고 자연스러운 인터랙션을 구현하는 데 중점을 두었습니다. git을 사용하여 코드를 관리하고 여러 작업자와 함께 협업하며 작업했습니다.',
    learn: [
      { title: 'GSAP 사용 ', desc: '텍스트, 이미지, 비디오 등 다양한 요소를 대상으로 한 인터랙션 구현' },
      { title: '인터랙션 개선 ', desc: 'Canvas API를 GSAP와 함께 사용하여 인터랙션을 더욱 자연스럽게 개선' },
      { title: 'UI/UX를 고려한 개발 ', desc: '인터랙션 트리거 방식을 수정하여 많은 양의 스크롤로 인한 사용자 피로도 감소, UI/UX를 고려한 개발 진행' },
      { title: 'BEM 방법론 적용 ', desc: '효율적인 Sass 사용을 위해 BEM 방법론 적용' },
      { title: '반응형 작업 ', desc: '화면 크기에 따라 다른 구성의 인터랙션 구현' },
      { title: 'GitHub 사용 ', desc: 'GitHub을 통한 코드 관리 및 협업 경험' },
    ],

    work: [
      {
        video: '0.mp4',
        number: '01',
        title: 'Canvas API',
        desc: '더욱 자연스러운 인터랙션을 위해 Canvas API를 사용했습니다. 화면의 비율에 따른 이미지 위치와 각 사각형의 위치를 계산하여 자연스럽게 합쳐질 수 있도록 했습니다.',
      },
      {
        video: '2.mp4',
        desc: 'svg의 위치, 확대 지점 등을 지정하여 재사용할 수 있도록 공통으로 작업했습니다.',
      },
      {
        video: '1.mp4',
        number: '02',
        title: '이중 배열',
        desc: '단순히 이미지를 사용하지 않고 이중 배열을 이용해 타일을 만들었습니다. 각 타일의 색과 크기를 직접 변경하는 인터랙션을 구현하여, 사용자가 상품의 장점을 더 체감할 수 있도록 했습니다.',
      },
      {
        video: '3.mp4',
        number: '03',
        title: 'Video 스케일',
        desc: 'video 태그의 scale과 video 태그를 감싼 div 태그의 width, height를 모두 계산하여 버벅임을 최소화했습니다.',
      },
    ],
  },
  {
    id: 'dfy21',
    display: true,
    star: true,
    title: 'DFY 사이트 리뉴얼 (DFY 2K21)',
    thumb: true,
    date: '2021-01-11',
    endDate: '2021-10-15',
    tech: [0, 2, 3, 4, 11, 12, 18],
    type: [1],
    client: '내부 프로젝트',
    url: 'https://www.dfy.co.kr/',
    gitUrl: null,
    desc: '디파이 사이트 리뉴얼 구축 프로젝트로, FWA, Awwwards, Webby 등에서 수상한 웹사이트입니다. Vue를 처음 사용하며 Lifecycle, HOC, teleport, slot 등 Vue 프레임워크의 개념을 익히고 기능을 최대한 활용하는 방법을 고민했습니다. 또한, Vuex를 사용한 상태 관리와 vue-router로 라우팅을 적용했으며, Vue 환경에서 GSAP를 이용해 인터랙션을 구현하는 경험을 쌓았습니다. ',
    learn: [
      { title: 'Vue 기능 활용', desc: 'HOC, teleport, slot 등 Vue의 다양한 기능을 활용하여 Chatbot 시스템의 전체 기능 구현' },
      { title: 'Vuex 사용', desc: 'Vuex를 사용하여 Chatbot의 데이터 상태 관리' },
      { title: '데이터 로직 구성', desc: '사용자의 선택에 맞춰 Chatbot의 답변이 적절히 노출되도록 데이터 로직 구성' },
      { title: '인터랙션 구현', desc: 'Vue3 환경의 Lifecycle을 고려하여 GSAP의 ScrollTrigger 사용, ABOUT 및 CONTACT 페이지의 인터랙션 구현' },
      { title: '컴포넌트 작업', desc: 'Chatbot에 사용되는 컴포넌트와 Marquee, RandomText 등 사이트 전반에서 사용하는 컴포넌트 작업' },
      { title: '수상 경력', desc: 'FWA, Awwwards, Webby 등에서 수상' },
      { title: '반응형 작업', desc: '그리드 시스템 기반의 반응형 구현' },
    ],
    work: [
      {
        video: '0.mp4',
        number: '01',
        title: 'Messenger',
        desc: '메신저 전체를 담당하여 작업했습니다. 메신저에서만 사용하는 store를 따로 만들어 프로젝트 의뢰, 입사 지원 등의 기능을 분리하여 작업했습니다.',
      },
      {
        video: '1.mp4',
        desc: '연락하기, 지도 보기 등 페이지에서 메신저의 해당 기능을 바로 열 수 있도록 작업했습니다. 반대로 프로젝트 보기, 바로가기 링크를 통해 메신저에서 원하는 페이지로 이동할 수 있도록 했습니다. 사이트 전체를 메신저로 연결했습니다.',
      },
      {
        video: '2.mp4',
        number: '02',
        title: 'Interaction',
        desc: 'GSAP의 ScrollTrigger를 이용해 ABOUT, CONTACT 페이지의 스크롤 인터랙션을 모두 작업했습니다.',
      },
      {
        image: '3.jpeg',
        number: '03',
        title: 'Details',
        desc: 'marquee, shuffle text 등 사이트 전반에 사용되는 디테일 요소들을 작업했습니다.',
      },
      {
        image: '4.jpeg',
      },
    ],
  },
  {
    id: 'mpxgallery',
    display: true,
    star: false,
    title: 'MPX Gallery 쇼핑몰 구축',
    thumb: true,
    date: '2021-09-27',
    endDate: '2022-03-31',
    tech: [0, 2, 3, 4, 17, 18, 19],
    type: [1],
    client: '내부 프로젝트',
    url: 'https://mpx.co.kr/',
    gitUrl: null,
    desc: '쇼핑몰 구축 프로젝트입니다. Handlebars를 사용하여 공통 요소를 partial로 작업하여 재사용성을 높였고, Tailwind CSS를 통해 직관적이고 빠르게 작업했습니다. 백엔드 개발자와 지속적으로 소통하며 수정 작업을 진행했습니다.',
    learn: [
      { title: '새로운 기술 경험', desc: 'Template Engine과 Tailwind CSS 경험' },
      { title: '커머스 사이트 이해도 향상', desc: '쇼핑몰 구축 경험을 통한 커머스 사이트에 대한 이해도 향상' },
      { title: '페이지 개발', desc: '상품 디테일 페이지, 마이페이지 등 담당' },
      { title: '반응형 작업', desc: '그리드 시스템 기반의 반응형 구현' },
    ],
  },
  {
    id: 'reslower',
    display: true,
    star: false,
    title: 'ReSlower 쇼핑몰 구축',
    thumb: true,
    date: '2022-04-04',
    endDate: '2022-05-13',
    tech: [0, 2, 3, 4],
    type: [1],
    client: '내부 프로젝트',
    url: 'https://www.reslow.life/',
    gitUrl: null,
    desc: 'cafe24를 이용한 쇼핑몰 구축 프로젝트입니다. cafe24의 기능과 기본 템플릿을 최대한 사용하면서 효율적으로 커스텀하는 것에 중점을 두고 작업했습니다.',
    learn: [
      { title: 'cafe24 사용', desc: '프로젝트 기획과 디자인 요구 사항에 맞는 cafe24 템플릿 선택 및 커스텀' },
      { title: '반응형 작업', desc: '그리드 시스템 기반의 반응형 구현' },
      { title: '페이지 개발', desc: '메인 페이지, 상품 리스트 페이지, 마이페이지, 공지사항 페이지 등 담당' },
    ],
    work: [
      {
        image: '0.jpg',
        number: '01',
        title: '메인 페이지',
      },
      {
        image: '1.jpg',
        number: '02',
        title: '상품 리스트 페이지',
        desc: '그리드 시스템을 이용하여 독특하면서 일관성 있는 디자인을 적용했습니다. ',
      },
      {
        image: '2.jpg',
        number: '03',
        title: '공통 작업',
        desc: '헤더 텍스트와 같은 공통 요소를 작업했습니다. ',
      },
      {
        image: '3.jpg',
      },
    ],
  },
  {
    id: 'inara',
    display: true,
    star: false,
    title: '아이들 나라 소개 사이트',
    thumb: true,
    date: '2022-06-23',
    endDate: '2022-08-31',
    tech: [0, 2, 3, 4, 17],
    type: [1],
    client: 'LG U+',
    url: 'https://www.i-nara.co.kr/',
    gitUrl: null,
    desc: 'LG U+의 아이들 나라 소개 사이트 구축 프로젝트입니다. 처음 PL을 맡은 프로젝트로, 환경 세팅 과정부터 주도적으로 작업했습니다. 기획 및 디자인 팀과 소통하며 구현 가능한 기능에 대해 논의하고 일정을 조율하는 등의 경험을 쌓았습니다. ',
    learn: [
      { title: 'PL (프로젝트 리더)' },
      { title: '기획 및 디자인 팀과의 협업', desc: '일정 조율, 구현 가능한 기능 논의 등 커뮤니케이션 담당' },
      { title: '페이지 및 컴포넌트 구성', desc: '메인 페이지와 브랜드 페이지 작업 진행, 전체 컴포넌트 구성' },
      { title: '개발 가이드 작성', desc: '고객사의 유지보수를 용이하게 하기 위한 개발 가이드 공유' },
      { title: '반응형 작업' },
    ],

    work: [
      {
        video: '0.mp4',
        number: '01',
        title: '메인 페이지',
        desc: '특정 시간 내에 스크롤이 감지되지 않으면 자동 재생되고, 스크롤이 감지된다면 스크롤 양에 맞게 움직이도록 작업하여 사용자의 편의를 고려했습니다.',
      },
      {
        image: '1.jpg',
        number: '02',
        title: '브랜드 페이지',
        desc: '스크롤 양이 많은 페이지기 때문에, 페이지 상단에 프로그레스 바와 인덱스를 추가했습니다. 스크롤 방향에 따라 헤더를 숨김 처리하여 사용자가 더 많은 정보를 볼 수 있도록 했습니다.',
      },
      {
        image: '2.jpg',
      },
      {
        image: '3.jpg',
        number: '03',
        title: '공통 요소',
        desc: '헤더와 같이 페이지의 디자인과 배경색에 따라 다르게 적용되는 공통 요소를 작업했습니다.',
      },
    ],
  },
  {
    id: 'grape',
    display: true,
    star: true,
    title: 'DFY 인트라넷 (Grape)',
    thumb: true,
    date: '2022-09-26',
    endDate: null,
    tech: [4, 6, 7, 15, 20, 25],
    type: [1],
    client: '내부 프로젝트',
    url: null,
    gitUrl: null,
    desc: '회사 내부 커뮤니티를 목적으로 한 인트라넷 구축 프로젝트로, 진행 중 내부 사정으로 프로젝트가 중단됐습니다. React와 Remix 환경에서 작업하였고, 회사 내 그룹과 멤버 정보 관리, 블로그 및 댓글 쓰기 등의 기능이 포함되었습니다. 저는 그룹 및 멤버 정보 관리 기능을 담당하여 Supabase로 DB를 구성하고 API 연동 작업을 수행했습니다. 정보 추가 및 수정 페이지, 상세 페이지 등을 효율적으로 관리하기 위해 다이나믹 라우팅을 구성했습니다.',
    learn: [
      { title: 'DB 구성 및 API 연동 작업', desc: '그룹 및 멤버 정보 관리 기능을 담당하여, 관련 Supabase DB 구성 및 API 연동 작업 수행' },
      { title: '라우팅 구성', desc: 'React와 Remix 환경에서 정보 추가 및 수정 페이지, 상세 페이지를 효율적으로 관리하기 위한 라우팅 구성' },
      { title: '페이지 분기 작업', desc: '사용자 권한에 따른 페이지 분기 작업 진행' },
      {
        title: '기능 및 페이지 구현',
        desc: '그룹 및 멤버 등록 기능, 멤버 목록 페이지의 필터 기능(그룹별, 직급별 등), 멤버 상세 페이지, 그룹 관리 페이지',
      },
      { desc: '회사 내부 사정으로 프로젝트 진행 중단' },
    ],

    // work: [
    //   {
    //     image: '0.gif',
    //     title: '@@@',
    //     desc: '@@@',
    //   },
    // ],
  },
  {
    id: 'genesis',
    display: true,
    star: false,
    title: '제네시스 GV70 페이지 리뉴얼',
    thumb: true,
    date: '2023-03-02',
    endDate: '2023-06-07',
    tech: [0, 1, 3, 4, 18],
    type: [1],
    client: '현대자동차',
    url: 'https://www.genesis.com/worldwide/en/models/luxury-suv-genesis/electrified-gv70/highlights.html',
    gitUrl: null,
    desc: '제네시스 상세 페이지 리뉴얼 프로젝트입니다. 기존 사이트의 구조를 분석하고, 이를 바탕으로 컴포넌트를 구성하는 것이 중요했습니다. Electrified GV70을 시작으로, 향후 출시될 모델의 상세 페이지에도 적용 가능하며 수정이 용이하도록 컴포넌트의 확장성을 고려했습니다. 또한, 다국어 지원, 접근성, 반응형 작업을 진행했습니다.',
    learn: [
      { title: 'GSAP 활용', desc: '스크롤 기반의 인터랙션을 구현' },
      { title: '컴포넌트 작업', desc: '‘이미지 슬라이드’, ‘360도 시퀀스 인터랙션' },
      { title: '다국어 지원 작업, 접근성 작업, 반응형 작업' },
    ],
    // work: [
    //   {
    //     text: '💻📱 그리드 시스템을 기반으로 반응형으로 작업했습니다.',
    //   },
    //   {
    //     image: '0.gif',
    //     title: '@@@',
    //     desc: '@@@',
    //   },
    // ],
  },
  {
    id: 'hcloud',
    display: true,
    star: true,
    title: '현대 클라우드 구축 (HCloud)',
    thumb: true,
    date: '2023-06-12',
    endDate: '2024-02-29',
    tech: [4, 11, 13, 22, 23, 27],
    type: [1],
    client: '현대자동차',
    url: null,
    gitUrl: null,
    desc: '@@@',
    // learn: ['@@@'],

    learn: [
      { title: 'Nuxt.js의 Composable 활용', desc: '‘서비스 사용 승인’ 및 ‘사용 가능 리전 및 인스턴스 노출’ 로직 등 모듈화' },
      { title: 'API 연동 작업', desc: 'Axios, Tanstack query를 사용하여 CRUD API 연동 작업 진행' },
      { title: 'input 컴포넌트 작업 및 유효성 구현', desc: 'Vuetify 커스텀하여 사용, 전체 input 관련 컴포넌트를 작업하며 유효성 검사 기능 구현' },
      { title: '권한 기반 UI 분기', desc: '로그인 정보에 따라 페이지 및 화면 영역의 노출 분기하는 작업 수행' },
      { title: '테스트 진행', desc: '품질을 상승을 위한 단위 테스트와 통합 테스트 진행' },
      { title: '스토리북 활용', desc: '컴포넌트 기능을 시각화, 효율적인 협업 달성' },
      { title: '코드 개선 및 협업', desc: 'GitHub의 PR(Pull Request)을 활용하여 적극적인 코드 개선과 원활한 팀 협업 경험' },
      { title: '백엔드 개발자와의 협업 경험', desc: 'Postman 사용 및 슬랙을 통한 커뮤니케이션' },
      { title: '어드민 페이지 개발' },
    ],

    // work: [
    //   {
    //     text: '💻📱 그리드 시스템을 기반으로 반응형으로 작업했습니다.',
    //   },
    //   {
    //     image: '0.gif',
    //     title: '@@@',
    //     desc: '@@@',
    //   },
    // ],
  },
  {
    id: 'samsung-health',
    display: true,
    star: true,
    title: '삼성 헬스 플로우 테스트 사이트',
    thumb: true,
    date: '2024-03-05',
    endDate: '2024-03-26',
    tech: [11, 14, 19, 27],
    type: [1],
    client: '삼성전자',
    url: null,
    gitUrl: null,
    desc: '삼성 헬스 앱 플로우 테스트를 위한 사이트 구축 프로젝트입니다. PL로서, 프로젝트의 작업 범위를 고려하여 적절한 개발 환경을 비교 및 설정했습니다. 미국에서 테스트를 진행하는 것을 고려해, 이미지와 영상을 프리로딩하는 등 플로우 테스트의 목적을 원활히 수행할 수 있도록 하는 데 중점을 두어 작업했습니다.',
    learn: [
      { title: 'PL (프로젝트 리더)' },
      { title: '기획 및 디자인 팀과의 협업', desc: '일정 조율, 구현 가능한 기능 논의, WBS 문서 공유 등 커뮤니케이션 담당' },
      { title: '개발 환경 설정 및 컴포넌트 구성', desc: '팀원들의 개발 편의성과 작업 범위, 목적을 고려하여 개발 환경 설정 및 전체 컴포넌트 구성' },
      {
        title: '기능 구현',
        desc: '이미지 및 영상 프리로딩 설정, 영상 및 운동 현황 안내 페이지 작업(사용자 플로우에 따른 영상 재생 여부 및 운동 현황 섹션 노출 여부를 결정하는 로직 구현)',
      },
      { title: '다국어 지원', desc: '사이트의 다국어 작업 진행' },
      { title: '기술 스택', desc: 'Vue, Vite, Tailwind CSS를 사용, Cloudflare를 통한 배포, GitHub를 통한 버전 관리' },
    ],
    // work: [
    //   {
    //     image: '0.gif',
    //     title: '@@@',
    //     desc: '@@@',
    //   },
    // ],
  },

  // 개인
  {
    id: 'yes-wedding',
    display: true,
    star: false,
    title: '모바일 청첩장',
    thumb: true,
    date: '2022-05-23',
    endDate: '2022-06-09',
    tech: [3, 4, 6, 24],
    type: [0],
    client: '개인 프로젝트',
    url: 'https://azultasul.github.io/yes-wedding/',
    gitUrl: null,
    desc: 'React 연습을 목적으로 개발한 모바일 청첩장 프로젝트입니다. Vue와의 비교를 통해 프레임워크와 라이브러리의 차이점을 직접 경험하고 이해했습니다. Firebase를 활용한 방명록 CRUD 구현, 카카오 지도 및 송금 API 연동, 공유하기 기능 추가, 그리고 GitHub Pages에 배포하는 등 React 환경에서의 다양한 기능 구현을 목표로 했습니다.',
    // learn: ['@@@'],
    // work: [
    //   {
    //     text: '💻📱 그리드 시스템을 기반으로 반응형으로 작업했습니다.',
    //   },
    //   {
    //     image: '0.gif',
    //     title: '@@@',
    //     desc: '@@@',
    //   },
    // ],
  },
  {
    id: 'shuffle-text',
    display: true,
    star: false,
    title: 'ShuffleText (npm 패키지 배포)',
    thumb: true,
    date: '2023-02-23',
    endDate: '2023-02-25',
    tech: [3, 29],
    type: [0],
    client: '개인 프로젝트',
    url: 'https://www.npmjs.com/package/@tasul/shuffle-text',
    gitUrl: null,
    desc: 'npm 패키지로 배포한 JavaScript 라이브러리입니다. npm 패키지를 직접 만들어보고 싶다는 생각에, 이전에 작업했던 텍스트 전환 기능을 모듈화하여 라이브러리로 개발했습니다. 다른 개발자들이 라이브러리를 쉽게 이해하고 사용할 수 있도록 파라미터와 메서드를 정의하고 문서화하는 데 중점을 두었습니다.',
    // learn: ['@@@'],
    // work: [
    //   {
    //     text: '💻📱 그리드 시스템을 기반으로 반응형으로 작업했습니다.',
    //   },
    //   {
    //     image: '0.gif',
    //     title: '@@@',
    //     desc: '@@@',
    //   },
    // ],
  },
  {
    id: 'azulog',
    display: false,
    star: false,
    title: '개인 블로그 (Azulog)',
    thumb: true,
    date: '2023-03-08',
    endDate: null,
    tech: [6, 10, 16, 21],
    type: [0],
    client: '개인 프로젝트',
    url: null,
    gitUrl: null,
    desc: 'React로 작업한 제 개인 블로그입니다. Next.js를 공부한 후 더 깊이 이해하고자 이 프로젝트를 진행했습니다. Markdown으로 블로그 글을 작성하고 불러오도록 구현했으며, Algolia를 이용해 검색 기능을 추가했습니다. 또한, 글에서 서술하는 기술 스택 또는 시리즈 카테고리로 필터링하여 원하는 글을 쉽게 찾을 수 있도록 하는 데 중점을 두었습니다.',
    // learn: ['@@@'],
    // work: [
    //   {
    //     text: '💻📱 그리드 시스템을 기반으로 반응형으로 작업했습니다.',
    //   },
    //   {
    //     image: '0.gif',
    //     title: '@@@',
    //     desc: '@@@',
    //   },
    // ],
  },
  {
    id: 'portfolio',
    display: true,
    star: true,
    title: '포트폴리오 (현재 사이트)',
    thumb: true,
    date: '2024-08-06',
    endDate: null,
    tech: [2, 6, 9, 10, 26, 28],
    type: [0],
    client: '개인 프로젝트',
    url: null,
    gitUrl: null,
    desc: '해당 사이트로, 제가 작업한 프로젝트를 보여주기 위한 포트폴리오 사이트입니다. 달라진 Next.js 13을 직접 사용해보고자 개인 블로그 (Azulog)에서 분리하여 새로 작업했습니다. 새로운 기술을 익히는 데 중점을 두어 Recoil, MongoDB, AWS 등 이전 프로젝트에서 사용하지 않았던 기술들을 시도했습니다.',
    // learn: ['@@@'],
    // work: [
    //   {
    //     text: '💻📱 그리드 시스템을 기반으로 반응형으로 작업했습니다.',
    //   },
    //   {
    //     image: '0.gif',
    //     title: '@@@',
    //     desc: '@@@',
    //   },
    // ],
  },
]

export default projects
