// src/data.js

// ===== صور المنتجات =====
import wyseCamV4Black from "./assets/wyze-cam-black-v4.png";
import wyseCamV4White from "./assets/wyze-cam-white-v4.png";
import wyseCamV4Gray from "./assets/wyze-cam-gray-v4.png";
import wyseCamPanBlack from "./assets/wyze-cam-pan-black-v3.png";
import wyseCamPanWhite from "./assets/wyze-cam-pan-white-v3.png";
import wyseFloodlightBlack from "./assets/wyze-cam-floodlight-black-v2.png";
import wyseFloodlightWhite from "./assets/wyze-cam-floodlight-white-v2.png";
import wyseDoorbell from "./assets/wyze-duo-cam-doorball.png";
import wyseBatteryCamBlack from "./assets/wyze-battery-cam-pro-black.png";
import wyseBatteryCamWhite from "./assets/wyze-battery-cam-pro-white.png";
import wyseMotionSensor from "./assets/wyze-sense-motion-sensor.png";
import wyseSenseHub from "./assets/wyze-sense-hub.png";
import wyseMicroSd from "./assets/wyze-micro-sd-ard.png"; // تأكد من الاسم ده لو حصل error

// ===== أيقونات عمود المراجعة =====
import fastShippingIcon from "./assets/fast-shipping.png";
import satisfactionBadge from "./assets/wyze-satisfaction.png";
import camUnlimitedIcon from "./assets/cam-unlimited.png";

export const reviewIcons = {
  fastShipping: fastShippingIcon,
  satisfaction: satisfactionBadge,
};

// كل خطوة عندها reviewLabel = العنوان اللي هيبان في عمود المراجعة يمين
export const steps = [
  {
    id: "cameras",
    stepNumber: 1,
    title: "Choose your cameras",
    reviewLabel: "Cameras",
    products: [
      {
        id: "cam-v4",
        name: "Wyse Cam v4",
        description: "The clearest Wyse Cam ever made.",
        badge: "Save 22%",
        comparePrice: 35.98,
        price: 27.98,
        variants: [
          { id: "black", label: "Black", image: wyseCamV4Black },
          { id: "grey", label: "Grey", image: wyseCamV4Gray },
          { id: "white", label: "White", image: wyseCamV4White },
        ],
      },
      {
        id: "cam-pan-v3",
        name: "Wyse Cam Pan v3",
        description: "360° pan and 180° tilt security camera.",
        badge: "Save 12%",
        comparePrice: 39.98,
        price: 34.98,
        variants: [
          { id: "white", label: "White", image: wyseCamPanWhite },
          { id: "black", label: "Black", image: wyseCamPanBlack },
        ],
      },
      {
        id: "floodlight-v2",
        name: "Wyse Cam Floodlight v2",
        description:
          "A floodlight camera with a 160° wide-angle view for your garage.",
        badge: "Save 22%",
        comparePrice: 89.98,
        price: 69.98,
        variants: [
          { id: "white", label: "White", image: wyseFloodlightWhite },
          { id: "black", label: "Black", image: wyseFloodlightBlack },
        ],
      },
      {
        id: "doorbell",
        name: "Wyse Duo Cam Doorbell",
        description: "Two cameras. Two views. Double the porch protection.",
        badge: null,
        comparePrice: null,
        price: 69.98,
        variants: [],
        image: wyseDoorbell,
      },
      {
        id: "battery-cam-pro",
        name: "Wyse Battery Cam Pro",
        description:
          "Protect anywhere. See everything in 2.5K HDR. No power outlet or electrician needed.",
        badge: null,
        comparePrice: null,
        price: 89.98,
        variants: [
          { id: "white", label: "White", image: wyseBatteryCamWhite },
          { id: "black", label: "Black", image: wyseBatteryCamBlack },
        ],
      },
    ],
  },
  {
    id: "plan",
    stepNumber: 2,
    title: "Choose your plan",
    reviewLabel: "Plan",
    products: [
      {
        id: "cam-unlimited",
        name: "Cam Unlimited",
        description: null,
        badge: null,
        comparePrice: 12.99,
        price: 9.99,
        variants: [],
        isMonthly: true,
        image: camUnlimitedIcon,
      },
    ],
  },
  {
    id: "sensors",
    stepNumber: 3,
    title: "Choose your sensors",
    reviewLabel: "Sensors",
    products: [
      {
        id: "motion-sensor",
        name: "Wyse Sense Motion Sensor",
        description: null,
        badge: null,
        comparePrice: null,
        price: 29.99,
        variants: [],
        image: wyseMotionSensor,
      },
      {
        id: "sense-hub",
        name: "Wyse Sense Hub (Required)",
        description: null,
        badge: null,
        comparePrice: 29.92,
        price: 0,
        variants: [],
        image: wyseSenseHub,
      },
    ],
  },
  {
    id: "protection",
    stepNumber: 4,
    title: "Add extra protection",
    reviewLabel: "Accessories",
    products: [
      {
        id: "microsd",
        name: "Wyse MicroSD Card (256GB)",
        description: null,
        badge: null,
        comparePrice: null,
        price: 20.98,
        variants: [],
        image: wyseMicroSd,
      },
    ],
  },
];

// الكميات المبدئية اللي المفروض الصفحة تفتح بيها (زي ما هو في تصميم Figma بالظبط)
export const initialQuantities = {
  "cam-v4-black": 1,
  "cam-pan-v3-white": 2,
  "motion-sensor": 2,
  "sense-hub": 1,
  microsd: 2,
  "cam-unlimited": 1,
};
