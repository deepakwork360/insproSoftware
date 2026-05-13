import { client } from "./client";

export async function getSiteSettings() {
  try {
    return await client.fetch(`*[_type == "siteSettings"][0]{ lightTheme, darkTheme, defaultAppearance, showThemeToggle }`);
  } catch (error) {
    console.error("Sanity Fetch Error (getSiteSettings):", error);
    return null;
  }
}

export async function getNavigation(title: string) {
  try {
    return await client.fetch(
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
  } catch (error) {
    console.error(`Sanity Fetch Error (getNavigation - ${title}):`, error);
    return null;
  }
}

export async function getFooterSettings() {
  try {
    return await client.fetch(`*[_type == "footerSettings"][0]{
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
  } catch (error) {
    console.error("Sanity Fetch Error (getFooterSettings):", error);
    return null;
  }
}

export async function getContactSettings() {
  try {
    return await client.fetch(`*[_type == "contactSettings"][0]{
      phoneNumbers,
      email,
      address,
      workingHours,
      googleMapsLink
    }`);
  } catch (error) {
    console.error("Sanity Fetch Error (getContactSettings):", error);
    return null;
  }
}

export async function getTeamMembers() {
  try {
    return await client.fetch(`*[_type == "teamMember"] | order(order asc, _createdAt desc) {
      name,
      role,
      location,
      "imageUrl": image.asset->url + "?auto=format"
    }`, {}, {
      next: { revalidate: 0 }
    });
  } catch (error) {
    console.error("Sanity Fetch Error (getTeamMembers):", error);
    return [];
  }
}

export async function getTestimonials() {
  try {
    return await client.fetch(`*[_type == "testimonial"] | order(order asc, _createdAt desc) {
      name,
      position,
      "image": image.asset->url + "?auto=format",
      rating,
      description,
      signature
    }`, {}, {
      next: { revalidate: 0 }
    });
  } catch (error) {
    console.error("Sanity Fetch Error (getTestimonials):", error);
    return [];
  }
}

// Blog Queries
export const GET_BLOG_POSTS = `*[_type == "blogPost"] | order(orderRank asc) {
  _id,
  title,
  "slug": slug.current,
  bannerDescription,
  "imageUrl": bannerImage.asset->url + "?auto=format",
  category,
  publishedAt,
  author,
  readTime
}`;

export const GET_BLOG_POST_BY_SLUG = `*[_type == "blogPost" && slug.current == $slug][0] {
  ...,
  "slug": slug.current,
  "bannerImage": bannerImage.asset->url + "?auto=format",
  sections[] {
    ...,
    "content": select(
      type == "list" => string::split(content, "\n"),
      content
    )
  }
}`;

// Portfolio Queries
export const GET_PORTFOLIOS = `*[_type == "portfolio" && platform == $platform] | order(orderRank asc) {
  _id,
  title,
  category,
  "imageUrl": imageUrl.asset->url + "?auto=format",
  link
}`;

export const GET_HOME_PORTFOLIOS = `*[_type == "portfolio" && showOnHome == true] | order(orderRank asc) {
  _id,
  title,
  description,
  imagePosition,
  "image": imageUrl.asset->url + "?auto=format"
}`;
