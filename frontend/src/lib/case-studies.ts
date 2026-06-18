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
      problem: 'Checking five different apps just to find the best discount is exhausting. By the time you find a deal, the price has already gone back up, or the prices of your favourite product have gone up.',
      solution: 'We created a high-performance website, a browser extension, and a mobile app. These platforms automatically track prices and find the best coupons and deals for shoppers.',
      results: [
        '1.5 Million+ active users on the platform',
        'Real-time price tracking from more than 200 stores',
        'Average 4.5/5 star rating across all platforms'
      ],
      impact: [
        { value: '1.5 Million+', label: 'Active users on the platform' },
        { value: '200+', label: 'Stores tracked in real-time' },
        { value: '4.5 / 5', label: 'Average rating across platforms' },
      ],
      tech: ['React', 'Node.js', 'Puppeteer', 'Chrome Extension API', 'Firebase'],
      features: [
        { title: 'Browser Extension', desc: 'Built an extension that tracks products\' price history.', icon: 'Puzzle' },
        { title: 'Web Development', desc: 'AI-powered delivery of deals and coupons for shoppers.', icon: 'Globe' },
        { title: 'Mobile App', desc: 'Built a seamless app which helps users shop smarter with price drop alerts.', icon: 'Smartphone' }
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
      problem: 'The affiliate marketing space was fragmented, and shoppers didn\'t understand the concept of cashback in depth.',
      solution: 'Developed a platform that creates a powerful, rewarding system with features like profit links, automated affiliate marketing, refer & earn, and cashback on online shopping.',
      results: [
        'Over 1 Lakh active earners on the platform',
        'Integrated with 200+ major partner stores globally',
        'Maintained a top-tier app ranking in reward categories'
      ],
      impact: [
        { value: '1 Lakh+', label: 'Active earners on the platform' },
        { value: '200+', label: 'Global partner stores integrated' },
        { value: '4.4 / 5', label: 'App rating in reward categories' },
      ],
      tech: ['Next.js', 'PostgreSQL', 'Affiliate API Engine', 'React Native'],
      features: [
        { title: 'Profit Links', desc: 'Users can earn a profit simply by sharing links with their friends and family.', icon: 'TrendingUp' },
        { title: 'Cashback Rewards', desc: 'Shopping via Hyyzo\'s website, extension, and app rewards exciting cashback.', icon: 'Zap' },
        { title: 'Affiliate Marketing', desc: 'Built a feature where users can earn commission via affiliate marketing.', icon: 'Globe' }
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
      problem: 'Finding a qualified, trustworthy, and verified tutor online was almost impossible for students with suitable time slots.',
      solution: 'We built a website that not only finds high-quality tutors but also tracks students\' educational progress. With our built-in system, students can find teachers for their desired subjects in any language.',
      results: [
        'Successfully onboarded 50k+ active students',
        'Built a network of 2,000+ thoroughly verified mentors',
        'Achieved a 4.8/5 satisfaction rating for learning outcomes'
      ],
      impact: [
        { value: '50,000+', label: 'Active students on the platform' },
        { value: '2,000+', label: 'Verified mentors onboarded' },
        { value: '4.8 / 5', label: 'Satisfaction rating for outcomes' },
      ],
      tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Verification AI Hub'],
      features: [
        { title: 'Mentor Matching', desc: 'With our AI-built system, students can find mentors for all subjects with a suitable time slot.', icon: 'Zap' },
        { title: 'Progress Analytics', desc: 'A progressive dashboard for students to track their tutoring journey & analytics.', icon: 'BarChart3' },
        { title: 'Documented Verification', desc: 'Mentors & students are verified before onboarding with authorised documentation.', icon: 'ShieldCheck' }
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
      problem: 'Finding a high-quality game online is not easy; either they crash while playing or they don\'t support multiplayer.',
      solution: 'We created an online gaming platform that not only supports multiplayer gaming but also delivers high performance, allowing users to play for longer without technical errors.',
      results: [
        'Reached 500k+ registered players in under 12 months',
        'Maintained 99.9% uptime despite peak traffic events',
        'Consistently high user retention due to smooth gameplay'
      ],
      impact: [
        { value: '500,000+', label: 'Registered players on the platform' },
        { value: '99.9%', label: 'Uptime during peak traffic' },
        { value: '4.7 / 5', label: 'Average user satisfaction rating' },
      ],
      tech: ['Next.js', 'Socket.io', 'Redis', 'AWS Elastic Beanstalk'],
      features: [
        { title: 'Multiplayer Feature', desc: 'To make the game more fun and engaging, we added a multiplayer feature.', icon: 'Rocket' },
        { title: 'Score Board', desc: 'The scoreboard helps players to know their score and rank in the game.', icon: 'TrendingUp' },
        { title: 'Instant Rewards', desc: 'Instant rewards are given to gamers after they cross levels successfully.', icon: 'Zap' }
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
      problem: 'The goal was to move away from the boring text-like contest and bring out the liveliness and fun within users.',
      solution: 'Our approach was simple: we wanted to create a quiz that is not only fun but also a learning experience.',
      results: [
        'Triple the number of qualified leads generated within 3 months',
        'Successfully managed 10k+ client interactions through the new platform',
        'Smart AI algorithms that suggest new contests based on user interests'
      ],
      impact: [
        { value: '3×', label: 'Lead generation growth' },
        { value: '10,000+', label: 'Client interactions managed' },
        { value: '50+', label: 'Industry experts onboarded' },
      ],
      tech: ['Next.js', 'Sanity CMS', 'Tailwind CSS', 'Framer Motion'],
      features: [
        { title: 'User-Friendly Portal', desc: 'We created an easy-to-use interface for smooth navigation of quizzes and contests.', icon: 'Users' },
        { title: 'AI-Powered Leads', desc: 'Smart AI algorithms that suggest new contests and quizzes according to the user\'s interests.', icon: 'Zap' },
        { title: 'Real-time Leaderboard', desc: 'A scoreboard that records all your achievements and scores in one place.', icon: 'BarChart3' }
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
      problem: 'Users were frustrated with the constant, unwanted, and unskippable ads played during gaming or video sessions.',
      solution: 'Created a browser extension that eliminates unwanted ads and improves the streaming quality without any interruptions.',
      results: [
        'Achieved a massive install base of 1M+ users',
        'Maintained a stellar 4.9/5 star rating on the Chrome Web Store',
        'Proven to block 100% of standard Twitch ad formats'
      ],
      impact: [
        { value: '1 Million+', label: 'Active installs on Chrome Web Store' },
        { value: '4.9 / 5', label: 'Star rating from verified users' },
        { value: '100%', label: 'Standard Twitch ad formats blocked' },
      ],
      tech: ['Vanilla JS', 'Content Scripts', 'Manifest v3', 'Stream API Manipulation'],
      features: [
        { title: 'No Interruption', desc: 'Stream without any interruption and enjoy high-quality streaming videos or gaming sessions.', icon: 'Zap' },
        { title: 'Enhanced Browser Experience', desc: 'Blocking ads can reduce CPU load, resulting in a faster, smoother browsing experience.', icon: 'Rocket' },
        { title: 'Privacy Focused', desc: 'We have created a system that protects users\' data and confidential information.', icon: 'ShieldCheck' }
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
      problem: 'Manually switching apps and tools one by one was getting too hectic, and finding the right file at the right moment seemed almost impossible.',
      solution: 'We built a platform that not only manages all apps and tools in one place but also keeps important documents and files safe and secure.',
      results: [
        'Used by over 100k+ high-growth teams worldwide',
        'Reported 40% increase in team operational efficiency',
        'Currently managing over 5 Million tasks across the platform'
      ],
      impact: [
        { value: '100,000+', label: 'High-growth teams worldwide' },
        { value: '40%', label: 'Increase in operational efficiency' },
        { value: '5 Million+', label: 'Tasks managed on the platform' },
      ],
      tech: ['React', 'NestJS', 'PostgreSQL', 'Socket.io', 'ElasticSearch'],
      features: [
        { title: 'Accurate Context Search', desc: 'With our system, Kroolo can remember users\' exact documents, files, and tasks.', icon: 'Zap' },
        { title: 'Voice Workflow', desc: 'Kroolo lets you speak your concern and guides you accordingly. This makes the workflow reliable.', icon: 'Globe' },
        { title: 'Expert Prompts', desc: 'We have made the workflow extremely easy by setting some expert prompts as the default.', icon: 'Smartphone' }
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
      problem: 'Influencers were not able to find the brands and monetize their content on social media platforms like Instagram.',
      solution: 'We built a platform that both brands and influencers can use to collab and start their income via social media apps.',
      results: [
        'Rapidly grew to a community of 2M+ active members',
        'Facilitated over 10 Million community-generated posts',
        'Consistently high engagement rates compared to traditional social apps'
      ],
      impact: [
        { value: '2 Million+', label: 'Active community members' },
        { value: '10 Million+', label: 'Community-generated posts' },
        { value: '4.6 / 5', label: 'Average rating across platforms' },
      ],
      tech: ['React Native', 'Node.js', 'MongoDB', 'Redis'],
      features: [
        { title: 'Automation Tool', desc: 'With our automated tool feature, followers can get the link to their desired products in their DMs.', icon: 'Zap' },
        { title: 'Analytical Dashboard', desc: 'The analytical dashboard helps influencers track their earnings and rewards in just one place.', icon: 'BarChart3' },
        { title: 'Pre-Schedule Posts', desc: 'Influencers can pre-schedule their product links before posting their next post on Instagram.', icon: 'Rocket' }
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
      problem: 'Online shoppers were scammed by fake deals and expired coupons, with limited stores to choose from.',
      solution: 'We created an app that finds the best deals across 200+ stores with various shopping categories to explore.',
      results: [
        'Proven to have saved users over ₹1 Billion in cumulative purchases',
        'Provides access to deals across 200+ stores',
        'Highly trusted by 500k+ savvy shoppers in India'
      ],
      impact: [
        { value: '₹1 Billion+', label: 'Saved in cumulative purchases' },
        { value: '200+', label: 'Stores with verified deals' },
        { value: '500,000+', label: 'Savvy shoppers in India' },
      ],
      tech: ['Next.js', 'PyScript (for AI logic)', 'Redis', 'Node.js'],
      features: [
        { title: 'All-in-one Platform', desc: 'Shoppers can compare product prices from multiple stores without switching between different apps.', icon: 'Globe' },
        { title: 'Instant Notifications', desc: 'We created a feature that instantly notifies users when the app spots the best deal.', icon: 'Zap' },
        { title: 'Personalised Deals Groups', desc: 'We created a deals group that helps users find their desired items by category.', icon: 'ShieldCheck' }
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
      problem: 'Telegrammers and influencers were finding it difficult to earn money with broken affiliate links and fake conversions.',
      solution: 'We created a platform where influencers and telegrammers can collectively earn money via sharing affiliate links.',
      results: [
        'Successfully processed over ₹5 Billion in transaction volume',
        'Used by 100k+ merchants for daily high-volume operations',
        'Achieved a bank-grade AAA security certification'
      ],
      impact: [
        { value: '₹5 Billion+', label: 'Transaction volume processed' },
        { value: '100,000+', label: 'Merchants using daily' },
        { value: 'AAA', label: 'Bank-grade security certification' },
      ],
      tech: ['Go', 'Rust (for crypto ops)', 'PostgreSQL', 'AI Smart-Router'],
      features: [
        { title: 'Reliable Automated Bots', desc: 'Reliable automated bots help to resolve users\' queries efficiently and securely.', icon: 'Zap' },
        { title: 'Analytical Reporting', desc: 'Users can have their own scoreboard to track their earnings and rewards.', icon: 'BarChart3' },
        { title: 'Effortless Earnings', desc: 'With our reliable platform, you can withdraw your rewards or earnings at any time.', icon: 'ShieldCheck' }
      ]
    }
  },
];
