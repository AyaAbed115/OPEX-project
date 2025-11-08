// src/data/texts.js
const texts = {
ar: {
    home: "الصفحة الرئيسية",
    services: "الخدمات",
    contact: "تواصل معنا",
    langBtn: "English",
    mainTitle: "حلول تشغيلية وخدمات صناعية متخصصة",
    overview:`
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
    whyOpexTitle: "لماذا OPEX",
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
    ], 
    industriesTitle: "القطاعات التي نخدمها",
    industriesList: [
      "النفط والغاز / البتروكيماويات",
      "المعادن والتعدين",
      "الطاقة والمرافق",
      "التصنيع والمدن الصناعية",
      "البنية التحتية والخدمات البلدية"
    ],
    saudiVisionTitle: "التوافق مع رؤية السعودية",
saudiVisionList: [
  {
    title: "القيمة المحلية والوظائف",
    description: "نعطي الأولوية للمواهب السعودية والموردين المحليين.",
  },
  {
    title: "التنافسية الصناعية",
    description: "تشغيل وصيانة موثوقة تعزز الإنتاجية وتقلل التوقف.",
  },
  {
    title: "الاستدامة",
    description: "تميز في الصحة والسلامة والبيئة، وتقليل الهدر وزيادة كفاءة الطاقة.",
  },
  {
    title: "الانتشار العالمي من السعودية",
    description: "نبني قدرات قابلة للتصدير وشراكات عبر الحدود.",
  },
],
processTitle: "عمليتنا العامة",
processSteps: [
  {
    title: "فهم الاحتياجات",
    description: "تحديد المتطلبات، وتوضيح النطاق، وضمان السرية.",
    icon: "fa-solid fa-lightbulb",
  },
  {
    title: "تصميم الحل",
    description: "زيارات ميدانية، جمع البيانات، تقييم المخاطر، اقتراح الحل.",
    icon: "fa-solid fa-pen-ruler",
  },
  {
    title: "الاتفاق والتخطيط",
    description: "تحديد التسليمات، وضبط الجداول الزمنية، وتأكيد النطاق.",
    icon: "fa-solid fa-file-contract",
  },
  {
    title: "التنفيذ والمراقبة",
    description: "الإشراف على التقدم، وتقييم الأداء، وضمان الجودة.",
    icon: "fa-solid fa-gears",
  },
  {
    title: "الإنجاز والدعم",
    description: "تسليم النتائج، وتقديم التدريب، والدعم المستمر.",
    icon: "fa-solid fa-shield-halved",
  },
],
isoTitle: "خارطة الجودة والسلامة والمعايير الدولية (ISO)",
qualityPolicy: {
  title: "سياسة الجودة",
  text: "التسليم الصحيح من أول مرة، الالتزام بالعقود، رضا العملاء، والتحسين المستمر.",
},
hsePolicy: {
  title: "سياسة السلامة والصحة والبيئة",
  text: "صفر إصابات، الالتزام بالمعايير السعودية ومعايير العملاء، مدعوم بالتدريب ومعدات السلامة وثقافة الوقاية.",
},
isoRoadmap: {
  title: "خارطة المعايير الدولية (ISO)",
  items: [
    { label: "ISO 9001 (إدارة الجودة):", desc: "رسم العمليات، التدقيق، والمراجعات." },
    { label: "ISO 45001 (السلامة والصحة المهنية):", desc: "التحكم في المخاطر، والاستعداد للطوارئ." },
  ],
  items2: [
    { label: "ISO 14001 (البيئة):", desc: "تسجيل التأثيرات، والتحكم في النفايات والانبعاثات." },
  ],
},
timeline: [
  { title: "تقييم الفجوات" },
  { title: "التوثيق" },
  { title: "التدريب" },
  { title: "التدقيق الداخلي" },
  { title: "الحصول على الشهادة" },
],
  organization: {
    cards: [
      {
        icon: "fa-solid fa-user-tie",
        title: "القيادة",
        text: "المدير التنفيذي مع مديري الوظائف (العمليات، السلامة والجودة، الموارد البشرية، سلسلة الإمداد، المالية، تطوير الأعمال والمبيعات)."
      },
      {
        icon: "fa-solid fa-chart-line",
        title: "التقارير",
        text: "أدوار واضحة ومسؤوليات محددة لكل عملية."
      },
      {
        icon: "fa-solid fa-scale-balanced",
        title: "الحوكمة",
        text: "مراجعات شهرية، واستراتيجية ربع سنوية، ولجنة للمخاطر والامتثال."
      }
    ]
  },
  caseStudies: {
    title: "دراسات الحالة والمراجع",
    subtitle: "استعراض لأبرز النجاحات والإنجازات التي تعكس خبرتنا وجودتنا في التنفيذ.",
    case1Title: "مشروع تحسين الكفاءة التشغيلية",
    case1Text: "تم تنفيذ خطة شاملة لتحسين الأداء وزيادة كفاءة التشغيل بنسبة 30%.",
    case2Title: "التوسع الإقليمي الناجح",
    case2Text: "نجحنا في توسيع العمليات إلى أسواق جديدة مع الحفاظ على معايير الجودة.",
    case3Title: "التحول الرقمي",
    case3Text: "تم تطوير نظام رقمي متكامل أتاح سرعة اتخاذ القرار وتقليل الأخطاء التشغيلية.",
    readMore: "عرض المزيد",
    readLess: "عرض أقل"
  },
    title: "مؤشرات الأداء الرئيسية",
      categories: [
        {
          title: "تشغيلي",
          icon: "⚙️",
          indicators: ["الالتزام بجدول التسليم في الوقت المحدد", "معدل إعادة العمل", "كفاءة المعدات الشاملة"]
        },
        {
          title: "الجودة",
          icon: "🎯", 
          indicators: ["تقارير عدم المطابقة لكل 1000 ساعة", "نسبة النجاح من أول مرة", "نتائج التدقيق"]
        },
        {
          title: "السلامة والبيئة",
          icon: "🛡️",
          indicators: ["معدل الحوادث", "معدل الحوادث التي كادت تحدث", "إتمام التدريب"]
        },
        {
          title: "سلسلة التوريد",
          icon: "🔗",
          indicators: ["التسليم في الوقت المحدد والكمية الصحيحة", "دقة المخزون", "وقت التسليم"]
        },
        {
          title: "مالي",
          icon: "💰",
          indicators: ["هامش نمو الإيرادات", "أيام الذمم المدينة", "دورة النقد"]
        },
        {
          title: "الأفراد",
          icon: "👥",
          indicators: ["الاحتفاظ بالموظفين", "معدل الاستخدام", "تغطية الكفاءات"]
        }
      ],
      titleContact: "تواصل معنا",
      desc: "من فضلك املأ النموذج أدناه وسنعاود الاتصال بك قريبًا.",
      name: "الاسم",
      phone: "رقم الموبايل",
      email: "البريد الإلكتروني",
      address: "العنوان",
      message: "الرسالة أو الاستفسار",
      send: "إرسال",
      success: "تم إرسال رسالتك بنجاح!",
      fail: "حدث خطأ أثناء الإرسال، حاول مرة أخرى.",
      contactInfo: [
  {
    icon: "📧",
    title: "راسلنا",
    details: "a.alshahrani@opex-ksa.com",
    description: "أرسل لنا بريدًا إلكترونيًا في أي وقت"
  },
  {
    icon: "📞",
    title: "اتصل بنا",
    details: "+966 58 040 4997",
    description: "متاح خلال ساعات العمل"
  },
  {
    icon: "📍",
    title: "زورنا",
    details: "مقر أوبكس السعودية",
    description: "ينبع، المملكة العربية السعودية"
  }
],
academyTitle: "أكاديمية OPEX",
academyHero: "تسعى OPEX Academy إلى بناء جيل من الكفاءات الصناعية الجاهزة للعمل والقيادة وريادة الأعمال في قطاع التشغيل والصيانة والخدمات الصناعية، عبر برامج تدريبية تطبيقية مبنية على احتياجات السوق الصناعي في المملكة والمنطقة.",
    academyVision: "أن تكون الأكاديمية المرجع الأول في تدريب وتأهيل الكوادر الصناعية في العالم العربي، وربط التدريب بالوظائف والفرص الصناعية الفعلية.",
    academyMission: "نقدم تدريبًا صناعيًا عمليًا عالي الجودة يربط المتدرب مباشرة بسوق العمل، ويحول المعرفة إلى مهارة، والمهارة إلى فرصة، والفرصة إلى قيمة اقتصادية مستدامة.",
    googleSheetLink: "https://docs.google.com/spreadsheets/d/your-sheet-id-here",
    
    academyCategories: [
      {
        id: 1,
        title: "الإدارة والتخطيط",
        courses: [
          {
            id: 101,
            name: "تخطيط المشاريع الصناعية",
            target: "مهندسون، مخططو مشاريع، إداريون",
            content: "تخطيط المشاريع – Gantt – إدارة المخاطر – KPIs",
            outcomes: "إعداد خطة مشروع صناعي احترافية"
          },
          {
            id: 102,
            name: "تخطيط وجدولة الصيانة",
            target: "مهندسو صيانة، مخططون",
            content: "CMMS – أوامر العمل – MTTR/MTBF",
            outcomes: "إعداد خطة صيانة سنوية كاملة"
          },
          {
            id: 103,
            name: "إدارة المستودعات والمخزون",
            target: "أمناء مستودعات، مسؤولو سلاسل الإمداد",
            content: "ABC Analysis – SAP/MM – تحسين المخزون",
            outcomes: "خفض التالف وزيادة كفاءة المستودع"
          },
          {
            id: 104,
            name: "التحكم في التكاليف والميزانية في التشغيل",
            target: "إداريون ماليون، مدراء تشغيل",
            content: "CAPEX/OPEX – تحليل الانحراف – التقارير المالية",
            outcomes: "إعداد ومتابعة ميزانية تشغيل"
          },
          {
            id: 105,
            name: "المشتريات والعقود الصناعية",
            target: "موظفو مشتريات، مقاولون",
            content: "RFQ – BOQ – عقود FIDIC – متطلبات الهيئة الملكية",
            outcomes: "تنفيذ عمليات شراء صناعية باحترافية"
          }
        ]
      },
      {
        id: 2,
        title: "التأهيل الوظيفي العملي",
        courses: [
          {
            id: 201,
            name: "فني الصيانة الميكانيكية",
            target: "خريجو دبلوم، باحثون عن عمل",
            content: "المضخات – المحامل – أدوات الورش – الفك والتركيب",
            outcomes: "جاهزية فني ميكانيكي ميداني"
          },
          {
            id: 202,
            name: "أساسيات الكهرباء الصناعية",
            target: "حديثو التخرج، مساعدو فنيين",
            content: "لوحات كهربائية – Motor Control – Safety",
            outcomes: "دعم مباشر لفريق الكهرباء الصناعي"
          },
          {
            id: 203,
            name: "فني الأنابيب والتصنيع",
            target: "فنيون ومساعدو فنيين",
            content: "قراءة Isometric – القطع – اللحام – اختبار الضغط",
            outcomes: "توظيف كـ Pipe Fitter صناعي"
          },
          {
            id: 204,
            name: "سلامة الرفع والتجهيز",
            target: "رافعي أحمال، عمال مواقع",
            content: "حساب الأحمال – إشارات الرفع – OSHA",
            outcomes: "الحصول على شهادة رِغر معتمد"
          },
          {
            id: 205,
            name: "السقالات والوصول الصناعي",
            target: "عمال مواقع، مقاولون",
            content: "تركيب وتفتيش السقالات – اشتراطات السلامة",
            outcomes: "جاهزية لوظائف Scaffolder صناعي"
          }
        ]
      },
      {
        id: 3,
        title: "التحول الرقمي الصناعي",
        courses: [
          {
            id: 301,
            name: "إنترنت الأشياء للصيانة الصناعية",
            target: "مهندسون، مطورو حلول",
            content: "حساسات إنترنت الأشياء – جمع البيانات – التحليل",
            outcomes: "بناء نموذج صيانة تنبؤية"
          },
          {
            id: 302,
            name: "Power BI للوحات التحكم الصناعية",
            target: "محللون ومدراء تشغيل",
            content: "ربط الأنظمة – تصميم لوحات أداء – KPIs",
            outcomes: "إنشاء Dashboard تشغيلي لإدارة المصنع"
          },
          {
            id: 303,
            name: "أساسيات التوأم الرقمي",
            target: "مهندسون، مخططو مصانع",
            content: "نمذجة – محاكاة – حالات استخدام عملية",
            outcomes: "نموذج Digital Twin أولي"
          },
          {
            id: 304,
            name: "تنفيذ أنظمة CMMS/ERP",
            target: "مسؤولو صيانة، ERP",
            content: "SAP – Maximo – Odoo – الأصول",
            outcomes: "تنفيذ نظام إدارة صيانة متكامل"
          },
          {
            id: 305,
            name: "الذكاء الاصطناعي في التشغيل والصيانة",
            target: "محللون، مطورو ذكاء اصطناعي",
            content: "خوارزميات تنبؤ – تحليل أعطال – تحسين الأداء",
            outcomes: "نموذج ذكاء صناعي مرتبط ببيانات حقيقية"
          },
          {
            id: 306,
            name: "الطباعة ثلاثية الأبعاد لقطع الغيار",
            target: "مهندسون، فنيون",
            content: "إعادة الهندسة العكسية – المواد – التشغيل",
            outcomes: "طباعة قطعة غيار صناعية فعلية"
          }
        ]
      },
      {
        id: 4,
        title: "القيادة الصناعية والإشراف",
        courses: [
          {
            id: 401,
            name: "مهارات المشرفين الميدانيين",
            target: "مشرفون جدد",
            content: "إدارة فرق – حل المشكلات – تقارير ميدانية",
            outcomes: "قيادة فريق تشغيل فعّال"
          },
          {
            id: 402,
            name: "قيادة السلامة والبيئة والصحه",
            target: "مسؤولو سلامة، قادة فرق",
            content: "تصاريح العمل – تحليل حوادث – LOTO",
            outcomes: "قيادة بيئة عمل آمنة"
          },
          {
            id: 403,
            name: "برنامج قائد الوردية",
            target: "رؤساء ورديات",
            content: "إدارة المناوبات – خطط الطوارئ – تسليم واستلام",
            outcomes: "جاهزية قائد وردية صناعية"
          },
          {
            id: 404,
            name: "مؤشرات الأداء وإدارة الأداء",
            target: "مدراء تشغيل، مشرفون",
            content: "بناء مؤشرات أداء – تحليل الانحراف",
            outcomes: "إعداد نظام متابعة أداء"
          },
          {
            id: 405,
            name: "مهارات التواصل الصناعي",
            target: "إداريون ومشرفون",
            content: "الاجتماعات – الإبلاغ – التصعيد الرسمي",
            outcomes: "رفع كفاءة التواصل داخل المصانع"
          },
          {
            id: 406,
            name: "التصنيع الرشيد والكايزن للصيانة",
            target: "مهندسو تحسين، مشرفون",
            content: "5S – تقليل الفاقد – تحسين مستمر",
            outcomes: "تطبيق كايزن داخل موقع صناعي"
          }
        ]
      },
      {
        id: 5,
        title: "ريادة الأعمال الصناعية",
        courses: [
          {
            id: 501,
            name: "ابدأ مشروع توريد العمالة",
            target: "رواد أعمال، متقاعدون",
            content: "تراخيص – عقود – تسعير – تأمين عمالة",
            outcomes: "تأسيس شركة توريد عمالة صناعية"
          },
          {
            id: 502,
            name: "كيف تبدأ شركة خدمات صناعية",
            target: "مقاولون جدد",
            content: "دراسة جدوى – معدات – طاقم تشغيلي",
            outcomes: "إعداد خطة إطلاق شركة صيانة وتشغيل"
          },
          {
            id: 503,
            name: "الامتياز الصناعي والمقاولة من الباطن",
            target: "مقاولون، شركات ناشئة",
            content: "عقود RC/سابك/أرامكو – التأهيل",
            outcomes: "دخول سلاسل التوريد الصناعية"
          },
          {
            id: 504,
            name: "التمويل والمزايدة للمقاولين",
            target: "مدراء ماليون، مؤسسو شركات",
            content: "BOQ – ضمانات – إدارة كاش فلو",
            outcomes: "التقديم على مشاريع دون تعثر مالي"
          },
          {
            id: 505,
            name: "بناء خطة نمو صناعية لـ 5 سنوات",
            target: "أصحاب شركات ناشئة",
            content: "استراتيجية توسع – CAPEX/OPEX – فريق",
            outcomes: "خارطة نمو مدروسة قابلة للتنفيذ"
          }
        ]
      },
      {
        id: 6,
        title: "الامتثال والمعايير",
        courses: [
          {
            id: 601,
            name: "ISO 9001 للعمليات الصناعية",
            target: "مسؤولو جودة",
            content: "نظام إدارة جودة – التدقيق – الوثائق",
            outcomes: "جاهزية شهادة ISO 9001"
          },
          {
            id: 602,
            name: "ISO 45001 والسلامة الصناعية",
            target: "مسؤولو سلامة",
            content: "تقييم مخاطر – متطلبات السلامة",
            outcomes: "بناء نظام HSE مطابق للمعايير"
          },
          {
            id: 603,
            name: "ISO 14001 والامتثال البيئي",
            target: "مسؤولو بيئة",
            content: "تأثير بيئي – مخاطر – خطط تحسين",
            outcomes: "نظام إدارة بيئية جاهز للتدقيق"
          },
          {
            id: 604,
            name: "امتثال متطلبات الهيئة الملكية",
            target: "مقاولون، إداريون",
            content: "اشتراطات الجبيل وينبع – IACS – التصاريح",
            outcomes: "امتثال كامل لأنظمة RC"
          },
          {
            id: 605,
            name: "تقييم المقاولين والتدقيق",
            target: "مشرفو تشغيل، QC",
            content: "تقييم مقاولين – تقارير – زيارات ميدانية",
            outcomes: "القدرة على تنفيذ Audit احترافي"
          }
        ]
      },
    ],


},
en: {
    home: "Home",
    services: "Services",
    contact: "Contact Us",
    langBtn: "العربية",
    mainTitle: "OPEX operation solution and industrial services",
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
        title: "Quick Response and Implementation",
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
    ],
    industriesTitle: "Industries We Serve",
    industriesList: [
      "Oil & Gas / Petrochemicals",
      "Metals & Mining",
      "Power & Utilities",
      "Manufacturing & Industrial Parks",
      "Infrastructure & Municipal Services"
    ],
    saudiVisionTitle: "Alignment with Saudi Vision",
saudiVisionList: [
  {
    title: "Local Value & Jobs",
    description: "Prioritize Saudi talent and local suppliers.",
  },
  {
    title: "Industrial Competitiveness",
    description: "Reliable O&M boosts uptime and productivity.",
  },
  {
    title: "Sustainability",
    description: "Excellence in HSE, less waste, energy efficiency.",
  },
  {
    title: "Global Reach from KSA",
    description: "Build exportable capabilities and cross-border partnerships.",
  },
],
processTitle: "Our General Process",
processSteps: [
  {
    title: "Understand Needs",
    description: "Capture requirements, define scope, ensure confidentiality.",
    icon: "fa-solid fa-lightbulb",
  },
  {
    title: "Designing the Solution",
    description: "Site visits, data collection, risk assessment, proposal.",
    icon: "fa-solid fa-pen-ruler",
  },
  {
    title: "Agreement & Planning",
    description: "Define deliverables, align timelines, and confirm scope.",
    icon: "fa-solid fa-file-contract",
  },
  {
    title: "Execution & Monitoring",
    description: "Supervise progress, assess performance, ensure quality.",
    icon: "fa-solid fa-gears",
  },
  {
    title: "Completion & Support",
    description: "Deliver results, provide training, and ongoing support.",
    icon: "fa-solid fa-shield-halved",
  },
],
isoTitle: "Quality, HSE & ISO Roadmap",
qualityPolicy: {
  title: "Quality Policy",
  text: "Right-first-time delivery, contract compliance, client satisfaction, and continuous improvement.",
},
hsePolicy: {
  title: "HSE Policy",
  text: "Zero harm, compliance with Saudi and client standards, reinforced by training, PPE, and safety culture.",
},
isoRoadmap: {
  title: "ISO Roadmap",
  items: [
    { label: "ISO 9001 (QMS):", desc: "Process mapping, audits, reviews." },
    { label: "ISO 45001 (OH&S):", desc: "Risk control, emergency readiness." },
  ],
  items2: [
    { label: "ISO 14001 (EMS):", desc: "Impact register, waste & emissions control." },
  ],
},
timeline: [
  { title: "Gap Assessment" },
  { title: "Documentation" },
  { title: "Training" },
  { title: "Internal Audit" },
  { title: "Certification" },
],
organization: {
    cards: [
      {
        icon: "fa-solid fa-user-tie",
        title: "Leadership",
        text: "CEO with functional managers (Operations, HSE, Quality, HR, Supply Chain, Finance, BD/Sales)."
      },
      {
        icon: "fa-solid fa-chart-line",
        title: "Reporting",
        text: "Clear roles and RACI for each process."
      },
      {
        icon: "fa-solid fa-scale-balanced",
        title: "Governance",
        text: "Monthly reviews, quarterly strategy, risk & compliance committee."
      }
    ]
  },
    caseStudies:{
    title: "Case Studies & References",
    subtitle: "Highlighting key achievements that reflect our expertise and execution quality.",
    case1Title: "Operational Efficiency Improvement",
    case1Text: "Implemented a comprehensive plan that boosted operational efficiency by 30%.",
    case2Title: "Successful Regional Expansion",
    case2Text: "Expanded operations into new markets while maintaining top-quality standards.",
    case3Title: "Digital Transformation",
    case3Text: "Developed an integrated digital system enabling faster decisions and fewer errors.",
    readMore: "Read More",
    readLess: "Read Less"
},
title: "Key Performance Indicators (KPIs)",
      categories: [
        {
          title: "Operational",
          icon: "⚙️",
          indicators: ["On-time delivery schedule adherence", "% rework rate", "OEE"]
        },
        {
          title: "Quality", 
          icon: "🎯",
          indicators: ["NCRs/1,000 hrs", "First-pass yield", "Audit scores"]
        },
        {
          title: "HSE",
          icon: "🛡️",
          indicators: ["TRIR", "Near miss rate", "Training completion"]
        },
        {
          title: "Supply Chain",
          icon: "🔗",
          indicators: ["OTIF", "Inventory accuracy", "Lead time"]
        },
        {
          title: "Finance",
          icon: "💰",
          indicators: ["Revenue growth margin", "DSO", "Cash cycle"]
        },
        {
          title: "People",
          icon: "👥",
          indicators: ["Retention", "Utilization", "Competency coverage"]
        }
      ],
      titleContact: "Contact Us",
      desc: "Please fill out the form below and we’ll get back to you soon.",
      name: "Full Name",
      phone: "Phone Number",
      email: "Email Address",
      address: "Address",
      message: "Message or Inquiry",
      send: "Send Message",
      success: "Your message has been sent successfully!",
      fail: "Something went wrong, please try again.",
      contactInfo: [
  {
    icon: "📧",
    title: "Email Us",
    details: "a.alshahrani@opex-ksa.com",
    description: "Send us an email anytime"
  },
  {
    icon: "📞", 
    title: "Call Us",
    details: "+966 58 040 4997",
    description: "Available during business hours"
  },
  {
    icon: "📍",
    title: "Visit Us",
    details: "OPEX KSA Headquarters",
    description: "Yanbu, Saudi Arabia"
  }
],
academyTitle: "OPEX Academy",
academyHero: "OPEX Academy aims to build a generation of industrial competencies ready for work, leadership, and entrepreneurship in the operations, maintenance, and industrial services sector, through applied training programs based on the needs of the industrial market in the Kingdom and the region.",
    academyVision: "To be the primary reference in training and qualifying industrial cadres in the Arab world, linking training with actual industrial jobs and opportunities.",
    academyMission: "We provide high-quality practical industrial training that directly connects trainees to the job market, transforming knowledge into skills, skills into opportunities, and opportunities into sustainable economic value.",
    googleSheetLink: "https://docs.google.com/spreadsheets/d/your-sheet-id-here",
    
    academyCategories: [
      {
        id: 1,
        title: "Administration & Planning",
        courses: [
          {
            id: 101,
            name: "Industrial Project Planning",
            target: "Engineers, Project Planners, Administrators",
            content: "Project Planning - Gantt - Risk Management - KPIs",
            outcomes: "Prepare a professional industrial project plan"
          },
          {
            id: 102,
            name: "Maintenance Planning & Scheduling",
            target: "Maintenance Engineers, Planners",
            content: "CMMS - Work Orders - MTTR/MTBF",
            outcomes: "Prepare a complete annual maintenance plan"
          },
          {
            id: 103,
            name: "Warehouse & Inventory Management",
            target: "Warehouse Keepers, Supply Chain Officers",
            content: "ABC Analysis - SAP/MM - Inventory Optimization",
            outcomes: "Reduce waste and increase warehouse efficiency"
          },
          {
            id: 104,
            name: "Cost & Budget Control in Operations",
            target: "Financial Administrators, Operations Managers",
            content: "CAPEX/OPEX - Variance Analysis - Financial Reports",
            outcomes: "Prepare and monitor operating budget"
          },
          {
            id: 105,
            name: "Industrial Procurement & Contracts",
            target: "Procurement Staff, Contractors",
            content: "RFQ - BOQ - FIDIC Contracts - Royal Commission Requirements",
            outcomes: "Execute industrial procurement operations professionally"
          }
        ]
      },
      {
        id: 2,
        title: "Job-Ready Practical",
        courses: [
          {
            id: 201,
            name: "Mechanical Maintenance Technician",
            target: "Diploma Graduates, Job Seekers",
            content: "Pumps - Bearings - Workshop Tools - Assembly & Disassembly",
            outcomes: "Field mechanical technician readiness"
          },
          {
            id: 202,
            name: "Industrial Electrical Basics",
            target: "Recent Graduates, Technician Assistants",
            content: "Electrical Panels - Motor Control - Safety",
            outcomes: "Direct support for industrial electrical team"
          },
          {
            id: 203,
            name: "Pipe Fitter & Fabrication",
            target: "Technicians and Assistant Technicians",
            content: "Isometric Reading - Cutting - Welding - Pressure Testing",
            outcomes: "Employment as industrial Pipe Fitter"
          },
          {
            id: 204,
            name: "Rigger & Lifting Safety",
            target: "Lift Operators, Site Workers",
            content: "Load Calculations - Lifting Signals - OSHA",
            outcomes: "Obtain certified rigger certificate"
          },
          {
            id: 205,
            name: "Scaffolding & Industrial Access",
            target: "Site Workers, Contractors",
            content: "Scaffolding Installation & Inspection - Safety Requirements",
            outcomes: "Readiness for Scaffolder industrial jobs"
          }
        ]
      },
      {
        id: 3,
        title: "Industrial Digital Transformation",
        courses: [
          {
            id: 301,
            name: "IoT for Industrial Maintenance",
            target: "Engineers, Solution Developers",
            content: "IoT Sensors - Data Collection - Analysis",
            outcomes: "Build predictive maintenance model"
          },
          {
            id: 302,
            name: "Power BI for Industrial Dashboards",
            target: "Analysts and Operations Managers",
            content: "System Integration - Dashboard Design - KPIs",
            outcomes: "Create operational dashboard for plant management"
          },
          {
            id: 303,
            name: "Digital Twin Fundamentals",
            target: "Engineers, Plant Planners",
            content: "Modeling - Simulation - Practical Use Cases",
            outcomes: "Initial Digital Twin model"
          },
          {
            id: 304,
            name: "CMMS/ERP Implementation",
            target: "Maintenance Officers, ERP",
            content: "SAP - Maximo - Odoo - Assets",
            outcomes: "Implement integrated maintenance management system"
          },
          {
            id: 305,
            name: "AI in Operations & Maintenance",
            target: "Analysts, AI Developers",
            content: "Prediction Algorithms - Failure Analysis - Performance Optimization",
            outcomes: "AI industrial model linked to real data"
          },
          {
            id: 306,
            name: "3D Printing for Spare Parts",
            target: "Engineers, Technicians",
            content: "Reverse Engineering - Materials - Operation",
            outcomes: "Print actual industrial spare part"
          }
        ]
      },
      {
        id: 4,
        title: "Industrial Leadership & Supervisory",
        courses: [
          {
            id: 401,
            name: "Frontline Supervisor Skills",
            target: "New Supervisors",
            content: "Team Management - Problem Solving - Field Reports",
            outcomes: "Lead effective operations team"
          },
          {
            id: 402,
            name: "HSE Leadership & Culture",
            target: "Safety Officers, Team Leaders",
            content: "Permit to Work - Incident Analysis - LOTO",
            outcomes: "Lead safe work environment"
          },
          {
            id: 403,
            name: "Shift Leader Program",
            target: "Shift Supervisors",
            content: "Shift Management - Emergency Plans - Handover",
            outcomes: "Industrial shift leader readiness"
          },
          {
            id: 404,
            name: "KPI & Performance Management",
            target: "Operations Managers, Supervisors",
            content: "KPI Development - Variance Analysis",
            outcomes: "Prepare performance monitoring system"
          },
          {
            id: 405,
            name: "Industrial Communication Skills",
            target: "Administrators and Supervisors",
            content: "Meetings - Reporting - Formal Escalation",
            outcomes: "Improve communication efficiency within factories"
          },
          {
            id: 406,
            name: "Lean & Kaizen for Maintenance",
            target: "Improvement Engineers, Supervisors",
            content: "5S - Waste Reduction - Continuous Improvement",
            outcomes: "Apply Kaizen in industrial site"
          }
        ]
      },
      {
        id: 5,
        title: "Industrial Entrepreneurship",
        courses: [
          {
            id: 501,
            name: "Start Your Manpower Supply Business",
            target: "Entrepreneurs, Retirees",
            content: "Licenses - Contracts - Pricing - Labor Insurance",
            outcomes: "Establish industrial manpower supply company"
          },
          {
            id: 502,
            name: "How to Start an Industrial Services Co.",
            target: "New Contractors",
            content: "Feasibility Study - Equipment - Operational Team",
            outcomes: "Prepare company launch plan for maintenance and operations"
          },
          {
            id: 503,
            name: "Industrial Franchise & Subcontracting",
            target: "Contractors, Startups",
            content: "RC/SABIC/Aramco Contracts - Qualification",
            outcomes: "Enter industrial supply chains"
          },
          {
            id: 504,
            name: "Finance & Bidding for Contractors",
            target: "Financial Managers, Company Founders",
            content: "BOQ - Guarantees - Cash Flow Management",
            outcomes: "Apply for projects without financial obstacles"
          },
          {
            id: 505,
            name: "Build a 5-Year Industrial Growth Plan",
            target: "Startup Owners",
            content: "Expansion Strategy - CAPEX/OPEX - Team",
            outcomes: "Studied and executable growth roadmap"
          }
        ]
      },
      {
        id: 6,
        title: "Compliance & Standards",
        courses: [
          {
            id: 601,
            name: "ISO 9001 for Industrial Operations",
            target: "Quality Officers",
            content: "Quality Management System - Auditing - Documentation",
            outcomes: "ISO 9001 certification readiness"
          },
          {
            id: 602,
            name: "ISO 45001 & Industrial HSE",
            target: "Safety Officers",
            content: "Risk Assessment - Safety Requirements",
            outcomes: "Build HSE system compliant with standards"
          },
          {
            id: 603,
            name: "ISO 14001 & Environmental Compliance",
            target: "Environmental Officers",
            content: "Environmental Impact - Risks - Improvement Plans",
            outcomes: "Environmental management system ready for audit"
          },
          {
            id: 604,
            name: "Royal Commission Compliance",
            target: "Contractors, Administrators",
            content: "Jubail and Yanbu Requirements - IACS - Permits",
            outcomes: "Full compliance with RC regulations"
          },
          {
            id: 605,
            name: "Contractor Evaluation & Audits",
            target: "Operations Supervisors, QC",
            content: "Contractor Evaluation - Reports - Field Visits",
            outcomes: "Ability to perform professional audits"
          }
        ]
      }
    ]
},
};

export default texts;
