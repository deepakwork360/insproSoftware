import { client } from "./client";

export async function getSiteSettings() {
  return client.fetch(`*[_type == "siteSettings"][0]{ lightTheme, darkTheme, defaultAppearance }`);
}

export async function getNavigation(title: string) {
  return client.fetch(
    `*[_type == "navigation" && title == $title][0]{
      links[]{
        label,
        href,
        type,
        sections[]{
          title,
          icon,
          links[]{
            label,
            href
          }
        },
        dropdownLinks[]{
          label,
          href
        }
      }
    }`,
    { title }
  );
}

export async function getFooterSettings() {
  return client.fetch(`*[_type == "footerSettings"][0]{
    logoText,
    description,
    columns[]{
      title,
      links[]{
        label,
        href
      }
    },
    socialLinks[]{
      platform,
      url,
      icon
    },
    copyrightText
  }`);
}
