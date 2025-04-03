import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors()); 
app.use(express.json());

const cars = {
  BMW: [
    {
      id: 1,
      name: "BMW X5",
      price: "$65,000",
      year: 2023,
      colors: ["Grey", "White", "Black"],
      variants: ["xDrive40i", "M50i", "xDrive45e Hybrid"],
      accessories: ["360 Camera", "Panoramic Sunroof", "Heated Seats"],
      features: ["Adaptive Cruise Control", "AWD", "Gesture Control"]
    },
    {
      id: 2,
      name: "BMW 3 Series",
      price: "$42,000",
      year: 2024,
      colors: ["Black", "Blue", "Red"],
      variants: ["330i", "M340i", "330e Hybrid"],
      accessories: ["M Sport Package", "Harman Kardon Audio", "Ambient Lighting"],
      features: ["Turbocharged Engine", "Intelligent Drive", "Wireless CarPlay"]
    },
    {
      id: 3,
      name: "BMW i8",
      price: "$147,500",
      year: 2021,
      colors: ["White", "Black", "Blue"],
      variants: ["Coupe", "Roadster"],
      accessories: ["Scissor Doors", "Carbon Fiber Chassis"],
      features: ["Hybrid Supercar", "Laser Headlights", "eDrive Technology"]
    }
  ],
  Audi: [
    {
      id: 4,
      name: "Audi Q7",
      price: "$58,000",
      year: 2023,
      colors: ["White", "Black", "Grey"],
      variants: ["Premium", "Premium Plus", "Prestige"],
      accessories: ["Matrix LED Headlights", "Bang & Olufsen Sound System"],
      features: ["Quattro AWD", "Virtual Cockpit", "Adaptive Air Suspension"]
    },
    {
      id: 5,
      name: "Audi A6",
      price: "$55,000",
      year: 2024,
      colors: ["Black", "Silver", "Blue"],
      variants: ["Premium", "Premium Plus", "Prestige"],
      accessories: ["LED Ambient Lighting", "Wireless Charging"],
      features: ["Mild Hybrid Engine", "Audi Pre Sense", "Adaptive Cruise Control"]
    },
    {
      id: 6,
      name: "Audi e-tron GT",
      price: "$104,000",
      year: 2023,
      colors: ["Red", "Grey", "White"],
      variants: ["Quattro", "RS e-tron GT"],
      accessories: ["Performance Brakes", "Carbon Fiber Roof"],
      features: ["Electric AWD", "High-Speed Charging", "Virtual Mirrors"]
    }
  ],
  Mercedes: [
    {
      id: 7,
      name: "Mercedes-Benz GLC",
      price: "$47,000",
      year: 2024,
      colors: ["Blue", "Black", "Silver"],
      variants: ["GLC 300", "GLC 43 AMG", "GLC 63 AMG"],
      accessories: ["Burmester Audio", "AMG Sport Package"],
      features: ["Mild Hybrid Engine", "MBUX Infotainment", "360-Degree Camera"]
    },
    {
      id: 8,
      name: "Mercedes-Benz S-Class",
      price: "$114,000",
      year: 2024,
      colors: ["White", "Black", "Grey"],
      variants: ["S 500", "S 580", "Maybach S 680"],
      accessories: ["Executive Rear Seats", "Burmester 4D Surround Sound"],
      features: ["Magic Body Control", "Night Vision Assist", "Level 3 Autonomy"]
    },
    {
      id: 9,
      name: "Mercedes-Benz EQS",
      price: "$102,000",
      year: 2023,
      colors: ["Blue", "Silver", "Black"],
      variants: ["EQS 450+", "EQS 580 4MATIC"],
      accessories: ["Hyperscreen Display", "Rear Seat Package"],
      features: ["Electric Drive", "Superfast Charging", "Zero Emissions"]
    }
  ],
  Ford: [
    {
      id: 10,
      name: "Ford Mustang",
      price: "$30,000",
      year: 2023,
      colors: ["Black", "Red", "Yellow"],
      variants: ["EcoBoost", "GT", "Mach 1"],
      accessories: ["Spoiler", "Leather Seats", "Brembo Brakes"],
      features: ["V8 Engine", "Sport Mode", "Launch Control"]
    },
    {
      id: 11,
      name: "Ford F-150",
      price: "$40,000",
      year: 2023,
      colors: ["White", "Black", "Blue"],
      variants: ["XL", "XLT", "Lariat"],
      accessories: ["Off-Road Package", "Towing Package"],
      features: ["Turbocharged Engine", "Pro Power Onboard", "360-Degree Camera"]
    },
    {
      id: 12,
      name: "Ford Explorer",
      price: "$36,000",
      year: 2024,
      colors: ["Red", "Blue", "Black"],
      variants: ["XLT", "Limited", "Platinum"],
      accessories: ["Leather Interior", "Panoramic Sunroof"],
      features: ["Hybrid Option", "4WD Drive Modes", "Lane Keeping Assist"]
    }
  ]
};


app.get('/api/cars', (req, res) => {
  res.json(cars);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
