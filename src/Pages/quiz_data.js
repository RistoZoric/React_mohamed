export const quiz_data = [
  {
    label: "Profitability",
    question: "How much would it cost to open one of your locations?",
    completed: 4,
    answerOptions: [
      { answerText: "AED 1.5 million and above", points: 2, id: "one_one_two" },
      {
        answerText: "AED 1 million to AED 1.5 million",
        points: 3,
        id: "one_one_three",
      },
      {
        answerText: "AED 500,000 to AED 1 million",
        points: 4,
        id: "one_one_four",
      },
      { answerText: "Less than AED 500,000", points: 5, id: "one_one_five" },
    ],
  },
  {
    label: "Profitability",
    question: "What is your return on investment (%)?",
    completed: 8,
    answerOptions: [
      { answerText: "0 – 10", points: 1, id: "one_two_one" },
      { answerText: "10 – 30", points: 3, id: "one_two_three" },
      { answerText: "30 above", points: 5, id: "one_two_five" },
    ],
  },
  {
    label: "Profitability",
    question: "How profitable is your business?",
    completed: 12,
    answerOptions: [
      { answerText: "No profit", points: 1, id: "one_three_one" },
      { answerText: "Somewhat profitable", points: 3, id: "one_three_three" },
      { answerText: "Very profitable", points: 5, id: "one_three_five" },
    ],
  },
  {
    label: "Profitability",
    question:
      "How do your business sales compare to those of other businesses in your industry?",
    completed: 16,
    answerOptions: [
      { answerText: "Lower than most", points: 1, id: "one_four_one" },
      { answerText: "About the Same", points: 3, id: "one_four_three" },
      { answerText: "Higher than most", points: 5, id: "one_four_five" },
    ],
  },
  {
    label: "Profitability",
    question:
      "To what degree is your business distinctive from its competitors?",
    completed: 20,
    answerOptions: [
      { answerText: "Not very", points: 2, id: "one_five_two" },
      { answerText: "Somewhat", points: 3, id: "one_five_three" },
      { answerText: "Very", points: 4, id: "one_five_four" },
      { answerText: "Unique", points: 5, id: "one_five_five" },
    ],
  },
  {
    label: "Profitability",
    question: "Who are your main target customers?",
    completed: 24,
    answerOptions: [
      { answerText: "All Income level", points: 5, id: "one_six_five" },
      {
        answerText: "Low Income to Middle Income",
        points: 4,
        id: "one_six_four",
      },
      {
        answerText: "Middle Income to High Income",
        points: 3,
        id: "one_six_three",
      },
      { answerText: "High Income Only", points: 2, id: "one_six_two" },
    ],
  },

  // second section
  {
    label: "Reproducibility and Know-How",
    question: "Do you have an operating prototype?",
    completed: 28,
    answerOptions: [
      { answerText: "Yes", points: 5, id: "two_one_five" },
      { answerText: "No", points: 0, id: "two_one_zero" },
    ],
  },
  {
    label: "Reproducibility and Know-How",
    question: "How systematized is your business operations (SOPs)?",
    completed: 32,
    answerOptions: [
      { answerText: "Not systematized", points: 2, id: "two_two_two" },
      {
        answerText: "Some basic policies and/or handbook",
        points: 3,
        id: "two_two_three",
      },
      { answerText: "Well documented", points: 4, id: "two_two_four" },
      { answerText: "Computerized", points: 5, id: "two_two_five" },
    ],
  },
  {
    label: "Reproducibility and Know-How",
    question:
      "How long would it take you to teach someone how to operate your business?",
    completed: 36,
    answerOptions: [
      { answerText: "Special Certification", points: 2, id: "two_three_two" },
      { answerText: "Over three months", points: 3, id: "two_three_three" },
      { answerText: "One to three months", points: 4, id: "two_three_four" },
      { answerText: "Less than one month", points: 5, id: "two_three_five" },
    ],
  },
  {
    label: "Reproducibility and Know-How",
    question:
      "Do you have an effective POS (point of sale) and Accounting system?",
    completed: 40,
    answerOptions: [
      { answerText: "No", points: 1, id: "two_four_one" },
      { answerText: "Basic", points: 3, id: "two_four_three" },
      { answerText: "Advanced", points: 5, id: "two_four_five" },
    ],
  },
  {
    label: "Reproducibility and Know-How",
    question: "Do you have a personnel policy in place?",
    completed: 44,
    answerOptions: [
      { answerText: "No", points: 2, id: "two_five_two" },
      { answerText: "Yes", points: 5, id: "two_five_five" },
    ],
  },
  {
    label: "Reproducibility and Know-How",
    question: "Do you have branding guidelines?",
    completed: 48,
    answerOptions: [
      { answerText: "Not yet", points: 3, id: "two_six_three" },
      { answerText: "Some branding materials", points: 4, id: "two_six_four" },
      { answerText: "Standard brand manual", points: 5, id: "two_six_five" },
    ],
  },

  // Third Section
  {
    label: "Marketability",
    question: "The market for your business is?",
    completed: 52,
    answerOptions: [
      { answerText: "Local", points: 2, id: "three_one_two" },
      { answerText: "Regional", points: 3, id: "three_one_three" },
      { answerText: "International", points: 4, id: "three_one_four" },
    ],
  },
  {
    label: "Marketability",
    question: "The competition for your products/services is?",
    completed: 56,
    answerOptions: [
      { answerText: "Zero", points: 4, id: "three_two_four" },
      { answerText: "Low", points: 3, id: "three_two_three" },
      { answerText: "Moderate", points: 2, id: "three_two_two" },
      { answerText: "High", points: 1, id: "three_two_one" },
    ],
  },
  {
    label: "Marketability",
    question:
      "Where do you stand in terms of media presence/ brand recognition?",
    completed: 60,
    answerOptions: [
      { answerText: "None", points: 0, id: "three_three_zero" },
      {
        answerText: "Some print and/or social media",
        points: 1,
        id: "three_three_one",
      },
      {
        answerText: "Strong online presence",
        points: 2,
        id: "three_three_two",
      },
      {
        answerText: "Both online and offline",
        points: 3,
        id: "three_three_three",
      },
    ],
  },
  {
    label: "Marketability",
    question: "Is your corporate website active?",
    completed: 64,
    answerOptions: [
      { answerText: "Yes", points: 2, id: "three_four_two" },
      { answerText: "No", points: 1, id: "three_four_one" },
    ],
  },
  {
    label: "Marketability",
    question:
      "Have you received proposals to franchise your business over the past years?",
    completed: 68,
    answerOptions: [
      { answerText: "No, not yet", points: 1, id: "three_five_one" },
      { answerText: "A few requests", points: 2, id: "three_five_two" },
      {
        answerText: "Many potential investors",
        points: 3,
        id: "three_five_three",
      },
    ],
  },
  {
    label: "Marketability",
    question: "Have you received any awards/recognition?",
    completed: 72,
    answerOptions: [
      { answerText: "Yes, quite a few", points: 2, id: "three_six_two" },
      { answerText: "No, not so far", points: 1, id: "three_six_one" },
    ],
  },

  // Fourth Section
  {
    label: "Legal & Organization",
    question: "How long has your business been in operation?",
    completed: 76,
    answerOptions: [
      { answerText: "Less than six months", points: 2, id: "four_one_two" },
      { answerText: "One year or more", points: 3, id: "four_one_three" },
      { answerText: "More than three years", points: 4, id: "four_one_four" },
    ],
  },
  {
    label: "Legal & Organization",
    question: "How many locations do you have?",
    completed: 80,
    answerOptions: [
      { answerText: "Single Unit", points: 2, id: "four_two_two" },
      { answerText: "Two or more", points: 3, id: "four_two_three" },
      { answerText: "More than four", points: 4, id: "four_two_four" },
    ],
  },
  {
    label: "Legal & Organization",
    question: "Do you have a marketing team?",
    completed: 84,
    answerOptions: [
      { answerText: "Yes, In-house", points: 3, id: "four_three_three" },
      { answerText: "Yes, Outsourced", points: 2, id: "four_three_two" },
      { answerText: "No", points: 1, id: "four_three_one" },
    ],
  },
  {
    label: "Legal & Organization",
    question: "Have you registered a domain name for your business?",
    completed: 88,
    answerOptions: [
      { answerText: "Yes", points: 2, id: "four_four_two" },
      { answerText: "No", points: 1, id: "four_four_one" },
    ],
  },
  {
    label: "Legal & Organization",
    question: "Have you registered your business trademarks?",
    completed: 92,
    answerOptions: [
      { answerText: "Yes, Global", points: 3, id: "four_five_three" },
      { answerText: "Yes, Local", points: 2, id: "four_five_two" },
      { answerText: "No", points: 1, id: "four_five_one" },
    ],
  },
  {
    label: "Legal & Organization",
    question: "Who runs your daily operations? ",
    completed: 96,
    answerOptions: [
      { answerText: "Myself", points: 1, id: "four_six_one" },
      { answerText: "I have a Manager", points: 2, id: "four_six_two" },
      { answerText: "Management team", points: 3, id: "four_six_three" },
    ],
  },
  {
    label: "Legal & Organization",
    question:
      "Are you ready for a lifelong responsibility to grow, nurture, support, guide, and be involved?",
    completed: 100,
    answerOptions: [
      { answerText: "Yes, can’t wait", points: 3, id: "four_seven_three" },
      {
        answerText: "I'm ready, but need to think it over",
        points: 2,
        id: "four_seven_two",
      },
      { answerText: "No, I am not sure", points: 1, id: "four_seven_one" },
    ],
  },
];
