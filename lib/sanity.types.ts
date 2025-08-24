export interface Homepage {
  _id: string
  _type: 'homepage'
  heroTitle: string
  heroSubtitle: string
  primaryButtonText: string
  secondaryButtonText: string
  servicesTitle: string
  servicesSubtitle: string
  whoWeServeTitle: string
  whoWeServeSubtitle: string
  targetMarkets: string[]
  ctaTitle: string
  ctaSubtitle: string
  ctaButtonText: string
}

export interface Service {
  _id: string
  _type: 'service'
  title: string
  slug: {
    current: string
  }
  shortDescription: string
  description: string
  features: string[]
  icon: 'marketing' | 'revenue' | 'operations' | 'technology'
  order: number
  priceRange: {
    retainerMin: number
    retainerMax: number
    projectMin: number
    projectMax: number
  }
}

export interface About {
  _id: string
  _type: 'about'
  pageTitle: string
  pageSubtitle: string
  mission: string
  vision: string
  competitiveEdge: Array<{
    title: string
    description: string
  }>
  primaryMarket: string
  primaryMarketList: string[]
  secondaryMarket: string
  geography: string
  growthRoadmap: Array<{
    period: string
    goals: string
  }>
  yearOneRevenue: string
  profitTarget: string
  ctaTitle: string
  ctaSubtitle: string
}

export interface Contact {
  _id: string
  _type: 'contact'
  pageTitle: string
  pageSubtitle: string
  formTitle: string
  processTitle: string
  processSteps: string[]
  investmentTitle: string
  retainerRange: string
  projectRange: string
  targetMarketTitle: string
  targetMarketDescription: string
  ctaTitle: string
  ctaSubtitle: string
  roiTarget: string
  responseTime: string
}

export interface SiteSettings {
  _id: string
  _type: 'siteSettings'
  companyName: string
  tagline: string
  metaTitle: string
  metaDescription: string
  navigation: Array<{
    label: string
    href: string
  }>
  footer: {
    companyDescription: string
    copyrightText: string
  }
}