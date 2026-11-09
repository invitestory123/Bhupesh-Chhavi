/**
 * Single source of truth for one couple's invitation.
 * Duplicate the project, edit this file, swap the images in src/assets, deploy.
 */

export const invitation = {
  couple: {
    order: "groom-first",
    groom: "Bhupesh",
    groomShort: "Bhupesh",
    groomParents: "Mrs. Parveen Rani & Mr. Tarsem Bansal",
    bride: "Chhavi",
    brideShort: "Chhavi",
    brideParents: "MRS. SARITA MITTAL & MR. ROSHAN LAL MITTAL",
    hashtag: "#BhupeshWedsChhavi",
  },
  invite: {
    kicker: "Mrs. Parveen Rani & Mr. Tarsem Bansal",
    line: "solicit your gracious presence on the auspicious occasion of the marriage of their beloved son",
  },
  event: {
    title: "The Wedding of Bhupesh & Chhavi",
    type: "Wedding Ceremony",
    /** ISO with timezone offset — India Standard Time */
    startsAt: "2026-11-13T20:15:00+05:30",
    endsAt: "2026-11-14T02:00:00+05:30",
    dateLabel: "13 . 11 . 2026",
    dayLabel: "Friday",
    timeLabel: "8:15 PM",
    dressCode: "Traditional / Festive Indian Attire",
    note: "Dinner and celebrations to follow",
  },
  sehraBandi: {
    name: "Sehra Bandi",
    time: "10:15 AM",
    venue: "At our residence",
    url: "https://maps.app.goo.gl/ubFYiRuwKAZRgF428",
  },
  venue: {
    name: "The Grand Mirage",
    address: "Bathinda-Goniana Road, Bathinda",
    mapsQuery: "The Grand Mirage, Bathinda-Goniana Road, Bathinda",
    url: "https://share.google/MJ2WXAVLILs7JBH7a",
    lat: 30.2618,
    lng: 74.9351,
  },
  story: [
    {
      year: "September 2026",
      title: "The First Chapter",
      text: "A serendipitous meeting, shared smiles, and the beginning of a beautiful journey together.",
      image: "story-2",
    },
    {
      year: "October 2026",
      title: "Growing Together",
      text: "Countless cherished moments, mutual affection, and two families coming together with joy.",
      image: "story-3",
    },
    {
      year: "November 2026",
      title: "The Wedding Day",
      text: "Surrounded by our loved ones and blessings, we unite our lives in sacred matrimony.",
      image: "story-1",
    },
  ],
  blessing: {
    line: "॥ श्री गणेशाय नमः ॥",
    translation:
      "विघ्न हरण मंगल करण, गौरीसुत गणराज । प्रथम निमंत्रण आपको, पूरन करियो काज ॥",
    source: "Shree Ganesh Vandana",
  },
  footer: {
    families: "With love & blessings from the Bansal Family",
    warmRegards: [
      "Late Smt. Murti Devi & Sh. Rajinder Kumar Garg",
      "Smt. Sarla Devi - Sh. Bhushan Goyal",
      "Mrs. Payal Garg - Mr. Chandankant Garg",
      "Er. Jatin Bansal",
    ],
    familyFlowers: "Joel, Bhavish",
    rsvp: "Babu Ram Tarsem Kumar (Snuff Manufacturer)",
    contacts: [],
  },
  meta: {
    title: "Bhupesh & Chhavi — Wedding Invitation",
    description:
      "Mrs. Parveen Rani & Mr. Tarsem Bansal solicit your gracious presence on the auspicious occasion of the marriage of their beloved son Bhupesh with Chhavi on Friday, 13th November, 2026 at The Grand Mirage, Bathinda.",
    url: "https://bhupesh-chhavi.vercel.app",
    image: "https://media.invitestory.in/sage-parchment/og-image.jpg",
    siteName: "Bhupesh & Chhavi Wedding",
  },
} as const;

export type Invitation = typeof invitation;
