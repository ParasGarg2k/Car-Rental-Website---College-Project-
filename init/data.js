const data = [
  {
    title: "2023 Tesla Model S",
    description: "A high-performance electric vehicle with autopilot and long-range capabilities.",
    image: {
      filename: "tesla_model_s.jpg",
      url: "https://www.tesla.com/sites/default/files/modelsx-new/social/model-s-hero-social.jpg",
    },
    pricePerDay: 150,
    location: "Los Angeles, CA",
    country: "USA",
    carType: "Sedan",
    year: 2023,
    categories: ["Luxury", "Electric"],
    reviews: [],
    passengerCapacity: 5,
    fuelType: "Electric",
    transmissionType: "Automatic",
  },
  {
    title: "2022 Ford Mustang",
    description: "Classic American muscle car with a powerful V8 engine and thrilling performance.",
    image: {
      filename: "ford_mustang.jpg",
      url: "https://imgs.search.brave.com/miqVTMhCI57z18JlArKEZ3hlUMb8gUAluI013pgr2h4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lZGdl/Y2FzdC1pbWcueWFo/b28ubmV0L215c3Rl/cmlvL2FwaS8wNTJE/RDg2QjdERThEQzg5/NzNBMEI5QzhGMTBC/MDRERjY2MEVBNzlG/MzIwQ0MxMTM5NkY0/NkVDRUE1QTlDNURD/L2F1dG9ibG9nL3Jl/c2l6ZWZpbGxfdzEy/MDBfaDY3NTtxdWFs/aXR5XzgwO2Zvcm1h/dF93ZWJwO2NjXzMx/NTM2MDAwOy9odHRw/czovL3MuYW9sY2Ru/LmNvbS9jb21tZXJj/ZS9hdXRvZGF0YS9p/bWFnZXMvVVNDODBG/T0MwNTFBMDIxMDAx/LmpwZw",
    },
    pricePerDay: 120,
    location: "Miami, FL",
    country: "USA",
    carType: "Coupe",
    year: 2022,
    categories: ["Sport"],
    reviews: [],
    passengerCapacity: 4,
    fuelType: "Petrol",
    transmissionType: "Manual",
  },
  {
    title: "2021 BMW X5",
    description: "A premium SUV with exceptional comfort, space, and performance on any terrain.",
    image: {
      filename: "bmw_x5.jpg",
      url: "https://imgs.search.brave.com/uAbTYaQK8U9ZgLiSJLHka0ZPeqbtsevR3bCTGaFpg4U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90ZHJy/ZXNlYXJjaC5henVy/ZWVkZ2UubmV0L3Bo/b3Rvcy9jaHJvbWUv/RXhwYW5kZWQvV2hp/dGUvMjAyMUJNUzE5/MDAxNy8yMDIxQk1T/MTkwMDE3MDEuanBn/P3c9NDAw",
    },
    pricePerDay: 100,
    location: "New York, NY",
    country: "USA",
    carType: "SUV",
    year: 2021,
    categories: ["Luxury"],
    reviews: [],
    passengerCapacity: 7,
    fuelType: "Diesel",
    transmissionType: "Automatic",
  },
  {
    title: "2019 Audi A4",
    description: "A sleek and stylish sedan with a turbocharged engine, perfect for city drives.",
    image: {
      filename: "audi_a4.jpg",
      url: "https://imgs.search.brave.com/224bdxbIzqbtMZbj4HJXUuh9RCLxnTkqY9-tSbEB5mA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZGNz/c2wuaWJzcnYubmV0/L2F1dG9kYXRhL2lt/YWdlcy8_SU1HPVVT/QzkwQVVDMDE2QTAx/MzAwLkpQRw",
    },
    pricePerDay: 80,
    location: "Chicago, IL",
    country: "USA",
    carType: "Sedan",
    year: 2019,
    categories: ["Economy"],
    reviews: [],
    passengerCapacity: 5,
    fuelType: "Petrol",
    transmissionType: "Automatic",
  },
  {
    title: "2020 Jeep Wrangler",
    description: "An off-road legend, ready to take on any adventure with its rugged capabilities.",
    image: {
      filename: "jeep_wrangler.jpg",
      url: "https://www.jeep-india.com/content/dam/cross-regional/apac/jeep/en_in/wrangler-price-reveal/Unlimited-1000x416-Red.png.img.1440.png",
    },
    pricePerDay: 110,
    location: "Denver, CO",
    country: "USA",
    carType: "SUV",
    year: 2020,
    categories: ["Sport"],
    reviews: [],
    passengerCapacity: 5,
    fuelType: "Petrol",
    transmissionType: "Manual",
  },
  {
    title: "2021 Honda Civic",
    description: "A reliable and fuel-efficient sedan, perfect for daily commutes and city driving.",
    image: {
      filename: "honda_civic.jpg",
      url: "https://imgs.search.brave.com/A4v27FRZ5VcILPjGTdypCb0D0dKoelL3syCEhBvrCt4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lZGdl/Y2FzdC1pbWcueWFo/b28ubmV0L215c3Rl/cmlvL2FwaS9GRkI1/NEFEQTI1MTNDOTBG/QjcxRTk2QTA4Rjg1/OEI0OEYxNDEzQTEy/RTZGREY5OTRCMjQx/M0FENkNFMEI1Q0ZF/L2F1dG9ibG9nL3Jl/c2l6ZWZpbGxfdzc2/OF9oNDMyO3F1YWxp/dHlfODU7Zm9ybWF0/X3dlYnA7Y2NfMzE1/MzYwMDA7L2h0dHBz/Oi8vcy5hb2xjZG4u/Y29tL2NvbW1lcmNl/L2F1dG9kYXRhL2lt/YWdlcy9VU0M5MEhP/QzAyMUExMjEwMDEu/anBn",
    },
    pricePerDay: 60,
    location: "San Francisco, CA",
    country: "USA",
    carType: "Sedan",
    year: 2021,
    categories: ["Economy"],
    reviews: [],
    passengerCapacity: 5,
    fuelType: "Petrol",
    transmissionType: "Automatic",
  },
];

module.exports = { data };