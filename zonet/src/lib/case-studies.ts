export const categories = ['All', 'Websites', 'Applications', 'AI Services'];
export const industries = ['All Industries', 'E-Commerce', 'FinTech', 'Ed-Tech', 'Gaming', 'SaaS', 'Social', 'Consultancy', 'Browser Tools'];

export const caseStudies = [
  {
    slug: 'flipshope',
    category: 'Applications',
    industry: 'E-Commerce',
    logo: '/images/clients/flipshope-logo.png',
    name: 'Flipshope',
    tagline: 'AI Shopping Assistant',
    photo: '/images/zonet/flipshope-1.png',
    badge: 'AI Shopping',
    heroStat: { value: '1.5M+', label: 'Active Users' },
    description: [
      { text: 'Built an ' },
      { text: 'AI-driven shopping assistant', highlight: true },
      { text: ' with real-time price tracking across 20 crore products.' },
    ],
    stats: [
      { value: '1.5M', label: 'Users', icon: 'Users' },
      { value: '4.5★', label: 'Rating', icon: 'Star' },
      { value: '20Cr', label: 'Products', icon: 'TrendingUp' },
    ],
    detail: {
      problem: 'Online shoppers struggle with volatile prices and manual coupon hunting across multiple platforms like Amazon and Flipkart, often missing the best possible deals.',
      solution: 'We engineered a high-performance browser extension and mobile app suite that automates price tracking, provides AI-driven "Buy vs Wait" scoring, and auto-applies coupons at checkout.',
      results: [
        '1.5 Million+ active monthly users',
        'Real-time tracking of over 20 Crore products',
        'Average 4.5/5 star rating across all platforms'
      ],
      tech: ['React', 'Node.js', 'Puppeteer', 'Chrome Extension API', 'Firebase'],
      features: [
        { title: 'Browser Extension', desc: 'Real-time price graph overlays and automated coupon injection.', icon: 'Puzzle' },
        { title: 'Mobile App', desc: 'Price drop push notifications and personalized deal feeds.', icon: 'Smartphone' },
        { title: 'AI Scoring', desc: 'Predictive algorithms that analyze price history to recommend the best time to buy.', icon: 'Zap' }
      ]
    }
  },
  {
    slug: 'hyyzo',
    category: 'AI Services',
    industry: 'FinTech',
    logo: '/images/clients/hyyzo-logo.png',
    name: 'Hyyzo',
    tagline: "India's Highest Paying Rewards",
    photo: '/images/zonet/hyyzo-1.png',
    badge: 'FinTech',
    heroStat: { value: '100k+', label: 'Earners' },
    description: [
      { text: "Architected India's " },
      { text: 'highest-paying rewards engine', highlight: true },
      { text: ' with Profit Link automation and 200+ store integrations.' },
    ],
    stats: [
      { value: '100k+', label: 'Earners', icon: 'Users' },
      { value: '200+', label: 'Stores', icon: 'TrendingUp' },
      { value: '4.4★', label: 'App Rank', icon: 'Star' },
    ],
    detail: {
      problem: 'The affiliate marketing space for individuals was fragmented, with low payouts and complex tracking systems for casual sharers.',
      solution: 'Developed a robust rewards ecosystem featuring "Profit Links"—automated affiliate tools that allow anyone to earn commissions by sharing store links with zero friction.',
      results: [
        'Over 1 Lakh active earners on the platform',
        'Integrated with 200+ major partner stores',
        'Maintained a top-tier app ranking in reward categories'
      ],
      tech: ['Next.js', 'PostgreSQL', 'Affiliate API Engine', 'React Native'],
      features: [
        { title: 'Profit Links', desc: 'One-click conversion of any store link into a trackable, high-paying earning link.', icon: 'TrendingUp' },
        { title: 'Dynamic Cashback', desc: 'Real-time calculation and distribution of rewards across multiple tiers.', icon: 'Zap' },
        { title: 'PWA Integration', desc: 'Seamless mobile experience with instant notifications for earnings.', icon: 'Globe' }
      ]
    }
  },
  {
    slug: 'teacherdekho',
    category: 'Applications',
    industry: 'Ed-Tech',
    logo: '/images/clients/teacherdekho-logo.png',
    name: 'TeacherDekho',
    tagline: 'Verified Mentor Marketplace',
    photo: '/images/zonet/teacherdekho-1.png',
    badge: 'Ed-Tech',
    heroStat: { value: '50k+', label: 'Students' },
    description: [
      { text: 'Launched a ' },
      { text: 'verified mentor marketplace', highlight: true },
      { text: ' connecting 50k+ students with AI-powered progress tracking.' },
    ],
    stats: [
      { value: '50k+', label: 'Students', icon: 'Users' },
      { value: '2k+', label: 'Mentors', icon: 'Star' },
      { value: '4.8★', label: 'Rating', icon: 'TrendingUp' },
    ],
    detail: {
      problem: 'Finding verified, high-quality mentors for specialized subjects was a manual, trust-deficient process for students and parents.',
      solution: 'Built a marketplace with a rigorous background verification system, AI-driven mentor matching, and a comprehensive student progress dashboard.',
      results: [
        'Successfully onboarded 50k+ active students',
        'Built a network of 2,000+ thoroughly verified mentors',
        'Achieved a 4.8/5 satisfaction rating for learning outcomes'
      ],
      tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Verification AI Hub'],
      features: [
        { title: 'Mentor Matching', desc: 'AI algorithm that matches students with mentors based on learning style and goals.', icon: 'Zap' },
        { title: 'Progress Dashboard', desc: 'Visual analytics for students to track their curriculum mastery.', icon: 'BarChart3' },
        { title: 'Verification Engine', desc: 'Automated document and credential validation for mentor onboarding.', icon: 'ShieldCheck' }
      ]
    }
  },
  {
    slug: 'punogames',
    category: 'Websites',
    industry: 'Gaming',
    logo: '/images/clients/punogames-logo.png',
    name: 'Puno Games',
    tagline: 'High-Performance Gaming Portal',
    photo: '/images/zonet/screenshot-1.png',
    badge: 'Gaming',
    heroStat: { value: '500k+', label: 'Players' },
    description: [
      { text: 'Scaled a ' },
      { text: 'high-performance gaming portal', highlight: true },
      { text: ' with real-time multiplayer support and 99.9% uptime.' },
    ],
    stats: [
      { value: '500k+', label: 'Players', icon: 'Users' },
      { value: '99.9%', label: 'Uptime', icon: 'TrendingUp' },
      { value: '4.7★', label: 'Rating', icon: 'Star' },
    ],
    detail: {
      problem: 'Online gaming portals often suffer from high latency and unstable servers, especially with concurrent players in multiplayer modes.',
      solution: 'Engineered a horizontally scalable cloud architecture with high-performance WebSockets to handle real-time game states for thousands of simultaneous players.',
      results: [
        'Reached 500k+ registered players in under 12 months',
        'Maintained 99.9% uptime despite peak traffic events',
        'Consistently high user retention due to smooth gameplay'
      ],
      tech: ['Next.js', 'Socket.io', 'Redis', 'AWS Elastic Beanstalk'],
      features: [
        { title: 'Real-time Multiplay', desc: 'Low-latency sync for competitive browser-based gaming.', icon: 'Rocket' },
        { title: 'Global Leaderboards', desc: 'Live ranking system fueled by cached Redis stores.', icon: 'TrendingUp' },
        { title: 'Instant Rewards', desc: 'Automated achievement and token system for active players.', icon: 'Zap' }
      ]
    }
  },
  {
    slug: 'karekaisee',
    category: 'Websites',
    industry: 'Consultancy',
    logo: '/images/zonet/logo-light.png',
    name: 'Karekaisee',
    tagline: 'Digital Consultancy Platform',
    photo: '/images/zonet/screenshot-2.png',
    badge: 'Consultancy',
    heroStat: { value: '3x', label: 'Lead Growth' },
    description: [
      { text: 'Engineered a ' },
      { text: 'digital consultancy platform', highlight: true },
      { text: ' driving 3x lead generation with 10k+ clients.' },
    ],
    stats: [
      { value: '3x', label: 'Leads', icon: 'TrendingUp' },
      { value: '50+', label: 'Experts', icon: 'Users' },
      { value: '10k+', label: 'Clients', icon: 'Star' },
    ],
    detail: {
      problem: 'A legacy consultancy firm was struggling with an outdated digital presence that failed to capture younger, digitally native clients.',
      solution: 'Rebranded and rebuilt the entire platform with a focus on conversion-centric UX, automated lead capture, and an interactive expert directory.',
      results: [
        'Triple the number of qualified leads generated within 3 months',
        'Successfully managed 10k+ client interactions through the new platform',
        'Onboarded 50+ industry experts into the searchable directory'
      ],
      tech: ['Next.js', 'Sanity CMS', 'Tailwind CSS', 'Framer Motion'],
      features: [
        { title: 'Expert Directory', desc: 'High-speed searchable database of qualified consultants.', icon: 'Users' },
        { title: 'Lead Capture AI', desc: 'Conversational intake forms that increase completion rates.', icon: 'Zap' },
        { title: 'Client Dashboard', desc: 'Secure area for clients to manage their ongoing projects.', icon: 'ShieldCheck' }
      ]
    }
  },
  {
    slug: 'twitch-adblocker',
    category: 'Applications',
    industry: 'Browser Tools',
    logo: '/images/zonet/logo-light.png',
    name: 'Twitch Adblocker',
    tagline: 'Seamless Ad-Free Experience',
    photo: '/images/zonet/screenshot-3.png',
    badge: 'Extension',
    heroStat: { value: '1M+', label: 'Installs' },
    description: [
      { text: 'Developed a ' },
      { text: 'robust ad-blocking extension', highlight: true },
      { text: ' providing a seamless viewing experience with 4.9★ rating.' },
    ],
    stats: [
      { value: '1M+', label: 'Installs', icon: 'TrendingUp' },
      { value: '4.9★', label: 'Rating', icon: 'Star' },
      { value: '0', label: 'Ads', icon: 'Users' },
    ],
    detail: {
      problem: 'Twitch users were increasingly frustrated by repeated, unskippable ads that interrupted live gameplay moments.',
      solution: 'Created a specialized browser extension that bypasses mid-roll ads by dynamically adjusting stream quality during ad segments, ensuring zero interruptions.',
      results: [
        'Achieved a massive install base of 1M+ users',
        'Maintained a stellar 4.9/5 star rating on the Chrome Web Store',
        'Proven to block 100% of standard Twitch ad formats'
      ],
      tech: ['Vanilla JS', 'Content Scripts', 'Manifest v3', 'Stream API Manipulation'],
      features: [
        { title: 'Zero Interrupt', desc: 'Seamlessly switches to a temporary proxy stream during ad breaks.', icon: 'Zap' },
        { title: 'Low Latency', desc: 'Optimized code execution to ensure zero delay in the live stream.', icon: 'Rocket' },
        { title: 'Auto-Update', desc: 'Push updates to bypass new ad delivery mechanisms instantly.', icon: 'Smartphone' }
      ]
    }
  },
  {
    slug: 'kroolo',
    category: 'Applications',
    industry: 'SaaS',
    logo: '/images/clients/kroolo-logo.png',
    name: 'Kroolo',
    tagline: 'All-in-One Productivity Suite',
    photo: '/images/zonet/screenshot-4.png',
    badge: 'Productivity',
    heroStat: { value: '100k+', label: 'Teams' },
    description: [
      { text: 'Designed an ' },
      { text: 'all-in-one productivity suite', highlight: true },
      { text: ' to streamline team collaboration and manage 5M+ tasks.' },
    ],
    stats: [
      { value: '100k+', label: 'Teams', icon: 'Users' },
      { value: '40%', label: 'Efficiency', icon: 'TrendingUp' },
      { value: '5M+', label: 'Tasks', icon: 'Star' },
    ],
    detail: {
      problem: 'Teams were suffering from "app fatigue," switching between 5+ different tools to manage tasks, docs, chats, and projects.',
      solution: 'Built a unified productivity workspace that integrates AI-powered task management, real-time collaboration, and centralized documentation.',
      results: [
        'Used by over 100k+ high-growth teams worldwide',
        'Reported 40% increase in team operational efficiency',
        'Currently managing over 5 Million tasks across the platform'
      ],
      tech: ['React', 'NestJS', 'PostgreSQL', 'Socket.io', 'ElasticSearch'],
      features: [
        { title: 'AI Assistant', desc: 'Automatically categorizes tasks and suggests project timelines.', icon: 'Zap' },
        { title: 'Unified View', desc: 'Consolidated dashboard for tasks, docs, and communication.', icon: 'Globe' },
        { title: 'Smart Search', desc: 'Lightning-fast search across all projects and documents.', icon: 'Smartphone' }
      ]
    }
  },
  {
    slug: 'hyyfam',
    category: 'Applications',
    industry: 'Social',
    logo: '/images/clients/hyyfam-logo.png',
    name: 'HyyFam',
    tagline: 'Vibrant Social Rewards App',
    photo: '/images/zonet/screenshot-5.png',
    badge: 'Social',
    heroStat: { value: '2M+', label: 'Members' },
    description: [
      { text: 'Created a ' },
      { text: 'vibrant social rewards app', highlight: true },
      { text: ' fostering community engagement with 10M+ posts.' },
    ],
    stats: [
      { value: '2M+', label: 'Members', icon: 'Users' },
      { value: '10M+', label: 'Posts', icon: 'TrendingUp' },
      { value: '4.6★', label: 'Rating', icon: 'Star' },
    ],
    detail: {
      problem: 'Social platforms often fail to reward users for high-quality content and community contributions.',
      solution: 'Launched a social ecosystem where engagement (posts, likes, helpfulness) is directly tied to a tangible tokens/rewards system.',
      results: [
        'Rapidly grew to a community of 2M+ active members',
        'Facilitated over 10 Million community-generated posts',
        'Consistently high engagement rates compared to traditional social apps'
      ],
      tech: ['React Native', 'Node.js', 'MongoDB', 'Redis'],
      features: [
        { title: 'Engagement Mining', desc: 'Algorithm that rewards users based on verified community value.', icon: 'Zap' },
        { title: 'Social Loops', desc: 'Gamified interactive features that drive repeat daily visits.', icon: 'Rocket' },
        { title: 'Redemption Hub', desc: 'Instant conversion of social tokens into real rewards.', icon: 'ShieldCheck' }
      ]
    }
  },
  {
    slug: 'the-best-deals',
    category: 'Websites',
    industry: 'E-Commerce',
    logo: '/images/clients/thebestdeals-logo.png',
    name: 'The Best Deals',
    tagline: 'Dynamic Deals Aggregator',
    photo: '/images/zonet/screenshot-6.png',
    badge: 'E-Commerce',
    heroStat: { value: '₹1B+', label: 'Savings' },
    description: [
      { text: 'Launched a ' },
      { text: 'dynamic deals aggregator', highlight: true },
      { text: ' featuring real-time offers saving users ₹1 Billion+.' },
    ],
    stats: [
      { value: '500k+', label: 'Users', icon: 'Users' },
      { value: '1M+', label: 'Deals', icon: 'TrendingUp' },
      { value: '₹1B+', label: 'Savings', icon: 'Star' },
    ],
    detail: {
      problem: 'The web is flooded with fake "deals" and expired coupons, costing shoppers time and money.',
      solution: 'Rebuilt the aggregator with an AI-verification layer that cross-references live prices across 500+ sources to ensure only genuine deals are shown.',
      results: [
        'Proven to have saved users over ₹1 Billion in cumulative purchases',
        'Provides access to over 1 Million verified deals daily',
        'Highly trusted by 500k+ savvy shoppers in India'
      ],
      tech: ['Next.js', 'PyScript (for AI logic)', 'Redis', 'Node.js'],
      features: [
        { title: 'Price Checker', desc: 'AI agent that validates every deal against historical lows.', icon: 'ShieldCheck' },
        { title: 'Real-time Feed', desc: 'Low-latency updates for flash sales and limited time offers.', icon: 'Zap' },
        { title: 'Merchant API', desc: 'Direct integrations with major retailers for early access.', icon: 'Globe' }
      ]
    }
  },
  {
    slug: 'hyzify',
    category: 'AI Services',
    industry: 'FinTech',
    logo: '/images/clients/hyzify-logo.png',
    name: 'Hyzify',
    tagline: 'Secure FinTech Payment Solution',
    photo: '/images/zonet/screenshot-1.png',
    badge: 'FinTech',
    heroStat: { value: '₹5B+', label: 'Processed' },
    description: [
      { text: 'Developed a ' },
      { text: 'secure FinTech solution', highlight: true },
      { text: ' for seamless financial transactions at bank-grade security.' },
    ],
    stats: [
      { value: '100k+', label: 'Merchants', icon: 'Users' },
      { value: '₹5B+', label: 'Processed', icon: 'TrendingUp' },
      { value: 'AAA', label: 'Security', icon: 'Star' },
    ],
    detail: {
      problem: 'High-volume merchants needed a faster, more cost-effective payment gateway with lower rejection rates for international payments.',
      solution: 'Architected a smart-routing payment gateway that uses machine learning to predict and use the most successful processing route for every transaction.',
      results: [
        'Successfully processed over ₹5 Billion in transaction volume',
        'Used by 100k+ merchants for daily high-volume operations',
        'Achieved a bank-grade AAA security certification'
      ],
      tech: ['Go', 'Rust (for crypto ops)', 'PostgreSQL', 'AI Smart-Router'],
      features: [
        { title: 'Smart Router', desc: 'AI engine that chooses the gateway route with the highest success probability.', icon: 'Zap' },
        { title: 'Auto-Reconciliation', desc: 'Real-time financial matching to eliminate manual accounting errors.', icon: 'BarChart3' },
        { title: 'Fraud Guard', desc: 'Advanced behavioral analysis to detect and block suspicious payments.', icon: 'ShieldCheck' }
      ]
    }
  },
];
