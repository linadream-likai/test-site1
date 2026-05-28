import { Service, Project, Job } from './types';

export const services: Service[] = [
  {
    id: 'software-dev',
    icon: 'Code2',
    title: {
      ja: 'カスタムソフトウェア開発',
      en: 'Custom Software Development'
    },
    description: {
      ja: '最先端の技術スタックを使用し、お客様のビジネスに最適化されたWeb・モバイルアプリケーションを開発します。',
      en: 'We build high-performance, scalable web and mobile applications tailored to your business using cutting-edge tech stacks.'
    },
    details: {
      ja: ['Next.js / React / TypeScript', 'Go / Node.js / Python', 'クラウドネイティブ設計', 'アジャイル開発プロセス'],
      en: ['Next.js / React / TypeScript', 'Go / Node.js / Python', 'Cloud-Native Architecture', 'Agile Development Process']
    }
  },
  {
    id: 'ai-data',
    icon: 'Brain',
    title: {
      ja: 'AI & データ解析ソリューション',
      en: 'AI & Data Analytics Solutions'
    },
    description: {
      ja: '機械学習とLLM（大規模言語モデル）を活用し、業務の自動化やデータ駆動型の意思決定を強力にサポートします。',
      en: 'Leverage machine learning and LLMs to automate workflows and empower data-driven decision making.'
    },
    details: {
      ja: ['カスタムLLM・GPT構築', '予測分析モデル開発', 'データパイプライン構築', '画像・音声認識システム'],
      en: ['Custom LLM & GPT Integration', 'Predictive Analytics Models', 'Data Pipeline Engineering', 'Computer Vision & Speech Recognition']
    }
  },
  {
    id: 'cloud-devops',
    icon: 'Cloud',
    title: {
      ja: 'クラウド & DevOps 移行',
      en: 'Cloud & DevOps Migration'
    },
    description: {
      ja: 'AWS/GCPを中心としたセキュアでスケーラブルなインフラ構築と、CI/CD導入による開発の高速化を実現します。',
      en: 'Build secure, scalable cloud infrastructure on AWS/GCP and accelerate delivery with modern CI/CD pipelines.'
    },
    details: {
      ja: ['AWS / Google Cloud 設計・構築', 'Infrastructure as Code (Terraform)', 'Kubernetes コンテナ化', '24/7 監視・運用保守'],
      en: ['AWS / Google Cloud Architecture', 'Infrastructure as Code (Terraform)', 'Kubernetes Containerization', '24/7 Monitoring & Maintenance']
    }
  },
  {
    id: 'global-talent',
    icon: 'Globe',
    title: {
      ja: 'グローバルIT人材ソリューション',
      en: 'Global IT Talent Solutions'
    },
    description: {
      ja: '福岡の国家戦略特区を活かし、世界中から優秀なエンジニアを集め、多国籍な開発チームを編成・提供します。',
      en: 'Leveraging Fukuoka\'s National Strategic Special Zone status to build elite, multicultural engineering teams.'
    },
    details: {
      ja: ['バイリンガルエンジニア派遣', 'オフショア・ハイブリッド開発', 'グローバル採用コンサルティング', '技術英語・日本語研修サポート'],
      en: ['Bilingual Engineer Staffing', 'Offshore & Hybrid Development', 'Global Recruitment Consulting', 'Language & Cultural Training']
    }
  }
];

export const projects: Project[] = [
  {
    id: 'project-1',
    title: {
      ja: '福岡スマートシティ IoTプラットフォーム',
      en: 'Fukuoka Smart City IoT Platform'
    },
    category: {
      ja: 'スマートシティ / IoT',
      en: 'Smart City / IoT'
    },
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
    description: {
      ja: 'リアルタイムで人流や環境データを可視化し、都市の最適化を支援するダッシュボードシステム。',
      en: 'A real-time dashboard system visualizing pedestrian flow and environmental data to optimize urban planning.'
    },
    tags: ['React', 'Node.js', 'AWS IoT', 'Python', 'TimescaleDB']
  },
  {
    id: 'project-2',
    title: {
      ja: '次世代越境ECプラットフォーム',
      en: 'Next-Gen Cross-Border E-Commerce'
    },
    category: {
      ja: 'Eコマース / Web3',
      en: 'E-Commerce / Web3'
    },
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg',
    description: {
      ja: 'アジア市場をターゲットにした、超高速・多言語対応のヘッドレスコマースシステム。',
      en: 'An ultra-fast, multi-lingual headless commerce system targeting Asian markets with seamless payment integrations.'
    },
    tags: ['Next.js', 'GraphQL', 'Shopify API', 'Stripe', 'Vercel']
  },
  {
    id: 'project-3',
    title: {
      ja: 'AI搭載 物流最適化システム',
      en: 'AI-Powered Logistics Optimizer'
    },
    category: {
      ja: '人工知能 / 物流',
      en: 'AI / Logistics'
    },
    image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg',
    description: {
      ja: '配送ルートの自動最適化と、AIによる需要予測で配送コストを30%削減。',
      en: 'Automated route optimization and AI demand forecasting, reducing delivery costs by 30%.'
    },
    tags: ['Python', 'TensorFlow', 'FastAPI', 'Docker', 'Google Maps API']
  }
];

export const jobs: Job[] = [
  {
    id: 'job-1',
    title: {
      ja: 'シニア フルスタックエンジニア',
      en: 'Senior Full-Stack Engineer'
    },
    department: {
      ja: '開発部',
      en: 'Engineering'
    },
    location: {
      ja: '福岡市中央区天神（リモート可）',
      en: 'Tenjin, Fukuoka (Hybrid Remote)'
    },
    type: {
      ja: '正社員',
      en: 'Full-time'
    },
    salary: {
      ja: '年収 700万 〜 1,100万円',
      en: '¥7.0M - ¥11.0M / Year'
    }
  },
  {
    id: 'job-2',
    title: {
      ja: 'AI / 機械学習エンジニア',
      en: 'AI / Machine Learning Engineer'
    },
    department: {
      ja: 'AIソリューション部',
      en: 'AI Solutions'
    },
    location: {
      ja: '福岡市中央区天神（リモート可）',
      en: 'Tenjin, Fukuoka (Hybrid Remote)'
    },
    type: {
      ja: '正社員',
      en: 'Full-time'
    },
    salary: {
      ja: '年収 650万 〜 1,000万円',
      en: '¥6.5M - ¥10.0M / Year'
    }
  },
  {
    id: 'job-3',
    title: {
      ja: 'グローバルITプロジェクトマネージャー',
      en: 'Global IT Project Manager'
    },
    department: {
      ja: 'プロジェクト管理部',
      en: 'Project Management'
    },
    location: {
      ja: '福岡市中央区天神（リモート可）',
      en: 'Tenjin, Fukuoka (Hybrid Remote)'
    },
    type: {
      ja: '正社員',
      en: 'Full-time'
    },
    salary: {
      ja: '年収 600万 〜 950万円',
      en: '¥6.0M - ¥9.5M / Year'
    }
  }
];
