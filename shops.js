/* ===================================================================
   MGG PHARMACY – ALL SHOPS LIVE HERE.  This is the only file you edit.
   TO ADD A NEW SHOP: copy one block below, paste it after the last shop
   (keep the comma between blocks), change the short name on the left
   (lowercase, no spaces) and the details. Then add a folder with the
   same short name inside "images" and put shop1.jpg, shop2.jpg, shop3.jpg.
   Its page will be:  shop.html?s=<short name>
   =================================================================== */

/* Same for every shop (change once, applies everywhere) */
const COMMON = {
  tagline: "Genuine medicines. Home delivery available.",
  logo: "images/MGG_logo.png",
  orderPhone: "70946 81000",          // also used for WhatsApp
  email: "esi.mgg1808@gmail.com",
  website: "www.mgg.care",
  social: [                           // leave url empty ("") to hide a row
    {name:"Instagram", icon:"instagram", url:"https://www.instagram.com/mggcare"},
    {name:"Facebook",  icon:"facebook",  url:"https://www.facebook.com/profile.php?id=61592327267122"},
    {name:"YouTube",   icon:"youtube",   url:"https://www.youtube.com/@MggCare"}
  ]
};

/* One block per shop */
const SHOPS = {
  "varadharajapuram": {
    name: "MGG Pharmacy Varadharajapuram",
    shopPhone: "70946 82000",
    address: "No. 81, RVL Nagar Main Road,Opp to ESI hospital, Varadharajapuram, Coimbatore, Tamil Nadu 641015",
    hours: "Mon–Sun: 7:00 AM – 11:00 PM",
    mapsLink: "https://maps.google.com/?q=MGG+Pharmacy+Varadharajapuram+Coimbatore",
    mapQuery: "MGG Pharmacy Varadharajapuram Coimbatore",
    mapEmbed: ""     // BEST: Google Maps > Share > Embed a map > paste ONLY the src="..." link here
  },
  "shop2": {
    name: "MGG Pharmacy SHOP 2 NAME",
    shopPhone: "XXXXX XXXXX",
    address: "SHOP 2 FULL ADDRESS, Coimbatore, Tamil Nadu",
    hours: "Mon–Sun: 7:00 AM – 11:00 PM",
    mapsLink: "https://maps.google.com/?q=MGG+Pharmacy+SHOP+2+NAME+Coimbatore",
    mapQuery: "MGG Pharmacy SHOP 2 NAME Coimbatore",
    mapEmbed: ""
  },
  "shop3": {
    name: "MGG Pharmacy SHOP 3 NAME",
    shopPhone: "XXXXX XXXXX",
    address: "SHOP 3 FULL ADDRESS, Coimbatore, Tamil Nadu",
    hours: "Mon–Sun: 7:00 AM – 11:00 PM",
    mapsLink: "https://maps.google.com/?q=MGG+Pharmacy+SHOP+3+NAME+Coimbatore",
    mapQuery: "MGG Pharmacy SHOP 3 NAME Coimbatore",
    mapEmbed: ""
  }
};
