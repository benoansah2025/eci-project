// src/data/nominationsData.ts

const CLOUD_NAME = "dyli0xrkw";
const BASE_URL = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;
const VERSION = "v1776356872"; // nomination images version

/**
 * Append .jpg extension if not already present
 */
function withExt(publicId: string): string {
  return publicId.includes(".") ? publicId : `${publicId}.jpg`;
}

/**
 * Generate Cloudinary URL — includes version number to avoid 404s
 */
export function getNominationUrl(publicId: string): string {
  return `${BASE_URL}/${VERSION}/${withExt(publicId)}`;
}

/**
 * Nomination image presets — version-safe URLs
 */
export const nominationPresets = {
  card: (publicId: string) => getNominationUrl(publicId),
  fullsize: (publicId: string) => getNominationUrl(publicId),
};

export interface Nomination {
  id: number;
  publicId: string;
  title: string;
  organization: string;
  year: string;
  description: string;
}

export const nominations: Nomination[] = [
  {
    id: 1,
    publicId: "nomination1_whw5do",
    title: "Outstanding Leadership Nomination",
    organization: "Elite Career Initiative",
    year: "2026",
    description:
      "Recognized for exceptional leadership in bridging the gap between education and employment across Ghana.",
  },
  {
    id: 2,
    publicId: "nomination2_ibt57i",
    title: "Career Development Excellence",
    organization: "Elite Career Initiative",
    year: "2026",
    description:
      "Nominated for outstanding contributions to career coaching and workforce development in Ghana.",
  },
  {
    id: 3,
    publicId: "nomination3_q7x6s4",
    title: "Women in Leadership Award",
    organization: "Elite Career Initiative",
    year: "2026",
    description:
      "Nominated in recognition of inspiring leadership and dedication to empowering Ghana's future workforce.",
  },
];