export interface SocialLinkModel {
  icon: string;
  url: string;
}

export interface QuickLinkModel {
  label: string;
  route: string;
}

export interface SkillModel {
  name: string;
  icon?: string;
}

export interface ContactInfoModel {
  icon: string;
  label: string;
  value: string;
  link?: string;
}
