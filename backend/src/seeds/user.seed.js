import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [
    {
      email: "lily.evans@demo.com",
      fullName: "Lily Evans",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/women/9.jpg",
    },
    {
      email: "zoe.harris@demo.com",
      fullName: "Zoe Harris",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/women/10.jpg",
    },
    {
      email: "nora.morris@demo.com",
      fullName: "Nora Morris",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/women/11.jpg",
    },
    {
      email: "ella.bennett@demo.com",
      fullName: "Ella Bennett",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/women/12.jpg",
    },
    {
      email: "grace.hughes@demo.com",
      fullName: "Grace Hughes",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/women/13.jpg",
    },
    {
      email: "chloe.foster@demo.com",
      fullName: "Chloe Foster",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/women/14.jpg",
    },
    {
      email: "harper.brooks@demo.com",
      fullName: "Harper Brooks",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/women/15.jpg",
    },
    {
      email: "scarlett.morgan@demo.com",
      fullName: "Scarlett Morgan",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/women/16.jpg",
    },
  
    {
      email: "ethan.perry@demo.com",
      fullName: "Ethan Perry",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/men/9.jpg",
    },
    {
      email: "logan.barnes@demo.com",
      fullName: "Logan Barnes",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/men/10.jpg",
    },
    {
      email: "leo.reed@demo.com",
      fullName: "Leo Reed",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/men/11.jpg",
    },
    {
      email: "jack.cooper@demo.com",
      fullName: "Jack Cooper",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/men/12.jpg",
    },
    {
      email: "sebastian.james@demo.com",
      fullName: "Sebastian James",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/men/13.jpg",
    },
    {
      email: "mason.bell@demo.com",
      fullName: "Mason Bell",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/men/14.jpg",
    },
    {
      email: "owen.ward@demo.com",
      fullName: "Owen Ward",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/men/15.jpg",
    },
  ];  

const seedDatabase = async () => {
  try {
    await connectDB();

    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Call the function
seedDatabase();