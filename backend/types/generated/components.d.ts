import type { Schema, Struct } from '@strapi/strapi';

export interface FooterLink extends Struct.ComponentSchema {
  collectionName: 'components_footer_link_s';
  info: {
    displayName: 'link ';
  };
  attributes: {
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface FooterPhoneNumber extends Struct.ComponentSchema {
  collectionName: 'components_footer_phone_numbers';
  info: {
    displayName: 'phone_number';
  };
  attributes: {
    number: Schema.Attribute.String;
  };
}

export interface FooterSocialIcon extends Struct.ComponentSchema {
  collectionName: 'components_footer_social_icons';
  info: {
    displayName: 'social_icon';
  };
  attributes: {
    platform: Schema.Attribute.Enumeration<
      ['facebook', 'linkedin', 'whatsapp']
    >;
    url: Schema.Attribute.String;
  };
}

export interface NavbarNavChild extends Struct.ComponentSchema {
  collectionName: 'components_navbar_nav_children';
  info: {
    displayName: 'NavChild';
  };
  attributes: {
    href: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsWhyChooseFeature extends Struct.ComponentSchema {
  collectionName: 'components_sections_why_choose_features';
  info: {
    displayName: 'Why-Choose-Feature';
  };
  attributes: {
    description: Schema.Attribute.String;
    icon: Schema.Attribute.Enumeration<
      ['userTie', 'percent', 'award', 'smile', 'user', 'headset']
    >;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'footer.link': FooterLink;
      'footer.phone-number': FooterPhoneNumber;
      'footer.social-icon': FooterSocialIcon;
      'navbar.nav-child': NavbarNavChild;
      'sections.why-choose-feature': SectionsWhyChooseFeature;
    }
  }
}
