import { Server, ServerStack, ShoppingBag, ShoppingCart, Sidebar } from "@medusajs/icons";
import React from "react";

export const data = [
  {
    id: "p1",
    title: "Womens & Girls Fashion",
    icon: <ShoppingBag />,
    childCategories: [
      {
        id: "p1c1",
        title: "Traditional Wear",
        grandChildCategories: [
          {
            id: "p1c1gc1",
            title: "Shalwar Kameez",
          },
          {
            id: "p1c1gc2",
            title: "Sarees",
          },
          {
            id: "p1c1gc3",
            title: "Kurtis",
          },
          {
            id: "p1c1gc4",
            title: "Unstitched Fabrics",
          },
          {
            id: "p1c1gc5",
            title: "Party Kameez & Gowns",
          },
          {
            id: "p1c1gc6",
            title: "Palazzo Pants & Culottes",
          },
          {
            id: "p1c1gc7",
            title: "Pants, Palazzo & Capris",
          },
        ],
      },
      {
        id: "p1c2",
        title: "Muslim Wear",
        grandChildCategories: [
          {
            id: "p1c2gc1",
            title: "Abayas & Long Dresses",
          },
          {
            id: "p1c2gc2",
            title: "Hijabs",
          },
          {
            id: "p1c2gc3",
            title: "Brooches",
          },
        ],
      },
      {
        id: "p1c3",
        title: "Western Wear",
        icon: <ShoppingCart />,
        grandChildCategories: [
          {
            id: "p1c3gc1",
            title: "Dresses",
          },
          {
            id: "p1c3gc2",
            title: "Tunics",
          },
          {
            id: "p1c3gc3",
            title: "T-Shirts",
          },
          {
            id: "p1c3gc4",
            title: "Tops",
          },
          {
            id: "p1c3gc5",
            title: "Skirts",
          },
        ],
      },
      {
        id: "p1c4",
        title: "Innerwear",
        icon: <ShoppingCart />,
        grandChildCategories: [
          {
            id: "p1c4gc1",
            title: "Bras",
          },
          {
            id: "p1c4gc2",
            title: "Lingerie Sets",
          },
          {
            id: "p1c4gc3",
            title: "Panties",
          },
          {
            id: "p1c4gc4",
            title: "Robes & Bodysuits",
          },
          {
            id: "p1c4gc5",
            title: "Sleep & Loungewear",
          },
          {
            id: "p1c4gc6",
            title: "Tank Tops",
          },
          {
            id: "p1c4gc7",
            title: "Shapewear",
          },
        ],
      },
      {
        id: "p1c5",
        title: "Shoes",
        icon: <ShoppingCart />,
        grandChildCategories: [
          {
            id: "p1c5gc1",
            title: "Heels",
          },
          {
            id: "p1c5gc2",
            title: "Flats",
          },
          {
            id: "p1c5gc3",
            title: "Sneakers",
          },
          {
            id: "p1c5gc4",
            title: "Pump Shoes",
          },
        ],
      },
      {
        id: "p1c6",
        title: "Bags",
        icon: <ShoppingCart />,
        grandChildCategories: [
          {
            id: "p1c6gc1",
            title: "Crossbody & Shoulder Bags",
          },
          {
            id: "p1c6gc2",
            title: "Backpacks",
          },
          {
            id: "p1c6gc3",
            title: "Wallets",
          },
          {
            id: "p1c6gc4",
            title: "Top Handle Bags",
          },
        ],
      },
      {
        id: "p1c7",
        title: "Watches",
        icon: <ShoppingCart />,
        grandChildCategories: [
          {
            id: "p1c7gc1",
            title: "Casual",
          },
          {
            id: "p1c7gc2",
            title: "Fashion",
          },
          {
            id: "p1c7gc3",
            title: "Business",
          },
          {
            id: "p1c7gc4",
            title: "Sports",
          },
          {
            id: "p1c7gc5",
            title: "Accessories",
          },
        ],
      },
    ],
  },
  {
    id: "p2",
    title: "Health & Beauty",
    icon: <ShoppingCart />,
    childCategories: [
      {
        id: "p2c1",
        title: "Skin Care",
        grandChildCategories: [
          {
            id: "p2c1gc1",
            title: "Face Mask & Packs",
          },
          {
            id: "p2c1gc2",
            title: "Face Wash & Cleansers",
          },
          {
            id: "p2c1gc3",
            title: "Toner & Mists",
          },
          {
            id: "p2c1gc4",
            title: "Serum & Essence",
          },
          {
            id: "p2c1gc5",
            title: "Moisturizers & Cream",
          },
          {
            id: "p2c1gc6",
            title: "Sunscreen & Aftersun",
          },
          {
            id: "p2c1gc7",
            title: "Lip Balm & Treatment",
          },
          {
            id: "p2c1gc8",
            title: "Night Cream",
          },
          {
            id: "p2c1gc9",
            title: "Laikou",
          },
          {
            id: "p2c1gc10",
            title: "Bioaqua",
          },
          {
            id: "p2c1gc11",
            title: "Mamaerth",
          },
          {
            id: "p2c1gc12",
            title: "Simple",
          },
        ],
      },
      {
        id: "p2c2",
        title: "Hair Care",
        icon: <ShoppingCart />,
        grandChildCategories: [
          {
            id: "p2c2gc1",
            title: "Hair Oils",
          },
          {
            id: "p2c2gc2",
            title: "Hair Treatments",
          },
          {
            id: "p2c2gc3",
            title: "Hair Coloring",
          },
          {
            id: "p2c2gc4",
            title: "Shampoo",
          },
          {
            id: "p2c2gc5",
            title: "Conditioner",
          },
          {
            id: "p2c2gc6",
            title: "Hair Care Accessories",
          },
          {
            id: "p2c2gc7",
            title: "Wow Skin Science",
          },
          {
            id: "p2c2gc8",
            title: "Sunsilk",
          },
          {
            id: "p2c2gc9",
            title: "Ribana",
          },
          {
            id: "p2c2gc10",
            title: "Parachute",
          },
          {
            id: "p2c2gc11",
            title: "Tresemme",
          },
          {
            id: "p2c2gc11",
            title: "Dove",
          },
        ],
      },
      {
        id: "p2c3",
        title: "Makeup",
        icon: <ShoppingCart />,
        grandChildCategories: [
          {
            id: "p2c3gc1",
            title: "Face",
          },
          {
            id: "p2c3gc2",
            title: "Eyes",
          },
          {
            id: "p2c3gc3",
            title: "Lips",
          },
          {
            id: "p2c3gc4",
            title: "Nails",
          },
          {
            id: "p2c3gc5",
            title: "Makeup Palettes & Sets",
          },
        ],
      },
      {
        id: "p2c4",
        title: "Fragrances",
        icon: <ShoppingCart />,
        grandChildCategories: [
          {
            id: "p2c4gc1",
            title: "Womens Perfume",
          },
          {
            id: "p2c4gc2",
            title: "Womens Body Spray",
          },
          {
            id: "p2c4gc3",
            title: "Roll-on & Deo",
          },
          {
            id: "p2c4gc4",
            title: "Mens Perfume",
          },
          {
            id: "p2c4gc5",
            title: "Mens Body Spray",
          },
          {
            id: "p2c4gc6",
            title: "Attar",
          },
          {
            id: "p2c4gc7",
            title: "My Perfumes",
          },
        ],
      },
      {
        id: "p2c5",
        title: "Beauty Tools",
        icon: <ShoppingCart />,
        grandChildCategories: [
          {
            id: "p2c5gc1",
            title: "Skin Care Tools",
          },
          {
            id: "p2c5gc2",
            title: "Hair Styling Appliances",
          },
          {
            id: "p2c5gc3",
            title: "Electric Massagers",
          },
          {
            id: "p2c5gc4",
            title: "Hair Removal Accessories ",
          },
        ],
      },
      {
        id: "p2c6",
        title: "Bath & Body",
        icon: <ShoppingCart />,
        grandChildCategories: [
          {
            id: "p2c6gc1",
            title: "Body & Massage Oils",
          },
          {
            id: "p2c6gc2",
            title: "Body Scrubs",
          },
          {
            id: "p2c6gc3",
            title: "Soaps & Body Wash",
          },
          {
            id: "p2c6gc4",
            title: "Hair Removal",
          },
        ],
      },
      {
        id: "p2c7",
        title: "Personal Care",
        icon: <ShoppingCart />,
        grandChildCategories: [
          {
            id: "p2c7gc1",
            title: "Toothpaste",
          },
          {
            id: "p2c7gc2",
            title: "Toothbrush",
          },
          {
            id: "p2c7gc3",
            title: "Electric Toothbrush",
          },
          {
            id: "p2c7gc4",
            title: "Dental Floss",
          },
          {
            id: "p2c7gc5",
            title: "Mouthwash",
          },
        ],
      },
    ],
  },
  {
    id: "p3",
    title: "Watches, Bags, Jewellery",
    icon: <ShoppingCart />,
    childCategories: [
      {
        id: "p3c1",
        title: "Kids Bags",
        grandChildCategories: [
          {
            id: "p3c1gc1",
            title: "Backpacks",
          },
          {
            id: "p3c1gc2",
            title: "Bags",
          },
          {
            id: "p3c1gc3",
            title: "School Bags & Backpack",
          },
          {
            id: "p3c1gc4",
            title: "Serum & Essence",
          },
          {
            id: "p3c1gc5",
            title: "Moisturizers & Cream",
          },
          {
            id: "p3c1gc6",
            title: "Sunscreen & Aftersun",
          },
          {
            id: "p3c1gc7",
            title: "Lip Balm & Treatment",
          },
          {
            id: "p3c1gc8",
            title: "Night Cream",
          },
          {
            id: "p3c1gc9",
            title: "Laikou",
          },
          {
            id: "p3c1gc10",
            title: "Bioaqua",
          },
          {
            id: "p3c1gc11",
            title: "Mamaerth",
          },
          {
            id: "p3c1gc12",
            title: "Simple",
          },
        ],
      },
      {
        id: "p3c2",
        title: "Laptop Bags & Cases",
        icon: <ShoppingCart />,
        grandChildCategories: [
          {
            id: "p3c2gc1",
            title: "Backpacks",
          },
          {
            id: "p3c2gc2",
            title: "Briefcases",
          },
          {
            id: "p3c2gc3",
            title: "Laptop cases",
          },
          {
            id: "p3c2gc4",
            title: "Shoulder & Messenger Bags",
          },
          {
            id: "p3c2gc5",
            title: "Conditioner",
          },
          {
            id: "p3c2gc6",
            title: "Hair Care Accessories",
          },
          {
            id: "p3c2gc7",
            title: "Wow Skin Science",
          },
          {
            id: "p3c2gc8",
            title: "Sunsilk",
          },
          {
            id: "p3c2gc9",
            title: "Ribana",
          },
          {
            id: "p3c2gc10",
            title: "Parachute",
          },
          {
            id: "p3c2gc11",
            title: "Tresemme",
          },
          {
            id: "p3c2gc11",
            title: "Dove",
          },
        ],
      },
      {
        id: "p3c3",
        title: "Luggage",
        icon: <ShoppingCart />,
        grandChildCategories: [
          {
            id: "p3c3gc1",
            title: "Carry-Ons",
          },
          {
            id: "p3c3gc2",
            title: "Kids Luggage",
          },
          {
            id: "p3c3gc3",
            title: "Luggage Sets",
          },
          {
            id: "p3c3gc4",
            title: "Suitcases",
          },
          {
            id: "p3c3gc5",
            title: "Travel Duffels",
          },
        ],
      },
      {
        id: "p3c4",
        title: "Travel Bags",
        icon: <ShoppingCart />,
        grandChildCategories: [
          {
            id: "p3c4gc1",
            title: "Waist Packs",
          },
          {
            id: "p3c4gc2",
            title: "Womens Body Spray",
          },
          {
            id: "p3c4gc3",
            title: "Roll-on & Deo",
          },
          {
            id: "p3c4gc4",
            title: "Mens Perfume",
          },
          {
            id: "p3c4gc5",
            title: "Mens Body Spray",
          },
          {
            id: "p3c4gc6",
            title: "Attar",
          },
          {
            id: "p3c4gc7",
            title: "My Perfumes",
          },
        ],
      },
      {
        id: "p3c5",
        title: "Men's Bags",
        icon: <ShoppingCart />,
        grandChildCategories: [
          {
            id: "p3c5gc1",
            title: "Backpacks",
          },
          {
            id: "p3c5gc2",
            title: "Business Bags",
          },
          {
            id: "p3c5gc3",
            title: "Crossbody Bags",
          },
          {
            id: "p3c5gc4",
            title: "Messenger Bags",
          },
        ],
      },
      {
        id: "p3c6",
        title: "Womens Bags",
        icon: <ShoppingCart />,
        grandChildCategories: [
          {
            id: "p3c6gc1",
            title: "Backpacks",
          },
          {
            id: "p3c6gc2",
            title: "Cross Body & Shoulder Bags",
          },
          {
            id: "p3c6gc3",
            title: "Bag Charms & Accessories",
          },
          {
            id: "p3c6gc4",
            title: "Clutches",
          },
        ],
      },
      {
        id: "p3c7",
        title: "Men's Watches",
        icon: <ShoppingCart />,
        grandChildCategories: [
          {
            id: "p3c7gc1",
            title: "Business",
          },
          {
            id: "p3c7gc2",
            title: "Casual",
          },
          {
            id: "p3c7gc3",
            title: "Fashion",
          },
          {
            id: "p3c7gc4",
            title: "Sports",
          },
          {
            id: "p3c7gc5",
            title: "Accessories",
          },
        ],
      },
    ],
  },
  {
    id: "p4",
    title: "Mens & Boys Fashion",

    icon: <ShoppingCart />,
    childCategories: [
      {
        id: "p4c1",
        title: "Clothing",
        grandChildCategories: [
          {
            id: "p4c1gc1",
            title: "T-Shirts",
          },
          {
            id: "p4c1gc2",
            title: "Jeans",
          },
          {
            id: "p4c1gc3",
            title: "Casual Shirts",
          },
          {
            id: "p4c1gc4",
            title: "Kurtas",
          },
          {
            id: "p4c1gc5",
            title: "Polo Shirts",
          },
          {
            id: "p4c1gc6",
            title: "Socks",
          },
          {
            id: "p4c1gc7",
            title: "Rain Goats & Trenches",
          },
          {
            id: "p4c1gc8",
            title: "Joggers & Sweats",
          },
          {
            id: "p4c1gc9",
            title: "Chinos",
          },
          {
            id: "p4c1gc10",
            title: "Trunks & Boxers",
          },
          {
            id: "p4c1gc11",
            title: "Mamaerth",
          },
          {
            id: "p4c1gc12",
            title: "Simple",
          },
        ],
      },
      {
        id: "p4c2",
        title: "Shoes",
        icon: <ShoppingCart />,
        grandChildCategories: [
          {
            id: "p4c2gc1",
            title: "Sneakers",
          },
          {
            id: "p4c2gc2",
            title: "Slip-Ons & Loafers",
          },
          {
            id: "p4c2gc3",
            title: "Flip Flops",
          },
          {
            id: "p4c2gc4",
            title: "Formal Shoes",
          },
          {
            id: "p4c2gc5",
            title: "Sandals",
          },
          {
            id: "p4c2gc6",
            title: "Rain Boots",
          },
          {
            id: "p4c2gc7",
            title: "Shoes Accessories",
          },
          {
            id: "p4c2gc8",
            title: "Sunsilk",
          },
          {
            id: "p4c2gc9",
            title: "Ribana",
          },
          {
            id: "p4c2gc10",
            title: "Parachute",
          },
          {
            id: "p4c2gc11",
            title: "Tresemme",
          },
          {
            id: "p4c2gc11",
            title: "Dove",
          },
        ],
      },
      {
        id: "p4c3",
        title: "Muslim Wear",
        icon: <ShoppingCart />,
        grandChildCategories: [
          {
            id: "p4c3gc1",
            title: "Batik Shirts",
          },
          {
            id: "p4c3gc2",
            title: "Jubbahs",
          },
          {
            id: "p4c3gc3",
            title: "Muslimin Shirts",
          },
          {
            id: "p4c3gc4",
            title: "Accessories",
          },
          {
            id: "p4c3gc5",
            title: "Travel Duffels",
          },
        ],
      },
      {
        id: "p4c4",
        title: "Accessories",
        icon: <ShoppingCart />,
        grandChildCategories: [
          {
            id: "p4c4gc1",
            title: "Belts",
          },
          {
            id: "p4c4gc2",
            title: "Bow Ties",
          },
          {
            id: "p4c4gc3",
            title: "Cufflinks",
          },
          {
            id: "p4c4gc4",
            title: "Hats & Caps",
          },
          {
            id: "p4c4gc5",
            title: "Ties",
          },
          {
            id: "p4c4gc6",
            title: "Umbrellas",
          },
          {
            id: "p4c4gc7",
            title: "My Perfumes",
          },
        ],
      },
      {
        id: "p4c5",
        title: "Bags",
        icon: <ShoppingCart />,
        grandChildCategories: [
          {
            id: "p4c5gc1",
            title: "Backpacks",
          },
          {
            id: "p4c5gc2",
            title: "Business Bags",
          },
          {
            id: "p4c5gc3",
            title: "Crossbody Bags",
          },
          {
            id: "p4c5gc4",
            title: "Messenger Bags",
          },
        ],
      },
      {
        id: "p4c6",
        title: "Watches",
        icon: <ShoppingCart />,
        grandChildCategories: [
          {
            id: "p4c6gc1",
            title: "Business",
          },
          {
            id: "p4c6gc2",
            title: "Casual",
          },
          {
            id: "p4c6gc3",
            title: "Fashion",
          },
          {
            id: "p4c6gc4",
            title: "Sports",
          },
        ],
      },
      {
        id: "p4c7",
        title: "Eyewear",
        grandChildCategories: [
          {
            id: "p4c7gc1",
            title: "Eyeglasses",
          },
          {
            id: "p4c7gc2",
            title: "Sunglasses",
          },
          {
            id: "p4c7gc3",
            title: "Fashion",
          },
          {
            id: "p4c7gc4",
            title: "Sports",
          },
          {
            id: "p4c7gc5",
            title: "Accessories",
          },
        ],
      },
    ],
  },
  {
    id: "p5",
    title: "Mother & Baby",
    icon: <ShoppingCart />,
    childCategories: [
      {
        id: "p5c1",
        title: "Diapering & Potty",
        grandChildCategories: [
          {
            id: "p5c1gc1",
            title: "Diapers",
          },
          {
            id: "p5c1gc2",
            title: "Cloth Diapers",
          },
          {
            id: "p5c1gc3",
            title: "Diaper Bags",
          },
          {
            id: "p5c1gc4",
            title: "Potty Chair & Seat",
          },
          {
            id: "p5c1gc5",
            title: "Wipes",
          },
          {
            id: "p5c1gc6",
            title: "Huggies",
          },
          {
            id: "p5c1gc7",
            title: "Molfix",
          },
          {
            id: "p5c1gc8",
            title: "Twinkle",
          },
          {
            id: "p5c1gc9",
            title: "Avonee",
          },
          {
            id: "p5c1gc10",
            title: "Smile",
          },
          {
            id: "p5c1gc11",
            title: "Neocare",
          },
          {
            id: "p5c1gc12",
            title: "Happy Nappy",
          },
        ],
      },
      {
        id: "p5c2",
        title: "Feeding",
        grandChildCategories: [
          {
            id: "p5c2gc1",
            title: "Baby & Toddler Foods",
          },
          {
            id: "p5c2gc2",
            title: "Bottle Feeding",
          },
          {
            id: "p5c2gc3",
            title: "Breastfeeding ",
          },
          {
            id: "p5c2gc4",
            title: "Feeding Chairs & Seats",
          },
          {
            id: "p5c2gc5",
            title: "Milk Formula",
          },
          {
            id: "p5c2gc6",
            title: "Feeding Bowls, Cups & Bibs",
          },
          {
            id: "p5c2gc7",
            title: "Milk Formula",
          },
          {
            id: "p5c2gc8",
            title: "Feeding Bowls, Cups & Bibs",
          },
          {
            id: "p5c2gc9",
            title: "Pacifiers",
          },
          {
            id: "p5c2gc10",
            title: "Cerelac",
          },
          {
            id: "p5c2gc11",
            title: "Lactogen",
          },
          {
            id: "p5c2gc11",
            title: "Nan",
          },
        ],
      },
      {
        id: "p5c3",
        title: "Baby Personal Care",
        grandChildCategories: [
          {
            id: "p5c3gc1",
            title: "Baby Detergent",
          },
          {
            id: "p5c3gc2",
            title: "Bathing Tubs & Toys",
          },
          {
            id: "p5c3gc3",
            title: "Shampoo & Conditioners",
          },
          {
            id: "p5c3gc4",
            title: "Lotions & Creams",
          },
          {
            id: "p5c3gc5",
            title: "Oils",
          },
        ],
      },
      {
        id: "p5c4",
        title: "Baby Gear",
        grandChildCategories: [
          {
            id: "p5c4gc1",
            title: "Baby Soft Carriers",
          },
          {
            id: "p5c4gc2",
            title: "Baby Car Seats",
          },
          {
            id: "p5c4gc3",
            title: "Kids Bags & Luggage",
          },
          {
            id: "p5c4gc4",
            title: "Playards & Playpens",
          },
          {
            id: "p5c4gc5",
            title: "Strollers & Prams",
          },
          {
            id: "p5c4gc6",
            title: "Bouncers & Jumpers",
          },
          {
            id: "p5c4gc7",
            title: "Swings",
          },
        ],
      },
      {
        id: "p5c5",
        title: "Nursery",
        grandChildCategories: [
          {
            id: "p5c5gc1",
            title: "Cribs & Cradles",
          },
          {
            id: "p5c5gc2",
            title: "Furniture Seats",
          },
          {
            id: "p5c5gc3",
            title: "Blankets & Wrappers",
          },
          {
            id: "p5c5gc4",
            title: "Baby Pillows & Protection",
          },
        ],
      },
      {
        id: "p5c6",
        title: "Maternity Care",
        grandChildCategories: [
          {
            id: "p5c6gc1",
            title: "Business",
          },
          {
            id: "p5c6gc2",
            title: "Casual",
          },
          {
            id: "p5c6gc3",
            title: "Fashion",
          },
          {
            id: "p5c6gc4",
            title: "Sports",
          },
        ],
      },
      {
        id: "p5c7",
        title: "Baby Care & Gifts",
        grandChildCategories: [
          {
            id: "p5c7gc1",
            title: "Eyeglasses",
          },
          {
            id: "p5c7gc2",
            title: "Sunglasses",
          },
          {
            id: "p5c7gc3",
            title: "Fashion",
          },
          {
            id: "p5c7gc4",
            title: "Sports",
          },
          {
            id: "p5c7gc5",
            title: "Accessories",
          },
        ],
      },
    ],
  },
  {
    id: "p6",
    title: "Electronic Devices",
    icon: <ShoppingCart />,
    childCategories: [
      {
        id: "p6c1",
        title: "Traditional Wear",
        grandChildCategories: [
          {
            id: "p6c1gc1",
            title: "Shalwar Kameez",
          },
          {
            id: "p6c1gc2",
            title: "Sarees",
          },
          {
            id: "p6c1gc3",
            title: "Kurtis",
          },
          {
            id: "p6c1gc4",
            title: "Unstitched Fabrics",
          },
          {
            id: "p6c1gc5",
            title: "Party Kameez & Gowns",
          },
          {
            id: "p6c1gc6",
            title: "Palazzo Pants & Culottes",
          },
          {
            id: "p6c1gc7",
            title: "Pants, Palazzo & Capris",
          },
        ],
      },
      {
        id: "p6c2",
        title: "Muslim Wear",
        grandChildCategories: [
          {
            id: "p6c2gc1",
            title: "Abayas & Long Dresses",
          },
          {
            id: "p6c2gc2",
            title: "Hijabs",
          },
          {
            id: "p6c2gc3",
            title: "Brooches",
          },
        ],
      },
      {
        id: "p6c3",
        title: "Western Wear",
        grandChildCategories: [
          {
            id: "p6c3gc1",
            title: "Dresses",
          },
          {
            id: "p6c3gc2",
            title: "Tunics",
          },
          {
            id: "p6c3gc3",
            title: "T-Shirts",
          },
          {
            id: "p6c3gc4",
            title: "Tops",
          },
          {
            id: "p6c3gc5",
            title: "Skirts",
          },
        ],
      },
      {
        id: "p6c4",
        title: "Innerwear",
        grandChildCategories: [
          {
            id: "p6c4gc1",
            title: "Bras",
          },
          {
            id: "p6c4gc2",
            title: "Lingerie Sets",
          },
          {
            id: "p6c4gc3",
            title: "Panties",
          },
          {
            id: "p6c4gc4",
            title: "Robes & Bodysuits",
          },
          {
            id: "p6c4gc5",
            title: "Sleep & Loungewear",
          },
          {
            id: "p6c4gc6",
            title: "Tank Tops",
          },
          {
            id: "p6c4gc7",
            title: "Shapewear",
          },
        ],
      },
      {
        id: "p6c5",
        title: "Shoes",
        grandChildCategories: [
          {
            id: "p6c5gc1",
            title: "Heels",
          },
          {
            id: "p6c5gc2",
            title: "Flats",
          },
          {
            id: "p6c5gc3",
            title: "Sneakers",
          },
          {
            id: "p6c5gc4",
            title: "Pump Shoes",
          },
        ],
      },
      {
        id: "p6c6",
        title: "Bags",
        grandChildCategories: [
          {
            id: "p6c6gc1",
            title: "Crossbody & Shoulder Bags",
          },
          {
            id: "p6c6gc2",
            title: "Backpacks",
          },
          {
            id: "p6c6gc3",
            title: "Wallets",
          },
          {
            id: "p6c6gc4",
            title: "Top Handle Bags",
          },
        ],
      },
      {
        id: "p6c7",
        title: "Watches",
        grandChildCategories: [
          {
            id: "p6c7gc1",
            title: "Casual",
          },
          {
            id: "p6c7gc2",
            title: "Fashion",
          },
          {
            id: "p6c7gc3",
            title: "Business",
          },
          {
            id: "p6c7gc4",
            title: "Sports",
          },
          {
            id: "p6c7gc5",
            title: "Accessories",
          },
        ],
      },
    ],
  },
  {
    id: "p7",
    title: "Tv & Home Appliances",
    icon: <ShoppingCart />,
    childCategories: [
      {
        id: "p7c1",
        title: "Skin Care",
        grandChildCategories: [
          {
            id: "p7c1gc1",
            title: "Face Mask & Packs",
          },
          {
            id: "p7c1gc2",
            title: "Face Wash & Cleansers",
          },
          {
            id: "p7c1gc3",
            title: "Toner & Mists",
          },
          {
            id: "p7c1gc4",
            title: "Serum & Essence",
          },
          {
            id: "p7c1gc5",
            title: "Moisturizers & Cream",
          },
          {
            id: "p7c1gc6",
            title: "Sunscreen & Aftersun",
          },
          {
            id: "p7c1gc7",
            title: "Lip Balm & Treatment",
          },
          {
            id: "p7c1gc8",
            title: "Night Cream",
          },
          {
            id: "p7c1gc9",
            title: "Laikou",
          },
          {
            id: "p7c1gc10",
            title: "Bioaqua",
          },
          {
            id: "p7c1gc11",
            title: "Mamaerth",
          },
          {
            id: "p7c1gc12",
            title: "Simple",
          },
        ],
      },
      {
        id: "p7c2",
        title: "Hair Care",
        grandChildCategories: [
          {
            id: "p7c2gc1",
            title: "Hair Oils",
          },
          {
            id: "p7c2gc2",
            title: "Hair Treatments",
          },
          {
            id: "p7c2gc3",
            title: "Hair Coloring",
          },
          {
            id: "p7c2gc4",
            title: "Shampoo",
          },
          {
            id: "p7c2gc5",
            title: "Conditioner",
          },
          {
            id: "p7c2gc6",
            title: "Hair Care Accessories",
          },
          {
            id: "p7c2gc7",
            title: "Wow Skin Science",
          },
          {
            id: "p7c2gc8",
            title: "Sunsilk",
          },
          {
            id: "p7c2gc9",
            title: "Ribana",
          },
          {
            id: "p7c2gc10",
            title: "Parachute",
          },
          {
            id: "p7c2gc11",
            title: "Tresemme",
          },
          {
            id: "p7c2gc11",
            title: "Dove",
          },
        ],
      },
      {
        id: "p7c3",
        title: "Makeup",
        grandChildCategories: [
          {
            id: "p7c3gc1",
            title: "Face",
          },
          {
            id: "p7c3gc2",
            title: "Eyes",
          },
          {
            id: "p7c3gc3",
            title: "Lips",
          },
          {
            id: "p7c3gc4",
            title: "Nails",
          },
          {
            id: "p7c3gc5",
            title: "Makeup Palettes & Sets",
          },
        ],
      },
      {
        id: "p7c4",
        title: "Fragrances",
        grandChildCategories: [
          {
            id: "p7c4gc1",
            title: "Womens Perfume",
          },
          {
            id: "p7c4gc2",
            title: "Womens Body Spray",
          },
          {
            id: "p7c4gc3",
            title: "Roll-on & Deo",
          },
          {
            id: "p7c4gc4",
            title: "Mens Perfume",
          },
          {
            id: "p7c4gc5",
            title: "Mens Body Spray",
          },
          {
            id: "p7c4gc6",
            title: "Attar",
          },
          {
            id: "p7c4gc7",
            title: "My Perfumes",
          },
        ],
      },
      {
        id: "p7c5",
        title: "Beauty Tools",
        grandChildCategories: [
          {
            id: "p7c5gc1",
            title: "Skin Care Tools",
          },
          {
            id: "p7c5gc2",
            title: "Hair Styling Appliances",
          },
          {
            id: "p7c5gc3",
            title: "Electric Massagers",
          },
          {
            id: "p7c5gc4",
            title: "Hair Removal Accessories ",
          },
        ],
      },
      {
        id: "p7c6",
        title: "Bath & Body",
        grandChildCategories: [
          {
            id: "p7c6gc1",
            title: "Body & Massage Oils",
          },
          {
            id: "p7c6gc2",
            title: "Body Scrubs",
          },
          {
            id: "p7c6gc3",
            title: "Soaps & Body Wash",
          },
          {
            id: "p7c6gc4",
            title: "Hair Removal",
          },
        ],
      },
      {
        id: "p7c7",
        title: "Personal Care",
        grandChildCategories: [
          {
            id: "p7c7gc1",
            title: "Toothpaste",
          },
          {
            id: "p7c7gc2",
            title: "Toothbrush",
          },
          {
            id: "p7c7gc3",
            title: "Electric Toothbrush",
          },
          {
            id: "p7c7gc4",
            title: "Dental Floss",
          },
          {
            id: "p7c7gc5",
            title: "Mouthwash",
          },
        ],
      },
    ],
  },
  {
    id: "p8",
    title: "Electronic Accessories",
    icon: <ShoppingCart />,
    childCategories: [
      {
        id: "p8c1",
        title: "Kids Bags",
        grandChildCategories: [
          {
            id: "p8c1gc1",
            title: "Backpacks",
          },
          {
            id: "p8c1gc2",
            title: "Bags",
          },
          {
            id: "p8c1gc3",
            title: "School Bags & Backpack",
          },
          {
            id: "p8c1gc4",
            title: "Serum & Essence",
          },
          {
            id: "p8c1gc5",
            title: "Moisturizers & Cream",
          },
          {
            id: "p8c1gc6",
            title: "Sunscreen & Aftersun",
          },
          {
            id: "p8c1gc7",
            title: "Lip Balm & Treatment",
          },
          {
            id: "p8c1gc8",
            title: "Night Cream",
          },
          {
            id: "p8c1gc9",
            title: "Laikou",
          },
          {
            id: "p8c1gc10",
            title: "Bioaqua",
          },
          {
            id: "p8c1gc11",
            title: "Mamaerth",
          },
          {
            id: "p8c1gc12",
            title: "Simple",
          },
        ],
      },
      {
        id: "p8c2",
        title: "Laptop Bags & Cases",
        grandChildCategories: [
          {
            id: "p8c2gc1",
            title: "Backpacks",
          },
          {
            id: "p8c2gc2",
            title: "Briefcases",
          },
          {
            id: "p8c2gc3",
            title: "Laptop cases",
          },
          {
            id: "p8c2gc4",
            title: "Shoulder & Messenger Bags",
          },
          {
            id: "p8c2gc5",
            title: "Conditioner",
          },
          {
            id: "p8c2gc6",
            title: "Hair Care Accessories",
          },
          {
            id: "p8c2gc7",
            title: "Wow Skin Science",
          },
          {
            id: "p8c2gc8",
            title: "Sunsilk",
          },
          {
            id: "p8c2gc9",
            title: "Ribana",
          },
          {
            id: "p8c2gc10",
            title: "Parachute",
          },
          {
            id: "p8c2gc11",
            title: "Tresemme",
          },
          {
            id: "p8c2gc11",
            title: "Dove",
          },
        ],
      },
      {
        id: "p8c3",
        title: "Luggage",
        grandChildCategories: [
          {
            id: "p8c3gc1",
            title: "Carry-Ons",
          },
          {
            id: "p8c3gc2",
            title: "Kids Luggage",
          },
          {
            id: "p8c3gc3",
            title: "Luggage Sets",
          },
          {
            id: "p8c3gc4",
            title: "Suitcases",
          },
          {
            id: "p8c3gc5",
            title: "Travel Duffels",
          },
        ],
      },
      {
        id: "p8c4",
        title: "Travel Bags",
        grandChildCategories: [
          {
            id: "p8c4gc1",
            title: "Waist Packs",
          },
          {
            id: "p8c4gc2",
            title: "Womens Body Spray",
          },
          {
            id: "p8c4gc3",
            title: "Roll-on & Deo",
          },
          {
            id: "p8c4gc4",
            title: "Mens Perfume",
          },
          {
            id: "p8c4gc5",
            title: "Mens Body Spray",
          },
          {
            id: "p8c4gc6",
            title: "Attar",
          },
          {
            id: "p8c4gc7",
            title: "My Perfumes",
          },
        ],
      },
      {
        id: "p8c5",
        title: "Men's Bags",
        grandChildCategories: [
          {
            id: "p8c5gc1",
            title: "Backpacks",
          },
          {
            id: "p8c5gc2",
            title: "Business Bags",
          },
          {
            id: "p8c5gc3",
            title: "Crossbody Bags",
          },
          {
            id: "p8c5gc4",
            title: "Messenger Bags",
          },
        ],
      },
      {
        id: "p8c6",
        title: "Womens Bags",
        grandChildCategories: [
          {
            id: "p8c6gc1",
            title: "Backpacks",
          },
          {
            id: "p8c6gc2",
            title: "Cross Body & Shoulder Bags",
          },
          {
            id: "p8c6gc3",
            title: "Bag Charms & Accessories",
          },
          {
            id: "p8c6gc4",
            title: "Clutches",
          },
        ],
      },
      {
        id: "p8c7",
        title: "Men's Watches",
        grandChildCategories: [
          {
            id: "p8c7gc1",
            title: "Business",
          },
          {
            id: "p8c7gc2",
            title: "Casual",
          },
          {
            id: "p8c7gc3",
            title: "Fashion",
          },
          {
            id: "p8c7gc4",
            title: "Sports",
          },
          {
            id: "p8c7gc5",
            title: "Accessories",
          },
        ],
      },
    ],
  },
  {
    id: "p9",
    title: "Groceries",
    icon: <ShoppingCart />,
    childCategories: [
      {
        id: "p9c1",
        title: "Clothing",
        grandChildCategories: [
          {
            id: "p9c1gc1",
            title: "T-Shirts",
          },
          {
            id: "p9c1gc2",
            title: "Jeans",
          },
          {
            id: "p9c1gc3",
            title: "Casual Shirts",
          },
          {
            id: "p9c1gc4",
            title: "Kurtas",
          },
          {
            id: "p9c1gc5",
            title: "Polo Shirts",
          },
          {
            id: "p9c1gc6",
            title: "Socks",
          },
          {
            id: "p9c1gc7",
            title: "Rain Goats & Trenches",
          },
          {
            id: "p9c1gc8",
            title: "Joggers & Sweats",
          },
          {
            id: "p9c1gc9",
            title: "Chinos",
          },
          {
            id: "p9c1gc10",
            title: "Trunks & Boxers",
          },
          {
            id: "p9c1gc11",
            title: "Mamaerth",
          },
          {
            id: "p9c1gc12",
            title: "Simple",
          },
        ],
      },
      {
        id: "p9c2",
        title: "Shoes",
        grandChildCategories: [
          {
            id: "p9c2gc1",
            title: "Sneakers",
          },
          {
            id: "p9c2gc2",
            title: "Slip-Ons & Loafers",
          },
          {
            id: "p9c2gc3",
            title: "Flip Flops",
          },
          {
            id: "p9c2gc4",
            title: "Formal Shoes",
          },
          {
            id: "p9c2gc5",
            title: "Sandals",
          },
          {
            id: "p9c2gc6",
            title: "Rain Boots",
          },
          {
            id: "p9c2gc7",
            title: "Shoes Accessories",
          },
          {
            id: "p9c2gc8",
            title: "Sunsilk",
          },
          {
            id: "p9c2gc9",
            title: "Ribana",
          },
          {
            id: "p9c2gc10",
            title: "Parachute",
          },
          {
            id: "p9c2gc11",
            title: "Tresemme",
          },
          {
            id: "p9c2gc11",
            title: "Dove",
          },
        ],
      },
      {
        id: "p9c3",
        title: "Muslim Wear",
        grandChildCategories: [
          {
            id: "p9c3gc1",
            title: "Batik Shirts",
          },
          {
            id: "p9c3gc2",
            title: "Jubbahs",
          },
          {
            id: "p9c3gc3",
            title: "Muslimin Shirts",
          },
          {
            id: "p9c3gc4",
            title: "Accessories",
          },
          {
            id: "p9c3gc5",
            title: "Travel Duffels",
          },
        ],
      },
      {
        id: "p9c4",
        title: "Accessories",
        grandChildCategories: [
          {
            id: "p9c4gc1",
            title: "Belts",
          },
          {
            id: "p9c4gc2",
            title: "Bow Ties",
          },
          {
            id: "p9c4gc3",
            title: "Cufflinks",
          },
          {
            id: "p9c4gc4",
            title: "Hats & Caps",
          },
          {
            id: "p9c4gc5",
            title: "Ties",
          },
          {
            id: "p9c4gc6",
            title: "Umbrellas",
          },
          {
            id: "p9c4gc7",
            title: "My Perfumes",
          },
        ],
      },
      {
        id: "p9c5",
        title: "Bags",
        grandChildCategories: [
          {
            id: "p9c5gc1",
            title: "Backpacks",
          },
          {
            id: "p9c5gc2",
            title: "Business Bags",
          },
          {
            id: "p9c5gc3",
            title: "Crossbody Bags",
          },
          {
            id: "p9c5gc4",
            title: "Messenger Bags",
          },
        ],
      },
      {
        id: "p9c6",
        title: "Watches",
        grandChildCategories: [
          {
            id: "p9c6gc1",
            title: "Business",
          },
          {
            id: "p9c6gc2",
            title: "Casual",
          },
          {
            id: "p9c6gc3",
            title: "Fashion",
          },
          {
            id: "p9c6gc4",
            title: "Sports",
          },
        ],
      },
      {
        id: "p9c7",
        title: "Eyewear",
        grandChildCategories: [
          {
            id: "p9c7gc1",
            title: "Eyeglasses",
          },
          {
            id: "p9c7gc2",
            title: "Sunglasses",
          },
          {
            id: "p9c7gc3",
            title: "Fashion",
          },
          {
            id: "p9c7gc4",
            title: "Sports",
          },
          {
            id: "p9c7gc5",
            title: "Accessories",
          },
        ],
      },
    ],
  },
  {
    id: "p10",
    title: "Home & Lifestyle",
    icon: <Server />,
    childCategories: [
      {
        id: "p10c1",
        title: "Diapering & Potty",
        grandChildCategories: [
          {
            id: "p10c1gc1",
            title: "Diapers",
          },
          {
            id: "p10c1gc2",
            title: "Cloth Diapers",
          },
          {
            id: "p10c1gc3",
            title: "Diaper Bags",
          },
          {
            id: "p10c1gc4",
            title: "Potty Chair & Seat",
          },
          {
            id: "p10c1gc5",
            title: "Wipes",
          },
          {
            id: "p10c1gc6",
            title: "Huggies",
          },
          {
            id: "p10c1gc7",
            title: "Molfix",
          },
          {
            id: "p10c1gc8",
            title: "Twinkle",
          },
          {
            id: "p10c1gc9",
            title: "Avonee",
          },
          {
            id: "p10c1gc10",
            title: "Smile",
          },
          {
            id: "p10c1gc11",
            title: "Neocare",
          },
          {
            id: "p10c1gc12",
            title: "Happy Nappy",
          },
        ],
      },
      {
        id: "p10c2",
        title: "Feeding",
        grandChildCategories: [
          {
            id: "p10c2gc1",
            title: "Baby & Toddler Foods",
          },
          {
            id: "p10c2gc2",
            title: "Bottle Feeding",
          },
          {
            id: "p10c2gc3",
            title: "Breastfeeding ",
          },
          {
            id: "p10c2gc4",
            title: "Feeding Chairs & Seats",
          },
          {
            id: "p10c2gc5",
            title: "Milk Formula",
          },
          {
            id: "p10c2gc6",
            title: "Feeding Bowls, Cups & Bibs",
          },
          {
            id: "p10c2gc7",
            title: "Milk Formula",
          },
          {
            id: "p10c2gc8",
            title: "Feeding Bowls, Cups & Bibs",
          },
          {
            id: "p10c2gc9",
            title: "Pacifiers",
          },
          {
            id: "p10c2gc10",
            title: "Cerelac",
          },
          {
            id: "p10c2gc11",
            title: "Lactogen",
          },
          {
            id: "p10c2gc11",
            title: "Nan",
          },
        ],
      },
      {
        id: "p10c3",
        title: "Baby Personal Care",
        grandChildCategories: [
          {
            id: "p10c3gc1",
            title: "Baby Detergent",
          },
          {
            id: "p10c3gc2",
            title: "Bathing Tubs & Toys",
          },
          {
            id: "p10c3gc3",
            title: "Shampoo & Conditioners",
          },
          {
            id: "p10c3gc4",
            title: "Lotions & Creams",
          },
          {
            id: "p10c3gc5",
            title: "Oils",
          },
        ],
      },
      {
        id: "p10c4",
        title: "Baby Gear",
        grandChildCategories: [
          {
            id: "p10c4gc1",
            title: "Baby Soft Carriers",
          },
          {
            id: "p10c4gc2",
            title: "Baby Car Seats",
          },
          {
            id: "p10c4gc3",
            title: "Kids Bags & Luggage",
          },
          {
            id: "p10c4gc4",
            title: "Playards & Playpens",
          },
          {
            id: "p10c4gc5",
            title: "Strollers & Prams",
          },
          {
            id: "p10c4gc6",
            title: "Bouncers & Jumpers",
          },
          {
            id: "p10c4gc7",
            title: "Swings",
          },
        ],
      },
      {
        id: "p10c5",
        title: "Nursery",
        grandChildCategories: [
          {
            id: "p10c5gc1",
            title: "Cribs & Cradles",
          },
          {
            id: "p10c5gc2",
            title: "Furniture Seats",
          },
          {
            id: "p10c5gc3",
            title: "Blankets & Wrappers",
          },
          {
            id: "p10c5gc4",
            title: "Baby Pillows & Protection",
          },
        ],
      },
      {
        id: "p10c6",
        title: "Maternity Care",
        grandChildCategories: [
          {
            id: "p10c6gc1",
            title: "Business",
          },
          {
            id: "p10c6gc2",
            title: "Casual",
          },
          {
            id: "p10c6gc3",
            title: "Fashion",
          },
          {
            id: "p10c6gc4",
            title: "Sports",
          },
        ],
      },
      {
        id: "p10c7",
        title: "Baby Care & Gifts",
        grandChildCategories: [
          {
            id: "p10c7gc1",
            title: "Eyeglasses",
          },
          {
            id: "p10c7gc2",
            title: "Sunglasses",
          },
          {
            id: "p10c7gc3",
            title: "Fashion",
          },
          {
            id: "p10c7gc4",
            title: "Sports",
          },
          {
            id: "p10c7gc5",
            title: "Accessories",
          },
        ],
      },
    ],
  },
  {
    id: "p11",
    title: "Sports & Outdoors",
    icon: <ServerStack />,
    childCategories: [
      {
        id: "p11c1",
        title: "Traditional Wear",
        grandChildCategories: [
          {
            id: "p11c1gc1",
            title: "Shalwar Kameez",
          },
          {
            id: "p11c1gc2",
            title: "Sarees",
          },
          {
            id: "p11c1gc3",
            title: "Kurtis",
          },
          {
            id: "p11c1gc4",
            title: "Unstitched Fabrics",
          },
          {
            id: "p11c1gc5",
            title: "Party Kameez & Gowns",
          },
          {
            id: "p11c1gc6",
            title: "Palazzo Pants & Culottes",
          },
          {
            id: "p11c1gc7",
            title: "Pants, Palazzo & Capris",
          },
        ],
      },
      {
        id: "p11c2",
        title: "Muslim Wear",
        grandChildCategories: [
          {
            id: "p11c2gc1",
            title: "Abayas & Long Dresses",
          },
          {
            id: "p11c2gc2",
            title: "Hijabs",
          },
          {
            id: "p11c2gc3",
            title: "Brooches",
          },
        ],
      },
      {
        id: "p11c3",
        title: "Western Wear",
        grandChildCategories: [
          {
            id: "p11c3gc1",
            title: "Dresses",
          },
          {
            id: "p11c3gc2",
            title: "Tunics",
          },
          {
            id: "p11c3gc3",
            title: "T-Shirts",
          },
          {
            id: "p11c3gc4",
            title: "Tops",
          },
          {
            id: "p11c3gc5",
            title: "Skirts",
          },
        ],
      },
      {
        id: "p11c4",
        title: "Innerwear",
        grandChildCategories: [
          {
            id: "p11c4gc1",
            title: "Bras",
          },
          {
            id: "p11c4gc2",
            title: "Lingerie Sets",
          },
          {
            id: "p11c4gc3",
            title: "Panties",
          },
          {
            id: "p11c4gc4",
            title: "Robes & Bodysuits",
          },
          {
            id: "p11c4gc5",
            title: "Sleep & Loungewear",
          },
          {
            id: "p11c4gc6",
            title: "Tank Tops",
          },
          {
            id: "p11c4gc7",
            title: "Shapewear",
          },
        ],
      },
      {
        id: "p11c5",
        title: "Shoes",
        grandChildCategories: [
          {
            id: "p11c5gc1",
            title: "Heels",
          },
          {
            id: "p11c5gc2",
            title: "Flats",
          },
          {
            id: "p11c5gc3",
            title: "Sneakers",
          },
          {
            id: "p11c5gc4",
            title: "Pump Shoes",
          },
        ],
      },
      {
        id: "p11c6",
        title: "Bags",
        grandChildCategories: [
          {
            id: "p11c6gc1",
            title: "Crossbody & Shoulder Bags",
          },
          {
            id: "p11c6gc2",
            title: "Backpacks",
          },
          {
            id: "p11c6gc3",
            title: "Wallets",
          },
          {
            id: "p11c6gc4",
            title: "Top Handle Bags",
          },
        ],
      },
      {
        id: "p11c7",
        title: "Watches",
        grandChildCategories: [
          {
            id: "p11c7gc1",
            title: "Casual",
          },
          {
            id: "p11c7gc2",
            title: "Fashion",
          },
          {
            id: "p11c7gc3",
            title: "Business",
          },
          {
            id: "p11c7gc4",
            title: "Sports",
          },
          {
            id: "p11c7gc5",
            title: "Accessories",
          },
        ],
      },
    ],
  },
  {
    id: "p12",
    title: "Automotive & Motorbike",
    icon: <Sidebar />,
    childCategories: [
      {
        id: "p12c1",
        title: "Skin Care",
        grandChildCategories: [
          {
            id: "p12c1gc1",
            title: "Face Mask & Packs",
          },
          {
            id: "p12c1gc2",
            title: "Face Wash & Cleansers",
          },
          {
            id: "p12c1gc3",
            title: "Toner & Mists",
          },
          {
            id: "p12c1gc4",
            title: "Serum & Essence",
          },
          {
            id: "p12c1gc5",
            title: "Moisturizers & Cream",
          },
          {
            id: "p12c1gc6",
            title: "Sunscreen & Aftersun",
          },
          {
            id: "p12c1gc7",
            title: "Lip Balm & Treatment",
          },
          {
            id: "p12c1gc8",
            title: "Night Cream",
          },
          {
            id: "p12c1gc9",
            title: "Laikou",
          },
          {
            id: "p12c1gc10",
            title: "Bioaqua",
          },
          {
            id: "p12c1gc11",
            title: "Mamaerth",
          },
          {
            id: "p12c1gc12",
            title: "Simple",
          },
        ],
      },
      {
        id: "p12c2",
        title: "Hair Care",
        grandChildCategories: [
          {
            id: "p12c2gc1",
            title: "Hair Oils",
          },
          {
            id: "p12c2gc2",
            title: "Hair Treatments",
          },
          {
            id: "p12c2gc3",
            title: "Hair Coloring",
          },
          {
            id: "p12c2gc4",
            title: "Shampoo",
          },
          {
            id: "p12c2gc5",
            title: "Conditioner",
          },
          {
            id: "p12c2gc6",
            title: "Hair Care Accessories",
          },
          {
            id: "p12c2gc7",
            title: "Wow Skin Science",
          },
          {
            id: "p12c2gc8",
            title: "Sunsilk",
          },
          {
            id: "p12c2gc9",
            title: "Ribana",
          },
          {
            id: "p12c2gc10",
            title: "Parachute",
          },
          {
            id: "p12c2gc11",
            title: "Tresemme",
          },
          {
            id: "p12c2gc11",
            title: "Dove",
          },
        ],
      },
      {
        id: "p12c3",
        title: "Makeup",
        grandChildCategories: [
          {
            id: "p12c3gc1",
            title: "Face",
          },
          {
            id: "p12c3gc2",
            title: "Eyes",
          },
          {
            id: "p12c3gc3",
            title: "Lips",
          },
          {
            id: "p12c3gc4",
            title: "Nails",
          },
          {
            id: "p12c3gc5",
            title: "Makeup Palettes & Sets",
          },
        ],
      },
      {
        id: "p12c4",
        title: "Fragrances",
        grandChildCategories: [
          {
            id: "p12c4gc1",
            title: "Womens Perfume",
          },
          {
            id: "p12c4gc2",
            title: "Womens Body Spray",
          },
          {
            id: "p12c4gc3",
            title: "Roll-on & Deo",
          },
          {
            id: "p12c4gc4",
            title: "Mens Perfume",
          },
          {
            id: "p12c4gc5",
            title: "Mens Body Spray",
          },
          {
            id: "p12c4gc6",
            title: "Attar",
          },
          {
            id: "p12c4gc7",
            title: "My Perfumes",
          },
        ],
      },
      {
        id: "p12c5",
        title: "Beauty Tools",
        grandChildCategories: [
          {
            id: "p12c5gc1",
            title: "Skin Care Tools",
          },
          {
            id: "p12c5gc2",
            title: "Hair Styling Appliances",
          },
          {
            id: "p12c5gc3",
            title: "Electric Massagers",
          },
          {
            id: "p12c5gc4",
            title: "Hair Removal Accessories ",
          },
        ],
      },
      {
        id: "p12c6",
        title: "Bath & Body",
        grandChildCategories: [
          {
            id: "p12c6gc1",
            title: "Body & Massage Oils",
          },
          {
            id: "p12c6gc2",
            title: "Body Scrubs",
          },
          {
            id: "p12c6gc3",
            title: "Soaps & Body Wash",
          },
          {
            id: "p12c6gc4",
            title: "Hair Removal",
          },
        ],
      },
      {
        id: "p12c7",
        title: "Personal Care",
        grandChildCategories: [
          {
            id: "p12c7gc1",
            title: "Toothpaste",
          },
          {
            id: "p12c7gc2",
            title: "Toothbrush",
          },
          {
            id: "p12c7gc3",
            title: "Electric Toothbrush",
          },
          {
            id: "p12c7gc4",
            title: "Dental Floss",
          },
          {
            id: "p12c7gc5",
            title: "Mouthwash",
          },
        ],
      },
    ],
  },
];
