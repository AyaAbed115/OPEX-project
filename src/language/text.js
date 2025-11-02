// src/data/texts.js
const texts = {
ar: {
    home: "الصفحة الرئيسية",
    services: "الخدمات",
    contact: "تواصل معنا",
    langBtn: "English",
    overview: `
    شركة <span class="font-bold text-[#cc5308]">OPEX</span> هي شركة سعودية متخصصة في التشغيل والصيانة، وتنفيذ المشاريع، والخدمات الصناعية. 
    نخدم عملاءنا في قطاعات التصنيع والطاقة والبنية التحتية، ونوفر حلولًا تعتمد على الموثوقية والسلامة والكفاءة.  
    <br /><br />
    تقوم فلسفتنا على المشاركة في المخاطر، والتنفيذ عالي الجودة، وتحقيق قيمة مستدامة.
    <br /><br />
    من المملكة العربية السعودية، تعمل 
    <span class="font-bold text-[#cc5308]">OPEX</span> بهيكل مرن وقابل للتوسع يخدم المملكة ودول الخليج، 
    مع تركيزنا المبدئي على القوى العاملة الصناعية في ينبع، مدعومة بفريق عمل كفء وشركاء استراتيجيين لتوفير المرونة والاستجابة السريعة.
`,
    vision: `أن نكون رواد عالميين في العمليات والخدمات الصناعية السعودية، مع دعم التنويع والمحتوى المحلي ورؤية 2030.`,

    mission: `أن نكون رواد عالميين في العمليات والخدمات الصناعية السعودية، مع دعم التنويع والمحتوى المحلي ورؤية 2030.`,

    coreValues: [
      "المشاركة في المخاطر: شراكات قائمة على النمو المشترك.",
      "الجودة: خدمات فوق المعايير العالمية ورؤية 2030.",
      "المرونة: استجابة سريعة لاحتياجات السوق.",
      "التكامل: حلول سلسلة قيمة شاملة.",
      "الاستدامة: عمليات متوافقة مع المبادرة الخضراء السعودية."
    ],
     servicesList: [
      {
        title: "العمليات والصيانة",
        description: "العمل الوقائي والتنبؤي والتصحيحي، وسلامة الأصول، والتجديدات.",
        features: [
          "الصيانة الوقائية",
          "الصيانة التنبؤية",
          "الصيانة التصحيحية",
          "سلامة الأصول",
          "التجديدات الدورية"
        ],
        icon: "🛠️"
      },
      {
        title: "دعم المشاريع",
        description: "القوى العاملة الماهرة، البناء متعدد التخصصات، خدمات الموقع، والتنظيف الثقيل.",
        features: [
          "القوى العاملة الماهرة",
          "البناء متعدد التخصصات",
          "خدمات الموقع",
          "التنظيف الثقيل",
          "إدارة المشاريع"
        ],
        icon: "🏗️"
      },
      {
        title: "سلسلة التوريد",
        description: "التوريد الفني، الأجزاء ثلاثية الأبعاد والنماذج الأولية، والدعم التأجيري/الأسطول.",
        features: [
          "التوريد الفني",
          "الأجزاء ثلاثية الأبعاد",
          "النماذج الأولية",
          "الدعم التأجيري",
          "إدارة الأسطول"
        ],
        icon: "📦"
      },
      {
        title: "الاستجابة السريعة والنشر",
        description:
          "جاهزية على مدار الساعة للإصلاحات الطارئة والإغلاق. فرق معتمدة للمواقع النائية أو عالية الخطورة. وحدات متنقلة للدعم والتنظيف في الموقع.",
        features: [
          "جاهزية 24/7",
          "الإصلاحات الطارئة",
          "فرق معتمدة",
          "المواقع النائية",
          "الوحدات المتنقلة"
        ],
        icon: "⚡"
      },
      {
        title: "إدارة المستودعات",
        description: "التصميم، التحكم في المخزون، السلامة، ولوحات تحكم مؤشرات الأداء.",
        features: [
          "تصميم المستودعات",
          "التحكم في المخزون",
          "أنظمة السلامة",
          "لوحات تحكم KPI",
        "التخزين الأمثل"
        ],
        icon: "🏭"
    }
    ],
    extraServices: [
    "التنظيف الصناعي",
    "الأعمال الميكانيكية",
    "خدمات صيانة المصانع",
    "أعمال اللحام",
    "الإيقاف والصيانة الشاملة",
    "تأجير المعدات",
    "توفير العمالة الماهرة",
    ],
    servicesNote: "جميع الخدمات تتبع رقابة صارمة على العمليات مع توثيق كامل للجودة (QA/QC)",
    whyOpexTitle: "لماذا أوبكس",
    whyOpexList: [
      {
        title: "توزيع المخاطر",
        description: "نظام الدفع مقابل النتائج مع تحقيق مكاسب متوافقة مع نجاح العميل."
      },
      {
        title: "الانضباط التشغيلي",
        description: "إدارة منظمة بمؤشرات أداء واضحة."
      },
      {
        title: "المواهب عند الطلب",
        description: "تعبئة سريعة للفرق المعتمدة من خلال الشركاء."
      },
      {
        title: "الجودة والسلامة أولاً",
        description: "إجراءات تشغيل قياسية تعتمد على معايير ISO مع عمليات تدقيق منتظمة."
      },
      {
        title: "قرارات تعتمد على البيانات",
        description: "لوحات معلومات للإنتاجية والتكلفة والصحة والسلامة."
      }
    ]
},
en: {
    home: "Home",
    services: "Services",
    contact: "Contact Us",
    langBtn: "العربية",
    overview: `
    <span class="font-bold text-[#cc5308]">OPEx Operation Solutions</span> 
    is a Saudi company specializing in Operations & Maintenance, Project Execution, and Industrial Services. 
    We serve clients in manufacturing, energy, and infrastructure, delivering solutions that are reliable, safe, and efficient.  
    <br /><br />
    Our philosophy is built on risk sharing, quality execution, and sustainable value creation.  
    <br /><br />
    From Saudi Arabia, OPEX operates with a scalable structure serving the KSA and GCC. 
    Our initial focus is on industrial manpower in Yanbu, supported by a lean team and 
    strategic partners for flexible capacity and rapid mobilization.
  `,
  vision: `To be a global leader in Saudi industrial operations and services, driving diversification, local content, and 2030 Vision.`,

    mission: `To be a global leader in Saudi industrial operations and services, driving diversification, local content, and Vision 2030.`,

    coreValues: [
      "Risk Sharing: Partnerships built on shared growth.",
      "Quality: Services above world & 2030 Vision norms.",
      "Flexibility: Quick response to market needs.",
      "Integration: End-to-end value chain solutions.",
      "Sustainability: Operations aligned with the Saudi Green Initiative."
    ],
    servicesList: [
      {
        title: "Operations & Maintenance",
        description: "Preventive, predictive, corrective work, asset integrity, and turnarounds.",
        features: [
          "Preventive Maintenance",
          "Predictive Maintenance",
          "Corrective Maintenance",
          "Asset Integrity",
          "Turnarounds"
        ],
        icon: "🛠️"
      },
      {
        title: "Project Support",
        description: "Skilled manpower, multi-discipline construction, site services, and heavy cleaning.",
        features: [
          "Skilled Manpower",
          "Multi-discipline Construction",
          "Site Services",
          "Heavy Cleaning",
          "Project Management"
        ],
        icon: "🏗️"
      },
      {
        title: "Supply Chain",
        description: "Technical procurement, 3D parts & prototyping, and rental/fleet support.",
        features: [
          "Technical Procurement",
          "3D Parts & Prototyping",
          "Rental Support",
          "Fleet Management",
          "Logistics"
        ],
        icon: "📦"
      },
      {
        title: "Rapid Response & Mobilization",
        description:
          "24/7 readiness for emergency repairs and shutdowns. Certified teams for remote or high-risk sites. Mobile units for on-site support and cleaning.",
        features: [
          "24/7 Readiness",
          "Emergency Repairs",
          "Certified Teams",
          "Remote Sites",
          "Mobile Units"
        ],
        icon: "⚡"
      },
      {
        title: "Warehouse Management",
        description: "Design, inventory control, safety, and KPI dashboards.",
        features: [
          "Warehouse Design",
          "Inventory Control",
          "Safety Systems",
          "KPI Dashboards",
          "Optimal Storage"
        ],
        icon: "🏭"
      }
    ], 
    extraServices: [
      "Industrial Cleaning",
      "Mechanical Work",
      "Plant Maintenance Service",
      "Welding Works",
      "Shutdown & Turnaround",
      "Rental Equipment Service",
      "Skilled Manpower Supply",
    ],
    servicesNote: "All services follow strict process control with full QA/QC documentation",
      whyOpexTitle: "Why OPEX",
    whyOpexList: [
      {
        title: "Risk Sharing",
        description: "Pay-by-Outcome and Gainshare aligned with client success."
      },
      {
        title: "Operational Discipline",
        description: "Structured management with clear KPIs."
      },
      {
        title: "Talent on Demand",
        description: "Rapid mobilization of certified crews through partners."
      },
      {
        title: "Quality & Safety First",
        description: "ISO-based SOPs with regular audits."
      },
      {
        title: "Data-Driven Decisions",
        description: "Dashboards for productivity, cost, and HSE."
      }
    ]
  },
};

export default texts;
