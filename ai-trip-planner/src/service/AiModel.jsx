import { GoogleGenerativeAI } from "@google/generative-ai";
  
  const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
 
    export const chatSession = model.startChat({
      generationConfig,
   
      
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate Travel Plan for location : Las Vegas, for 3 Days for Couple with a Cheap budget, Give me a Hotels options list with HotelName , Hotel address, Price , hotel image url , Geo Coordinates, ticket Pricing, rating, Time travel each of the location for 3 days with each day plan with best time to visit in JSON format. Only show what asked nothing else"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"hotels\": [\n    {\n      \"name\": \"The D Las Vegas\",\n      \"address\": \"301 Fremont Street, Las Vegas, NV 89101\",\n      \"price\": \"$50-$100 per night\",\n      \"image_url\": \"https://www.theDlasvegas.com/images/hero-images/hero-the-d-las-vegas.jpg\",\n      \"geo_coordinates\": \"36.1699, -115.1422\",\n      \"rating\": 4.0,\n      \"ticket_pricing\": \"N/A\"\n    },\n    {\n      \"name\": \"Golden Nugget Hotel & Casino\",\n      \"address\": \"129 E Fremont Street, Las Vegas, NV 89101\",\n      \"price\": \"$75-$150 per night\",\n      \"image_url\": \"https://www.goldennugget.com/images/page-images/GN_Hero_Fremont_Street_Experience.jpg\",\n      \"geo_coordinates\": \"36.1694, -115.1417\",\n      \"rating\": 4.5,\n      \"ticket_pricing\": \"N/A\"\n    },\n    {\n      \"name\": \"Plaza Hotel & Casino\",\n      \"address\": \"1 Main Street, Las Vegas, NV 89101\",\n      \"price\": \"$60-$120 per night\",\n      \"image_url\": \"https://www.plazahotelcasino.com/sites/default/files/styles/hero_image/public/hero_images/plaza-hotel-casino-exterior.jpg\",\n      \"geo_coordinates\": \"36.1685, -115.1418\",\n      \"rating\": 3.5,\n      \"ticket_pricing\": \"N/A\"\n    }\n  ],\n  \"travel_plan\": {\n    \"day1\": {\n      \"morning\": {\n        \"time\": \"9:00 AM - 12:00 PM\",\n        \"location\": \"Fremont Street Experience\",\n        \"activity\": \"Walk the Fremont Street Experience, enjoy the free live music, and check out the shops and restaurants\"\n      },\n      \"afternoon\": {\n        \"time\": \"1:00 PM - 4:00 PM\",\n        \"location\": \"Neon Museum\",\n        \"activity\": \"Take a tour of the Neon Museum and see the iconic signs from Las Vegas's past\"\n      },\n      \"evening\": {\n        \"time\": \"5:00 PM - 8:00 PM\",\n        \"location\": \"The D Las Vegas\",\n        \"activity\": \"Enjoy dinner at one of the casual restaurants at The D and catch a free show at the casino\"\n      }\n    },\n    \"day2\": {\n      \"morning\": {\n        \"time\": \"10:00 AM - 12:00 PM\",\n        \"location\": \"Hoover Dam\",\n        \"activity\": \"Take a day trip to Hoover Dam and see this engineering marvel\"\n      },\n      \"afternoon\": {\n        \"time\": \"1:00 PM - 4:00 PM\",\n        \"location\": \"Red Rock Canyon National Conservation Area\",\n        \"activity\": \"Explore the scenic Red Rock Canyon National Conservation Area and go for a hike\"\n      },\n      \"evening\": {\n        \"time\": \"5:00 PM - 8:00 PM\",\n        \"location\": \"Downtown Container Park\",\n        \"activity\": \"Have dinner at Downtown Container Park and enjoy the unique atmosphere\"\n      }\n    },\n    \"day3\": {\n      \"morning\": {\n        \"time\": \"9:00 AM - 12:00 PM\",\n        \"location\": \"Bellagio Conservatory & Botanical Garden\",\n        \"activity\": \"Visit the beautiful Bellagio Conservatory & Botanical Garden and admire the floral displays\"\n      },\n      \"afternoon\": {\n        \"time\": \"1:00 PM - 4:00 PM\",\n        \"location\": \"The Strip\",\n        \"activity\": \"Walk along the Strip and see the famous casinos and hotels\"\n      },\n      \"evening\": {\n        \"time\": \"5:00 PM - 8:00 PM\",\n        \"location\": \"The LINQ Promenade\",\n        \"activity\": \"Enjoy dinner at The LINQ Promenade and ride the High Roller observation wheel\"\n      }\n    }\n  }\n}\n```"},
          ],
        },
      ],
    });
  
    