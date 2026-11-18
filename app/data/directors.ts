export type Director = {
  name: string
  role: string
  group: 'Sponsor' | 'Independent'
  img: string
  highlights: string[]
  bio: string
}

export const directors: Director[] = [
  {
    name: 'Mr. Kareem Din',
    role: 'Chairman',
    group: 'Sponsor',
    img: '/assets/img/01 mr kareem din - chairmanfb31.jpg',
    highlights: [
      'Highly accomplished and visionary business leader',
      'Extensive knowledge in the aluminium extrusion business',
      'Provides leadership, vision and strategic planning'
    ],
    bio: 'Mr. Kareem Din is a highly accomplished and visionary business leader with a proven track record of success in navigating companies to unprecedented growth and profitability. He serves as Chairman of the company, bringing with him 31 years of experience in the Aluminium Profile Industry. Additionally, Mr. Kareem Din holds the position of Chairman at Dalco Building Systems Ltd and Panache (Pvt) Ltd. He is committed to enhancing the overall industry and contributing to the development of good organizational practices. He completed his MBA in Finance from Florida International University, USA.'
  },
  {
    name: 'Mr. Md. Soleman Molla',
    role: 'Vice Chairman',
    group: 'Sponsor',
    img: '/assets/img/02 mr md soleman molla - vice chairman287f.jpg',
    highlights: [
      'Joined Dhaka Thai Ltd in 2003',
      '25 years of experience in the aluminium industry of Bangladesh',
      'Managing Director at Molla Adib Mohammad Limited and Proprietor of Adib Enterprise'
    ],
    bio: 'Mr. Md. Soleman Molla is the Vice Chairman of Dhakathai Alcomaxx PLC. He has more than 25 years of working experience in the Aluminium Industry of Bangladesh. He completed HSC from Kabi Nazrul Govt. College and University. After completing his studies he joined his father’s business and later joined Dhaka Thai Ltd in the year 2003. Additionally, Mr. Md. Soleman Molla holds the position of Managing Director at Molla Adib Mohammad Limited and Proprietor of Adib Enterprise. He has an entrepreneurial mindset with good marketing network and better insight into the aluminium industry of Bangladesh.'
  },
  {
    name: 'Brigadier General Sharif Aziz, PSC (retd)',
    role: 'Director',
    group: 'Sponsor',
    img: '/assets/img/04 mr sharif aziz - director35b2.jpg',
    highlights: [
      'Eminent retired Brigadier General of the Bangladesh Army',
      '26 years of experience in the aluminium industry',
      'Managing Director at Elite Security Services Limited and Elite Logistic Services Limited'
    ],
    bio: 'Brigadier General Sharif Aziz, PSC (retd) is one of the renowned officers of the Bangladesh Army. After retirement he serves as a Director of the company, bringing with him 26 years of experience in the Aluminium Industry. Additionally, he holds the position of Managing Director at Elite Security Services Limited, Elite Logistic Services Limited and Director of Kai Aluminium Bangladesh Limited. He achieved distinction in a number of courses in intelligence & security and was awarded the prestigious symbol of ‘PSC’ from the Malaysian Armed Forces Staff College in 1981. He is also a graduate of Resource Management Centre, California, U.S.A. and took a Mid-Level Management Course from Institute of Public Administration, Malaysia. He led the Bangladesh Military Delegation to Pacific Management Seminar in 1992, held in Hawaii, U.S.A. He was invited by the Netherlands Government to attend a 3 weeks Export, Marketing and Management Seminar by CBI in 1994 (Centre for Promotion of Imports from Developing Countries).'
  },
  {
    name: 'Mr. Noordin Charania',
    role: 'Director',
    group: 'Sponsor',
    img: '/assets/img/05 mr noordin charania - director1d66.jpg',
    highlights: [
      '40 years of expertise in aluminium extrusions',
      'Degree in Mechanical Engineering from the United States',
      'Plays a pivotal role in guiding the company’s strategic direction'
    ],
    bio: 'Mr. Noordin Charania is a highly experienced professional with 40 years of expertise in the field of Aluminium Extrusions. He holds a degree in Mechanical Engineering from the United States, providing him with a strong technical foundation. Throughout his career, Mr. Charania has demonstrated exceptional leadership and industry knowledge, contributing significantly to the growth and success of Dhakathai Alcomaxx PLC. As Director, he plays a pivotal role in guiding the company’s strategic direction and ensuring its continued excellence in the aluminium extrusions industry.'
  },
  {
    name: 'Mr. Saleem Ahmed',
    role: 'Director',
    group: 'Sponsor',
    img: '/assets/img/06 mr saleem ahmed - director9df0.jpg',
    highlights: [
      'Associated with Metal Extrusions Ltd since 1997',
      '33 years of experience in aluminium extrusions',
      'Led sales and marketing across Pakistan before joining Dhaka Thai'
    ],
    bio: 'Mr. Saleem Ahmed is the Director of Dhakathai Alcomaxx PLC. He has 33 years’ experience in the field of Aluminium Extrusions. He completed B.Com. Economics from Lahore Govt. College of Commerce in Pakistan. He has worked in various capacities, heading sales and marketing all over Pakistan for an industry based in Karachi, Pakistan. Since 1997 he has been associated with Metal Extrusions Ltd and, from its inception, with Dhaka Thai Ltd. Designing layouts and installation of all machineries in Dhaka Thai were carried out under his supervision.'
  },
  {
    name: 'Mrs. Husna Din',
    role: 'Director',
    group: 'Sponsor',
    img: '/assets/img/07 mrs husna din - director7c3a.jpg',
    highlights: [
      '26 years of experience in the aluminium industry',
      'Sponsor Director at Dhakathai Alcomaxx PLC since 1997',
      'Played a significant role in the company’s strategic growth'
    ],
    bio: 'Mrs. Husna Din is the Director of Dhakathai Alcomaxx PLC. She has 26 years’ experience in the field of Aluminium Industry. She completed Bachelor of Arts (B.A) from Saint Joseph’s College in Pakistan. Since 1997, Mrs. Din has played a pivotal role as Sponsor Director at Dhakathai Alcomaxx PLC, contributing to the company’s strategic growth and success.'
  },
  {
    name: 'Mr. Karim Kamaluddin Charania',
    role: 'Director',
    group: 'Sponsor',
    img: '/assets/img/08 mr karim kamaluddin charania - director17a8.jpg',
    highlights: [
      '23 years of experience in aluminium extrusions and buying operations',
      'Family metals business in Karachi since 1947',
      'Runs a garment buying house exporting to EU, USA and Canadian markets'
    ],
    bio: 'Mr. Karim Kamaluddin Charania is the Director of Dhakathai Alcomaxx PLC. He has 23 years of experience in the field of Aluminium Extrusions and buying operations. From the very beginning he has been involved with the family business of Metals — the family is pioneer in the metal business since 1947 in Karachi by the name of Charania (Group) Metals. After receiving high school education from USA, he moved to Bangladesh and completed Bachelor of Business Administration (BBA) in Finance and Marketing from North South University. After fulfillment of studies, he started a Garment Buying House exporting to EU / USA & Canadian markets and is involved in Dhakathai Alcomaxx PLC as a Director of the company.'
  },
  {
    name: 'Mr. Sulaiman S. Ajanee',
    role: 'Independent Director',
    group: 'Independent',
    img: '/assets/img/09 mr sulaiman s ajanee - independent directorbe19.jpg',
    highlights: [
      'Managing Partner of Standard Finis Oil Co.',
      'Experience across manufacturing, trading, retail, marketing, banking and export',
      'Former Chairman of IPDC and Managing Director of World Com. Ltd.'
    ],
    bio: 'Mr. Sulaiman S. Ajanee is one of the Independent Directors of Dhakathai Alcomaxx PLC. He holds an Associate in Engineering from California, USA. Formerly he was Chairman of Industrial Promotion and Development Company (IPDC) and Managing Director of World Com. Ltd. Now he is working as Managing Partner of Standard Finis Oil Co. He has experience in the fields of Manufacturing, Trading, Retail, Marketing, Distribution, Banking, Import and Export. He is involved in manufacturing of Household Insecticides and Disinfectants, Pharmaceuticals, Audio Cassettes, Compact Discs, Digital Versatile Discs, Plastic Injection Molding and Photo Labs.'
  },
  {
    name: 'Mr. Zeeshan Hasib',
    role: 'Independent Director',
    group: 'Independent',
    img: '/assets/img/10 mr zeeshan hasib - independent director9c43.jpg',
    highlights: [
      '26 years of experience in the financial sector',
      '18 years as a corporate banker',
      'Certified ‘Credit Professional’ by Omega UK and ‘Trade Professional’ by Standard Chartered Bank, UK'
    ],
    bio: 'Mr. Zeeshan Hasib has a long 26-years experience in the financial sector including 18 years as a Corporate Banker. Mr. Hasib is a certified ‘Credit Professional’ accorded by Omega UK and a ‘Trade Professional’ conferred by Standard Chartered Bank, UK. Mr. Hasib started his career in 1998 and has worked in various senior positions within Corporate Banking at The Hongkong and Shanghai Banking Corporation (HSBC), Standard Chartered Bank, Société Générale and NRB Bank Limited. Mr. Hasib holds an MBA from The Colorado State University, USA.'
  }
]
