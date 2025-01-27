export interface Position {
    id: number;
    title: string;
    learnMoreLink: string;
    description: string;
    qualification: string;
  }
  
export const AvailablePositions: Position[] = [
    {
        id: 1,
        title: "BTech Internship",
        learnMoreLink: "https://useless-guys.com",
        description: "Join the PerSIsst Lab as an intern to work on real-world applications of pervasive technology. Gain hands-on experience in cutting-edge tech and research. Expand your skills and explore new possibilities in an innovative environment.",
        qualification: "BTech students in their 3rd or 4th year. Knowledge of AI, programming languages, or tech concepts preferred. Strong analytical skills and interest in tech are beneficial."
    },
    {
        id: 2,
        title: "Research Internship",
        learnMoreLink: "https://useless-guys.com",
        description: "Join our Research Team to explore advanced projects in AI, Data Science, and Machine Learning. Focus on novel algorithms and real-world applications, collaborating with experts on innovative solutions and gaining valuable research experience.",
        qualification: "Undergraduate/Graduate students with strong analytical and problem-solving skills. Knowledge of Machine Learning, AI, or statistical methods is a plus."
    },
    {
        id: 3,
        title: "PhD Position in AI Research",
        learnMoreLink: "https://useless-guys.com",
        description: "Seeking highly motivated PhD candidates to conduct research in AI, Machine Learning & Data Science. Contribute to groundbreaking work and collaborate with experts to solve critical problems in the field of tech and data-driven solutions.",
        qualification: "Master's degree or equivalent in Computer Science, Engineering, or related fields. Strong background in AI/ML and research experience is required for this role."
    },
    {
        id: 4,
        title: "Research Assistant",
        learnMoreLink: "https://useless-guys.com",
        description: "Looking for a Research Assistant to support ongoing projects in AI and Data Science. Your responsibilities will include data collection, algorithm implementation, literature review, and assisting in project development",
        qualification: "Bachelor's degree or ongoing studies in Computer Science, Engineering, or related fields. Previous experience in AI/ML, research projects, or data science is preferred."
    }
  ]



export  const OurPrpose = [
    {
      iconSrc: "/images/purpoes/Mission.svg",
      title: "Mission",
      description:
        "Transforming lives through smart innovations - people face challenges from basic issues like cognition and health to advanced needs like interactivity and smart assistance.",
    },
    {
      iconSrc: "/images/purpoes/Vision.svg",
      title: "Vision",
      description:
        "Weaving a smarter tomorrow for all - curating a world where intelligent and smart technology can seamlessly integrate with and enhance the quality of daily living through PerSIsst Lab.",
    },
    {
      iconSrc: "/images/purpoes/Value.svg",
      title: "Value",
      description:
        "Assist to innovate, innovate to assist - valuing innovations that involve creative and free-thinking, individual as well as team effort, and a spirit to bring a positive transformation to lives.",
    },
  ];
  