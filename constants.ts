import { Laptop, Service } from './types';

export const CONTACT_PHONE = "8073664011";
export const CONTACT_EMAIL = "bitechcare@gmail.com";
export const WHATSAPP_LINK = "https://wa.me/918073664011";

export const MOCK_LAPTOPS: Laptop[] = [
  // --- APPLE MACBOOKS ---
  {
    id: 1,
    name: "MacBook Pro A2251 (TouchBar)",
    brand: "Apple",
    processor: "Intel Core i7 10th Gen",
    ram: "32GB",
    storage: "512GB SSD",
    screen: "13-inch Retina",
    price: 37500,
    imageUrl: "https://images.unsplash.com/photo-1517336714731-489689fd1ca4?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 7,
    name: "MacBook Pro A2141 (TouchBar)",
    brand: "Apple",
    processor: "Intel Core i7 9th Gen (8GB GPU)",
    ram: "32GB",
    storage: "512GB SSD",
    screen: "16-inch Retina",
    price: 49000,
    imageUrl: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 8,
    name: "MacBook Pro A2141 (TouchBar)",
    brand: "Apple",
    processor: "Intel Core i7 9th Gen (4GB GPU)",
    ram: "16GB",
    storage: "512GB SSD",
    screen: "16-inch Retina",
    price: 40000,
    imageUrl: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 9,
    name: "MacBook Pro A2251 (TouchBar) 2TB",
    brand: "Apple",
    processor: "Intel Core i7 10th Gen",
    ram: "32GB",
    storage: "2TB SSD",
    screen: "13-inch Retina",
    price: 44500,
    imageUrl: "https://images.unsplash.com/photo-1517336714731-489689fd1ca4?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 10,
    name: "MacBook Pro A2251 (TouchBar) 2TB",
    brand: "Apple",
    processor: "Intel Core i7 10th Gen",
    ram: "16GB",
    storage: "2TB SSD",
    screen: "13-inch Retina",
    price: 39000,
    imageUrl: "https://images.unsplash.com/photo-1517336714731-489689fd1ca4?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 11,
    name: "MacBook Pro A1502",
    brand: "Apple",
    processor: "Intel Core i7 5th Gen",
    ram: "16GB",
    storage: "256GB SSD",
    screen: "13.3-inch Retina",
    price: 23500,
    imageUrl: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 12,
    name: "MacBook Pro A1708",
    brand: "Apple",
    processor: "Intel Core i5 7th Gen",
    ram: "8GB",
    storage: "512GB SSD",
    screen: "13-inch Retina",
    price: 24500,
    imageUrl: "https://images.unsplash.com/photo-1522204554319-aca56f3f0f4a?auto=format&fit=crop&w=800&q=80"
  },

  // --- DELL ---
  {
    id: 3,
    name: "Dell Latitude 7420",
    brand: "Dell",
    processor: "Intel Core i7 11th Gen",
    ram: "32GB",
    storage: "512GB SSD",
    screen: "14-inch FHD",
    price: 37000,
    imageUrl: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    name: "Dell Latitude 7490",
    brand: "Dell",
    processor: "Intel Core i5 8th Gen",
    ram: "16GB",
    storage: "512GB SSD",
    screen: "14-inch FHD",
    price: 24500,
    imageUrl: "https://images.unsplash.com/photo-1593642632823-8f7856677741?auto=format&fit=crop&w=800&q=80"
  },

  // --- LENOVO ---
  {
    id: 5,
    name: "ThinkPad L480",
    brand: "Lenovo",
    processor: "Intel Core i5 8th Gen",
    ram: "16GB",
    storage: "512GB SSD",
    screen: "14-inch FHD",
    price: 24500,
    imageUrl: "https://images.unsplash.com/photo-1588872657578-139a626e72da?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    name: "ThinkPad T470",
    brand: "Lenovo",
    processor: "Intel Core i5 7th Gen",
    ram: "16GB",
    storage: "256GB SSD",
    screen: "14-inch HD",
    price: 19500,
    imageUrl: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=800&q=80"
  },

  // --- TOSHIBA ---
  {
    id: 2,
    name: "Toshiba Portege X40-J",
    brand: "Toshiba",
    processor: "Intel Core i7 11th Gen",
    ram: "16GB",
    storage: "512GB SSD",
    screen: "14-inch FHD",
    price: 29000,
    imageUrl: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80"
  }
];

export const SERVICES_LIST: Service[] = [
  { id: 1, title: "Refurbished Sales", description: "Certified laptops with 6 months warranty.", icon: "Laptop" },
  { id: 2, title: "Laptop Repair", description: "Chip-level repair for all brands (Dell, HP, Lenovo, Apple).", icon: "Wrench" },
  { id: 3, title: "Hardware Upgrades", description: "RAM expansion & high-speed SSD installation.", icon: "Cpu" },
  { id: 4, title: "Screen & Keyboard", description: "Replacement of broken screens and faulty keyboards.", icon: "Monitor" },
  { id: 5, title: "Software Solutions", description: "OS Installation, Virus Removal, and Driver updates.", icon: "Disc" },
  { id: 6, title: "Data Recovery", description: "Professional recovery from crashed HDDs and SSDs.", icon: "Database" },
  { id: 7, title: "Corporate Supply", description: "Bulk laptop supply and AMC for offices.", icon: "Building" },
  { id: 8, title: "Doorstep Service", description: "Pickup and drop service available after confirmation.", icon: "Truck" },
];