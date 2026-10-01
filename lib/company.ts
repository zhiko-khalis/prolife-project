export const company = {
  name: "Pro Life",
  siteUrl: "https://prolifehealth.co",
  founded: 2020,
  team: "27+",
  teamDetail: "Approximately 27 professionals",
  salesChannels: 8,
  offices: 2,
  email: "info@prolifehealth.co",
  businessEmail: "bdmanager@prolifehealth.co",
  phone: "+9647702125000",
  phoneDisplay: "+964 770 212 5000",
  whatsapp: "https://wa.me/9647702125000",
  description:
    "Pro Life is a healthcare and wellness trading and distribution company headquartered in Erbil, Iraq, with a regional office in Riyadh, Saudi Arabia.",
  summary:
    "Pro Life is a leading general trading company specializing in healthcare solutions. We import, export, and distribute a diverse range of health and wellness products. Pro Life owns and manages several proprietary brands while also distributing other brands.",
  story:
    "Founded in 2020, Pro Life has grown into a regional healthcare and wellness company. From our headquarters in Erbil and regional office in Riyadh, our experienced team combines local market knowledge with international expertise to deliver health and wellness solutions throughout Iraq, Saudi Arabia and the wider MENA region.",
  vision:
    "Our vision is to build healthier and better lives for people in our world. We aim to be the preferred partner in wellness by expanding access to superior health products and solutions.",
  mission:
    "Our mission is to provide better products that enhance health and well-being. We focus on sourcing and delivering innovative wellness solutions that meet the needs of consumers and businesses alike.",
  heroSupport:
    "Pro Life develops, imports and distributes healthcare and wellness products across Iraq, Saudi Arabia and the wider MENA region.",
} as const;

export const offices = [
  {
    id: "erbil",
    title: "Erbil Headquarters",
    city: "Erbil",
    address: "Erbil, Kurdistan Region, Iraq",
    role: "Head office",
  },
  {
    id: "riyadh",
    title: "Riyadh Regional Office",
    city: "Riyadh",
    address: "Riyadh, Kingdom of Saudi Arabia",
    role: "Regional office",
  },
] as const;

export const stats = [
  { value: 2020, suffix: "", label: "Founded", count: false },
  { value: 27, suffix: "+", label: "Professionals", count: true },
  { value: 8, suffix: "", label: "Sales Channels", count: true },
  { value: 2, suffix: "", label: "Regional Offices", count: true },
] as const;

export const salesChannels = [
  {
    id: "healthcare",
    title: "Healthcare Providers",
    text: "Supply to healthcare providers.",
  },
  {
    id: "retail",
    title: "Retail Networks",
    text: "Retail distribution for wellness products.",
  },
  {
    id: "ecommerce",
    title: "E-Commerce",
    text: "Online sales channels.",
  },
  {
    id: "institutions",
    title: "Government & Institutions",
    text: "Government and institutional supply.",
  },
  {
    id: "export",
    title: "Export & B2B",
    text: "Export and business-to-business distribution.",
  },
] as const;

export const whyProLife = [
  {
    title: "Expertise",
    text: "An experienced team combines local market knowledge with international expertise across healthcare and wellness.",
  },
  {
    title: "Quality & Trust",
    text: "We focus on better products that support health and well-being for consumers and businesses.",
  },
  {
    title: "Regional Network",
    text: "Eight sales channels in Iraq, coordinated from Erbil with a regional office in Riyadh.",
  },
  {
    title: "Customer Focus",
    text: "Customer service and business development contacts are available for partners and customers.",
  },
  {
    title: "International Reach",
    text: "Import, export, and distribution across Iraq, Saudi Arabia, and the wider MENA region.",
  },
] as const;

export const activities = [
  {
    title: "Proprietary brands",
    text: "We own and manage Dr. Vivo, Happy, Shireen, and Monivo.",
  },
  {
    title: "Import, export, and distribution",
    text: "We move health and wellness products into and across our markets.",
  },
  {
    title: "Partner brands",
    text: "We also distribute brands alongside our own portfolio.",
  },
  {
    title: "Regional coverage",
    text: "We serve Iraq, Saudi Arabia, and the wider MENA region from Erbil and Riyadh.",
  },
] as const;

export const partnerCapabilities = [
  {
    title: "Market Access",
    text: "A route into Iraq, Saudi Arabia, and the wider MENA region.",
  },
  {
    title: "Import & Distribution",
    text: "Import and distribution for healthcare and wellness products.",
  },
  {
    title: "Sales Network",
    text: "Eight sales channels in Iraq, with regional coordination from Riyadh.",
  },
  {
    title: "Retail & Pharmacy",
    text: "Retail distribution as part of the sales network.",
  },
  {
    title: "E-Commerce",
    text: "Online channels alongside physical distribution.",
  },
  {
    title: "Local Market Expertise",
    text: "A team based in the region, combining local knowledge with international experience.",
  },
  {
    title: "B2B Partnerships",
    text: "Commercial partnerships for brands entering or expanding in the region.",
  },
] as const;

export const mainNav = [
  { href: "/about", label: "About" },
  { href: "/brands", label: "Brands" },
  { href: "/products", label: "Products" },
  { href: "/distribution", label: "Distribution" },
  { href: "/for-brands", label: "For Brands" },
  { href: "/contact", label: "Contact" },
] as const;
