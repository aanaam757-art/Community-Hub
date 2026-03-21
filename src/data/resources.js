import { Home, CalendarDays, HeartHandshake } from "lucide-react";

export const resources = [
  {
    id: 1,
    name: "Hands of Hope for the Community",
    category: "Food Assistance",
    type: "Nonprofit Food Pantry",
    location: "Edison, NJ",
    serves: "Residents seeking food support and gaining community hours",
    summary:
      "This community as provided 25 years in service to those in need! By providing food assistance and promoting support programs like donation's of food, funds and asking for volunteers for food distribution.",
    website: "https://www.hohnj.org/",
    featured: true,
  },
  {
    id: 2,
    name: "Sayreville Care & Share Food Bank",
    category: "Food Assistance",
    type: "Local Food Pantry",
    location: "Sayreville Senior Center, Sayreville, NJ",
    serves: "Low incomed families seeking pantry items and groccery food.",
    summary:
     " A local food pantry that distributes free groceries & any baby essentials at a fixed schedule.",
    website: "https://www.foodhelpline.org/resources/sayreville-care-share-food-bank",
    featured: true,
  },
  {
    id: 3,
    name: "Dress for Success Central New Jersey",
    category: "Clothing & Household",
    type: "Career Clothing & Employment Support",
    location: "Central New Jersey",
    serves: "Women preparing for interviews, work, and career growth",
    summary:
      "A leading resource for advancing women in workplace globally by hosting programs such as suiting, empolyment retention, and Career Center. Also, advocating community support through donation of clothes, money and volunteering to help with the event.",
    website: "https://centralnj.dressforsuccess.org/",
    featured: true,
  },
  {
    id: 4,
    name: "Community Care Food and Clothing Pantry",
    category: "Clothing & Household",
    type: "Food & Clothing Pantry",
    location: "Sicklerville, NJ",
    serves: "Anyone in need of food and clothing",
    summary:
      "A small local food and clothing pantry that provides for the people in need with free of charge at a fixed time. ",
    website: "https://www.foodpantrynj.org/programs-and-services",
    featured: false,
  },
  {
    id: 5,
    name: "New Jersey Housing Resource Center",
    category: "Basic Needs & Referrals",
    type: "Housing Search & Referral",
    location: "Statewide / New Jersey",
    serves: "People looking for affordable housing information",
    summary:
      " The housing resource center provides help with the desired housing, listing housing, getting help using NJHRC, and seeing housing resources.",
    website: "https://www.nj.gov/njhrc/",
    featured: false,
  },
  {
    id: 6,
    name: "Middlesex County Office of Human Services",
    category: "Basic Needs & Referrals",
    type: "County Human Services",
    location: "New Brunswick, NJ",
    serves: "Middlesex County residents seeking county support services",
    summary:
      " The Office of human services conducts activities to identify the service needs and in response provides referral services to organizations and individuals. ",
    website:
      "https://www.middlesexcountynj.gov/government/departments/department-of-community-services/office-of-human-services",
    featured: false,
  },
  {
    id: 7,
    name: "Middlesex County Service Locator",
    category: "Basic Needs & Referrals",
    type: "Resource Search Tool",
    location: "Middlesex County",
    serves: "Residents looking for food, housing, caregiving, veterans, and other services",
    summary:
      "A search tool that helps find assitance regarding food, housing, clothing or even job training through the ZIP code.",
    website:
      "https://www.middlesexcountynj.gov/government/departments/department-of-community-services/middlesex-county-service-locator",
    featured: false,
  },
  {
    id: 8,
    name: "Sayreville Recreation Department",
    category: "Community Events & Programs",
    type: "Parks, Events & Recreation",
    location: "Sayreville, NJ",
    serves: "Residents interested in seasonal programs, activities, and events",
    summary:
      " A department that allows residents to register for events that are both fun and productive. ",
    website: "https://sayrevillenj.myrec.com/info/default.aspx",
    featured: true,
  },
  {
    id: 9,
    name: "Sayreville Clean Communities",
    category: "Community Events & Programs",
    type: "Civic Engagement & Cleanup",
    location: "Sayreville, NJ",
    serves: "Residents and nonprofits interested in cleanup efforts and beautification",
    summary:
      "Shares information on cleanup efforts, education, and mini-grant opportunities for local nonprofit groups.",
    website: "https://www.sayreville.com/cn/webpage.cfm?tpid=12852",
    featured: false,
  },
  {
    id: 10,
    name: "Middlesex County Behavioral Health Navigators",
    category: "Basic Needs & Referrals",
    type: "Mental Health Navigation",
    location: "Middlesex County",
    serves: " All residents across Middlesex County seeking help for a behavioral heath situation",
    summary:
      " The Behavioral Heath Navigators provide support to people dealing wuth mental heath, depression, and substance use disorders. ",
    website:
      "https://www.middlesexcountynj.gov/government/departments/department-of-community-services/office-of-human-services/behavioral-health-navigators",
    featured: false,
  },
];

export const categories = [
  "All",
  "Food Assistance",
  "Clothing & Household",
  "Basic Needs & Referrals",
  "Community Events & Programs",
];

export const quickLinks = [
  {
    title: "Housing Help",
    description: "Statewide housing and affordable unit resources.",
    href: "https://www.nj.gov/njhrc/",
    icon: Home,
  },
  {
    title: "Community Programs",
    description: "Check Sayreville recreation and events/gatherings.",
    href: "https://sayrevillenj.myrec.com/info/default.aspx",
    icon: CalendarDays,
  },
  {
    title: "Food Support",
    description: "Find pantry and grocery assistance options.",
    href: "https://www.hohnj.org/",
    icon: HeartHandshake,
  },
];