export type Platform = "youtube" | "tiktok" | "facebook";

export type SocialLink = {
  platform: Platform;
  label: string;
  handle: string;
  url: string;
};

export const profile = {
  name: "Cool The World",
  bio: "ติดตามทุกช่องทางของ Cool The World",
};

export const links: SocialLink[] = [
  {
    platform: "youtube",
    label: "YouTube",
    handle: "@cooltheworld",
    url: "https://youtube.com/@cooltheworld",
  },
  {
    platform: "tiktok",
    label: "TikTok",
    handle: "@cool.the.world",
    url: "https://www.tiktok.com/@cool.the.world",
  },
  {
    platform: "facebook",
    label: "Facebook",
    handle: "Cool The World",
    url: "https://www.facebook.com/share/1dBk5t2Zvk/",
  },
];
