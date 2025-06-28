export interface NavigationItem {
  label: string
  path: string
}

export interface Product {
  title: string
  description: string
  features: string[]
  sustainable: boolean
  imagePath: string;
}

export interface ProductCategory {
  title: string
  description: string
  products: Product[]
}

export interface TeamMember {
  name: string
  role: string
  bio: string
}

export interface ContactMethod {
  icon: string
  title: string
  value: string
}

export interface FeatureItem {
  icon: string
  title: string
  description: string
  imagePath: string
}

export interface HeroSection {
  title: string
  subtitle?: string
  description: string
  primaryCta?: string
  secondaryCta?: string
  imagePath: string
}
