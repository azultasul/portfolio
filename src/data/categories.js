const krName = {
  tech: '기술 스택',
  type: '프로젝트 타입',
}
const order = {
  0: '최신순',
  1: '오래된순',
}
const tech = {
  html: { id: 'html', name: 'HTML5', show: true },
  css: { id: 'css', name: 'CSS3', show: true },
  sass: { id: 'sass', name: 'SASS', show: true },
  javascript: { id: 'javascript', name: 'JavaScript', show: true },
  react: { id: 'react', name: 'React', show: true },
  vuejs: { id: 'vuejs', name: 'VueJS', show: true },
  typescript: { id: 'typescript', name: 'TypeScript', show: true },
  github: { id: 'github', name: 'Github', show: true },

  nextjs: { id: 'nextjs', name: 'NextJS', show: true },
  remix: { id: 'remix', name: 'Remix', show: true },
  redux: { id: 'redux', name: 'Redux', show: true },
  recoil: { id: 'recoil', name: 'Recoil', show: true },
  nuxtjs: { id: 'nuxtjs', name: 'NuxtJS', show: true },
  vuex: { id: 'vuex', name: 'Vuex', show: true },
  vite: { id: 'vite', name: 'Vite', show: true },
  vercel: { id: 'vercel', name: 'Vercel', show: true },

  'tailwind-css': { id: 'tailwind-css', name: 'Tailwind CSS', show: true },
  mantine: { id: 'mantine', name: 'Mantine', show: true },
  'styled-components': { id: 'styled-components', name: 'Styled-Components', show: true },
  vuetify: { id: 'vuetify', name: 'Vuetify', show: true },
  storybook: { id: 'storybook', name: 'Storybook', show: true },

  'template-engine': { id: 'template-engine', name: 'Template Engine', show: true },
  'restful-api': { id: 'restful-api', name: 'RESTful API', show: true },
  postman: { id: 'postman', name: 'Postman', show: true },
  firebase: { id: 'firebase', name: 'Firebase', show: true },
  supabase: { id: 'supabase', name: 'Supabase', show: true },
  mongodb: { id: 'mongodb', name: 'MongoDB', show: true },
  cloudflare: { id: 'cloudflare', name: 'Cloudflare', show: true },
  aws: { id: 'aws', name: 'AWS', show: false },
  npm: { id: 'npm', name: 'NPM', show: true },

  python: { id: 'python', name: 'Python', show: true },
  flask: { id: 'flask', name: 'Flask', show: true },
  'scikit-learn': { id: 'scikit-learn', name: 'Scikit-Learn', show: true },
  pandas: { id: 'pandas', name: 'Pandas', show: true },
  numpy: { id: 'numpy', name: 'Numpy', show: true },
  matplotlib: { id: 'matplotlib', name: 'Matplotlib', show: true },
  seaborn: { id: 'seaborn', name: 'Seaborn', show: true },
  tensorflow: { id: 'tensorflow', name: 'Tensorflow', show: true },
  keras: { id: 'keras', name: 'Keras', show: true },
  oracle: { id: 'oracle', name: 'Oracle', show: true },
  chatgpt: { id: 'chatgpt', name: 'ChatGPT', show: true },
  langchain: { id: 'langchain', name: 'LangChain', show: true },
  langgraph: { id: 'langgraph', name: 'LangGraph', show: true },
  yolo: { id: 'yolo', name: 'YOLO', show: true },
  opencv: { id: 'opencv', name: 'OpenCV', show: true },
  docker: { id: 'docker', name: 'Docker', show: true },

  'claude-code': { id: 'claude-code', name: 'Claude Code', show: true },
  cursor: { id: 'cursor', name: 'Cursor', show: true },
  vscode: { id: 'vscode', name: 'VSCode', show: true },
  markdown: { id: 'markdown', name: 'Markdown', show: true },
  gsap: { id: 'gsap', name: 'GSAP', show: true },
  figma: { id: 'figma', name: 'Figma', show: true },
  notion: { id: 'notion', name: 'Notion', show: true },
  slack: { id: 'slack', name: 'Slack', show: true },
  discord: { id: 'discord', name: 'Discord', show: true },
}

const type = {
  personal: { id: 'personal', name: '개인' },
  dfy: { id: 'dfy', name: '디파이' },
}

const catData = { krName, order, tech, type }

export default catData
