// src/data/galleryData.ts

export type GalleryCategory =
  | "All"
  | "Workshops"
  | "Coaching Sessions"
  | "Career Training"
  | "Community Outreach"
  | "Partnerships"
  | "Graduations";

export interface GalleryImage {
  id: number;
  publicId: string;
  caption: string;
  category: GalleryCategory;
  date: string;
  location: string;
  featured: boolean;
}


export const galleryImages: GalleryImage[] = [

  { id: 6,   publicId: "RYAN6452_efh0m2",  caption: "Networking and mentorship at ECI Workshop",                  category: "Workshops", date: "2026", location: "Accra, Ghana", featured: false },
  { id: 8,   publicId: "RYAN6061_m5apu7",  caption: "Our Keynote Speaker",                 category: "Workshops", date: "2026", location: "Accra, Ghana", featured: true },
  { id: 10,  publicId: "RYAN6044_as1qo9",  caption: "ECI facilitator leading a career readiness session",         category: "Workshops", date: "2026", location: "Accra, Ghana", featured: false  },
  { id: 11,  publicId: "RYAN5881_ebad1b",  caption: "Career coaching and mentorship in progress",                 category: "Workshops", date: "2026", location: "Accra, Ghana", featured: false },
  { id: 12,  publicId: "RYAN6383_nsobhf",  caption: "ECI team and participants celebrating progress",             category: "Workshops", date: "2026", location: "Accra, Ghana", featured: false },
  { id: 13,  publicId: "RYAN6259_srqmwm",  caption: "Interactive workshop session on career development",         category: "Workshops", date: "2026", location: "Accra, Ghana", featured: false },
  { id: 14,  publicId: "RYAN6374_ewfxp3",  caption: "ECI founder with the MC",   category: "Workshops", date: "2026", location: "Accra, Ghana", featured: true },
  { id: 15,  publicId: "RYAN5973_coqeor",  caption: "Contributions from Founder at the ECI Workshop",                  category: "Workshops", date: "2026", location: "Accra, Ghana", featured: false },
  { id: 17,  publicId: "RYAN5949_pwjnfs",  caption: "Empowering participants through career development",         category: "Workshops", date: "2026", location: "Accra, Ghana", featured: false },
  { id: 18,  publicId: "RYAN5844_ff2ybl",  caption: "Awards presented to Speakers",         category: "Workshops", date: "2026", location: "Accra, Ghana", featured: false },
  { id: 19,  publicId: "RYAN5947_vhypuj",  caption: "Participants contributing to the session",                category: "Workshops", date: "2026", location: "Accra, Ghana", featured: false },
  { id: 20,  publicId: "RYAN6445_fj8l6s",  caption: "Mentorship and career coaching at ECI Workshop",             category: "Workshops", date: "2026", location: "Accra, Ghana", featured: false },
  { id: 21,  publicId: "RYAN5846_o9ksix",  caption: "Award to key speaker Edward Debrah",                    category: "Workshops", date: "2026", location: "Accra, Ghana", featured: false },

  { id: 27,  publicId: "RYAN6103_ocfv00",  caption: "Participants receiving personalized career guidance",        category: "Workshops", date: "2026", location: "Accra, Ghana", featured: false },
  { id: 28,  publicId: "RYAN5969_fgd28b",  caption: "ECI team supporting participants on their career journey",   category: "Workshops", date: "2026", location: "Accra, Ghana", featured: false },
  { id: 29,  publicId: "RYAN5940_jsso2i",  caption: "Closing moments of an impactful ECI Workshop",               category: "Workshops", date: "2026", location: "Accra, Ghana", featured: false },
  { id: 30,  publicId: "RYAN6299_tulr5n",  caption: "Award to MC",            category: "Workshops", date: "2026", location: "Accra, Ghana", featured: true },
  { id: 31,  publicId: "RYAN6257_yb3wue",  caption: "Hands-on career training session with ECI team",             category: "Workshops", date: "2026", location: "Accra, Ghana", featured: false },
  { id: 32,  publicId: "RYAN6287_ey4gsp",  caption: "Edna Frimpong Receiving an award at Elite Career Initiative Workshop",        category: "Workshops", date: "2026", location: "Accra, Ghana", featured: false },
  { id: 33,  publicId: "RYAN6200_u1fd2w",  caption: "Career development talk by ECI leadership",                  category: "Workshops", date: "2026", location: "Accra, Ghana", featured: false },
  { id: 34,  publicId: "RYAN6139_h6kwen",  caption: "ECI Team",   category: "Workshops", date: "2026", location: "Accra, Ghana", featured: false },
  { id: 35,  publicId: "RYAN6418_w9fxhi",  caption: "Career readiness training in session",                       category: "Workshops", date: "2026", location: "Accra, Ghana", featured: false },
  { id: 36,  publicId: "RYAN6156_iz2izj",  caption: "Participants engaging at the ECI Career Workshop",           category: "Workshops", date: "2026", location: "Accra, Ghana", featured: false },
  { id: 38,  publicId: "RYAN6267_jgh2l2",  caption: "Panel Discussion",                  category: "Workshops", date: "2026", location: "Accra, Ghana", featured: false },
  { id: 39,  publicId: "RYAN6359_uzdg9p",  caption: "Interactive workshop session on career development",         category: "Workshops", date: "2026", location: "Accra, Ghana", featured: false },
  { id: 40,  publicId: "RYAN6184_rpdr6x",  caption: "Personalized coaching at the ECI Workshop",                  category: "Workshops", date: "2026", location: "Accra, Ghana", featured: false },
  // { id: 42,  publicId: "RYAN6182_zpehcr",  caption: "ECI Workshop — transforming careers across Ghana",           category: "Workshops", date: "2026", location: "Accra, Ghana", featured: false },
  { id: 43,  publicId: "RYAN6442_aotbwb",  caption: "Group activity at the Elite Career Initiative program",      category: "Workshops", date: "2026", location: "Accra, Ghana", featured: false },
//  { id: 50,  publicId: "RYAN6020_prpnci",  caption: "ECI participants building workplace readiness skills",        category: "Workshops", date: "2026", location: "Accra, Ghana", featured: false },
  { id: 51,  publicId: "RYAN6230_sdzunp",  caption: "Career coaching and mentorship in progress",                 category: "Workshops", date: "2026", location: "Accra, Ghana", featured: false },
  { id: 52,  publicId: "RYAN5888_nfdqva",  caption: "Group session at the Elite Career Initiative Workshop",      category: "Workshops", date: "2026", location: "Accra, Ghana", featured: false },
  { id: 53,  publicId: "RYAN6050_m7czce",  caption: "ECI career development workshop in full swing",              category: "Workshops", date: "2026", location: "Accra, Ghana", featured: false },
  { id: 54,  publicId: "RYAN6430_mx3cfn",  caption: "Hands-on career training session with ECI team",             category: "Workshops", date: "2026", location: "Accra, Ghana", featured: false },
  { id: 55,  publicId: "RYAN6394_qg1o0w",  caption: "ECI TEAM",              category: "Workshops", date: "2026", location: "Accra, Ghana", featured: true },
//   { id: 56,  publicId: "RYAN6399_fyxzac",  caption: "ECI Workshop opening — bridging education and employment",   category: "Workshops", date: "2026", location: "Accra, Ghana", featured: true },
  { id: 57,  publicId: "RYAN5908_it3jwd",  caption: "Participants receiving personalized career guidance",        category: "Workshops", date: "2026", location: "Accra, Ghana", featured: false },
  { id: 58,  publicId: "RYAN6053_divhib",  caption: "ECI team supporting participants on their career journey",   category: "Workshops", date: "2026", location: "Accra, Ghana", featured: false },
  { id: 59,  publicId: "RYAN5876_lppxpb",  caption: "Closing moments of an impactful ECI Workshop",               category: "Workshops", date: "2026", location: "Accra, Ghana", featured: false },
//   { id: 60,  publicId: "RYAN6183_xi8pzs",  caption: "ECI facilitator leading a career readiness session",         category: "Workshops", date: "2026", location: "Accra, Ghana", featured: true },
  { id: 61,  publicId: "RYAN5979_fbh9st",  caption: "Career development talk by ECI leadership",                  category: "Workshops", date: "2026", location: "Accra, Ghana", featured: false },
  { id: 62,  publicId: "RYAN6329_iclnwk",  caption: "Participants at the ECI career empowerment program",         category: "Workshops", date: "2026", location: "Accra, Ghana", featured: true },
  { id: 63,  publicId: "RYAN6435_wee76k",  caption: "Bridging classroom to workplace — ECI in action",            category: "Workshops", date: "2026", location: "Accra, Ghana", featured: true },
  { id: 64,  publicId: "RYAN6323_zdsfzi",  caption: "Group photo at the Elite Career Initiative Workshop",        category: "Workshops", date: "2026", location: "Accra, Ghana", featured: false },
  { id: 65,  publicId: "RYAN6354_guvpyi",  caption: "ECI Workshop — empowering Ghana's future workforce",         category: "Workshops", date: "2026", location: "Accra, Ghana", featured: false },
  { id: 66,  publicId: "RYAN6105_e8umav",  caption: "Team collaboration during career development training",      category: "Workshops", date: "2026", location: "Accra, Ghana", featured: false },
  { id: 67,  publicId: "RYAN6388_bkpqqy",  caption: "Career training resources and materials session",            category: "Workshops", date: "2026", location: "Accra, Ghana", featured: false },
  { id: 68,  publicId: "RYAN5972_tlbovh",  caption: "ECI facilitator engaging with workshop participants",        category: "Workshops", date: "2026", location: "Accra, Ghana", featured: false },
 { id: 86,  publicId: "RYAN6231_u4t2dr",  caption: "ECI team supporting participants on their career journey",   category: "Workshops", date: "2026", location: "Accra, Ghana", featured: false },
  { id: 114, publicId: "RYAN6029_sdkbsy",  caption: "Hands-on career training session with ECI team",             category: "Workshops", date: "2026", location: "Accra, Ghana", featured: false },
  { id: 116, publicId: "RYAN5918_ss6z7h",  caption: "ECI Workshop opening — bridging education and employment",   category: "Workshops", date: "2026", location: "Accra, Ghana", featured: false },
   { id: 119, publicId: "RYAN6364_x7xjt9",  caption: "Interactive workshop session on career development",         category: "Workshops", date: "2026", location: "Accra, Ghana", featured: false },
  { id: 120, publicId: "RYAN5963_p7y8ug",  caption: "Empowering participants through career development",         category: "Workshops", date: "2026", location: "Accra, Ghana", featured: false },
  { id: 121, publicId: "RYAN6414_vmuxqq",  caption: "ECI Team behind the scenes",           category: "Workshops", date: "2026", location: "Accra, Ghana", featured: true },
  { id: 130, publicId: "RYAN6094_worfir",  caption: "ECI career development workshop in full swing",              category: "Workshops", date: "2026", location: "Accra, Ghana", featured: false },
  { id: 144, publicId: "RYAN61GTf37_p7frpq", caption: "ECI Workshop — transforming careers across Ghana",         category: "Workshops", date: "2026", location: "Accra, Ghana", featured: false },
  { id: 145, publicId: "RYAN6116_zwbao2",  caption: "Our Guest Speaker",            category: "Workshops", date: "2026", location: "Accra, Ghana", featured: true },
  { id: 146, publicId: "RYAN6405_ffdolb",  caption: "ECI team",         category: "Workshops", date: "2026", location: "Accra, Ghana", featured: false },
  { id: 147, publicId: "RYAN6402_tqawcx",  caption: "Networking and Mentorship at ECI Workshop",        category: "Workshops", date: "2026", location: "Accra, Ghana", featured: false },
  { id: 149, publicId: "RYAN6320_c1qxy3",  caption: "Closing moments of an impactful ECI Workshop",               category: "Workshops", date: "2026", location: "Accra, Ghana", featured: false },
  { id: 151, publicId: "RYAN6223_nddvd7",  caption: "Partners from the Ghana Service paying us a visit",              category: "Workshops", date: "2026", location: "Accra, Ghana", featured: false },
  { id: 154, publicId: "RYAN6170_qxqzsh",  caption: "Participants engaging at the ECI Career Workshop",           category: "Workshops", date: "2026", location: "Accra, Ghana", featured: false },
  { id: 155, publicId: "RYAN5975_mzxjoh",  caption: "Introductory address by the Founder",                  category: "Workshops", date: "2026", location: "Accra, Ghana", featured: false },
  { id: 156, publicId: "RYAN6081_atbocj",  caption: "Team collaboration during career development training",      category: "Workshops", date: "2026", location: "Accra, Ghana", featured: false },
  { id: 157, publicId: "RYAN5970_zuydkl",  caption: "Bridging classroom to workplace — ECI in action",            category: "Workshops", date: "2026", location: "Accra, Ghana", featured: false },
  { id: 158, publicId: "RYAN6071_ao9tcu",  caption: "ECI Workshop — empowering Ghana's future workforce",         category: "Workshops", date: "2026", location: "Accra, Ghana", featured: false },
//   // Original 33 images retained below for completeness
//   { id: 159, publicId: "RYAN6399_kwxrow",  caption: " ECI team",             category: "Workshops", date: "2026", location: "Accra, Ghana", featured: false },
];

export const heroImages = galleryImages.filter((img) => img.featured);

export const galleryCategories: GalleryCategory[] = [
  "All",
  ...Array.from(new Set(galleryImages.map((img) => img.category))),
];

export function getImagesByCategory(category: GalleryCategory): GalleryImage[] {
  if (category === "All") return galleryImages;
  return galleryImages.filter((img) => img.category === category);
}