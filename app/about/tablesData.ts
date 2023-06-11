export interface Queen {
  id: string;
  subject: string;
  mark: number | null;
  grade: string | null;
  level: number;
  year: number;
}

export const QUEEN = [
  /*First Year*/
  {
    id: "mLkJlU",
    subject: "Procedural Programming",
    grade: "A",
    mark: 81,
    level: 4,
    year: 1,
  },
  {
    id: "H8CIRl",
    subject: "Computer Systems and Networks",
    grade: "A",
    mark: 94.4,
    level: 4,
    year: 1,
  },
  {
    id: "aRevyd",
    subject: "Logic and Discrete Structures",
    grade: "A",
    mark: 98.7,
    level: 4,
    year: 1,
  },
  {
    id: "5RwpM9",
    subject: "Object-Oriented Programming",
    grade: "A",
    mark: 91.4,
    level: 4,
    year: 1,
  },
  {
    id: "OCoOd3",
    subject: "Fundamentals of Web Technology",
    grade: "A",
    mark: 100,
    level: 4,
    year: 1,
  },
  {
    id: "D6iOQy",
    subject: "Information System Analysis",
    grade: "A",
    mark: 90.8,
    level: 4,
    year: 1,
  },
  {
    id: "KcO6Jw",
    subject: "Automata and Formal Languages",
    grade: "A",
    mark: 93.5,
    level: 4,
    year: 1,
  },
  {
    id: "Vkmwrt",
    subject: "Professional and Research Practice",
    grade: "A",
    mark: 75,
    level: 4,
    year: 1,
  },
  /*Second Year*/
  {
    id: "P8Sxe0",
    subject: "Software Engineering",
    grade: "A",
    mark: 85.8,
    level: 5,
    year: 2,
  },
  {
    id: "JGVoT6",
    subject: "Software Engineering Project",
    grade: "A",
    mark: 80.7,
    level: 5,
    year: 2,
  },
  {
    id: "4bCOy9",
    subject: "Probability and Matrices",
    grade: "A",
    mark: 81.2,
    level: 5,
    year: 2,
  },
  {
    id: "PET73e",
    subject: "Operating Systems",
    grade: "A",
    mark: 89.5,
    level: 5,
    year: 2,
  },
  {
    id: "uo6Wcn",
    subject: "Database Systems",
    grade: "A",
    mark: 80.8,
    level: 5,
    year: 2,
  },
  {
    id: "IRQFs4",
    subject: "Graphical User Interfaces",
    grade: "A",
    mark: 84.1,
    level: 5,
    year: 2,
  },
  {
    id: "G4gKiE",
    subject: "Internet Protocols and Applications",
    grade: "A",
    mark: 92.1,
    level: 5,
    year: 2,
  },
  {
    id: "j27LMG",
    subject: "Algorithms and Data Structures",
    grade: "A",
    mark: 88.7,
    level: 5,
    year: 2,
  },
  /*Third Year*/
  {
    id: "2aSLtN",
    subject: "Industrial Placement Project",
    grade: "A",
    mark: 85.4,
    level: 5,
    year: 3,
  },
  /*Final Year*/
  {
    id: "CMM4nQ",
    subject: "Data Mining",
    grade: "A",
    mark: 75.6,
    level: 6,
    year: 4,
  },
  {
    id: "K7ql2q",
    subject: "Web Programming",
    grade: "A",
    mark: 87.3,
    level: 6,
    year: 4,
  },
  {
    id: "BxBS4J",
    subject: "Big Data Processing",
    grade: "A",
    mark: 96.2,
    level: 6,
    year: 4,
  },
  {
    id: "PjDKQF",
    subject: "Digital Media and Social Networks",
    grade: "A",
    mark: null,
    level: 6,
    year: 4,
  },
  {
    id: "apnCWM",
    subject: "Security Engineering",
    grade: "A",
    mark: null,
    level: 6,
    year: 4,
  },
  {
    id: "tgVA91",
    subject: "User Experience Design",
    grade: "A",
    mark: 70.5,
    level: 6,
    year: 4,
  },
  {
    id: "Jd4NS6",
    subject: "Project",
    grade: "A",
    mark: null,
    level: 6,
    year: 4,
  },
];

export interface Glenthorne {
  id: string;
  subject: string;
  board: string;
  grade: string;
  level: string;
}

export const GLENTHORNE = [
  {
    id: "IKoURo",
    subject: "Mathematics",
    grade: "A",
    board: "Edexcel",
    level: "A-Levels",
  },
  {
    id: "9Thijj",
    subject: "Computer Science",
    grade: "B",
    board: "OCR",
    level: "A-Levels",
  },
  {
    id: "7roklG",
    subject: "Physics",
    grade: "B",
    board: "OCR",
    level: "A-Levels",
  },
  {
    id: "5rwyFO",
    subject: "Further Mathematics",
    grade: "C",
    board: "Edexcel",
    level: "A-Levels",
  },
  {
    id: "PBDDTS",
    subject: "English Language",
    grade: "4",
    board: "OCR",
    level: "GCSE",
  },
];

export interface Kenton {
  id: string;
  subject: string;
  board: string;
  grade: string;
  level: string;
}

export const KENTON = [
  {
    id: "99NgP47",
    subject: "Businness",
    grade: "M2",
    board: "Edexcel",
    level: "BTEC",
  },
  {
    id: "8ApPGb",
    subject: "Engineering",
    grade: "*2",
    board: "Edexcel",
    level: "BTEC",
  },
  {
    id: "ZXEXCz",
    subject: "Higher Mathematics",
    grade: "8",
    board: "AQA",
    level: "GCSE",
  },
  {
    id: "vXkHSw",
    subject: "English Literature",
    grade: "4",
    board: "WJEC",
    level: "GCSE",
  },
  {
    id: "KPrKPu",
    subject: "Music",
    grade: "B",
    board: "Edexcel",
    level: "GCSE",
  },
  {
    id: "xRjaZm",
    subject: "Religion Studies",
    grade: "B",
    board: "AQA",
    level: "GCSE",
  },
  {
    id: "xYvxPf",
    subject: "Science",
    grade: "B",
    board: "AQA",
    level: "GCSE",
  },
  {
    id: "g4fb8L",
    subject: "Additional Science",
    grade: "A",
    board: "AQA",
    level: "GCSE",
  },
  {
    id: "pQ5ThX",
    subject: "History",
    grade: "B",
    board: "AQA",
    level: "GCSE",
  },
  {
    id: "hdYaRs",
    subject: "Computing",
    grade: "A",
    board: "OCR",
    level: "GCSE",
  },
];
