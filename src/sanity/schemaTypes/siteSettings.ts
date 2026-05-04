export const siteSettings = {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'lightTheme',
      title: 'Light Mode Palette',
      type: 'string',
      options: {
        list: [
          { title: 'Default Theme', value: '' },
          { title: 'Sapphire Gold', value: 'theme-sapphire-gold' },
          { title: 'Emerald Night', value: 'theme-emerald-night' },
          { title: 'Royal Amethyst', value: 'theme-royal-amethyst' },
          { title: 'Crimson Slate', value: 'theme-crimson-slate' },
          { title: 'Cyber Neon', value: 'theme-cyber-neon' },
        ],
      },
      description: 'Select the premium palette to use when the site is in LIGHT mode.',
    },
    {
      name: 'darkTheme',
      title: 'Dark Mode Palette',
      type: 'string',
      options: {
        list: [
          { title: 'Default Theme', value: '' },
          { title: 'Sapphire Gold', value: 'theme-sapphire-gold' },
          { title: 'Emerald Night', value: 'theme-emerald-night' },
          { title: 'Royal Amethyst', value: 'theme-royal-amethyst' },
          { title: 'Crimson Slate', value: 'theme-crimson-slate' },
          { title: 'Cyber Neon', value: 'theme-cyber-neon' },
        ],
      },
      description: 'Select the premium palette to use when the site is in DARK mode.',
    },
    {
      name: 'defaultAppearance',
      title: 'Default Appearance Mode',
      type: 'string',
      options: {
        list: [
          { title: 'Follow System', value: 'system' },
          { title: 'Always Light', value: 'light' },
          { title: 'Always Dark', value: 'dark' },
        ],
      },
      initialValue: 'system',
      description: 'Choose whether the site should default to light or dark mode.',
    },
  ],
}
