
import { siteConfig } from "@/config/site";
import { Tier, TiersEnum } from "@/types/pricing";


export const TIERS_EN: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "Free",
    price: "Free",
    href: "https://www.gptshunter.com/gpts/profile/user-4rYdjbqXWjA7Sgiw4N35Yc1G",
    description: "Standard packing list and storage suggestions.",
    features: [
      "Basic features, free to use",
      "Generate basic packing list",
      "Standard storage suggestions",
      "Save up to 3 lists",
      "Personal use only",
    ],
    buttonText: "Get Started",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Customize,
    title: "Premium",
    href: siteConfig.authors[0].twitter || "#",
    description: "Unlock all advanced features with a subscription.",
    price: "$9.9/month",
    features: [
      "Personalized packing list",
      "Professional storage suggestions",
      "Exclusive packing tips",
      "Unlimited list storage",
      "Support for multi-user collaboration",
    ],
    buttonText: "Contact Us",
    buttonColor: "default",
    buttonVariant: "flat",
  },
];


export const TIERS_ZH: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "免费",
    price: "免费",
    href: "https://www.gptshunter.com/gpts/profile/user-4rYdjbqXWjA7Sgiw4N35Yc1G",
    description: "标准化行李清单和收纳建议。",
    features: [
      "基本功能，免费使用        ",
      "生成基本打包清单",
      "标准收纳建议",
      "保存最多3个清单",
      "仅支持个人用户",

    ],
    buttonText: "开始",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Customize,
    title: "定制",
    href: siteConfig.authors[0].twitter || "#",
    description: "支付打开所有高级功能。",
    price: "$9.9/月",
    features: [
      "个性化打包清单",
      "专业的收纳建议",
      "专属的收纳技巧指导",
      "无限的清单存储",
      "支持多用户协作",
    ],
    buttonText: "联系我们",
    buttonColor: "default",
    buttonVariant: "flat",
  },
];


export const TIERS_JA: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "無料",
    price: "無料",
    href: "https://www.gptshunter.com/gpts/profile/user-4rYdjbqXWjA7Sgiw4N35Yc1G",
    description: "標準のパッキングリストと収納の提案。",
    features: [
      "基本機能、無料で利用可能",
      "基本的なパッキングリストを生成",
      "標準的な収納提案",
      "最大3つのリストを保存",
      "個人利用のみ",
    ],
    buttonText: "開始",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Customize,
    title: "プレミアム",
    href: siteConfig.authors[0].twitter || "#",
    description: "サブスクリプションで高度なすべての機能を解放します。",
    price: "$9.9/月",
    features: [
      "パーソナライズされたパッキングリスト",
      "プロフェッショナルな収納提案",
      "独占的なパッキングのヒント",
      "無制限のリスト保存",
      "複数ユーザーのコラボレーションをサポート",
    ],
    buttonText: "お問い合わせ",
    buttonColor: "default",
    buttonVariant: "flat",
  },
];


export const TIERS_AR: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "مجاني",
    price: "مجاني",
    href: "https://www.gptshunter.com/gpts/profile/user-4rYdjbqXWjA7Sgiw4N35Yc1G",
    description: "قائمة التعبئة القياسية واقتراحات التخزين.",
    features: [
      "الميزات الأساسية، استخدام مجاني",
      "إنشاء قائمة تعبئة أساسية",
      "اقتراحات التخزين القياسية",
      "حفظ ما يصل إلى 3 قوائم",
      "للاستخدام الشخصي فقط",
    ],
    buttonText: "ابدأ",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Customize,
    title: "المميزة",
    href: siteConfig.authors[0].twitter || "#",
    description: "افتح جميع الميزات المتقدمة بالاشتراك.",
    price: "$9.9/شهر",
    features: [
      "قائمة تعبئة مخصصة",
      "اقتراحات تخزين احترافية",
      "نصائح حصرية للتعبئة",
      "تخزين قوائم غير محدود",
      "دعم التعاون متعدد المستخدمين",

    ],
    buttonText: "اتصل بنا",
    buttonColor: "default",
    buttonVariant: "flat",
  },
];


export const TIERS_ES: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "Gratis",
    price: "Gratis",
    href: "https://www.gptshunter.com/gpts/profile/user-4rYdjbqXWjA7Sgiw4N35Yc1G",
    description: "Lista de empaque estándar y sugerencias de almacenamiento.",
    features: [
      "Funciones básicas, uso gratuito",
      "Generar lista de empaque básica",
      "Sugerencias de almacenamiento estándar",
      "Guardar hasta 3 listas",
      "Solo uso personal",

    ],
    buttonText: "Empezar",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Customize,
    title: "Personalizado",
    href: siteConfig.authors[0].twitter || "#",
    description: "Desbloquea todas las funciones avanzadas con una suscripción.",
    price: "$9.9/mes",
    features: [
      "Lista de empaque personalizada",
      "Sugerencias profesionales de almacenamiento",
      "Consejos exclusivos de empaque",
      "Almacenamiento ilimitado de listas",
      "Soporte para colaboración multiusuario",

    ],
    buttonText: "Contáctenos",
    buttonColor: "default",
    buttonVariant: "flat",
  },
];


export const TIERS_RU: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "Бесплатно",
    price: "Бесплатно",
    href: "https://www.gptshunter.com/gpts/profile/user-4rYdjbqXWjA7Sgiw4N35Yc1G",
    description: "Стандартный список упаковки и предложения по хранению.",
    features: [
      "Основные функции, бесплатное использование",
      "Создание базового списка упаковки",
      "Стандартные предложения по хранению",
      "Сохранение до 3 списков",
      "Только для личного использования",

    ],
    buttonText: "Начать",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Customize,
    title: "Премиум",
    href: siteConfig.authors[0].twitter || "#",
    description: "Разблокируйте все расширенные функции с подпиской.",
    price: "$9.9/месяц",
    features: [
      "Персонализированный список упаковки",
      "Профессиональные предложения по хранению",
      "Эксклюзивные советы по упаковке",
      "Неограниченное хранение списков",
      "Поддержка многопользовательского сотрудничества",
    ],
    buttonText: "Связаться с нами",
    buttonColor: "default",
    buttonVariant: "flat",
  },
];



interface TiersCollection {
  [key: `TIERS_${string}`]: Array<Tier>;
}

export const ALL_TIERS: TiersCollection = {
  TIERS_EN,
  TIERS_ZH,
  TIERS_JA,
  TIERS_AR,
  TIERS_ES,
  TIERS_RU
}