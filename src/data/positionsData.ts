type SocialLink = {
    href: string;
    icon: string;
  };
  
  type TeamMember = {
    name: string;
    title: string;
    description: string;
    profileImage: string;
    bgImage: string;
    socialLinks: SocialLink[];
  };
  
  


export const teamMembers = [
    {
      name: 'Pragma Kar',
      title: 'Lab Director',
      description: 'Lab director PerSisst | Professor IIITD | PhD, Jadavpur',
      profileImage: '/assets/prof_without_bg.png',
      bgImage: '/assets/prof_with_bg.png',
      socialLinks: [
        { href: 'https://linkedin.com', icon: '/assets/in-filled.svg' },
        { href: 'https://behance.net', icon: '/assets/behance-fill.svg' },
        { href: 'https://x.com', icon: '/assets/x-filled.svg' },
        { href: 'https://github.com', icon: '/assets/githubfilled.svg' },
      ],
    },
    {
        name: 'Vinay Kumar Dubey',
        title: 'Frontend Developer',
        description: 'Student | BTech 3rd Year ',
        profileImage: '/assets/VinayBack.png',
        bgImage: '/assets/VinayFront.jpg',
        socialLinks: [
          { href: 'https://linkedin.com', icon: '/assets/in-filled.svg' },
          { href: 'https://behance.net', icon: '/assets/behance-fill.svg' },
          { href: 'https://x.com', icon: '/assets/x-filled.svg' },
          { href: 'https://github.com', icon: '/assets/githubfilled.svg' },
        ],
      },
    // Add more team members here...
  ];
  