export interface ServiceCard {
  title: string;
  description: string;
  image: string;
}

export interface ProfPoint {
  title: string;
  description: string;
  iconName: "Users" | "TrendingUp" | "ShieldCheck" | "LifeBuoy" | "Code2" | "Server" | "Database" | "Layout" | "Search" | "Settings" | "BarChart";
}

export interface TechItem {
  name: string;
  desc: string;
}

export interface TechCategory {
  category: string;
  intro: string;
  iconName: "Code2" | "Server" | "Database" | "Layout" | "Search" | "Settings" | "BarChart";
  items: TechItem[];
}

export interface ServicePageData {
  title: string;
  subtitle: string;
  bannerDescription: string;
  bannerImage: string;
  imagePosition?: string;
  sectionTitle: string;
  sectionDescription: string;
  cards: ServiceCard[];
  profSection: {
    title: string;
    description: string;
    image: string;
    points: ProfPoint[];
  };
  techSection: {
    title: string;
    description: string;
    categories: TechCategory[];
  };
  metaTitle: string;
  metaDescription: string;
}

export const servicesData: Record<string, ServicePageData> = {
  "web-development": {
    title: "Professional Web Development Services & Solutions",
    subtitle: "Digital Excellence",
    bannerDescription: "At Insprosoft, we deliver professional web development services that transform your vision into reality. Our expert team specializes in secure web application development solutions.",
    bannerImage: "/banner/7.jpg",
    imagePosition: "8%",
    sectionTitle: "Enterprise Web Development Solutions",
    sectionDescription: "We provide comprehensive website development services and scalable web application development services.",
    metaTitle: "Professional Web Development Services | Inspro Software",
    metaDescription: "Transform your business with our custom web development solutions. High performance, secure, and responsive web apps.",
    cards: [
      {
        title: "Professional Web Development",
        description: "Transform your business with our custom website development services. Our expert team builds secure, scalable, and high-performance web applications tailored to your unique business needs.",
        image: "/services/web1.png",
      },
      {
        title: "Web Application Development Services",
        description: "Leveraging cutting-edge technologies to build secure, scalable, and high-performance web applications tailored to your unique business needs.",
        image: "/services/mobile1.png",
      },
      {
        title: "Business CRM Development",
        description: "Streamline customer relationships, improve engagement, and drive sales growth with custom CRM solutions.",
        image: "/services/marketing1.png",
      },
      {
        title: "Enterprise Web Development",
        description: "Empowering businesses with secure, scalable, and custom web applications designed to optimize operations and drive growth.",
        image: "/services/uiux1.png",
      },
    ],
    profSection: {
      title: "Professional Excellence",
      description: "Partner with a leading custom web development company that delivers professional website development services tailored to your vision.",
      image: "/services/choose.png",
      points: [
        { title: "Expert Development Team", description: "Our professional web developers specialize in creating custom web applications that meet enterprise-grade standards.", iconName: "Users" },
        { title: "Scalable Solutions", description: "We build responsive websites and web applications that grow with your business needs and handle increasing user demands.", iconName: "TrendingUp" },
        { title: "Security-First Approach", description: "Implementation of robust security measures in all our custom web development projects to protect your business data.", iconName: "ShieldCheck" },
        { title: "Comprehensive Support", description: "Ongoing maintenance and support for your website development projects, ensuring optimal performance and user experience.", iconName: "LifeBuoy" },
      ],
    },
    techSection: {
      title: "Development Technologies",
      description: "We leverage cutting-edge technologies to deliver professional web development services and custom web development solutions.",
      categories: [
        { category: "Frontend Development", intro: "Creating responsive, user-friendly interfaces using:", iconName: "Code2", items: [{ name: "React.js", desc: "For dynamic SPAs" }, { name: "Angular", desc: "Enterprise apps" }, { name: "Vue.js", desc: "Modern interfaces" }, { name: "HTML5/CSS3", desc: "Responsive design" }] },
        { category: "Backend Development", intro: "Robust server-side technologies:", iconName: "Server", items: [{ name: "Node.js", desc: "Scalable apps" }, { name: "Python", desc: "AI/ML integration" }, { name: "PHP", desc: "CMS systems" }, { name: "Java", desc: "Enterprise apps" }] },
        { category: "Database Solutions", intro: "Secure and efficient data management:", iconName: "Database", items: [{ name: "MySQL", desc: "Reliable SQL" }, { name: "MongoDB", desc: "Flexible NoSQL" }, { name: "PostgreSQL", desc: "Complex data" }, { name: "Redis", desc: "High-performance" }] },
      ],
    },
  },
  "ui-ux-design": {
    title: "Professional UI/UX Design Services",
    subtitle: "Creative Solutions",
    bannerDescription: "Crafting intuitive and beautiful digital experiences that resonate with your users and build brand loyalty.",
    bannerImage: "/banner/21.jpg",
    imagePosition: "45%",
    sectionTitle: "Design That Connects",
    sectionDescription: "We blend creativity with user-centric principles to deliver designs that aren't just beautiful, but highly effective.",
    metaTitle: "Expert UI/UX Design Services | Inspro Software",
    metaDescription: "User-centric design solutions that combine aesthetics with functionality to create engaging digital products.",
    cards: [
      {
        title: "User Research",
        description: "Deep-diving into user behavior to understand their needs, pain points, and motivations.",
        image: "/services/uiux1.png",
      },
      {
        title: "Wireframing",
        description: "Building the skeletal framework of your application to optimize user flow and information hierarchy.",
        image: "/services/web1.png",
      },
      {
        title: "Visual Design",
        description: "Creating stunning visual identities and high-fidelity mockups that bring your brand to life.",
        image: "/services/graphic1.png",
      },
      {
        title: "Prototyping",
        description: "Interactive mockups that allow you to test and validate the user experience before development.",
        image: "/services/mobile1.png",
      },
    ],
    profSection: {
      title: "Why Partner With Our Design Agency",
      description: "We combine strategic thinking with exceptional execution to deliver world-class digital experiences.",
      image: "/banner/ui.jpg",
      points: [
        {
          title: "Industry Specialization",
          description: "Tailoring solutions for specific sectors like SaaS and Enterprise to prioritize usability, security, and engagement.",
          iconName: "Target"
        },
        {
          title: "Research-Driven",
          description: "Grounding product decisions in real user needs through testing, data analysis, and behavioral insights.",
          iconName: "Search"
        },
        {
          title: "Technical Excellence",
          description: "Ensuring high-quality, scalable products through design systems, responsive frameworks, and accessibility.",
          iconName: "ShieldCheck"
        },
        {
          title: "End-to-End Support",
          description: "Guiding the journey from discovery and design sprints to implementation and ongoing optimization.",
          iconName: "RefreshCw"
        },
      ],
    },
    techSection: {
      title: "Design Methodology",
      description: "Our user-centered design process and tools for optimal solutions",
      categories: [
        {
          category: "Research Tools",
          iconName: "Search",
          intro: "Understanding user behavior and data-driven decisions:",
          items: [{ name: "UserTesting", desc: "Recorded feedback" }, { name: "Hotjar", desc: "Heatmaps & analytics" }, { name: "Maze", desc: "Usability testing" }, { name: "Optimal Workshop", desc: "Arch analysis" }]
        },
        {
          category: "Design Tools",
          iconName: "Palette",
          intro: "Empowering creative workflows and real-time collaboration:",
          items: [{ name: "Figma", desc: "Cloud collab" }, { name: "Adobe XD", desc: "Seamless proto" }, { name: "Sketch", desc: "Vector design" }, { name: "Framer", desc: "Animation" }]
        },
        {
          category: "Prototyping",
          iconName: "Zap",
          intro: "Bringing designs to life with interactive previews:",
          items: [{ name: "InVision", desc: "Review cycles" }, { name: "ProtoPie", desc: "Complex logic" }, { name: "Principle", desc: "Smooth motion" }, { name: "After Effects", desc: "Visual effects" }]
        },
        {
          category: "Collaboration",
          iconName: "Users",
          intro: "Streamlining teamwork and developer handoff:",
          items: [{ name: "Zeplin", desc: "Spec handoff" }, { name: "Abstract", desc: "Version control" }, { name: "Storybook", desc: "UI components" }, { name: "Zeroheight", desc: "Style guides" }]
        },
      ],
    },
  },

  "ecommerce-development": {
    title: "Professional E-commerce Development Solutions for Your Business",
    subtitle: "Digital Storefronts",
    bannerDescription: "Transform your business with professional ecommerce website development in USA. We create powerful online stores that drive sales and growth.",
    bannerImage: "/banner/24.jpg",
    imagePosition: "45%",
    sectionTitle: "Comprehensive E-commerce Development Services",
    sectionDescription: "Professional ecommerce solutions tailored for businesses in USA. From small business stores to enterprise platforms, we deliver excellence in every project.",
    metaTitle: "Professional E-commerce Development Services | Inspro Software",
    metaDescription: "Professional ecommerce solutions in USA. Scalable, secure online stores for all business sizes.",
    cards: [
      {
        title: "Shopify Development",
        description: "Professional web development services focused on creating tailored solutions for your business needs.",
        image: "/services/web1.png",
      },
      {
        title: "WooCommerce Solutions",
        description: "We offer WordPress integration, custom plugin development, payment gateway setup, and security implementation to create a secure, scalable, and fully functional website tailored to your business goals and needs.",
        image: "/services/mobile1.png",
      },
      {
        title: "Advanced E-Commerce Development",
        description: "We build scalable architecture with multi-vendor marketplace capabilities, integrated inventory management, and streamlined order processing systems to support efficient operations and seamless growth for your e-commerce platform.",
        image: "/services/marketing1.png",
      },
      {
        title: "E-Commerce Integration Services",
        description: "We offer payment gateway, shipping, and CRM integration, along with analytics setup, to ensure smooth transactions, efficient logistics, effective customer management, and data-driven insights for your business growth.",
        image: "/services/uiux1.png",
      },
    ],
    profSection: {
      title: "Why Choose Our E-commerce Development Services",
      description: "Partner with a leading ecommerce development company in USA for professional and reliable online store solutions.",
      image: "/services/choose.png",
      points: [
        { title: "Professional Development Team", description: "Expert developers specialized in Shopify and WooCommerce", iconName: "Users" },
        { title: "Affordable Solutions", description: "Cost-effective ecommerce development for small businesses and startups", iconName: "BarChart" },
        { title: "Secure & Scalable", description: "Robust security measures and scalable architecture for growth", iconName: "ShieldCheck" },
        { title: "Fast Turnaround Time", description: "We value your time—our streamlined development process ensures quick delivery without compromising on quality.", iconName: "TrendingUp" },
        { title: "Ongoing Support & Maintenance", description: "We don't just build your store and walk away. Enjoy dedicated support to keep your e-commerce platform running smoothly.", iconName: "LifeBuoy" },
        { title: "Customized Solutions", description: "Every business is unique. We tailor features, integrations, and workflows specifically to your goals.", iconName: "Settings" },
      ],
    },
    techSection: {
      title: "Professional E-commerce Development Process",
      description: "We follow a professional and structured development process to deliver high-quality e-commerce solutions:",
      categories: [
        {
          category: "Planning & Analysis",
          intro: "Setting the foundation for success:",
          iconName: "Search",
          items: [{ name: "Business requirements", desc: "Defining goals" }, { name: "Platform selection", desc: "Right tech stack" }, { name: "Technical specs", desc: "Architecture plan" }]
        },
        {
          category: "Design & Prototype",
          intro: "Visualizing the user journey:",
          iconName: "Layout",
          items: [{ name: "UI/UX design", desc: "User-centric visuals" }, { name: "Wireframing", desc: "Structural layout" }, { name: "Design approval", desc: "Final review" }]
        },
        {
          category: "Development",
          iconName: "Code2",
          intro: "Building the core platform:",
          items: [{ name: "Platform setup", desc: "Core installation" }, { name: "Feature implementation", desc: "Custom coding" }, { name: "Payment integration", desc: "Secure checkouts" }]
        },
        {
          category: "Testing & QA",
          iconName: "ShieldCheck",
          intro: "Ensuring flawless performance:",
          items: [{ name: "Functionality testing", desc: "Feature check" }, { name: "Performance optimization", desc: "Speed & SEO" }, { name: "Security testing", desc: "Risk assessment" }]
        },
        {
          category: "Launch & Support",
          iconName: "Globe",
          intro: "Continuous growth and care:",
          items: [{ name: "Site deployment", desc: "Go-live process" }, { name: "Performance monitoring", desc: "Live tracking" }, { name: "Ongoing maintenance", desc: "Regular updates" }]
        },
      ],
    },
  },
  "enterprise-web-solutions": {
    title: "professional Enterprise Web Solutions",
    subtitle: "Enterprise",
    bannerDescription: "Transform your business with professional enterprise web solutions. Leading enterprise web development company in USA delivering secure and scalable applications.",
    bannerImage: "/banner/13.jpg",
    imagePosition: "30%",
    sectionTitle: "Enterprise Web Development Solutions",
    sectionDescription: "Professional web development solutions tailored for businesses in USA. From small business stores to enterprise platforms, we deliver excellence in every project.",
    metaTitle: "Professional Enterprise Web Solutions | Inspro Software",
    metaDescription: "Professional Enterprise Web Solutions in USA. Scalable, secure online stores for all business sizes.",
    cards: [
      {
        title: "Enterprise Web Application",
        description: "We create enterprise web applications with scalable architecture, high performance, advanced security, and real-time processing, ensuring efficient, reliable solutions that support growth, protect data, and enable quick decision-making.",
        image: "/services/web1.png"
      },
      {
        title: "Enterprise Portal Development",
        description: "We specialize in enterprise portal development, creating customized employee, client, and partner portals, along with resource management systems, to streamline communication, collaboration, and operational efficiency across all business functions.",
        image: "/services/mobile1.png"
      },
      {
        title: "CMS Development Solutions",
        description: "We offer enterprise CMS solutions that include content management, digital asset management, workflow automation, and multi-site management, enabling streamlined content processes, efficient asset handling, and centralized control across multiple platforms.",
        image: "/services/graphic1.png"
      },
      {
        title: "Integration Services",
        description: "Our integration services include API development, system integration, data synchronization, and third-party integration, ensuring seamless connectivity between applications, efficient data flow, and unified operations across your digital ecosystem.",
        image: "/services/uiux1.png"
      },
    ],
    profSection: {
      title: "Why Choose Our Enterprise Web Solutions",
      description: "Partner with a leading enterprise web development company in USA for professional and secure solutions.",
      image: "/services/choose.png",
      points: [
        {
          title: "Enterprise Expertise",
          description: "With deep enterprise expertise, we deliver scalable solutions designed to grow with your business. Our focus on security ensures data protection and compliance.",
          iconName: "ShieldCheck"
        },
        {
          title: "Modern Technology",
          description: "We harness the latest frameworks and cloud platforms to build efficient, future-ready digital solutions tailored to evolving business needs.",
          iconName: "Settings"
        },
        {
          title: "Proven Experience",
          description: "We have delivered complex projects for enterprise clients across diverse industries, ensuring performance, reliability, and long-term value.",
          iconName: "Users"
        },
        {
          title: "Professional Support",
          description: "Our 24/7 availability with a dedicated team ensures quick response times and minimizes downtime for your business operations.",
          iconName: "LifeBuoy"
        },
      ],
    },
    techSection: {
      title: "Enterprise Web Technologies",
      description: "We use professional and modern technologies to build secure enterprise solutions",
      categories: [
        {
          category: "Frontend Technologies",
          iconName: "Layout",
          intro: "Leveraging enterprise-grade UI frameworks for scalable interfaces:",
          items: [{ name: "Angular Enterprise", desc: "Robust framework" }, { name: "React Enterprise", desc: "Dynamic UIs" }, { name: "Vue.js", desc: "Modern UI" }, { name: "UI Frameworks", desc: "Standardized design" }]
        },
        {
          category: "Backend Technologies",
          iconName: "Server",
          intro: "Building secure and efficient server-side solutions:",
          items: [{ name: "Java Enterprise", desc: "Stable core" }, { name: ".NET Enterprise", desc: "Secure backbone" }, { name: "Node.js", desc: "Fast processing" }, { name: "Python Enterprise", desc: "Data intensive" }]
        },
        {
          category: "Enterprise Security",
          iconName: "ShieldCheck",
          intro: "Implementing rigorous protection and compliance measures:",
          items: [{ name: "OAuth 2.0", desc: "Secure auth" }, { name: "SSO Integration", desc: "Central access" }, { name: "Advanced Encryption", desc: "Data safety" }, { name: "Security Frameworks", desc: "Compliance" }]
        },
        {
          category: "Enterprise Infrastructure",
          iconName: "Globe",
          intro: "Designing resilient and scalable cloud-based systems:",
          items: [{ name: "Cloud Platforms", desc: "Scalable hosting" }, { name: "Load Balancing", desc: "High traffic" }, { name: "High Availability", desc: "Zero downtime" }, { name: "Disaster Recovery", desc: "Resilience" }]
        },
      ],
    },
  },
  "progressive-web-app": {
    title: "Transform Your Web Presence with Progressive Web Apps",
    subtitle: "Progressive Web App",
    bannerDescription: "Create engaging mobile-first experiences with professional PWA development services. Fast, reliable, and offline-capable web applications.",
    bannerImage: "/banner/11.jpg",
    imagePosition: "18%",
    sectionTitle: "Professional PWA Development Services",
    sectionDescription: "Professional PWA solutions that combine the best of web and mobile applications. Deliver exceptional user experiences across all devices.",
    metaTitle: "Professional PWA Development Services | Inspro Software",
    metaDescription: "Professional PWA solutions that combine the best of web and mobile applications. Deliver exceptional user experiences across all devices.",
    cards: [
      {
        title: "Offline-First Development",
        description: "Offline data access, background sync, cache strategies, and service worker implementation enhance web apps by enabling offline functionality, syncing in background, optimizing resource loading, and managing requests through service workers for reliability.",
        image: "/services/mobile1.png"
      },
      {
        title: "Performance Optimization",
        description: "Fast loading times, smooth animations, resource optimization, and meeting Core Web Vitals are essential for delivering high-performance web experiences that ensure user engagement, satisfaction, and improved search engine rankings.",
        image: "/services/graphic1.png"
      },
      {
        title: "Mobile-First Design",
        description: "Responsive interfaces, touch-friendly design, app-like experience, and access to native features create a mobile-optimized web application that feels intuitive, interactive, and closely mimics the behavior of native apps.",
        image: "/services/uiux1.png"
      },
      {
        title: "E-Commerce PWAs",
        description: "Shopping cart sync, offline catalog, push notifications, and payment integration enhance e-commerce apps by ensuring seamless user experience, real-time updates, offline browsing, and secure, convenient transaction capabilities.",
        image: "/services/web1.png"
      },
    ],
    profSection: {
      title: "Why Choose Our PWA Development Services",
      description: "Partner with a leading PWA development company in USA for innovative and performance-optimized progressive web applications.",
      image: "/services/choose.png",
      points: [
        {
          title: "PWA Expertise",
          description: "We combine certified developers and modern frameworks like React/Vue to create fast, reliable, and engaging web applications.",
          iconName: "Code2"
        },
        {
          title: "Mobile-First Approach",
          description: "Prioritizing responsive design and touch-friendly interfaces to ensure seamless user experiences on all smartphones and tablets.",
          iconName: "Smartphone"
        },
        {
          title: "Offline Capabilities",
          description: "Empowering web apps to function without internet access using service workers and smart cache strategies for reliability.",
          iconName: "WifiOff"
        },
        {
          title: "Performance Focus",
          description: "Ensuring fast loading times and optimized resource usage to increase user satisfaction and retention across all network conditions.",
          iconName: "Zap"
        },
      ],
    },
    techSection: {
      title: "PWA Development Technologies",
      description: "Modern technologies for building fast and reliable progressive web apps",
      categories: [
        {
          category: "Frontend Technologies",
          iconName: "Layout",
          intro: "Robust tools for seamless app-like experiences:",
          items: [{ name: "React", desc: "Dynamic UI" }, { name: "Vue", desc: "Flexible apps" }, { name: "Angular", desc: "Enterprise scale" }, { name: "Responsive Design", desc: "Cross-device" }]
        },
        {
          category: "PWA Features",
          iconName: "Smartphone",
          intro: "Enabling native-like functionality on the web:",
          items: [{ name: "Service Workers", desc: "Offline support" }, { name: "Web App Manifest", desc: "Installation" }, { name: "Push API", desc: "Notifications" }, { name: "Cache API", desc: "Resource storage" }]
        },
        {
          category: "Performance Tools",
          iconName: "BarChart",
          intro: "Auditing and optimizing for peak speed:",
          items: [{ name: "Lighthouse", desc: "Performance audit" }, { name: "Workbox", desc: "SW management" }, { name: "PWA Builder", desc: "Rapid creation" }, { name: "Analytics", desc: "User engagement" }]
        },
        {
          category: "Development Tools",
          iconName: "Settings",
          intro: "Streamlined building and compliance:",
          items: [{ name: "Progressive Tooling", desc: "Efficient dev" }, { name: "PWA Auditing", desc: "Compliance check" }, { name: "Testing Suites", desc: "Cross-device validation" }, { name: "Monitoring Tools", desc: "Error tracking" }]
        },
      ],
    },
  },
  "asp-net": {
    title: "Professional ASP.NET Development Solutions",
    subtitle: "Enterprise .NET",
    bannerDescription: "Transform your business with professional enterprise web solutions. Leading enterprise web development company in USA delivering secure and scalable applications.",
    bannerImage: "/banner/asp.jpg",
    sectionTitle: "Enterprise .NET Solutions",
    sectionDescription: "Building robust, secure, and scalable enterprise applications using the powerful .NET ecosystem.",
    metaTitle: "Professional ASP.NET Development | Inspro Software",
    metaDescription: "Transform your business with professional enterprise web solutions. Leading enterprise web development company in USA delivering secure and scalable applications.",
    cards: [
      { title: "ASP.NET Development", description: "ASP.NET Core development empowers the creation of modern web applications with cross-platform solutions, leveraging cloud-native architecture for scalability. We focus on performance optimization to ensure high-speed, efficient, and reliable applications tailored to meet the dynamic needs of businesses in today’s digital landscape.", image: "/services/uiux1.png" },
      { title: "Web API Development", description: "Our Web API development focuses on building robust RESTful services with strong API security, comprehensive documentation, and seamless integration support. We ensure scalable, reliable APIs that enable smooth communication between systems while safeguarding data and enhancing interoperability across platforms.", image: "/services/web1.png" },
      { title: "Blazor Applications", description: "Blazor applications offer interactive UIs with real-time features, enabling a rich user experience. We utilize progressive enhancement techniques and WebAssembly solutions to build fast, responsive applications that run directly in the browser, providing seamless and efficient performance while leveraging the power of C# for web development.", image: "/services/mobile1.png" },
      { title: "Microservices Architecture", description: "Microservices architecture enables efficient service design, with container support for isolated, lightweight services. This approach ensures scalable deployment, leveraging Azure integration for cloud-native solutions that are flexible, resilient, and easy to manage, optimizing performance and allowing seamless communication between independent services across different environments.", image: "/services/graphic1.png" },
    ],
    profSection: {
      title: "Why Choose Our ASP.NET Development Services",
      description: "Partner with a leading ASP.NET development company in USA for professional and modern web solutions.",
      image: "/services/choose.png",
      points: [
        {
          title: ".NET Expertise",
          description: "Our certified developers deliver scalable, secure, and high-performance enterprise solutions using the latest .NET technologies.",
          iconName: "Code2"
        },
        {
          title: "Modern Technology",
          description: "We utilize .NET Core, microservices, and cloud-native approaches to ensure flexibility, resilience, and performance.",
          iconName: "Settings"
        },
        {
          title: "Enterprise Focus",
          description: "We design systems that meet complex enterprise demands while maintaining flexibility, compliance, and long-term value.",
          iconName: "ShieldCheck"
        },
        {
          title: "Complete Support",
          description: "Ensuring your applications remain secure, up-to-date, and optimized throughout the software lifecycle with expert guidance.",
          iconName: "LifeBuoy"
        },
      ],
    },
    techSection: {
      title: "ASP.NET Technology Stack",
      description: "Modern ASP.NET technologies for building robust applications",
      categories: [
        {
          category: "Core Technologies",
          iconName: "Layout",
          intro: "High-performance frameworks for structured apps:",
          items: [{ name: "ASP.NET Core", desc: "Cross-platform" }, { name: "ASP.NET MVC", desc: "Pattern-based" }, { name: "Blazor", desc: "Interactive C#" }, { name: "Web API", desc: "RESTful services" }]
        },
        {
          category: "Cloud & DevOps",
          iconName: "Server",
          intro: "Seamless integration and reliable delivery:",
          items: [{ name: "Azure Services", desc: "Cloud scale" }, { name: "Docker", desc: "Containerization" }, { name: "Kubernetes", desc: "Orchestration" }, { name: "CI/CD Pipelines", desc: "Automated dev" }]
        },
        {
          category: "Database & ORM",
          iconName: "Database",
          intro: "Optimized and secure data management:",
          items: [{ name: "Entity Framework", desc: "Core ORM" }, { name: "SQL Server", desc: "Relational data" }, { name: "Azure SQL", desc: "Cloud database" }, { name: "Dapper", desc: "High speed" }]
        },
        {
          category: "Frontend Integration",
          iconName: "Globe",
          intro: "Building dynamic and responsive user interfaces:",
          items: [{ name: "Angular", desc: "Enterprise frontend" }, { name: "React", desc: "Dynamic UI" }, { name: "Vue.js", desc: "Modern web" }, { name: "Blazor WebAssembly", desc: "C# on client" }]
        },
      ],
    },
  },
  "python-web-solutions": {
    title: "Data-Driven Python Web Development",
    subtitle: "AI & Data Science",
    bannerDescription: "Build intelligent web applications with Python. Leading development company in USA specializing in Django, Flask, and AI integration.",
    bannerImage: "/services/web1.png",
    imagePosition: "35%",
    sectionTitle: "Intelligent Python Solutions",
    sectionDescription: "Empowering businesses with AI-ready, scalable web applications built on the versatile Python ecosystem.",
    metaTitle: "Data-Driven Python Web Development | Inspro Software",
    metaDescription: "Build intelligent web applications with Python. Specializing in Django, Flask, and AI integration.",
    cards: [
      { title: "Django Development", description: "Django development enables rapid application development with a powerful built-in admin interface, robust security features, and scalable architecture. It’s ideal for building secure, maintainable, and high-performance web applications efficiently, making it a preferred choice for businesses seeking quick deployment and long-term scalability.", image: "/services/uiux1.png" },
      { title: "Flask Solutions", description: "Flask solutions are ideal for developing lightweight applications and RESTful services. With support for custom extensions and flexible deployment options, Flask offers the versatility to build tailored web applications that are efficient, scalable, and easy to integrate into various environments and architectures.", image: "/services/web1.png" },
      { title: "FastAPI Development", description: "FastAPI development delivers high-performance applications with native async support for efficient concurrency. It features automatic interactive documentation and leverages modern Python standards, making it ideal for building fast, scalable, and well-documented APIs suitable for modern web and microservices architectures.", image: "/services/mobile1.png" },
      { title: "AI/ML Integration", description: "Our AI/ML integration services include efficient data processing, seamless ML model deployment, and real-time predictions to enhance decision-making. Coupled with interactive analytics dashboards, we deliver intelligent solutions that turn data into actionable insights, driving automation, efficiency, and innovation across your business processes.", image: "/services/graphic1.png" },
    ],
    profSection: {
      title: "Why Choose Our Python Development Services",
      description: "Partner with a leading Python development company in USA for intelligent and scalable web solutions.",
      image: "/banner/python.jpg",
      points: [
        {
          title: "Full-Stack Python",
          description: "We cover end-to-end web development, advanced data processing, and seamless AI integration for modern business needs.",
          iconName: "Code2"
        },
        {
          title: "Data Science Focus",
          description: "Transforming raw data into actionable insights through ML integration, analytics, and intuitive visualization.",
          iconName: "Brain"
        },
        {
          title: "Scalable Solutions",
          description: "Utilizing microservices, cloud deployment, and high availability strategies to build resilient enterprise-grade systems.",
          iconName: "TrendingUp"
        },
        {
          title: "Innovation Focus",
          description: "Creating future-forward, AI-ready applications with real-time processing and data automation capabilities.",
          iconName: "Cpu"
        },
      ],
    },
    techSection: {
      title: "Python Technology Stack",
      description: "Modern Python technologies for intelligent web applications",
      categories: [
        {
          category: "Web Frameworks",
          iconName: "Layout",
          intro: "Leading frameworks for diverse project needs:",
          items: [{ name: "Django", desc: "Full-featured" }, { name: "Flask", desc: "Lightweight" }, { name: "FastAPI", desc: "High-performance" }, { name: "Pyramid", desc: "Scalable modular" }]
        },
        {
          category: "Data & AI Tools",
          iconName: "Brain",
          intro: "Intelligent tools for predictive modeling:",
          items: [{ name: "NumPy", desc: "Numerical computing" }, { name: "Pandas", desc: "Data manipulation" }, { name: "TensorFlow", desc: "Deep learning" }, { name: "scikit-learn", desc: "Machine learning" }]
        },
        {
          category: "Database & ORM",
          iconName: "Database",
          intro: "Scalable and reliable data solutions:",
          items: [{ name: "PostgreSQL", desc: "Relational data" }, { name: "SQLAlchemy", desc: "Python ORM" }, { name: "MongoDB", desc: "NoSQL storage" }, { name: "Redis", desc: "Real-time caching" }]
        },
        {
          category: "DevOps & Cloud",
          iconName: "Cloud",
          intro: "Rapid delivery of cloud-native apps:",
          items: [{ name: "Docker", desc: "Containerization" }, { name: "Kubernetes", desc: "Orchestration" }, { name: "AWS", desc: "Cloud scale" }, { name: "Google Cloud", desc: "Cloud infrastructure" }]
        },
      ],
    },
  },
  "php-development": {
    title: "Professional PHP Development Solutions",
    subtitle: "Modern PHP",
    bannerDescription: "Create robust web applications with modern PHP frameworks. Leading development company in USA specializing in Laravel, Symfony, and custom solutions.",
    bannerImage: "/banner/27.jpg",
    imagePosition:"48%",
    sectionTitle: "High-Performance PHP Solutions",
    sectionDescription: "We build scalable, secure, and maintainable web applications using the most powerful PHP frameworks and modern development practices.",
    metaTitle: "Professional PHP Development Solutions | Inspro Software",
    metaDescription: "Create robust web applications with modern PHP frameworks. Specializing in Laravel, Symfony, and custom solutions.",
    cards: [
      { title: "Laravel Development", description: "Laravel is a PHP framework offering rapid prototyping, MVC architecture, powerful Artisan CLI, and a rich package ecosystem, making it ideal for building modern, scalable, and maintainable web applications quickly.", image: "/services/web1.png" },
      { title: "Symfony Development", description: "Symfony is an enterprise-grade PHP framework known for its reusable component library, robust security features, and high performance, making it ideal for building complex, scalable, and secure web applications.0", image: "/services/mobile1.png" },
      { title: "E-commerce Development", description: "E-commerce development involves building shopping platforms, integrating secure payment gateways, managing inventory in real-time, and streamlining order processing with automation, shipping solutions, and efficient customer communication for a seamless online experience.", image: "/services/uiux1.png" },
      { title: "CMS Development", description: "CMS development focuses on building content platforms with custom modules, efficient user management, and seamless API integration to enable flexible content creation, dynamic functionality, and smooth user and third-party interactions.", image: "/services/graphic1.png" },
    ],
    profSection: {
      title: "Why Choose Our PHP Development Services",
      description: "Partner with a leading PHP development company in USA for modern and scalable web solutions.",
      image: "/banner/php.jpg",
      points: [
        {
          title: "Framework Expertise",
          description: "Mastery of Laravel and Symfony, emphasizing clean architecture and modular design for long-term project sustainability.",
          iconName: "Code2"
        },
        {
          title: "E-commerce Focus",
          description: "Developing robust shopping platforms with secure payment systems and streamlined order management processes.",
          iconName: "ShoppingCart"
        },
        {
          title: "CMS Solutions",
          description: "Custom platforms designed for flexibility, efficient content management, and robust user systems for seamless digital experiences.",
          iconName: "Layout"
        },
        {
          title: "Modern Development",
          description: "Focusing on performance tuning, strong security measures, and efficient API development for future-ready solutions.",
          iconName: "Settings"
        },
      ],
    },
    techSection: {
      title: "PHP Technology Stack",
      description: "Modern PHP technologies for robust web applications",
      categories: [
        {
          category: "PHP Frameworks",
          iconName: "Layout",
          intro: "Selecting the best engine for your business requirements:",
          items: [{ name: "Laravel", desc: "Elegant syntax" }, { name: "Symfony", desc: "Enterprise scale" }, { name: "CodeIgniter", desc: "Lightweight" }, { name: "Yii2", desc: "Fast & secure" }]
        },
        {
          category: "Development Tools",
          iconName: "Settings",
          intro: "Streamlining the development lifecycle:",
          items: [{ name: "Composer", desc: "Dependency manager" }, { name: "PHPUnit", desc: "Automated testing" }, { name: "Xdebug", desc: "Advanced debugging" }, { name: "Git", desc: "Version control" }]
        },
        {
          category: "Database & Cache",
          iconName: "Database",
          intro: "Ensuring fast retrieval and efficient resource management:",
          items: [{ name: "MySQL", desc: "Relational data" }, { name: "PostgreSQL", desc: "Robust storage" }, { name: "Redis", desc: "High-speed caching" }, { name: "Memcached", desc: "Distributed cache" }]
        },
        {
          category: "Frontend & APIs",
          iconName: "Globe",
          intro: "Building dynamic interfaces and seamless integrations:",
          items: [{ name: "Vue.js", desc: "Interactive frontend" }, { name: "React", desc: "Modern UI" }, { name: "REST API", desc: "System sync" }, { name: "GraphQL", desc: "Efficient data" }]
        },
      ],
    },
  },
  "angular-web-development": {
    title: "Modern Angular Development Solutions",
    subtitle: "Enterprise Framework",
    bannerDescription: "Create powerful single-page applications with Angular. Leading development company in USA specializing in enterprise-grade solutions and modern architecture.",
    bannerImage: "/banner/26.jpg",
    imagePosition:"6%",
    sectionTitle: "Enterprise Angular Solutions",
    sectionDescription: "Building mission-critical, high-performance web applications with Angular's robust ecosystem and type-safe development.",
    metaTitle: "Modern Angular Development Solutions | Inspro Software",
    metaDescription: "Create powerful single-page applications with Angular. Specializing in enterprise-grade solutions.",
    cards: [
      { title: "Enterprise Web Applications", description: "Building mission-critical web applications with Angular's robust ecosystem and type-safe development.", image: "/services/web1.png" },
      { title: "High-Performance SPAs", description: "Creating fast, scalable, and responsive single-page applications that deliver exceptional user experiences.", image: "/services/mobile1.png" },
      { title: "Custom Component Development", description: "Developing reusable, custom UI components tailored to your specific business requirements.", image: "/services/uiux1.png" },
      { title: "End-to-End Testing", description: "Ensuring application reliability with comprehensive testing strategies and automated test suites.", image: "/services/graphic1.png" },
    ],
    profSection: {
      title: "Why Choose Our Angular Development Services",
      description: "Partner with a leading Angular development company in USA for modern and scalable web solutions.",
      image: "/banner/angular.jpg",
      points: [
        {
          title: "Angular Expertise",
          description: "Implementing clean architecture and best practices with the latest Angular versions for high-performing apps.",
          iconName: "Code2"
        },
        {
          title: "Enterprise Solutions",
          description: "Focusing on robust state management, advanced security, and high availability for mission-critical environments.",
          iconName: "ShieldCheck"
        },
        {
          title: "Modern Development",
          description: "Component-based approach and modular design with strong testing coverage for reliable and extensible apps.",
          iconName: "Layout"
        },
        {
          title: "Performance Focus",
          description: "Thorough optimization, fast loading times, and SEO-friendly structures to enhance discoverability and user experience.",
          iconName: "TrendingUp"
        },
      ],
    },
    techSection: {
      title: "Angular Technology Stack",
      description: "Modern Angular technologies for robust applications",
      categories: [
        {
          category: "Core Technologies",
          iconName: "Monitor",
          intro: "Robust project scaffolding and reactive programming:",
          items: [{ name: "Angular CLI", desc: "Efficient dev" }, { name: "TypeScript", desc: "Type-safe code" }, { name: "RxJS", desc: "Reactive logic" }, { name: "NgRx", desc: "State management" }]
        },
        {
          category: "UI Frameworks",
          iconName: "Layout",
          intro: "Visually consistent and accessible interfaces:",
          items: [{ name: "Angular Material", desc: "Standard components" }, { name: "PrimeNG", desc: "Rich UI suite" }, { name: "NgBootstrap", desc: "Bootstrap logic" }, { name: "Custom UI", desc: "Tailored experience" }]
        },
        {
          category: "Testing Tools",
          iconName: "ShieldCheck",
          intro: "Thorough test coverage across environments:",
          items: [{ name: "Jasmine", desc: "Unit testing" }, { name: "Karma", desc: "Test runner" }, { name: "Protractor", desc: "E2E testing" }, { name: "Cypress", desc: "Test automation" }]
        },
        {
          category: "Development Tools",
          iconName: "Settings",
          intro: "Streamlining development and code quality:",
          items: [{ name: "Angular DevTools", desc: "Debugging" }, { name: "Webpack", desc: "Asset bundling" }, { name: "ESLint", desc: "Linting rules" }, { name: "Schematics", desc: "Code generation" }]
        },
      ],
    },
  },
  "node-js-development": {
    title: "Scalable Node.js Development Solutions",
    subtitle: "High-Performance Backend",
    bannerDescription: "Build high-performance backend solutions with Node.js. Leading development company in USA specializing in real-time applications and microservices architecture.",
    bannerImage: "/banner/21.jpg",
    sectionTitle: "Scalable Node.js Solutions",
    sectionDescription: "Empowering businesses with fast, event-driven backend architectures that handle heavy workloads with ease.",
    metaTitle: "Scalable Node.js Development Solutions | Inspro Software",
    metaDescription: "Build high-performance backend solutions with Node.js. Specializing in real-time apps and microservices.",
    cards: [
      { title: "Backend Development", description: "Backend development focuses on building robust Express.js APIs, implementing secure authentication, seamless database integration, and designing scalable architecture. These components work together to ensure efficient data handling, secure user access, and the flexibility to scale applications as your business grows.", image: "/services/uiux1.png" },
      { title: "Real-Time Applications", description: "Real-time applications leverage WebSockets and stream processing to deliver instant updates, live notifications, and seamless communication. Our expertise ensures low latency, high reliability, and interactive user experiences across devices.", image: "/services/mobile1.png" },
      { title: "API Development", description: "API development involves designing and building secure, scalable, and well-documented APIs using Node.js and Express. We ensure RESTful design principles, efficient data exchange, and robust error handling for seamless integration between frontend and backend systems.", image: "/services/web1.png" },
      { title: "Microservices", description: "Microservices architecture involves breaking down large applications into small, independent services that communicate via APIs. This approach enhances scalability, fault tolerance, and independent deployment, allowing teams to build and maintain complex systems efficiently.", image: "/services/graphic1.png" },
    ],
    profSection: {
      title: "Why Choose Our Node.js Development Services",
      description: "Partner with a leading Node.js development company in USA for scalable and high-performance solutions.",
      image: "/banner/nodejs.jpg",
      points: [
        {
          title: "Performance Focus",
          description: "Utilizing non-blocking I/O and event-driven architecture for high throughput and low latency in heavy workloads.",
          iconName: "Zap"
        },
        {
          title: "Scalable Architecture",
          description: "Building microservices and cloud-native solutions for horizontal scaling and seamless resilient deployment.",
          iconName: "Layers"
        },
        {
          title: "Real-time Expertise",
          description: "Mastery of WebSockets and stream processing for instant communication and seamless live updates.",
          iconName: "Activity"
        },
        {
          title: "Enterprise Solutions",
          description: "Prioritizing high availability, security focus, and proactive monitoring for mission-critical scalability.",
          iconName: "ShieldCheck"
        },
      ],
    },
    techSection: {
      title: "Node.js Technology Stack",
      description: "Modern Node.js technologies for scalable applications",
      categories: [
        {
          category: "Backend Frameworks",
          iconName: "Server",
          intro: "Tailored frameworks for diverse backend needs:",
          items: [{ name: "Express.js", desc: "RESTful APIs" }, { name: "NestJS", desc: "Enterprise scale" }, { name: "Fastify", desc: "High speed" }, { name: "Koa.js", desc: "Middleware focus" }]
        },
        {
          category: "Real-time & API",
          iconName: "Activity",
          intro: "Instant communication and flexible data fetching:",
          items: [{ name: "Socket.IO", desc: "Real-time sync" }, { name: "GraphQL", desc: "Flexible queries" }, { name: "Meteor.js", desc: "Full-stack real-time" }, { name: "gRPC", desc: "Microservices sync" }]
        },
        {
          category: "Cloud & DevOps",
          iconName: "Cloud",
          intro: "Automated deployment and scalable execution:",
          items: [{ name: "Docker", desc: "Containerization" }, { name: "Kubernetes", desc: "Orchestration" }, { name: "AWS Lambda", desc: "Serverless code" }, { name: "PM2", desc: "Process management" }]
        },
        {
          category: "Testing & Monitoring",
          iconName: "BarChart",
          intro: "Ensuring code stability and system health:",
          items: [{ name: "Jest", desc: "Unit testing" }, { name: "Mocha", desc: "Integration tests" }, { name: "New Relic", desc: "Performance insights" }, { name: "Prometheus", desc: "System monitoring" }]
        },
      ],
    },
  },
  "saas-web-development": {
    title: "SaaS Development Services",
    subtitle: "Cloud Software Solutions",
    bannerDescription: "Build powerful cloud-based software solutions with our expert SaaS development team. We create scalable, secure, and user-friendly applications that drive business growth.",
    bannerImage: "/banner/28.jpg",
    imagePosition: "60%",
    sectionTitle: "Enterprise SaaS Development",
    sectionDescription: "Transforming ideas into scalable cloud platforms with multi-tenant architecture and robust security.",
    metaTitle: "SaaS Development Services | Inspro Software",
    metaDescription: "Build powerful cloud-based software solutions with our expert SaaS development team.",
    cards: [
      { title: "Custom SaaS Development", description: "We build tailored cloud-based software solutions that address specific business needs, offering scalability, security, and seamless integration.", image: "/services/uiux1.png" },
      { title: "SaaS Platform Development", description: "Developing comprehensive SaaS platforms with multi-tenant architecture, robust security, and seamless user experiences for diverse industries.", image: "/services/mobile1.png" },
      { title: "SaaS Migration", description: "Migrating existing on-premise systems to cloud-based SaaS platforms, ensuring minimal disruption and enhanced scalability, security, and accessibility.", image: "/services/web1.png" },
      { title: "SaaS Support & Maintenance", description: "Providing ongoing support and maintenance services to ensure SaaS applications remain secure, up-to-date, and optimized for performance and scalability.", image: "/services/graphic1.png" },
    ],
    profSection: {
      title: "Why Choose Our SaaS Development Services",
      description: "Partner with SaaS experts who understand cloud architecture, security, and scalability.",
      image: "/banner/saas.jpg",
      points: [
        {
          title: "Architecture Expertise",
          description: "Implementing multi-tenant design and microservices for efficient resource sharing and maintainable systems.",
          iconName: "Layers"
        },
        {
          title: "Security Focus",
          description: "Ensuring robust protection with data encryption, secure authentication, and compliance with GDPR/HIPAA standards.",
          iconName: "Lock"
        },
        {
          title: "Scalable Solutions",
          description: "Elastic infrastructure and load balancing that adapts to demand, ensuring speed and flexibility as you grow.",
          iconName: "TrendingUp"
        },
        {
          title: "Full-Cycle Development",
          description: "Covering every stage from discovery to maintenance, ensuring high-quality delivery and long-term success.",
          iconName: "RefreshCw"
        },
      ],
    },
    techSection: {
      title: "SaaS Technology Stack",
      description: "Modern technologies for building robust SaaS solutions",
      categories: [
        {
          category: "Frontend Technologies",
          iconName: "Layout",
          intro: "Dynamic and responsive user interfaces:",
          items: [{ name: "React.js", desc: "Component-based" }, { name: "Angular", desc: "Full-featured" }, { name: "Vue.js", desc: "Flexible UI" }, { name: "Next.js", desc: "SSR & Performance" }]
        },
        {
          category: "Backend & APIs",
          iconName: "Server",
          intro: "Server-side logic and seamless data exchange:",
          items: [{ name: "Node.js", desc: "Event-driven" }, { name: "Python", desc: "Data processing" }, { name: ".NET Core", desc: "Enterprise logic" }, { name: "RESTful APIs", desc: "System sync" }]
        },
        {
          category: "Database & Storage",
          iconName: "Database",
          intro: "Efficient data management and cloud storage:",
          items: [{ name: "PostgreSQL", desc: "Relational data" }, { name: "MongoDB", desc: "NoSQL flexibility" }, { name: "Redis", desc: "In-memory cache" }, { name: "AWS S3", desc: "Cloud assets" }]
        },
        {
          category: "DevOps & Infrastructure",
          iconName: "Cloud",
          intro: "Automated scaling and reliable deployment:",
          items: [{ name: "Docker", desc: "Containerization" }, { name: "Kubernetes", desc: "Orchestration" }, { name: "CI/CD", desc: "Auto-testing" }, { name: "Cloud Platforms", desc: "AWS/Azure/GCP" }]
        },
      ],
    },
  },
  "cms-wordpress-wix": {
    title: "Professional CMS Solutions",
    subtitle: "WordPress & Wix Expert",
    bannerDescription: "Empower your business with easy-to-manage websites. We specialize in custom WordPress and Wix solutions tailored for growth, security, and performance.",
    bannerImage: "/banner/40.jpg",
    imagePosition: "90%",
    sectionTitle: "Custom CMS Development",
    sectionDescription: "Building flexible, user-friendly, and powerful content management systems that put you in control of your digital presence.",
    metaTitle: "Professional CMS Solutions | WordPress & Wix Expert",
    metaDescription: "Empower your business with easy-to-manage websites. We specialize in custom WordPress and Wix solutions.",
    cards: [
      { title: "Custom WordPress Development", description: "We build tailored cloud-based software solutions that address specific business needs, offering scalability, security, and seamless integration.", image: "/services/uiux1.png" },
      { title: "Custom Wix Development", description: "Developing comprehensive SaaS platforms with multi-tenant architecture, robust security, and seamless user experiences for diverse industries.", image: "/services/mobile1.png" },
      { title: "E-Commerce CMS Solutions", description: "Migrating existing on-premise systems to cloud-based SaaS platforms, ensuring minimal disruption and enhanced scalability, security, and accessibility.", image: "/services/web1.png" },
      { title: "CMS Support & Maintenance", description: "Providing ongoing support and maintenance services to ensure SaaS applications remain secure, up-to-date, and optimized for performance and scalability.", image: "/services/graphic1.png" },
    ],
    profSection: {
      title: "Why Choose Our CMS Development Services",
      description: "Partner with CMS experts who focus on scalability, speed, and ease of use for your business.",
      image: "/banner/52.jpg",
      points: [
        {
          title: "Platform Expertise",
          description: "Deep mastery of WordPress and Wix to deliver flexible, scalable, and secure websites tailored to your needs.",
          iconName: "Layout"
        },
        {
          title: "Custom Development",
          description: "Building custom themes, plugins, and features to provide a unique user experience and extended functionality.",
          iconName: "Code2"
        },
        {
          title: "SEO & Performance",
          description: "Optimizing websites for speed, search engine visibility, and cross-device compatibility to drive organic growth.",
          iconName: "TrendingUp"
        },
        {
          title: "Ongoing Support",
          description: "Reliable maintenance, security updates, and technical guidance to ensure your website remains modern and safe.",
          iconName: "LifeBuoy"
        },
      ],
    },
    techSection: {
      title: "CMS Technology Stack",
      description: "Powerful tools and platforms for content-driven websites",
      categories: [
        {
          category: "Core Platforms",
          iconName: "Monitor",
          intro: "Industry-leading content management systems:",
          items: [{ name: "WordPress", desc: "Open-source power" }, { name: "Wix", desc: "Design flexibility" }, { name: "Shopify", desc: "E-commerce CMS" }, { name: "Squarespace", desc: "Visual storytelling" }]
        },
        {
          category: "Development Tools",
          iconName: "Code2",
          intro: "Customizing and extending functionality:",
          items: [{ name: "PHP", desc: "WordPress engine" }, { name: "Velo", desc: "Wix development" }, { name: "MySQL", desc: "Database logic" }, { name: "JavaScript", desc: "Interactive features" }]
        },
        {
          category: "Optimization",
          iconName: "Zap",
          intro: "Ensuring speed and search visibility:",
          items: [{ name: "Yoast SEO", desc: "Search ranking" }, { name: "WP Rocket", desc: "Performance cache" }, { name: "Cloudflare", desc: "CDN & Security" }, { name: "Imagify", desc: "Image compression" }]
        },
        {
          category: "Visual Builders",
          iconName: "Layout",
          intro: "Empowering content creators with ease:",
          items: [{ name: "Elementor", desc: "WP Page builder" }, { name: "Wix Studio", desc: "Advanced design" }, { name: "Gutenberg", desc: "Block editor" }, { name: "Divi", desc: "Visual editor" }]
        },
      ],
    },
  },
  "software-development": {
    title: "Custom Software Development Solutions",
    subtitle: "Enterprise Software",
    bannerDescription: "Build bespoke software tailored to your unique business needs. We deliver high-quality, scalable, and secure applications that drive innovation and efficiency.",
    bannerImage: "/banner/38.jpg",
    imagePosition: "90%",
    sectionTitle: "Bespoke Software Engineering",
    sectionDescription: "Creating powerful, tailor-made software solutions that solve complex business challenges and drive digital transformation.",
    metaTitle: "Custom Software Development Solutions | Inspro Software",
    metaDescription: "Build bespoke software tailored to your unique business needs. We deliver high-quality, scalable, and secure applications.",
    cards: [
      { title: " Enterprise Software Development", description: "Transform your business operations with scalable, secure, and custom-built enterprise software designed to streamline workflows and drive measurable growth.", image: "/services/uiux1.png" },
      { title: "Cloud-Based Software Solutions", description: "Empower your business with flexible, secure, and scalable cloud-based software that grows with your needs and ensures seamless access from anywhere.", image: "/services/mobile1.png" },
      { title: "SaaS Platform Development", description: "Develop powerful, multi-tenant SaaS platforms with robust architecture, enterprise-grade security, and seamless user experiences for modern businesses.", image: "/services/web1.png" },
      { title: "Legacy Software Modernization", description: "Upgrade and revitalize outdated systems with modern technologies, improved performance, and enhanced security while preserving critical business logic and data.", image: "/services/graphic1.png" },
    ],
    profSection: {
      title: "Why Choose Our Software Development Services",
      description: "Partner with expert engineers who focus on delivering measurable business value through custom software.",
      image: "/banner/custom.jpg",
      points: [
        {
          title: "Tailored Solutions",
          description: "Designing and developing software from scratch to align perfectly with your business goals and unique workflows.",
          iconName: "Settings"
        },
        {
          title: "Scalable Architecture",
          description: "Building systems with a forward-looking approach, ensuring they can grow and adapt as your business expands.",
          iconName: "TrendingUp"
        },
        {
          title: "Modern Technologies",
          description: "Leveraging the latest tools and agile methodologies to deliver cutting-edge software that provides a competitive edge.",
          iconName: "Zap"
        },
        {
          title: "End-to-End Delivery",
          description: "Full-cycle process from discovery and planning to deployment, maintenance, and long-term technical support.",
          iconName: "ShieldCheck"
        },
      ],
    },
    techSection: {
      title: "Software Technology Stack",
      description: "Versatile tools for building high-performance applications",
      categories: [
        {
          category: "Backend Development",
          iconName: "Server",
          intro: "Robust and scalable server-side logic:",
          items: [{ name: "Node.js", desc: "Fast & scalable" }, { name: "Python", desc: "AI & Data ready" }, { name: ".NET Core", desc: "Enterprise grade" }, { name: "Java", desc: "Stable & secure" }]
        },
        {
          category: "Frontend & Mobile",
          iconName: "Monitor",
          intro: "Seamless multi-platform user experiences:",
          items: [{ name: "React / Next.js", desc: "Web excellence" }, { name: "Angular", desc: "Robust frameworks" }, { name: "React Native", desc: "Cross-platform mobile" }, { name: "Flutter", desc: "Native performance" }]
        },
        {
          category: "Cloud & DevOps",
          iconName: "Cloud",
          intro: "Reliable hosting and automated delivery:",
          items: [{ name: "AWS / Azure", desc: "Cloud infrastructure" }, { name: "Docker", desc: "Containerization" }, { name: "Kubernetes", desc: "Orchestration" }, { name: "CI/CD", desc: "Rapid deployment" }]
        },
        {
          category: "Quality Assurance",
          iconName: "ShieldCheck",
          intro: "Ensuring stability and bug-free performance:",
          items: [{ name: "Selenium", desc: "Web automation" }, { name: "Jest / Mocha", desc: "Unit testing" }, { name: "Appium", desc: "Mobile testing" }, { name: "Postman", desc: "API validation" }]
        },
      ],
    },
  },
  "mobile-app-development": {
    title: "Premium Mobile App Development",
    subtitle: "iOS & Android Apps",
    bannerDescription: "Build high-performance, native-like mobile applications for iOS and Android. Leading development company in USA specializing in React Native, Flutter, and Swift.",
    bannerImage: "/banner/38.jpg",
    imagePosition: "90%",
    sectionTitle: "High-Performance Mobile Solutions",
    sectionDescription: "Creating engaging, secure, and feature-rich mobile experiences that connect your business with users on any device.",
    metaTitle: "Premium Mobile App Development | iOS & Android Apps",
    metaDescription: "Build high-performance, native-like mobile applications for iOS and Android. Specializing in React Native, Flutter, and Swift.",
    cards: [
      { title: "iOS App Development", description: "Premium iOS App Development for iPhone, iPad & Apple Watch – Native Swift & Objective-C apps with seamless UI/UX, enterprise security & ongoing support.", image: "/services/uiux1.png" },
      { title: "Android App Development", description: "Build powerful, scalable, and secure native Android apps for smartphones, tablets, wearables, and Android-powered devices with custom features and seamless performance.", image: "/services/mobile1.png" },
      { title: "Cross-Platform App Development", description: "Build powerful, scalable, and secure native Android apps for smartphones, tablets, wearables, and Android-powered devices with custom features and seamless performance.", image: "/services/web1.png" },
      { title: "Wearable App Development", description: "Build powerful, scalable, and secure native Android apps for smartphones, tablets, wearables, and Android-powered devices with custom features and seamless performance.", image: "/services/graphic1.png" },
    ],
    profSection: {
      title: "Why Choose Our Mobile Development Services",
      description: "Partner with mobile experts who focus on performance, design, and seamless cross-platform functionality.",
      image: "/banner/mobile.jpg",
      points: [
        {
          title: "Native Performance",
          description: "Delivering smooth, high-performance apps that feel native to the device, ensuring the best possible user experience.",
          iconName: "Zap"
        },
        {
          title: "Cross-Platform Efficiency",
          description: "Utilizing React Native and Flutter to build for multiple platforms from one codebase, saving time and cost.",
          iconName: "Smartphone"
        },
        {
          title: "User-Centric Design",
          description: "Focusing on intuitive UI/UX to create engaging, easy-to-use mobile experiences that drive retention.",
          iconName: "Layout"
        },
        {
          title: "Complete Lifecycle",
          description: "Full-cycle services from concept and design to app store submission and ongoing maintenance.",
          iconName: "RefreshCw"
        },
      ],
    },
    techSection: {
      title: "Mobile Technology Stack",
      description: "Cutting-edge tools for modern mobile engineering",
      categories: [
        {
          category: "Frameworks",
          iconName: "Smartphone",
          intro: "Best-in-class cross-platform solutions:",
          items: [{ name: "React Native", desc: "Native JS power" }, { name: "Flutter", desc: "Fast UI toolkit" }, { name: "Ionic", desc: "Web-based apps" }, { name: "NativeScript", desc: "Pure native" }]
        },
        {
          category: "Native Languages",
          iconName: "Code2",
          intro: "Platform-specific excellence:",
          items: [{ name: "Swift", desc: "iOS performance" }, { name: "Kotlin", desc: "Modern Android" }, { name: "Objective-C", desc: "Legacy iOS" }, { name: "Java", desc: "Android core" }]
        },
        {
          category: "Backend & Cloud",
          iconName: "Cloud",
          intro: "Powering your app with real-time data:",
          items: [{ name: "Firebase", desc: "App ecosystem" }, { name: "AWS Amplify", desc: "Cloud backend" }, { name: "GraphQL", desc: "Efficient APIs" }, { name: "Node.js", desc: "Custom backends" }]
        },
        {
          category: "Tools & Quality",
          iconName: "ShieldCheck",
          intro: "Ensuring stability and smooth delivery:",
          items: [{ name: "TestFlight", desc: "iOS beta" }, { name: "Bitrise", desc: "Mobile CI/CD" }, { name: "App Center", desc: "Crash reports" }, { name: "Postman", desc: "API testing" }]
        },
      ],
    },
  },
  "android-app-development": {
    title: "We Bring Your Ideas to Life with Powerful Android Apps",
    subtitle: "Native Android Expert",
    bannerDescription: "At Insprosoftware, we specialize in developing high-quality, high-performance Android applications that align with your business vision. Whether it's a startup idea or an enterprise-level project, we create Android apps that are functional, intuitive, and ready to make an impact on the Google Play Store.",
    bannerImage: "/banner/42.jpg",
    imagePosition: "90%",
    sectionTitle: "High-Impact Android Apps",
    sectionDescription: "Build custom Android applications that are fast, reliable, and beautifully designed for any business scale.",
    metaTitle: "Powerful Android App Development | Inspro Software",
    metaDescription: "We specialize in developing high-quality, high-performance Android applications that align with your business vision.",
    cards: [
      { title: "Custom Android App Development", description: "Tailored apps built to match your business goals, ensuring seamless integration, scalability, and high engagement.", image: "/services/graphic1.png" },
      { title: "Android UI/UX Design", description: "Visually appealing, intuitive interfaces optimized for Android guidelines for seamless cross-device interaction.", image: "/services/uiux1.png" },
      { title: "Android App Consulting", description: "Defining your app strategy and roadmap to ensure maximum ROI and optimal market fit for long-term success.", image: "/services/mobile1.png" },
      { title: "Enterprise Android Solutions", description: "Scalable and secure applications for large businesses, efficiently handling complex processes at scale.", image: "/services/web1.png" },
      { title: "Wearable & IoT Apps", description: "Extending functionality to smartwatches and IoT devices, creating new digital touchpoints for your brand.", image: "/services/mobile1.png" },
      { title: "App Maintenance & Support", description: "Ongoing maintenance and updates to ensure your Android app stays secure, updated, and optimized for peak performance.", image: "/services/graphic1.png" },

    ],
    profSection: {
      title: "Android Development Excellence",
      description: "Partner with a leading Android development company to launch apps that captivate users and drive results.",
      image: "/banner/mobile.jpg",
      points: [
        {
          title: "Custom Android App Development",
          description: "Tailored apps built to match your business goals, ensuring seamless integration, scalability, and high engagement.",
          iconName: "Code2"
        },
        {
          title: "Android UI/UX Design",
          description: "Visually appealing, intuitive interfaces optimized for Android guidelines for seamless cross-device interaction.",
          iconName: "Palette"
        },
        {
          title: "Android App Consulting",
          description: "Defining your app strategy and roadmap to ensure maximum ROI and optimal market fit for long-term success.",
          iconName: "Target"
        },
        {
          title: "Enterprise Android Solutions",
          description: "Scalable and secure applications for large businesses, efficiently handling complex processes at scale.",
          iconName: "ShieldCheck"
        },
        {
          title: "Wearable & IoT Apps",
          description: "Extending functionality to smartwatches and IoT devices, creating new digital touchpoints for your brand.",
          iconName: "Cpu"
        },
        {
          title: "App Maintenance & Support",
          description: "Post-launch support and regular updates to keep your app bug-free and optimized for the latest Android versions.",
          iconName: "LifeBuoy"
        },
      ],
    },
    techSection: {
      title: "Android Technology Stack",
      description: "Modern Android technologies for building robust applications",
      categories: [
        {
          category: "Languages & Frameworks",
          iconName: "Smartphone",
          intro: "Native excellence and modern UI tools:",
          items: [{ name: "Kotlin", desc: "Primary language" }, { name: "Java", desc: "Core Android" }, { name: "Jetpack Compose", desc: "Modern UI" }, { name: "XML", desc: "Classic layout" }]
        },
        {
          category: "Architecture & Logic",
          iconName: "Layers",
          intro: "Building scalable and testable apps:",
          items: [{ name: "MVVM", desc: "Design pattern" }, { name: "Clean Architecture", desc: "Modular logic" }, { name: "RxJava", desc: "Reactive flow" }, { name: "Dagger / Hilt", desc: "Dependency injection" }]
        },
        {
          category: "Database & Backend",
          iconName: "Database",
          intro: "Secure storage and real-time sync:",
          items: [{ name: "Room", desc: "Local database" }, { name: "SQLite", desc: "Native storage" }, { name: "Firebase", desc: "Real-time DB" }, { name: "Retrofit", desc: "API handling" }]
        },
        {
          category: "Tools & Testing",
          iconName: "Settings",
          intro: "Ensuring stability and quality:",
          items: [{ name: "Android Studio", desc: "Official IDE" }, { name: "JUnit / Espresso", desc: "Testing suite" }, { name: "Crashlytics", desc: "Error tracking" }, { name: "Jenkins", desc: "CI/CD automation" }]
        },
      ],
    },
  },
  "ios-app-development": {
    title: "Professional ios App Development",
    subtitle: "Apple Ecosystem",
    bannerDescription: "Create powerful native iOS applications with modern Swift development. Leading app development company in USA delivering premium Apple ecosystem solutions.",
    bannerImage: "/banner/45.jpg",
    imagePosition: "40%",
    sectionTitle: "Premium iOS Solutions",
    sectionDescription: "Crafting visually stunning and high-performance applications tailored specifically for the Apple ecosystem.",
    metaTitle: "Professional ios App Development | Inspro Software",
    metaDescription: "Create powerful native iOS applications with modern Swift development. Delivering premium Apple solutions.",
    cards: [
      { title: "Swift Development", description: "Leveraging Swift to build fast, scalable iOS applications with clean architecture and seamless Apple ecosystem integration.", image: "/services/web1.png" },
      { title: "Premium UI/UX", description: "Crafting intuitive, visually appealing interfaces using SwiftUI and iOS design best practices for exceptional user engagement.", image: "/services/mobile1.png" },
      { title: "Enterprise Solutions", description: "Developing robust, secure iOS applications for businesses, ensuring scalability, data protection, and smooth integration with existing systems.", image: "/services/graphic1.png" },
      { title: "App Excellence", description: "Achieve App Store excellence by ensuring full compliance with guidelines, optimizing app performance, fine-tuning for speed and efficiency, and enhancing store presence through compelling visuals, metadata, and user engagement.", image: "/services/uiux1.png" },
    ],
    profSection: {
      title: "Why Choose Our iOS Development Services",
      description: "Partner with a leading iOS app development company in USA for premium mobile solutions.",
      image: "/banner/mobile.jpg",
      points: [
        {
          title: "Native Excellence",
          description: "Expert Swift development aligned with Apple's guidelines to craft premium UI/UX and secure enterprise solutions.",
          iconName: "Smartphone"
        },
        {
          title: "Modern Development",
          description: "Combining SwiftUI with the latest iOS features for stunning, high-performance apps with clean, scalable code.",
          iconName: "Zap"
        },
        {
          title: "Quality Assurance",
          description: "Rigorous testing and security audits to ensure reliability, speed, and a polished final product for the App Store.",
          iconName: "ShieldCheck"
        },
        {
          title: "Complete Support",
          description: "Ongoing maintenance and performance monitoring to keep your app compatible with the latest iOS updates.",
          iconName: "LifeBuoy"
        },
      ],
    },
    techSection: {
      title: "iOS Technology Stack",
      description: "Modern iOS technologies for premium applications",
      categories: [
        {
          category: "Core Technologies",
          iconName: "Code2",
          intro: "Robust app development and declarative UI:",
          items: [{ name: "Swift", desc: "Native power" }, { name: "SwiftUI", desc: "Modern UI" }, { name: "UIKit", desc: "Complex views" }, { name: "Core Data", desc: "Local storage" }]
        },
        {
          category: "Apple Frameworks",
          iconName: "Layers",
          intro: "Leveraging the full potential of Apple's ecosystem:",
          items: [{ name: "CloudKit", desc: "Cloud sync" }, { name: "Core ML", desc: "Machine learning" }, { name: "ARKit", desc: "Augmented reality" }, { name: "WidgetKit", desc: "Home widgets" }]
        },
        {
          category: "Data & Storage",
          iconName: "Database",
          intro: "Efficient and consistent data management:",
          items: [{ name: "Core Data", desc: "Native ORM" }, { name: "Realm", desc: "Fast database" }, { name: "SQLite", desc: "Portable storage" }, { name: "iCloud", desc: "Cloud consistency" }]
        },
        {
          category: "Testing & Analytics",
          iconName: "BarChart",
          intro: "Ensuring code quality and user insights:",
          items: [{ name: "XCTest", desc: "Unit testing" }, { name: "TestFlight", desc: "Beta feedback" }, { name: "Firebase", desc: "Real-time analytics" }, { name: "App Analytics", desc: "Behavior tracking" }]
        },
      ],
    },
  },
  "iot-app-development": {
    title: "Professional IoT App Development",
    subtitle: "Connected Solutions",
    bannerDescription: "Create powerful IoT applications with modern connected device solutions. Leading development company in USA delivering enterprise-grade IoT platforms.",
    bannerImage: "/banner/42.jpg",
    imagePosition:"90%",
    sectionTitle: "Next-Gen IoT Ecosystems",
    sectionDescription: "Bridging the gap between physical devices and digital intelligence with robust, scalable IoT architectures.",
    metaTitle: "Professional IoT App Development | Inspro Software",
    metaDescription: "Create powerful IoT applications with modern connected device solutions. Delivering enterprise-grade IoT platforms.",
    cards: [
      { title: "Seamless Device Integration", description: "Device integration involves seamless sensor integration for data collection, supporting various communication protocols for compatibility, implementing gateway solutions for device connectivity, and utilizing edge computing to process data locally for faster, more efficient performance. These elements ensure real-time, reliable, and scalable systems for connected devices and IoT ecosystems.", image: "/services/web1.png" },
      { title: "Real Time Monitoring", description: "Real-time data monitoring involves collecting, processing, and displaying data streams as they happen, ensuring timely updates for quick decisions, supporting live data visualization with charts and graphs, enabling immediate alerts for anomalies or critical events, and offering historical data analysis for trend identification. These features ensure real-time visibility and efficient system management.", image: "/services/mobile1.png" },
      { title: "Enterprise Solution", description: "Enterprise solutions deliver robust device connectivity, ensuring seamless sensor integration and support for multiple communication protocols. They include advanced security, cloud-based data management for scalability, and edge computing for real-time processing. These systems provide reliable device management, comprehensive monitoring, and analytics, enabling businesses to optimize operations and decision-making.", image: "/services/graphic1.png" },
      { title: "Security and Compliance", description: "Security and compliance in IoT involve robust data encryption to protect sensitive information, implementing secure authentication methods for device access control, maintaining compliance with industry regulations and data privacy standards, and regularly updating security protocols to address emerging threats. These measures ensure secure and trustworthy connected ecosystems.", image: "/services/uiux1.png" },
    ],
    profSection: {
      title: "Why Choose Our IoT Development Services",
      description: "Partner with a leading IoT app development company in USA for connected device solutions.",
      image: "/banner/mobile.jpg",
      points: [
        {
          title: "Device Expertise",
          description: "Mastering communication protocols and sensor integration for reliable, high-performance systems tailored to hardware.",
          iconName: "Cpu"
        },
        {
          title: "Modern Development",
          description: "Leveraging cloud scalability and real-time processing to create adaptable applications ready for future innovation.",
          iconName: "Network"
        },
        {
          title: "Quality Assurance",
          description: "Comprehensive device testing and security audits to identify vulnerabilities and ensure peak performance under load.",
          iconName: "ShieldCheck"
        },
        {
          title: "Complete Support",
          description: "Efficient device management and continuous monitoring to ensure smooth operation across all connected devices.",
          iconName: "LifeBuoy"
        },
      ],
    },
    techSection: {
      title: "IoT Technology Stack",
      description: "Modern IoT technologies for connected solutions",
      categories: [
        {
          category: "Core Technologies",
          iconName: "Zap",
          intro: "Lightweight and efficient communication protocols:",
          items: [{ name: "MQTT", desc: "Pub/Sub messaging" }, { name: "CoAP", desc: "Constrained apps" }, { name: "WebSocket", desc: "Real-time sync" }, { name: "REST APIs", desc: "System interaction" }]
        },
        {
          category: "Cloud Platforms",
          iconName: "Cloud",
          intro: "Scalable solutions for device management:",
          items: [{ name: "AWS IoT", desc: "Cloud core" }, { name: "Azure IoT", desc: "Enterprise scale" }, { name: "Google Cloud IoT", desc: "Data insights" }, { name: "ThingWorx", desc: "IoT platform" }]
        },
        {
          category: "Data & Analytics",
          iconName: "BarChart",
          intro: "Turning device data into actionable insights:",
          items: [{ name: "Time Series DB", desc: "Temporal data" }, { name: "Stream Analytics", desc: "Real-time flow" }, { name: "Machine Learning", desc: "Predictive models" }, { name: "Visualization", desc: "Data dashboards" }]
        },
        {
          category: "Security & Management",
          iconName: "Lock",
          intro: "Ensuring device safety and software integrity:",
          items: [{ name: "PKI", desc: "Secure auth" }, { name: "OTA Updates", desc: "Remote patching" }, { name: "Encryption", desc: "Data protection" }, { name: "Monitoring", desc: "Threat detection" }]
        },
      ],
    },
  },
  "wearable-development": {
    title: "Professional Wearable App Development",
    subtitle: "Smartwatch Solutions",
    bannerDescription: "Create powerful wearable applications with modern technology solutions. Leading development company in USA delivering innovative health and fitness platforms.",
    bannerImage: "/banner/43.jpg",
    imagePosition:"45%",
    sectionTitle: "Next-Gen Wearable Tech",
    sectionDescription: "Empowering users with real-time health data and seamless connectivity through premium smartwatch applications.",
    metaTitle: "Professional Wearable App Development | Smartwatch Solutions",
    metaDescription: "Create powerful wearable applications with modern technology solutions. Delivering innovative health and fitness platforms.",
    cards: [
      { title: "Smartwatch Apps", description: "Smartwatch apps are designed for platforms like Apple Watch, Wear OS, watchOS, and Tizen. These apps provide seamless integration with their respective ecosystems, enabling features like fitness tracking, notifications, and real-time updates, offering an optimized user experience tailored to each smartwatch operating system’s capabilities and user needs.", image: "/services/web1.png" },
      { title: "Health & Fitness", description: "Health & fitness apps focus on activity tracking, health monitoring, and capturing workout metrics like steps, calories burned, heart rate, and more. They provide progress analytics to help users visualize their fitness journey, set goals, and stay motivated, ensuring a comprehensive approach to health and well-being.", image: "/services/uiux1.png" },
      { title: "Enterprise Solutions", description: "Enterprise solutions focus on secure architecture to safeguard systems, robust data protection to ensure confidentiality and compliance, strong authentication to control access, and cloud sync for seamless data synchronization across devices and platforms. These elements work together to provide scalable, reliable, and secure solutions for modern business needs.", image: "/services/graphic1.png" },
      { title: "Device Integration", description: "Device integration involves incorporating sensor data for accurate monitoring, using Bluetooth for wireless communication between devices, leveraging GPS tracking for location-based services, and enabling real-time sync to ensure seamless data updates across connected devices. This creates a smooth, responsive experience for users in IoT and smart device ecosystems.", image: "/services/mobile1.png" },
    ],
    profSection: {
      title: "Why Choose Our Wearable Development Services",
      description: "Partner with a leading wearable app development company in USA for innovative solutions.",
      image: "/banner/mobile.jpg",
      points: [
        {
          title: "Platform Expertise",
          description: "Mastering watchOS and Wear OS to ensure high-performance, seamless user experiences across all major smartwatch platforms.",
          iconName: "Watch"
        },
        {
          title: "Health Innovation",
          description: "Integrating real-time fitness tracking and health monitoring with data analytics for personalized wellness insights.",
          iconName: "HeartPulse"
        },
        {
          title: "Quality Assurance",
          description: "Comprehensive testing for battery efficiency, speed, and stability to deliver a polished product that meets expectations.",
          iconName: "ShieldCheck"
        },
        {
          title: "Complete Support",
          description: "Ongoing maintenance and timely OS updates to ensure your app remains secure and fully functional throughout its lifecycle.",
          iconName: "RefreshCw"
        },
      ],
    },
    techSection: {
      title: "Wearable Technology Stack",
      description: "Modern wearable technologies for innovative solutions",
      categories: [
        {
          category: "Core Platforms",
          iconName: "Monitor",
          intro: "Broad reach across diverse wearable ecosystems:",
          items: [{ name: "watchOS", desc: "Apple Watch" }, { name: "Wear OS", desc: "Android watches" }, { name: "Tizen", desc: "Samsung tech" }, { name: "Fitbit OS", desc: "Fitness devices" }]
        },
        {
          category: "Health APIs",
          iconName: "Activity",
          intro: "Seamless health and fitness data integration:",
          items: [{ name: "HealthKit", desc: "Apple Health" }, { name: "Google Fit", desc: "Android Health" }, { name: "Samsung Health", desc: "Wellness sync" }, { name: "Fitness APIs", desc: "Custom tracking" }]
        },
        {
          category: "Data & Analytics",
          iconName: "BarChart",
          intro: "Sensor data collection and predictive insights:",
          items: [{ name: "CoreMotion", desc: "Sensor logic" }, { name: "Sensor Data", desc: "Motion tracking" }, { name: "ML Models", desc: "Personalized info" }, { name: "Analytics Tools", desc: "Actionable reports" }]
        },
        {
          category: "Integration & Security",
          iconName: "Lock",
          intro: "Ensuring safe and reliable data exchange:",
          items: [{ name: "Bluetooth LE", desc: "Low-energy sync" }, { name: "Cloud Sync", desc: "Cross-platform data" }, { name: "Encryption", desc: "Data safety" }, { name: "Authentication", desc: "Secure access" }]
        },
      ],
    },
  },
  "react-native-app-development": {
    title: "Professional React Native Development",
    subtitle: "Cross-Platform Apps",
    bannerDescription: "Create powerful cross-platform applications with modern React Native solutions. Leading development company in USA delivering enterprise-grade mobile apps.",
    bannerImage: "/banner/45.jpg",
    imagePosition:"45%",
    sectionTitle: "Shared Codebase Excellence",
    sectionDescription: "Combining the efficiency of single-source development with the performance of native mobile applications.",
    metaTitle: "Professional React Native Development | Cross-Platform Apps",
    metaDescription: "Create powerful cross-platform applications with modern React Native solutions. Delivering enterprise-grade mobile apps.",
    cards: [
      { title: "Cross Platform Excellence", description: "Achieve consistent user experiences across iOS and Android with a single, unified codebase.", image: "/services/web1.png" },
      { title: "Speed & Performance", description: "Deliver high-performance apps that feel fully native, with efficient rendering and smooth animations.", image: "/services/graphic1.png" },
      { title: "Seamless Integrations", description: "Connect effortlessly with native device features and third-party APIs for advanced functionality.", image: "/services/mobile1.png" },
      { title: "Cost-Effective Development", description: "Reduce development time and costs with a shared codebase while maintaining high quality.", image: "/services/uiux1.png" },
    ],
    profSection: {
      title: "Why Choose Our React Native Development Services",
      description: "Partner with a leading React Native app development company in USA for cross-platform solutions.",
      image: "/banner/mobile.jpg",
      points: [
        {
          title: "Cross-Platform Expertise",
          description: "Developing for both iOS and Android using a shared codebase to increase efficiency and ensure faster updates.",
          iconName: "Smartphone"
        },
        {
          title: "Modern Development",
          description: "Leveraging the latest React features and native modules for efficient, responsive interfaces and scalable code.",
          iconName: "Zap"
        },
        {
          title: "Quality Assurance",
          description: "Rigorous automated and cross-device testing to ensure a reliable, high-quality product that meets user expectations.",
          iconName: "ShieldCheck"
        },
        {
          title: "Complete Support",
          description: "Ongoing maintenance and version updates to keep your application running smoothly and securely after launch.",
          iconName: "LifeBuoy"
        },
      ],
    },
    techSection: {
      title: "React Native Technology Stack",
      description: "Modern React Native technologies for optimal solutions",
      categories: [
        {
          category: "Core Technologies",
          iconName: "Code2",
          intro: "Robust development with a single codebase:",
          items: [{ name: "React Native", desc: "Core framework" }, { name: "JavaScript", desc: "Flexible logic" }, { name: "TypeScript", desc: "Type safety" }, { name: "Redux", desc: "State management" }]
        },
        {
          category: "UI Components",
          iconName: "Layout",
          intro: "Building consistent and intuitive interfaces:",
          items: [{ name: "React Navigation", desc: "App flow" }, { name: "Native Base", desc: "UI kit" }, { name: "RN Paper", desc: "Material design" }, { name: "Native Elements", desc: "Custom UI" }]
        },
        {
          category: "Data & Storage",
          iconName: "Database",
          intro: "Efficient data handling and persistence:",
          items: [{ name: "AsyncStorage", desc: "Simple storage" }, { name: "Realm", desc: "Local DB" }, { name: "SQLite", desc: "Complex data" }, { name: "Firebase", desc: "Cloud sync" }]
        },
        {
          category: "Testing & Deployment",
          iconName: "Zap",
          intro: "Ensuring reliability and rapid delivery:",
          items: [{ name: "Jest", desc: "Unit testing" }, { name: "Detox", desc: "E2E testing" }, { name: "Fastlane", desc: "Auto-deploy" }, { name: "CodePush", desc: "OTA updates" }]
        },
      ],
    },
  },
  "flutter-app-development": {
    title: "Professional Flutter Development",
    subtitle: "Multi-Platform Apps",
    bannerDescription: "Build beautiful, natively compiled applications for mobile, web, and desktop from a single codebase. Leading development company in USA delivering high-performance Flutter solutions.",
    bannerImage: "/services/web1.png",
    imagePosition:"35%",
    sectionTitle: "High-Performance Multi-Platform Apps",
    sectionDescription: "Leveraging Google's UI toolkit to create stunning, fast, and natively compiled applications for any screen.",
    metaTitle: "Professional Flutter Development | Multi-Platform Apps",
    metaDescription: "Build beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.",
    cards: [
      { title: "Blazing Fast Performance", description: "Flutter uses a fast rendering engine to compile code to native ARM code, ensuring smooth animations and quick startup times.", image: "/services/web1.png" },
      { title: "Rich UI & Animations", description: "Flutter provides a rich set of customizable widgets and animation tools, allowing you to create visually stunning and engaging user interfaces.", image: "/services/graphic1.png" },
      { title: "Single Codebase", description: "Build beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.", image: "/services/mobile1.png" },
      { title: "Cost-Efficient Development", description: "Build beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.", image: "/services/uiux1.png" },
    ],
    profSection: {
      title: "Why Choose Our Flutter Development Services",
      description: "Partner with a leading Flutter app development company in USA for cross-platform solutions.",
      image: "/banner/mobile.jpg",
      points: [
        {
          title: "Flutter Expertise",
          description: "Deep knowledge of Dart and the widget system to create highly customizable and responsive UI designs.",
          iconName: "Zap"
        },
        {
          title: "Modern Development",
          description: "Utilizing hot reload and Material/Cupertino design for efficient, clean, and intuitive user interfaces.",
          iconName: "Smartphone"
        },
        {
          title: "Quality Assurance",
          description: "Rigorous widget and integration testing to ensure reliability and a smooth user experience across platforms.",
          iconName: "ShieldCheck"
        },
        {
          title: "Complete Support",
          description: "Proactive performance monitoring and regular maintenance to ensure long-term stability and compatibility.",
          iconName: "LifeBuoy"
        },
      ],
    },
    techSection: {
      title: "Flutter Technology Stack",
      description: "Modern Flutter technologies for optimal solutions",
      categories: [
        {
          category: "Core Technologies",
          iconName: "Code2",
          intro: "Natively compiled apps for mobile, web, and desktop:",
          items: [{ name: "Flutter SDK", desc: "Core tools" }, { name: "Dart", desc: "Fast coding" }, { name: "Widget System", desc: "Reactive UI" }, { name: "Platform Channels", desc: "Native sync" }]
        },
        {
          category: "UI Framework",
          iconName: "Layout",
          intro: "Beautiful and responsive design capabilities:",
          items: [{ name: "Material Design", desc: "Android style" }, { name: "Cupertino", desc: "iOS style" }, { name: "Custom Widgets", desc: "Tailored UI" }, { name: "Animations", desc: "Smooth transitions" }]
        },
        {
          category: "Data & Storage",
          iconName: "Database",
          intro: "Robust and efficient local data management:",
          items: [{ name: "SQLite", desc: "Relational DB" }, { name: "Hive", desc: "Fast NoSQL" }, { name: "SharedPreferences", desc: "Key-value" }, { name: "Firebase", desc: "Cloud sync" }]
        },
        {
          category: "Testing & Deployment",
          iconName: "Zap",
          intro: "Automated pipelines for quality delivery:",
          items: [{ name: "Flutter Test", desc: "Unit/Widget" }, { name: "Integration Tests", desc: "Full flows" }, { name: "CI/CD Pipelines", desc: "Auto-deploy" }, { name: "App Distribution", desc: "Store sync" }]
        },
      ],
    },
  },
  "kotlin-android-development": {
    title: "Professional Kotlin Android Development",
    subtitle: "Native Android Solutions",
    bannerDescription: "Create powerful native Android applications with modern Kotlin solutions. Leading development company in USA delivering enterprise-grade mobile apps.",
    bannerImage: "/services/web1.png",
    imagePosition:"35%",
    sectionTitle: "Modern Kotlin Engineering",
    sectionDescription: "Utilizing the preferred language for Android to build safe, concise, and high-performance native applications.",
    metaTitle: "Professional Kotlin Android Development | Native Android",
    metaDescription: "Create powerful native Android applications with modern Kotlin solutions. Delivering enterprise-grade mobile apps.",
    cards: [
      { title: "Modern Android Solutions", description: "Building native Android applications with the latest Kotlin features for optimal performance and user experience.", image: "/services/web1.png" },
      { title: "Full Native Capabilities", description: "Leveraging Kotlin's concise syntax and modern features to create seamless, high-performance applications.", image: "/services/graphic1.png" },
      { title: "Enterprise-Grade Apps", description: "Delivering secure, scalable, and maintainable Android applications tailored to meet business requirements.", image: "/services/mobile1.png" },
      { title: "Quality & Reliability", description: "Ensuring robust testing and adherence to best practices to deliver polished, reliable Android applications.", image: "/services/uiux1.png" },
    ],
    profSection: {
      title: "Why Choose Our Kotlin Android Development Services",
      description: "Partner with a leading Kotlin Android app development company in USA for native solutions.",
      image: "/banner/mobile.jpg",
      points: [
        {
          title: "Kotlin Expertise",
          description: "Mastering syntax and modern features like coroutines to write clean, efficient, and highly performant code.",
          iconName: "Zap"
        },
        {
          title: "Modern Development",
          description: "Combining Jetpack Compose for intuitive UIs with MVVM patterns for organized and maintainable codebases.",
          iconName: "Smartphone"
        },
        {
          title: "Quality Assurance",
          description: "Rigorous unit and UI testing combined with security audits to ensure a robust and trustworthy application.",
          iconName: "ShieldCheck"
        },
        {
          title: "Complete Support",
          description: "Ongoing maintenance and regular version updates to ensure smooth operation and compatibility with the latest Android APIs.",
          iconName: "LifeBuoy"
        },
      ],
    },
    techSection: {
      title: "Kotlin Android Technology Stack",
      description: "Modern Kotlin technologies for Android solutions",
      categories: [
        {
          category: "Core Technologies",
          iconName: "Code2",
          intro: "Concise and safe coding for modern Android:",
          items: [{ name: "Kotlin", desc: "Native power" }, { name: "Android SDK", desc: "Core APIs" }, { name: "Jetpack", desc: "Arch libraries" }, { name: "Compose UI", desc: "Declarative UI" }]
        },
        {
          category: "Architecture Components",
          iconName: "Layers",
          intro: "Enhancing app structure and lifecycle management:",
          items: [{ name: "ViewModel", desc: "State management" }, { name: "LiveData", desc: "Reactive updates" }, { name: "Room", desc: "Local storage" }, { name: "Navigation", desc: "Seamless flow" }]
        },
        {
          category: "Data & Storage",
          iconName: "Database",
          intro: "Flexible options for secure data management:",
          items: [{ name: "Room DB", desc: "Safer SQL access" }, { name: "DataStore", desc: "Async storage" }, { name: "SQLite", desc: "Relational DB" }, { name: "Firebase", desc: "Cloud sync" }]
        },
        {
          category: "Testing & Tools",
          iconName: "Settings",
          intro: "Powerful tools for quality and debugging:",
          items: [{ name: "JUnit", desc: "Logic testing" }, { name: "Espresso", desc: "UI automation" }, { name: "Mockito", desc: "Mocking tools" }, { name: "Android Studio", desc: "Official IDE" }]
        },
      ],
    },
  },
  "graphic-design": {
    title: "Professional Graphic Design Services",
    subtitle: "Visual Excellence",
    bannerDescription: "Transform your brand with stunning visual solutions. Leading graphic design company in USA delivering creative excellence across digital and print media.",
    bannerImage: "/services/graphic1.png",
    imagePosition:"24%",
    sectionTitle: "Creative Visual Storytelling",
    sectionDescription: "Blending artistic skill with strategic thinking to create impactful designs that resonate with your audience.",
    metaTitle: "Professional Graphic Design Services | Visual Excellence",
    metaDescription: "Transform your brand with stunning visual solutions. Delivering creative excellence across digital and print media.",
    cards: [
      { title: "Brand Identity Design", description: "Creating unique and memorable brand identities that communicate your brand's values and personality.", image: "/services/web1.png" },
      { title: "Logo Design", description: "Developing custom logos that are visually appealing, scalable, and reflective of your brand's essence.", image: "/services/graphic1.png" },
      { title: "Marketing Materials", description: "Designing high-quality marketing materials such as brochures, flyers, and presentations to support your business goals.", image: "/services/mobile1.png" },
      { title: "Digital & Print Media", description: "Creating designs for both digital and print platforms, ensuring brand consistency across all touchpoints.", image: "/services/uiux1.png" },
    ],
    profSection: {
      title: "Why Choose Our Graphic Design Services?",
      description: "Partner with a professional graphic design company that delivers creative and impactful visual solutions.",
      image: "/banner/motion.jpg",
      points: [
        {
          title: "Creative Excellence",
          description: "Infusing each project with innovative ideas and artistic skill to deliver visually compelling designs that leave a lasting impression.",
          iconName: "Palette"
        },
        {
          title: "Brand-Focused",
          description: "Tailoring designs to reflect your brand identity and ensuring every visual element reinforces your business goals.",
          iconName: "Target"
        },
        {
          title: "Timely Delivery",
          description: "Prioritizing fast turnaround times and efficient workflows without sacrificing quality or attention to detail.",
          iconName: "Clock"
        },
        {
          title: "Affordable Solutions",
          description: "Offering competitive pricing for high-quality designs that fit your budget while maintaining professional standards.",
          iconName: "DollarSign"
        },
      ],
    },
    techSection: {
      title: "Graphic Design Tools & Technologies",
      description: "We use industry-leading design software and tools to create professional, high-quality visual content.",
      categories: [
        {
          category: "Design Software",
          iconName: "PenTool",
          intro: "Expertise in the industry-standard creative suite:",
          items: [{ name: "Photoshop", desc: "Image editing" }, { name: "Illustrator", desc: "Vector art" }, { name: "InDesign", desc: "Layout design" }, { name: "After Effects", desc: "Motion graphics" }]
        },
        {
          category: "3D Design & Rendering",
          iconName: "Box",
          intro: "Bringing concepts to life with powerful 3D tools:",
          items: [{ name: "Cinema 4D", desc: "3D modeling" }, { name: "Blender", desc: "Animation" }, { name: "V-Ray", desc: "High-end render" }, { name: "KeyShot", desc: "Product viz" }]
        },
        {
          category: "Collaboration",
          iconName: "Users",
          intro: "Streamlining the creative process and handoff:",
          items: [{ name: "Figma", desc: "Digital design" }, { name: "Sketch", desc: "Vector UI" }, { name: "InVision", desc: "Prototyping" }, { name: "Zeplin", desc: "Dev handoff" }]
        },
        {
          category: "Color & Typography",
          iconName: "Type",
          intro: "Precise visual harmony and typography:",
          items: [{ name: "Pantone", desc: "Color systems" }, { name: "Adobe Color", desc: "Palettes" }, { name: "Google Fonts", desc: "Web type" }, { name: "Adobe Fonts", desc: "Pro typefaces" }]
        },
      ],
    },
  },
  "brand-identity-and-logo-design": {
    title: "Professional Brand Identity & Logo Design",
    subtitle: "Brand Excellence",
    bannerDescription: "Create a lasting impression with a unique and powerful brand identity. Leading branding agency in USA delivering strategic logo design and comprehensive brand systems.",
    bannerImage: "/banner/7.jpg",
    imagePosition:"08%",
    sectionTitle: "Strategic Brand Identity",
    sectionDescription: "We build unified and scalable brand identities that guide growth and ensure consistent communication across all touchpoints.",
    metaTitle: "Professional Brand Identity & Logo Design | Inspro Software",
    metaDescription: "Create a lasting impression with a unique and powerful brand identity. Delivering strategic logo design and brand systems.",
    cards: [
      { title: "Memorable Logo Design", description: "Developing custom logos that are visually appealing, scalable, and reflective of your brand's essence.", image: "/services/web1.png" },
      { title: "Complete Brand Identity Systems", description: "Creating unique and memorable brand identities that communicate your brand's values and personality.", image: "/services/graphic1.png" },
      { title: "Responsive Branding Solutions", description: "Designing high-quality marketing materials such as brochures, flyers, and presentations to support your business goals.", image: "/services/mobile1.png" },
      { title: "Professional Brand Strategy", description: "Creating designs for both digital and print platforms, ensuring brand consistency across all touchpoints.", image: "/services/uiux1.png" },
    ],
    profSection: {
      title: "Strategic Brand Partners",
      description: "We combine strategic thinking with exceptional design execution to build world-class brand identities.",
      image: "/banner/brand.jpg",
      points: [
        {
          title: "Strategic Foundation",
          description: "Guiding brand growth through market research, competitive positioning, and clear messaging frameworks.",
          iconName: "Target"
        },
        {
          title: "Design Excellence",
          description: "Creating distinct brand presence through custom typography, unique color systems, and responsive logos.",
          iconName: "Palette"
        },
        {
          title: "Comprehensive Systems",
          description: "Ensuring a unified and scalable identity with primary/secondary logos, icon systems, and style guides.",
          iconName: "Layers"
        },
        {
          title: "Implementation Ready",
          description: "Optimized print/digital files and templates to ensure a smooth rollout and consistent brand application.",
          iconName: "Rocket"
        },
      ],
    },
    techSection: {
      title: "Brand Transformations",
      description: "Creating lasting impact through strategic branding and visual refreshes",
      categories: [
        {
          category: "Startup Branding",
          iconName: "Zap",
          intro: "Establishing a strong foundation for growth:",
          items: [{ name: "Identity System", desc: "Logos & colors" }, { name: "Messaging", desc: "Core narratives" }, { name: "Launch Collateral", desc: "Professional assets" }, { name: "Pitch Decks", desc: "Investor ready" }]
        },
        {
          category: "Corporate Rebrand",
          iconName: "RefreshCw",
          intro: "Revitalizing identity to align with new goals:",
          items: [{ name: "Brand Audit", desc: "Strength assessment" }, { name: "Visual Refresh", desc: "Modern look" }, { name: "Identity Update", desc: "Cohesive design" }, { name: "Implementation", desc: "Smooth transition" }]
        },
        {
          category: "Product Branding",
          iconName: "Box",
          intro: "Creating a distinct presence for offerings:",
          items: [{ name: "Product Naming", desc: "Memorable identity" }, { name: "Visual Identity", desc: "Values & personality" }, { name: "Packaging", desc: "Shelf appeal" }, { name: "Value Props", desc: "Customer attract" }]
        },
        {
          category: "Brand Extension",
          iconName: "TrendingUp",
          intro: "Leveraging parent strength for new markets:",
          items: [{ name: "Sub-branding", desc: "Targeted identity" }, { name: "Architecure", desc: "Brand relationships" }, { name: "Consistency", desc: "Parent alignment" }, { name: "Market Growth", desc: "Scale reach" }]
        },
      ],
    },
  },
  "product-design-assets": {
    title: "Professional Product Design Assets",
    subtitle: "Design Systems",
    bannerDescription: "Create premium product assets that elevate your brand. Leading design company in USA delivering comprehensive asset libraries and animation solutions.",
    bannerImage: "/services/graphic1.png",
    imagePosition:"24%",
    sectionTitle: "Unified Product Assets",
    sectionDescription: "We deliver high-quality, efficient, and maintainable digital assets that ensure a consistent brand experience across all platforms.",
    metaTitle: "Professional Product Design Assets | Design Systems",
    metaDescription: "Create premium product assets that elevate your brand. Delivering comprehensive asset libraries and animation solutions.",
    cards: [
      { title: "Premium Asset Creation", description: "Delivering high-quality, efficient, and maintainable digital assets that ensure a consistent brand experience across all platforms.", image: "/services/web1.png" },
      { title: "Efficient Asset Management", description: "Creating unique and memorable brand identities that communicate your brand's values and personality.", image: "/services/graphic1.png" },
      { title: "Responsive Design Systems", description: "Designing high-quality marketing materials such as brochures, flyers, and presentations to support your business goals.", image: "/services/mobile1.png" },
      { title: "Professional Asset Strategy", description: "Creating designs for both digital and print platforms, ensuring brand consistency across all touchpoints.", image: "/services/uiux1.png" },
    ],
    profSection: {
      title: "Why Choose Our Design Asset Services",
      description: "Partner with design experts for premium product assets that elevate your brand and ensure consistency.",
      image: "/banner/ui.jpg",
      points: [
        {
          title: "Brand Consistency",
          description: "Ensuring a unified presence across touchpoints through standardized components and clear visual guidelines.",
          iconName: "Layers"
        },
        {
          title: "Technical Excellence",
          description: "Optimized, performance-focused assets that reduce load times and adapt seamlessly to various screen sizes.",
          iconName: "Cpu"
        },
        {
          title: "Animation Expertise",
          description: "Bringing apps to life with smooth transitions and polished animations that enhance user flow and capture attention.",
          iconName: "Play"
        },
        {
          title: "Complete Asset Package",
          description: "Full libraries with logos, icons, and graphics, accompanied by detailed usage documentation and implementation guides.",
          iconName: "Package"
        },
      ],
    },
    techSection: {
      title: "Product Asset Technologies",
      description: "Modern tools and formats for high-performance design assets",
      categories: [
        {
          category: "Vector & Graphics",
          iconName: "Palette",
          intro: "Lightweight and scalable visual elements:",
          items: [{ name: "SVG", desc: "Scalable vector" }, { name: "WebP", desc: "Optimized raster" }, { name: "AVIF", desc: "Next-gen compression" }, { name: "Icon Fonts", desc: "Scalable icons" }]
        },
        {
          category: "Motion & Animation",
          iconName: "Zap",
          intro: "Polished animations for interactive experiences:",
          items: [{ name: "Lottie", desc: "JSON animations" }, { name: "Rive", desc: "Interactive motion" }, { name: "GSAP", desc: "High-perf web" }, { name: "CSS Motion", desc: "Native transitions" }]
        },
        {
          category: "System Documentation",
          iconName: "FileText",
          intro: "Centralized rules for brand consistency:",
          items: [{ name: "Storybook", desc: "Component UI" }, { name: "Zeroheight", desc: "Style guides" }, { name: "Figma Libraries", desc: "Design sources" }, { name: "Docusaurus", desc: "Dev docs" }]
        },
        {
          category: "Asset Delivery",
          iconName: "Globe",
          intro: "Ensuring fast and reliable asset access:",
          items: [{ name: "CDN", desc: "Global edge" }, { name: "Optimization", desc: "Auto-compression" }, { name: "Asset Pipelines", desc: "Build automation" }, { name: "Cloudinary", desc: "Dynamic media" }]
        },
      ],
    },
  },
  "marketing-design": {
    title: "Professional Marketing Design Services",
    subtitle: "Strategic Results",
    bannerDescription: "Drive engagement and conversions with strategic visual solutions. Leading marketing design company in USA delivering impactful results across digital and print.",
    bannerImage: "/services/marketing1.png",
    imagePosition:"13%",
    sectionTitle: "Impactful Marketing Design",
    sectionDescription: "We blend creative storytelling with data-driven strategy to turn your marketing goals into measurable business success.",
    metaTitle: "Professional Marketing Design Services | Strategic Results",
    metaDescription: "Drive engagement and conversions with strategic visual solutions. Delivering impactful results across digital and print.",
    cards: [
      { title: "Strategic Campaign Design", description: "Creating cohesive visual campaigns across digital and print channels that reinforce messaging and drive conversions.", image: "/services/web1.png" },
      { title: "Performance-Driven Design", description: "Developing designs optimized for engagement and conversions, supported by data-driven insights and A/B testing.", image: "/services/graphic1.png" },
      { title: "Multi-Platform Content Creation", description: "Designing high-quality marketing materials such as brochures, flyers, and presentations to support your business goals.", image: "/services/mobile1.png" },
      { title: "End-to-End Marketing Support", description: "Creating designs for both digital and print platforms, ensuring brand consistency across all touchpoints.", image: "/services/uiux1.png" },
    ],
    profSection: {
      title: "Why Choose Our Marketing Design Services",
      description: "Partner with design experts who understand marketing strategy and business goals for impactful results.",
      image: "/banner/52.jpg",
      points: [
        {
          title: "Strategic Approach",
          description: "Goal-oriented design that aligns visuals and functionality with clear business objectives and conversion focus.",
          iconName: "Target"
        },
        {
          title: "Visual Storytelling",
          description: "Communicating ideas powerfully through brand narratives and data storytelling that creates emotional connections.",
          iconName: "MessageSquare"
        },
        {
          title: "Technical Excellence",
          description: "Polished, efficient designs ready for any platform, from high-quality print files to optimized digital responsive layouts.",
          iconName: "Activity"
        },
        {
          title: "Full-Service Support",
          description: "Covering every stage from content strategy and copywriting to implementation guidance and design systems.",
          iconName: "Settings"
        },
      ],
    },
    techSection: {
      title: "Marketing Technology Stack",
      description: "Integrated tools for high-impact marketing campaigns",
      categories: [
        {
          category: "Campaign Tools",
          iconName: "Mail",
          intro: "Automating and managing cross-channel reach:",
          items: [{ name: "HubSpot", desc: "CRM & Inbound" }, { name: "Mailchimp", desc: "Email marketing" }, { name: "ActiveCampaign", desc: "Automation" }, { name: "Klaviyo", desc: "E-comm focus" }]
        },
        {
          category: "Ad Platforms",
          iconName: "Megaphone",
          intro: "Targeted design for high-conversion ads:",
          items: [{ name: "Google Ads", desc: "Search & Display" }, { name: "Meta Ads", desc: "Social reach" }, { name: "LinkedIn Ads", desc: "B2B targeting" }, { name: "TikTok Ads", desc: "Video focus" }]
        },
        {
          category: "Analytics & Data",
          iconName: "BarChart",
          intro: "Measuring performance and user behavior:",
          items: [{ name: "GA4", desc: "Web analytics" }, { name: "Hotjar", desc: "User insights" }, { name: "Tableau", desc: "Data viz" }, { name: "Mixpanel", desc: "Product events" }]
        },
        {
          category: "Creative Software",
          iconName: "Palette",
          intro: "Crafting visual assets for every channel:",
          items: [{ name: "Adobe CC", desc: "Pro design" }, { name: "Canva", desc: "Rapid creation" }, { name: "Figma", desc: "Ad layouts" }, { name: "After Effects", desc: "Ad motion" }]
        },
      ],
    },
  },
  "motion-and-interaction": {
    title: "Professional Motion & Interaction Design",
    subtitle: "Dynamic Experiences",
    bannerDescription: "Bring your digital products to life with purposeful motion. Leading motion design company in USA delivering high-performance animations and interactive experiences.",
    bannerImage: "/banner/21.jpg",
    imagePosition: "60%",
    sectionTitle: "Purposeful Motion Design",
    sectionDescription: "We craft meaningful animations that guide users, reinforce brand identity, and elevate the overall interactive experience.",
    metaTitle: "Professional Motion & Interfaction Design | Dynamic Experiences",
    metaDescription: "Bring your digital products to life with purposeful motion. Delivering high-performance animations and interactive experiences.",
    cards: [
      { title: "Engaging Animated Videos", description: "Creating captivating animations that tell your brand story and communicate complex ideas in a visually engaging way.", image: "/services/web1.png" },
      { title: "Micro-Interactions", description: "Designing subtle animations that enhance user engagement and provide visual feedback for every interaction.", image: "/services/graphic1.png" },
      { title: "Interactive Animations", description: "Developing immersive animations that respond to user input, creating dynamic and personalized experiences.", image: "/services/mobile1.png" },
      { title: "Brand Animation Systems", description: "Creating comprehensive animation systems that maintain brand consistency across all platforms and touchpoints.", image: "/services/uiux1.png" },
    ],
    profSection: {
      title: "Why Choose Our Motion Design Services",
      description: "Partner with motion experts who understand user experience and technical implementation for high-impact results.",
      image: "/banner/motion.jpg",
      points: [
        {
          title: "Purpose-Driven Animation",
          description: "Adding meaningful motion that guides users and delights without distraction, prioritized for high performance.",
          iconName: "Play"
        },
        {
          title: "Technical Excellence",
          description: "Ensuring efficient, compatible, and reliable assets with optimized file sizes for cross-platform support.",
          iconName: "Activity"
        },
        {
          title: "Creative Innovation",
          description: "Applying modern techniques and visual storytelling to communicate messages clearly and foster emotional connections.",
          iconName: "Lightbulb"
        },
        {
          title: "Full-Service Support",
          description: "Seamless integration from strategy and implementation guides to developer handoff and ongoing optimization.",
          iconName: "RefreshCw"
        },
      ],
    },
    techSection: {
      title: "Motion & Interaction Tech Stack",
      description: "Modern tools for high-performance digital motion",
      categories: [
        {
          category: "UI Motion",
          iconName: "Zap",
          intro: "Polished animations for web and mobile interfaces:",
          items: [{ name: "Framer Motion", desc: "React animations" }, { name: "GSAP", desc: "High-perf web" }, { name: "CSS/Canvas", desc: "Native motion" }, { name: "Three.js", desc: "3D interactions" }]
        },
        {
          category: "Interaction Design",
          iconName: "Smartphone",
          intro: "Prototyping complex user behaviors:",
          items: [{ name: "ProtoPie", desc: "Advanced logic" }, { name: "Rive", desc: "Interactive vector" }, { name: "Principle", desc: "UI transitions" }, { name: "After Effects", desc: "Visual effects" }]
        },
        {
          category: "Code Integration",
          iconName: "Code2",
          intro: "Seamlessly translating motion into production:",
          items: [{ name: "Lottie", desc: "JSON animations" }, { name: "SVGA", desc: "Scalable motion" }, { name: "Animated SVG", desc: "Web native" }, { name: "Engine SDKs", desc: "Direct runtime" }]
        },
        {
          category: "Performance",
          iconName: "BarChart",
          intro: "Optimizing for speed and responsiveness:",
          items: [{ name: "File Optm", desc: "Size reduction" }, { name: "Render Perf", desc: "Frame stability" }, { name: "Asset Pipelines", desc: "Auto-export" }, { name: "Testing", desc: "Cross-device QA" }]
        },
      ],
    },
  },
  "brochure-design": {
    title: "Professional Brochure Design Services",
    subtitle: "Print Excellence",
    bannerDescription: "Capture attention with professionally designed brochures that tell your brand story. Leading design company in USA delivering creative excellence across print and digital formats.",
    bannerImage: "/services/graphic1.png",
    imagePosition: "24%",
    sectionTitle: "Impactful Brochure Design",
    sectionDescription: "We blend professional layout design with powerful storytelling to create brochures that engage your audience and drive results.",
    metaTitle: "Professional Brochure Design Services | Print Excellence",
    metaDescription: "Capture attention with professionally designed brochures that tell your brand story. Delivering creative excellence across print and digital formats.",
    cards: [
      { title: "Stunning Brochure Design", description: "Creating visually captivating brochures that effectively communicate your brand message and value proposition.", image: "/services/web1.png" },
      { title: "Comprehensive Marketing Materials", description: "Developing high-quality marketing materials such as brochures, flyers, and presentations to support your business goals.", image: "/services/graphic1.png" },
      { title: "Professional Brochure Design", description: "Designing high-quality marketing materials such as brochures, flyers, and presentations to support your business goals.", image: "/services/mobile1.png" },
      { title: "End-to-End Brochure Design Services", description: "Creating comprehensive brochure designs that cover concept development, layout, printing, and distribution.", image: "/services/uiux1.png" },
    ],
    profSection: {
      title: "Why Choose Our Brochure Design Services",
      description: "Partner with design experts who understand effective marketing communication and high-quality print production.",
      image: "/banner/ui.jpg",
      points: [
        {
          title: "Strategic Approach",
          description: "Integrating marketing goals with brand consistency to create targeted, conversion-oriented campaign materials.",
          iconName: "BookOpen"
        },
        {
          title: "Creative Excellence",
          description: "Combining professional design with powerful visual storytelling and compelling layouts that enhance message clarity.",
          iconName: "Palette"
        },
        {
          title: "Content Expertise",
          description: "Ensuring every word supports impact and engagement through persuasive copy and strong information hierarchy.",
          iconName: "FileText"
        },
        {
          title: "Full-Service Support",
          description: "Concept to final delivery including print coordination, digital optimization, and support for multiple formats.",
          iconName: "Settings"
        },
      ],
    },
    techSection: {
      title: "Brochure Design Tech Stack",
      description: "Industry-leading tools for professional print and digital brochures",
      categories: [
        {
          category: "Layout & Typography",
          iconName: "Layout",
          intro: "Creating structured and readable designs:",
          items: [{ name: "InDesign", desc: "Industry standard" }, { name: "Typography", desc: "Hierarchy & style" }, { name: "Grid Systems", desc: "Perfect alignment" }, { name: "Style Sheets", desc: "Consistency" }]
        },
        {
          category: "Print Production",
          iconName: "Printer",
          intro: "Technical specs for high-quality output:",
          items: [{ name: "Color CMYK", desc: "Accurate print" }, { name: "Bleed & Crop", desc: "Production ready" }, { name: "Paper Selection", desc: "Tactile quality" }, { name: "Finishing", desc: "Coats & folds" }]
        },
        {
          category: "Digital Distribution",
          iconName: "Globe",
          intro: "Optimizing for screen and web use:",
          items: [{ name: "Interactive PDF", desc: "Clickable links" }, { name: "Digital Flipbook", desc: "Online reading" }, { name: "Web Assets", desc: "Screen optimized" }, { name: "Asset Libraries", desc: "Reusable parts" }]
        },
        {
          category: "Creative Assets",
          iconName: "PenTool",
          intro: "Crafting unique visual elements:",
          items: [{ name: "Illustrator", desc: "Vector graphics" }, { name: "Photoshop", desc: "Image editing" }, { name: "Custom Icons", desc: "Brand specific" }, { name: "Photography", desc: "Visual story" }]
        },
      ],
    },
  },
  "seo-services": {
    title: "Professional SEO Services",
    subtitle: "Organic Growth",
    bannerDescription: "Drive organic growth and dominate search results with proven SEO strategies. Leading SEO company in USA delivering measurable results through data-driven optimization.",
    bannerImage: "/banner/46.jpg",
    imagePosition: "33%",
    sectionTitle: "Strategic SEO Optimization",
    sectionDescription: "We combine deep algorithm knowledge with data-driven insights to improve your search visibility and drive high-quality traffic.",
    metaTitle: "Professional SEO Services | Organic Growth",
    metaDescription: "Drive organic growth and dominate search results with proven SEO strategies. Delivering measurable results through data-driven optimization.",
    cards: [
      { title: "Comprehensive SEO Audits", description: "In-depth analysis of websites to identify technical issues, content gaps, and optimization opportunities.", image: "/services/web1.png" },
      { title: "On-Page Optimization", description: "Strategic optimization of website content, structure, and internal linking to improve search engine rankings.", image: "/services/graphic1.png" },
      { title: "Link Building Strategies", description: "Developing high-quality backlinks through natural and ethical methods to enhance website authority and visibility.", image: "/services/mobile1.png" },
      { title: "SEO Performance Tracking", description: "Continuous monitoring of website performance and SEO metrics to ensure sustainable growth and improvement.", image: "/services/uiux1.png" },
    ],
    profSection: {
      title: "Why Choose Our SEO Services",
      description: "Partner with SEO experts who deliver measurable results through proven, data-driven strategies.",
      image: "/banner/69.jpg",
      points: [
        {
          title: "Data-Driven Approach",
          description: "Comprehensive audits and analytics integration to identify gaps and guide continuous improvement.",
          iconName: "BarChart"
        },
        {
          title: "Industry Expertise",
          description: "Vertical specialization and deep algorithm knowledge to maintain performance and credibility.",
          iconName: "Target"
        },
        {
          title: "Transparent Reporting",
          description: "Clear insights into performance through custom dashboards and regular updates on traffic and rankings.",
          iconName: "Search"
        },
      ],
    },
    techSection: {
      title: "SEO Technology Stack",
      description: "Industry-leading tools for comprehensive search engine optimization",
      categories: [
        {
          category: "Analytics & Tracking",
          iconName: "Activity",
          intro: "Measuring performance and user behavior:",
          items: [{ name: "GA4", desc: "Web analytics" }, { name: "Search Console", desc: "Index monitoring" }, { name: "GTM", desc: "Tag management" }, { name: "Looker Studio", desc: "Visual reports" }]
        },
        {
          category: "Technical SEO",
          iconName: "Settings",
          intro: "Optimizing site architecture and speed:",
          items: [{ name: "Screaming Frog", desc: "Site crawling" }, { name: "PageSpeed", desc: "Perf audits" }, { name: "Schema.org", desc: "Structured data" }, { name: "Sitebulb", desc: "Tech audits" }]
        },
        {
          category: "Keyword & Rank",
          iconName: "TrendingUp",
          intro: "Tracking visibility and opportunities:",
          items: [{ name: "Ahrefs", desc: "Backlink data" }, { name: "SEMrush", desc: "Market research" }, { name: "Keyword Gap", desc: "Competitor intel" }, { name: "Rank Tracking", desc: "SERP monitoring" }]
        },
        {
          category: "Content & On-Page",
          iconName: "FileText",
          intro: "Improving relevance and engagement:",
          items: [{ name: "SurferSEO", desc: "Content audits" }, { name: "Yoast SEO", desc: "CMS integration" }, { name: "Clearscope", desc: "Entity mapping" }, { name: "MarketMuse", desc: "Topic research" }]
        },
      ],
    },
  },
  "local-seo-services": {
    title: "Professional Local SEO Services",
    subtitle: "Regional Dominance",
    bannerDescription: "Dominate your local market and attract nearby customers with strategic Local SEO. Leading optimization company in USA delivering regional search excellence.",
    bannerImage: "/banner/49.jpg",
    imagePosition: "36%",
    sectionTitle: "Localized Search Optimization",
    sectionDescription: "We specialize in connecting your business with the local community by optimizing your presence for hyper-local search intent.",
    metaTitle: "Professional Local SEO Services | Regional Dominance",
    metaDescription: "Dominate your local market and attract nearby customers with strategic Local SEO. Delivering regional search excellence.",
    cards: [
      { title: "Hyper-Local SEO Strategies", description: "Targeting specific geographic areas with localized content and optimization techniques to attract nearby customers.", image: "/services/web1.png" },
      { title: "Google Business Profile Optimization", description: "Creating and optimizing Google Business Profile listings to improve local visibility and search rankings.", image: "/services/graphic1.png" },
      { title: "Local Citation Management", description: "Managing business citations across directories and platforms to enhance local credibility and search visibility.", image: "/services/mobile1.png" },
      { title: "Location-Based Content Creation", description: "Developing localized website content and landing pages that resonate with target audiences in specific geographic regions.", image: "/services/uiux1.png" },
    ],
    profSection: {
      title: "Why Choose Our Local SEO Services",
      description: "Partner with local search experts who deliver measurable results and help you dominate regional search rankings.",
      image: "/banner/seo.jpg",
      points: [
        {
          title: "Local Search Expertise",
          description: "Dominating regional results through deep GBP optimization, citation management, and proximity factor mastery.",
          iconName: "MapPin"
        },
        {
          title: "Multi-Location Management",
          description: "Scalable strategies for multiple sites, ensuring consistent branding and engagement across all service regions.",
          iconName: "Globe"
        },
        {
          title: "Transparent Reporting",
          description: "Clear insights into local performance, tracking Google Maps exposure, call tracking, and direction requests.",
          iconName: "BarChart"
        },
        {
          title: "Sustainable Results",
          description: "Ethical, white-hat techniques focused on building long-term authority and a protected online reputation.",
          iconName: "ShieldCheck"
        },
      ],
    },
    techSection: {
      title: "Our Local SEO Methodology",
      description: "Data-driven approach to local search visibility and regional impact",
      categories: [
        {
          category: "Research & Analysis",
          iconName: "Search",
          intro: "Laying the foundation for local success:",
          items: [{ name: "Competitor Analysis", desc: "Identify gaps" }, { name: "Area Mapping", desc: "Target regions" }, { name: "Local Keywords", desc: "Trend research" }, { name: "Local Audit", desc: "Perf check" }]
        },
        {
          category: "Strategy Development",
          iconName: "Target",
          intro: "Focused and results-driven planning:",
          items: [{ name: "Custom Roadmap", desc: "Goal tailored" }, { name: "Priority Mapping", desc: "High impact first" }, { name: "Resource Planning", desc: "Efficiency" }, { name: "Timeline", desc: "Progress tracking" }]
        },
        {
          category: "Implementation",
          iconName: "Settings",
          intro: "Putting the local strategy into action:",
          items: [{ name: "GBP Optimization", desc: "Max visibility" }, { name: "Citation Building", desc: "Presence strength" }, { name: "Content Localization", desc: "Region relevance" }, { name: "Review Strategy", desc: "Boost credibility" }]
        },
        {
          category: "Monitoring & Refinement",
          iconName: "Activity",
          intro: "Ensuring sustained local search growth:",
          items: [{ name: "Rank Tracking", desc: "Visibility check" }, { name: "Traffic Analysis", desc: "Behavior insights" }, { name: "Conversion Monitor", desc: "ROI tracking" }, { name: "Ongoing Optm", desc: "Trend adapt" }]
        },
      ],
    },
  },
  "ppc-services": {
    title: "Professional PPC Management Services",
    subtitle: "Paid Search Excellence",
    bannerDescription: "Maximize your ROI and drive instant traffic with strategic Pay-Per-Click campaigns. Leading PPC agency in USA delivering data-driven advertising excellence.",
    bannerImage: "/banner/47.jpg",
    imagePosition: "33%",
    sectionTitle: "Data-Driven Ad Management",
    sectionDescription: "We specialize in building high-conversion paid search and social campaigns that deliver measurable returns and scale your business growth.",
    metaTitle: "Professional PPC Management Services | Paid Search",
    metaDescription: "Maximize your ROI and drive instant traffic with strategic Pay-Per-Click campaigns. Delivering data-driven advertising excellence.",
    cards: [
      { title: "Strategic Campaign Planning", description: "Developing comprehensive PPC strategies aligned with business goals, target audiences, and performance objectives.", image: "/services/web1.png" },
      { title: "High-Converting Ad Creation", description: "Creating compelling ad copy, visuals, and landing pages optimized for maximum engagement and conversion rates.", image: "/services/graphic1.png" },
      { title: "Multi-Platform Ad Management", description: "Managing PPC campaigns across Google Ads, social media platforms, and other advertising channels for comprehensive reach.", image: "/services/mobile1.png" },
      { title: "Performance Monitoring & Optimization", description: "Continuously tracking campaign performance, analyzing results, and implementing optimizations to maximize ROI and achieve business goals.", image: "/services/uiux1.png" },
    ],
    profSection: {
      title: "Why Choose Our PPC Services",
      description: "Partner with paid search experts who deliver measurable ROI through strategic and performance-focused campaigns.",
      image: "/banner/seo.jpg",
      points: [
        {
          title: "ROI-Focused Approach",
          description: "Ensuring measurable returns through ROAS tracking, conversion focus, and rigorous budget optimization.",
          iconName: "Target"
        },
        {
          title: "Platform Expertise",
          description: "Proficiency across Google Ads, Meta, LinkedIn, and programmatic buying for strategic campaign execution.",
          iconName: "BarChart"
        },
        {
          title: "Transparent Reporting",
          description: "Clear insights through custom dashboards, attribution modeling, and strategy adjustments based on data.",
          iconName: "Settings"
        },
        {
          title: "Continuous Optimization",
          description: "Sustained performance through A/B testing, audience refinement, and proactive bid management.",
          iconName: "TrendingUp"
        },
      ],
    },
    techSection: {
      title: "PPC Technology Stack",
      description: "Integrated tools for high-performance paid advertising",
      categories: [
        {
          category: "Ad Platforms",
          iconName: "Megaphone",
          intro: "Reaching audiences where they are:",
          items: [{ name: "Google Ads", desc: "Search & Display" }, { name: "Meta Ads", desc: "Social Reach" }, { name: "LinkedIn Ads", desc: "B2B targeting" }, { name: "Microsoft Ads", desc: "Bing search" }]
        },
        {
          category: "Tracking & Attribution",
          iconName: "Activity",
          intro: "Measuring the path to conversion:",
          items: [{ name: "GA4", desc: "Event tracking" }, { name: "GTM", desc: "Tag management" }, { name: "CallRail", desc: "Call tracking" }, { name: "HubSpot", desc: "CRM sync" }]
        },
        {
          category: "Campaign Management",
          iconName: "Settings",
          intro: "Automation and optimization at scale:",
          items: [{ name: "WordStream", desc: "Ad management" }, { name: "Optmyzr", desc: "Automation" }, { name: "SpyFu", desc: "Competitor intel" }, { name: "SEMrush", desc: "Keyword research" }]
        },
        {
          category: "Creative & Landing",
          iconName: "Layout",
          intro: "Driving actions with high-quality assets:",
          items: [{ name: "Unbounce", desc: "Landing pages" }, { name: "Instapage", desc: "A/B testing" }, { name: "Canva Pro", desc: "Ad design" }, { name: "Adobe Express", desc: "Social assets" }]
        },
      ],
    },
  },
  "social-media-marketing": {
    title: "Professional Social Media Marketing",
    subtitle: "Brand Engagement",
    bannerDescription: "Build a powerful brand presence and engage your audience across all social platforms. Leading social media agency in USA delivering strategic content and community management.",
    bannerImage: "/banner/52.jpg",
    imagePosition: "36%",
    sectionTitle: "Strategic Social Growth",
    sectionDescription: "We specialize in creating brand-aligned content and managing active communities that drive authentic engagement and long-term loyalty.",
    metaTitle: "Professional Social Media Marketing | Brand Engagement",
    metaDescription: "Build a powerful brand presence and engage your audience across all social platforms. Delivering strategic content and community management.",
    cards: [
      { title: "Strategic Social Strategy", description: "Developing comprehensive social media strategies aligned with business goals and target audiences for maximum impact.", image: "/services/web1.png" },
      { title: "Engaging Content Creation", description: "Creating high-quality, brand-aligned content optimized for engagement and audience retention across platforms.", image: "/services/graphic1.png" },
      { title: "Community Management", description: "Building and nurturing active communities through responsive engagement and meaningful interactions with followers.", image: "/services/mobile1.png" },
      { title: "Performance Analytics & Optimization", description: "Continuously monitoring campaign performance, analyzing results, and implementing optimizations to maximize engagement and achieve business goals.", image: "/services/uiux1.png" },
    ],
    profSection: {
      title: "Why Choose Our Social Media Services",
      description: "Partner with social media experts who understand audience engagement and platform algorithms for maximum impact.",
      image: "/banner/social.jpg",
      points: [
        {
          title: "Strategic Approach",
          description: "Goal alignment and purposeful platform selection to reach audiences where they are most active with measurable outcomes.",
          iconName: "Target"
        },
        {
          title: "Creative Excellence",
          description: "Impactful, brand-aligned content featuring engaging visuals and professional video production for dynamic storytelling.",
          iconName: "Palette"
        },
        {
          title: "Data-Driven Decisions",
          description: "Smarter marketing through performance analytics, audience insights, and trend analysis to stay ahead of market shifts.",
          iconName: "Activity"
        },
        {
          title: "Comprehensive Management",
          description: "Consistently strong online presence through daily monitoring, community engagement, and proactive reputation building.",
          iconName: "Users"
        },
      ],
    },
    techSection: {
      title: "Social Media Tech Stack",
      description: "Powerful tools for community management and content at scale",
      categories: [
        {
          category: "Management Tools",
          iconName: "Share2",
          intro: "Scheduling and multi-platform coordination:",
          items: [{ name: "Sprout Social", desc: "Enterprise mgmt" }, { name: "Buffer", desc: "Easy scheduling" }, { name: "Hootsuite", desc: "Core monitoring" }, { name: "Later", desc: "Visual planning" }]
        },
        {
          category: "Creative & Video",
          iconName: "Video",
          intro: "Producing high-impact social assets:",
          items: [{ name: "Adobe Premiere", desc: "Pro video" }, { name: "Canva", desc: "Rapid design" }, { name: "CapCut", desc: "Social edits" }, { name: "Figma", desc: "Asset layouts" }]
        },
        {
          category: "Analytics & Trends",
          iconName: "BarChart",
          intro: "Measuring reach and identifying trends:",
          items: [{ name: "Brandwatch", desc: "Social listening" }, { name: "BuzzSumo", desc: "Trend research" }, { name: "Native Insights", desc: "Direct data" }, { name: "SocialBlade", desc: "Growth track" }]
        },
        {
          category: "Social Ad Platforms",
          iconName: "Zap",
          intro: "Targeted reach and paid social growth:",
          items: [{ name: "Meta Ads", desc: "FB & Insta" }, { name: "TikTok Ads", desc: "Viral reach" }, { name: "LinkedIn Ads", desc: "B2B reach" }, { name: "Twitter Ads", desc: "Real-time" }]
        },
      ],
    },
  },
  "email-marketing": {
    title: "Professional Email Marketing Services",
    subtitle: "Direct Engagement",
    bannerDescription: "Nurture leads and drive conversions with strategic email marketing. Leading optimization company in USA delivering personalized campaigns and automated workflows.",
    bannerImage: "/banner/33.jpg",
    imagePosition: "23%",
    sectionTitle: "Personalized Email Growth",
    sectionDescription: "We specialize in building automated, high-conversion email systems that deliver the right message to the right person at the right time.",
    metaTitle: "Professional Email Marketing Services | Direct Engagement",
    metaDescription: "Nurture leads and drive conversions with strategic email marketing. Delivering personalized campaigns and automated workflows.",
    cards: [
      { title: "Strategic Email Strategy", description: "Developing comprehensive email marketing strategies aligned with business goals, target audiences, and conversion objectives.", image: "/services/web1.png" },
      { title: "Engaging Campaign Creation", description: "Creating high-quality, brand-aligned email content optimized for engagement and conversion across platforms.", image: "/services/graphic1.png" },
      { title: "Community Management", description: "Building and nurturing active communities through responsive engagement and meaningful interactions with followers.", image: "/services/mobile1.png" },
      { title: "Performance Analytics & Optimization", description: "Continuously monitoring campaign performance, analyzing results, and implementing optimizations to maximize engagement and achieve business goals.", image: "/services/uiux1.png" },
    ],
    profSection: {
      title: "Why Choose Our Email Marketing Services",
      description: "Partner with email marketing experts who understand audience engagement and conversion optimization for long-term growth.",
      image: "/banner/53.jpg",
      points: [
        {
          title: "Strategic Approach",
          description: "Goal-oriented campaigns with customer journey mapping and segmentation strategy for personalized communication.",
          iconName: "Mail"
        },
        {
          title: "Creative Excellence",
          description: "Responsive designs with compelling copy and emotional visual storytelling to build trust and recognition.",
          iconName: "Palette"
        },
        {
          title: "Technical Expertise",
          description: "Mastering platforms to maximize deliverability and efficiency through skilled automation workflow setup.",
          iconName: "Settings"
        },
        {
          title: "Data-Driven Decisions",
          description: "Measuring success through performance analytics, behavior tracking, and continuous A/B testing optimization.",
          iconName: "Activity"
        },
      ],
    },
    techSection: {
      title: "Our Email Marketing Methodology",
      description: "Data-driven approach to email marketing success and campaign impact",
      categories: [
        {
          category: "Strategy & Planning",
          iconName: "Target",
          intro: "Laying the foundation for effective marketing:",
          items: [{ name: "Audience Analysis", desc: "Key demographics" }, { name: "Goal Setting", desc: "Measurable objectives" }, { name: "Campaign Mapping", desc: "Customer journey" }, { name: "Content Planning", desc: "Relevant messaging" }]
        },
        {
          category: "Design & Content",
          iconName: "Layout",
          intro: "Creating impactful and responsive campaigns:",
          items: [{ name: "Branded Designs", desc: "Visual consistency" }, { name: "Responsive Tmpl", desc: "All-device display" }, { name: "Compelling Copy", desc: "Drive action" }, { name: "CTA Optm", desc: "Fine-tune calls" }]
        },
        {
          category: "Automation & Delivery",
          iconName: "Zap",
          intro: "Ensuring timely and targeted communication:",
          items: [{ name: "Workflow Setup", desc: "Auto-sequences" }, { name: "Trigger Config", desc: "Behavior based" }, { name: "Timing Optm", desc: "Max engagement" }, { name: "Deliverability", desc: "Reliable inbox" }]
        },
        {
          category: "Analysis & Optimization",
          iconName: "BarChart",
          intro: "Driving success through data-driven decisions:",
          items: [{ name: "Perf Tracking", desc: "Open/Click rates" }, { name: "A/B Testing", desc: "Identify winners" }, { name: "Conversion Analysis", desc: "ROI tracking" }, { name: "Continuous Impr", desc: "Refine strategy" }]
        },
      ],
    },
  },
  "influencer-and-affiliated-marketing": {
    title: "Professional Influencer & Affiliate Marketing",
    subtitle: "Partnership Growth",
    bannerDescription: "Amplify your brand reach through strategic partnerships. Leading influencer agency in USA delivering authentic connections and measurable affiliate growth.",
    bannerImage: "/banner/46.jpg",
    imagePosition: "36%",
    sectionTitle: "Impactful Partnership Marketing",
    sectionDescription: "We connect your brand with the right voices and partners to build trust, drive authentic engagement, and deliver scalable growth.",
    metaTitle: "Professional Influencer & Affiliate Marketing | Partnership Growth",
    metaDescription: "Amplify your brand reach through strategic partnerships. Delivering authentic connections and measurable affiliate growth.",
    cards: [
      { title: "Strategic Influencer Selection", description: "Identifying and partnering with influencers whose audience demographics align perfectly with your brand values and target markets.", image: "/services/web1.png" },
      { title: "Authentic Content Creation", description: "Collaborating with influencers to create genuine, engaging content that resonates with their audience while promoting your brand naturally.", image: "/services/graphic1.png" },
      { title: "Performance Tracking & Analysis", description: "Continuously monitoring influencer and affiliate campaign performance, analyzing results, and optimizing strategies for maximum impact.", image: "/services/mobile1.png" },
      { title: "Affiliate Network Management", description: "Building and managing high-performance affiliate networks with streamlined tracking, commission management, and performance optimization.", image: "/services/uiux1.png" },
    ],
    profSection: {
      title: "Why Choose Our Partnership Marketing Services",
      description: "Partner with marketing experts who specialize in building authentic connections and high-performance affiliate networks.",
      image: "/banner/influencer.jpg",
      points: [
        {
          title: "Strategic Alignment",
          description: "Ensuring every partner and influencer aligns perfectly with your brand values and audience demographics.",
          iconName: "Users"
        },
        {
          title: "Verified Reach",
          description: "Vetting collaborators for authentic engagement and real influence to avoid bot traffic and ensure impact.",
          iconName: "Heart"
        },
        {
          title: "End-to-End Management",
          description: "From outreach and negotiation to contract management and content approval, we handle every detail.",
          iconName: "ShieldCheck"
        },
        {
          title: "Performance Tracking",
          description: "Measuring ROI and conversion attribution accurately across all partnership channels and campaigns.",
          iconName: "TrendingUp"
        },
      ],
    },
    techSection: {
      title: "Our Partnership Marketing Methodology",
      description: "Data-driven approach to influencer and affiliate success and scalable partnership impact",
      categories: [
        {
          category: "Research & Strategy",
          iconName: "Search",
          intro: "Laying the foundation for successful partnerships:",
          items: [{ name: "Audience Analysis", desc: "Target demographics" }, { name: "Partner ID", desc: "Brand alignment" }, { name: "Campaign Plan", desc: "Step-by-step roadmap" }, { name: "Goal Setting", desc: "Measurable targets" }]
        },
        {
          category: "Partner Management",
          iconName: "Users",
          intro: "Building and maintaining strong relationships:",
          items: [{ name: "Outreach & Neg", desc: "Fair agreements" }, { name: "Relation Building", desc: "Trust & collaboration" }, { name: "Contract Mgmt", desc: "Compliance & terms" }, { name: "Effective Comm", desc: "Ongoing alignment" }]
        },
        {
          category: "Campaign Execution",
          iconName: "Play",
          intro: "Putting the partnership strategy into action:",
          items: [{ name: "Content Collab", desc: "Impactful assets" }, { name: "Asset Dev", desc: "Visuals & copy" }, { name: "Tracking Setup", desc: "Monitor performance" }, { name: "Campaign Launch", desc: "Roll out strategy" }]
        },
        {
          category: "Analysis & Optimization",
          iconName: "BarChart",
          intro: "Ensuring sustained growth and impact:",
          items: [{ name: "Perf Tracking", desc: "Gauging effect" }, { name: "ROI Measurement", desc: "Financial returns" }, { name: "Strategy Refine", desc: "Improve tactics" }, { name: "Scaling Success", desc: "Maximize growth" }]
        },
      ],
    },
  },
};
































