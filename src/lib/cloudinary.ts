// src/lib/cloudinary.ts

const CLOUD_NAME = "dyli0xrkw";
const BASE_URL = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;

/**
 * Append .jpg extension if not already present.
 */
function withExt(publicId: string): string {
  return publicId.includes(".") ? publicId : `${publicId}.jpg`;
}

/**
 * Generate a Cloudinary URL with transformations
 */
export function getImageUrl(
  publicId: string,
  options: {
    width?: number;
    height?: number;
    quality?: "auto" | number;
    format?: "auto" | "webp" | "jpg" | "png";
    crop?: "fill" | "fit" | "scale" | "limit" | "thumb";
    /** Cloudinary gravity (e.g. auto, face) — use with c_fill for smarter focal point */
    gravity?: "auto" | "face" | "center" | "north" | "south" | "east" | "west";
  } = {}
): string {
  const {
    width,
    height,
    quality = "auto",
    format = "auto",
    crop = "fill",
    gravity,
  } = options;

  const transforms: string[] = [`f_${format}`, `q_${quality}`];
  if (width) transforms.push(`w_${width}`);
  if (height) transforms.push(`h_${height}`);
  if (width || height) transforms.push(`c_${crop}`);
  if (gravity) transforms.push(`g_${gravity}`);

  return `${BASE_URL}/${transforms.join(",")}/${withExt(publicId)}`;
}

/**
 * Preset sizes — tuned for sharp display at actual screen sizes
 */
export const imagePresets = {
  // Gallery grid — entire image visible inside max box (no hard crop)
  thumbnail: (publicId: string) =>
    getImageUrl(publicId, { width: 1200, height: 1200, crop: "fit" }),

  // Gallery hero — fill wide banner; g_auto keeps important regions when cropping
  hero: (publicId: string) =>
    getImageUrl(publicId, { width: 2400, height: 1200, crop: "fill", gravity: "auto" }),

  // Lightbox — scale by width so nothing is cropped
  fullsize: (publicId: string) =>
    getImageUrl(publicId, { width: 2560, crop: "scale", quality: "auto", format: "auto" }),

  // CEO portrait — sharp circular crop
  portrait: (publicId: string) =>
    getImageUrl(publicId, { width: 800, height: 800, crop: "fill" }),

  // CEO nominations — full poster visible, no cropping
  nomination: (publicId: string) =>
    getImageUrl(publicId, { width: 1000, height: 1400, crop: "fit" }),
};