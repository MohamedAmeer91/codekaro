
const participants = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    age: 28,
    gender: "female",
    department: "Engineering",
    joinDate: "2023-01-15",
    salary: 75000,
    skills: ["JavaScript", "React", "Node.js"],
    isActive: true,
    location: "New York"
  },
  {
    id: 2,
    name: "Michael Chen",
    email: "michael.chen@email.com",
    age: 34,
    gender: "male",
    department: "Marketing",
    joinDate: "2022-08-20",
    salary: 65000,
    skills: ["SEO", "Content Marketing", "Analytics"],
    isActive: true,
    location: "San Francisco"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    email: "emily.rodriguez@email.com",
    age: 26,
    gender: "female",
    department: "Design",
    joinDate: "2023-03-10",
    salary: 68000,
    skills: ["UI/UX", "Figma", "Adobe Creative Suite"],
    isActive: false,
    location: "Los Angeles"
  },
  {
    id: 4,
    name: "David Thompson",
    email: "david.thompson@email.com",
    age: 42,
    gender: "male",
    department: "Engineering",
    joinDate: "2021-11-05",
    salary: 95000,
    skills: ["Python", "Machine Learning", "AWS"],
    isActive: true,
    location: "Seattle"
  },
  {
    id: 5,
    name: "Jessica Park",
    email: "jessica.park@email.com",
    age: 31,
    gender: "female",
    department: "Sales",
    joinDate: "2022-06-18",
    salary: 72000,
    skills: ["CRM", "Negotiation", "Lead Generation"],
    isActive: true,
    location: "Chicago"
  },
  {
    id: 6,
    name: "Robert Kim",
    email: "robert.kim@email.com",
    age: 29,
    gender: "male",
    department: "Engineering",
    joinDate: "2023-02-28",
    salary: 78000,
    skills: ["Java", "Spring Boot", "Docker"],
    isActive: true,
    location: "Austin"
  },
  {
    id: 7,
    name: "Amanda White",
    email: "amanda.white@email.com",
    age: 37,
    gender: "female",
    department: "HR",
    joinDate: "2021-09-12",
    salary: 62000,
    skills: ["Recruitment", "Employee Relations", "Training"],
    isActive: true,
    location: "Boston"
  },
  {
    id: 8,
    name: "Carlos Martinez",
    email: "carlos.martinez@email.com",
    age: 33,
    gender: "male",
    department: "Finance",
    joinDate: "2022-04-07",
    salary: 71000,
    skills: ["Financial Analysis", "Excel", "SAP"],
    isActive: false,
    location: "Miami"
  },
  {
    id: 9,
    name: "Lisa Anderson",
    email: "lisa.anderson@email.com",
    age: 25,
    gender: "female",
    department: "Design",
    joinDate: "2023-07-03",
    salary: 58000,
    skills: ["Graphic Design", "Branding", "Photoshop"],
    isActive: true,
    location: "Portland"
  },
  {
    id: 10,
    name: "James Wilson",
    email: "james.wilson@email.com",
    age: 39,
    gender: "male",
    department: "Operations",
    joinDate: "2021-12-14",
    salary: 69000,
    skills: ["Project Management", "Process Optimization", "Lean Six Sigma"],
    isActive: true,
    location: "Denver"
  }
];

let total_participants = participants.length;

for(let i = 0; i < total_participants/2; i++) {
let lucky_winner_index = Math.random() * total_participants;
lucky_winner_index = Math.floor(lucky_winner_index);

let lucky_winner = participants[lucky_winner_index]

console.log("Lucky Winner:", lucky_winner.name);
}