import type { Schema, Struct } from '@strapi/strapi';

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
      'navbar.nav-child': NavbarNavChild;
      'sections.why-choose-feature': SectionsWhyChooseFeature;
    }
  }
}
