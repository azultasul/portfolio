const projects = [
  {
    id: 'fqled',
    star: false,
    title: 'Future of Display(FQLED)',
    thumb: true,
    date: '2020-08-24',
    endDate: '2020-11-27',
    tech: [0, 5, 3, 4, 11],
    type: [1],
    client: '삼성전자',
    url: 'https://www.samsung.com/uk/explore/brand/beyond-the-limits/',
    gitUrl: null,
    desc: '삼성 퀀텀 TV의 소개 페이지로, GSAP를 이용하여 버벅거림 없이 자연스러운 인터랙션을 구현하는 것에 중점을 두고 작업했습니다.',
    learn: [
      '섹션을 나누고 한 번의 스크롤로 자동 재생되도록 개발하여, 많은 양의 스크롤과 인터랙션으로 인한 사용자의 피로도를 줄이고자 했습니다. <b>사용자를 고려</b>한 개발에 대해 고민할 수 있었습니다.',
      '긴 플로우를 가진 원페이지라 파트를 나눠 작업한 후 코드를 머지할 때 충돌이 발생하는 경우가 많았습니다. <b>github</b>을 이용하여 코드를 관리하고 협업하는 방법을 배웠습니다.',
      '<b>GSAP</b>, <b>Canvas API</b> 등 인터랙션 구현을 위한 트랜드를 익히고 사용해보는 기회였습니다.',
      '<b>BEM 방법론</b>을 익히고 SCSS를 사용하여 작업했습니다.',
    ],
    work: [
      {
        text: '💻📱 반응형으로 작업했습니다.',
      },
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
    star: true,
    title: 'DFY 2K21',
    thumb: true,
    date: '2021-01-11',
    endDate: '2021-10-15',
    tech: [0, 4, 5, 9, 10, 11],
    type: [1],
    client: '내부 프로젝트',
    url: 'https://www.dfy.co.kr/',
    gitUrl: null,
    desc: '디파이 사이트 리뉴얼 프로젝트로, Vue3 환경에 대한 이해, Vuex를 통한 상태관리, 적절한 GSAP 적용 등이 중요했습니다.',
    learn: [
      'props, component 등의 개념을 익히고 <b>재사용 가능한 코드</b>, <b>누구나 쉽게 이해할 수 있는 코드</b>에 대해 고민할 기회였습니다.',
      '<b>Vuex를 통한 상태관리</b>로 큰 프로젝트에서 데이터를 어떻게 나누고 관리하는지 경험할 수 있었습니다.',
      '<b>HOC, teleport, slot</b> 등 Vue를 더욱 효과적으로 사용하기 위한 개념들을 언제, 어떻게 사용할지 고민하고 시도해볼 수 있었습니다.',
      'Vue 환경에서 <b>GSAP</b>를 적용하며 <b>lifecycle</b>에 대해 이해하고 적절하게 사용해볼 수 있었습니다.',
      'fxdom, fxjs를 사용하며 함수형 프로그래밍을 접할 수 있었습니다.',
      '일정에 제한이 없는 프로젝트였기 때문에, 많은 디테일을 충분히 잡아갈 수 있었습니다. 그에 따라 퀄리티가 올라가는 것을 직접 경험하며 디테일의 중요성을 확인할 수 있었습니다.',
    ],
    work: [
      {
        text: '💻📱 그리드 시스템을 기반으로 반응형으로 작업했습니다.',
      },
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
    star: false,
    title: 'MPX Gallery',
    thumb: true,
    date: '2021-09-27',
    endDate: '2022-03-31',
    tech: [0, 5, 12, 13],
    type: [1],
    client: '내부 프로젝트',
    url: 'https://mpx.co.kr/',
    gitUrl: null,
    desc: '쇼핑몰 구축 프로젝트로, 많은 페이지의 공통 요소를 최대한 묶어 작업하였고 백엔드 개발자와 지속해서 소통하며 수정하는 과정이 많았습니다.',
    learn: [
      '<b>tailwind</b>, <b>handlebars</b> 등 새로운 프레임워크, 템플릿 엔진을 사용하면서 제 취향을 고민해볼 수 있었습니다.',
      '회사 내부 프로젝트로, 디자인이 제한 없이 변경되는 경우가 많았습니다. 공통으로 사용되는 요소를 수정할 때, 전체에 어떤 영향을 미칠지 고려하면서 코드를 <b>리팩터링</b>해볼 수 있었습니다.',
      '<b>백엔드 개발자와 소통</b>하며 코드를 수정하는 경험을 할 수 있었습니다.',
    ],
    work: [
      {
        text: '💻📱 그리드 시스템을 기반으로 반응형으로 작업했습니다.',
      },
      // {
      //   image: '0.gif',
      //   number: '01',
      //   title: '@@@',
      //   desc: '@@@',
      // },
    ],
  },
  {
    id: 'reslower',
    star: false,
    title: 'ReSlower',
    thumb: true,
    date: '2022-04-04',
    endDate: '2022-05-13',
    tech: [0, 4, 5, 12],
    type: [1],
    client: '내부 프로젝트',
    url: 'https://www.reslow.life/',
    gitUrl: null,
    desc: 'cafe24를 이용한 쇼핑몰 구축 프로젝트로, cafe24의 기능과 기본 템플릿을 최대한 사용하면서 효율적으로 커스텀하는 것에 중점을 두고 작업했습니다.',
    learn: [
      '구현하려는 기능이 이미 있는지 파악한 후 해당 기능의 모듈과 파라미터를 확인하며 cafe24에 대해 이해할 수 있었습니다.',
      '기본 템플릿을 사용했기 때문에 페이지 구성과 기존 코드를 파악하는 것이 필수적이었습니다. 디자인에 맞춰 코드를 수정했을 때 전체에 미치는 영향을 고려하며 개발하는 경험을 할 수 있었습니다.',
      '기존 템플릿에 그리드 시스템을 추가하여 반응형 작업을 더욱 효율적으로 할 수 있었습니다.',
    ],
    work: [
      {
        text: '💻📱 그리드 시스템을 기반으로 반응형으로 작업했습니다.',
      },
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
    star: true,
    title: '아이들 나라',
    thumb: true,
    date: '2022-06-23',
    endDate: '2022-08-31',
    tech: [0, 4, 5, 12],
    type: [1],
    client: 'LG U+',
    url: 'https://www.i-nara.co.kr/',
    gitUrl: null,
    desc: 'LG U+의 아이들 나라 소개 사이트로, 처음 PL을 맡은 프로젝트였습니다. 고객사의 개발자가 쉽게 알아볼 수 있도록 작업하는 것이 중요했습니다.',
    learn: [
      '<b>PL</b>로서 기획, 디자인팀과 소통하는 일이 많았습니다. 기능의 구현 가능 여부에 관해 설명하며 <b>타 부서와 소통</b>하는 방법을 배웠습니다.',
      '작업 범위를 파악하고 일정을 조율하는 등 프로젝트가 진행되는 흐름에 <b>주도적으로 참여</b>할 수 있었습니다.',
      '팀원에게 <b>컴포넌트화하여 작업할 부분의 기준과 효율적인 방법들을 제안</b>하며 저도 더 깊게 고민할 수 있었습니다.',
      '산출물이 리액트 환경에 적용될 예정이었습니다. 고객사의 개발자가 쉽게 알아보고 적용할 수 있는 코드와 그것을 도와줄 <b>가이드 작성</b>에 대해 고민할 수 있었습니다.',
    ],
    work: [
      {
        text: '💻📱 반응형으로 작업했습니다.',
      },
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
    star: true,
    title: 'DFY 인트라넷(Grape)',
    thumb: true,
    date: '2022-09-26',
    endDate: null,
    tech: [0, 5, 6, 8, 14],
    type: [1],
    client: '내부 프로젝트',
    url: '@@@',
    gitUrl: null,
    desc: '@@@',
    learn: ['@@@'],
    work: [
      {
        text: '💻📱 그리드 시스템을 기반으로 반응형으로 작업했습니다.',
      },
      {
        image: '0.gif',
        title: '@@@',
        desc: '@@@',
      },
    ],
  },
  {
    id: 'genesis',
    star: true,
    title: 'Genesis GV70',
    thumb: true,
    date: '2022-09-26',
    endDate: null,
    tech: [0, 5, 6, 8, 14],
    type: [1],
    client: 'test',
    url: '@@@',
    gitUrl: null,
    desc: '@@@',
    learn: ['@@@'],
    work: [
      {
        text: '💻📱 그리드 시스템을 기반으로 반응형으로 작업했습니다.',
      },
      {
        image: '0.gif',
        title: '@@@',
        desc: '@@@',
      },
    ],
  },
  {
    id: 'hcloud',
    star: true,
    title: '현대클라우드(HCloud)',
    thumb: true,
    date: '2022-09-26',
    endDate: null,
    tech: [0, 5, 6, 8, 14],
    type: [1],
    client: 'test',
    url: '@@@',
    gitUrl: null,
    desc: '@@@',
    learn: ['@@@'],
    work: [
      {
        text: '💻📱 그리드 시스템을 기반으로 반응형으로 작업했습니다.',
      },
      {
        image: '0.gif',
        title: '@@@',
        desc: '@@@',
      },
    ],
  },
  {
    id: 'samsung-health',
    star: true,
    title: '삼성헬스',
    thumb: true,
    date: '2022-09-26',
    endDate: null,
    tech: [0, 5, 6, 8, 14],
    type: [1],
    client: 'test',
    url: '@@@',
    gitUrl: null,
    desc: '@@@',
    learn: ['@@@'],
    work: [
      {
        text: '💻📱 그리드 시스템을 기반으로 반응형으로 작업했습니다.',
      },
      {
        image: '0.gif',
        title: '@@@',
        desc: '@@@',
      },
    ],
  },
  {
    id: 'test',
    star: true,
    title: 'test',
    thumb: true,
    date: '2022-09-26',
    endDate: null,
    tech: [0, 5, 6, 8, 14],
    type: [0],
    client: 'test',
    url: '@@@',
    gitUrl: null,
    desc: '@@@',
    learn: ['@@@'],
    work: [
      {
        text: '💻📱 그리드 시스템을 기반으로 반응형으로 작업했습니다.',
      },
      {
        image: '0.gif',
        title: '@@@',
        desc: '@@@',
      },
    ],
  },
]

export default projects
