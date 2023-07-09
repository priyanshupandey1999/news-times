const mockData = [
  {
    author: null,
    title: "Critical hospital services can call in striking nurses",
    description:
      'The NHS says "positive discussions" with the RCN mean nurses will cover some departments.',
    url: "https://www.bbc.co.uk/news/health-65442143?at_medium=RSS&at_campaign=KARANGA",
    source: "BBC News - Health",
    image: null,
    category: "health",
    language: "en",
    country: "gb",
    published_at: "2023-04-30T16:41:44+00:00",
  },
  {
    author: "Melinda Wenner Moyer",
    title:
      "Biden Wants to Be President Into His 80s. How Might Age Affect His Health?",
    description: "Experts weigh in on octogenarian health.",
    url: "https://www.nytimes.com/2023/04/25/well/live/biden-president-age-health-2024.html",
    source: "The New York Times",
    image:
      "https://static01.nyt.com/images/2023/02/27/multimedia/WELL-BIDEN-AGING6-kqcm/WELL-BIDEN-AGING6-kqcm-moth.jpg",
    category: "health",
    language: "en",
    country: "us",
    published_at: "2023-04-25T15:56:16+00:00",
  },
  {
    author: "Alisha Haridasani Gupta",
    title:
      "Menopause Costs U.S. Women $1.8 Billion In Lost Working Time, Study Shows",
    description:
      "Some are taking sick days. Others are cutting back their hours. Still others end up quitting altogether.",
    url: "https://www.nytimes.com/2023/04/28/well/live/menopause-symptoms-work-women.html",
    source: "The New York Times",
    image:
      "https://static01.nyt.com/images/2023/04/27/well/MENOPAUSE-ECONOMIC-COSTS1/MENOPAUSE-ECONOMIC-COSTS1-moth.jpg",
    category: "health",
    language: "en",
    country: "us",
    published_at: "2023-04-28T20:56:06+00:00",
  },
  {
    author: "Alisha Haridasani Gupta and Catherine Pearson",
    title: "PUMP Act: What to Know About the New Breast Pumping Law",
    description:
      "Enhanced regulations aim to protect a greater number of working parents.",
    url: "https://www.nytimes.com/2023/05/03/well/family/pump-act-breastfeeding.html",
    source: "The New York Times",
    image:
      "https://static01.nyt.com/images/2023/05/01/multimedia/WELL-PUMP-ACT1-gzjm/WELL-PUMP-ACT1-gzjm-moth.jpg",
    category: "health",
    language: "en",
    country: "us",
    published_at: "2023-05-03T09:00:23+00:00",
  },
  {
    author: "Dani Blum and Dana G. Smith",
    title: "How to Respond to a Stranger in Mental Distress",
    description:
      "Experts explain what to do if you feel threatened and how to offer help if the situation calls for it.",
    url: "https://www.nytimes.com/2023/05/05/well/live/mental-illness-distress-behavior.html",
    source: "The New York Times",
    image:
      "https://static01.nyt.com/images/2023/05/05/multimedia/05WELL-MENTAL-ILLNESS-ENCOUNTER5-cpgj/05WELL-MENTAL-ILLNESS-ENCOUNTER5-cpgj-moth.jpg",
    category: "health",
    language: "en",
    country: "us",
    published_at: "2023-05-05T22:31:29+00:00",
  },
  {
    author: "Benjamin Mueller",
    title: "Pancreatic Cancer Vaccine Shows Promise in Small Trial",
    description:
      "Using mRNA tailored to each patient’s tumor, the vaccine may have staved off the return of one of the deadliest forms of cancer in half of those who received it.",
    url: "https://www.nytimes.com/2023/05/10/health/pancreatic-cancer-vaccine-mrna.html",
    source: "The New York Times",
    image:
      "https://static01.nyt.com/images/2023/05/10/science/10cancer/10cancer-moth.jpg",
    category: "health",
    language: "en",
    country: "us",
    published_at: "2023-05-10T15:56:12+00:00",
  },
  {
    author: "Catherine Pearson",
    title: "How to Help a Teen Who Can’t Sleep",
    description:
      "Nearly a quarter of adolescents grapple with insomnia. Experts say small habit changes can make a big difference.",
    url: "https://www.nytimes.com/2023/05/08/well/family/teens-sleep-insomnia.html",
    source: "The New York Times",
    image:
      "https://static01.nyt.com/images/2023/05/08/well/08WELL-INSOMNIA-TEENS/08WELL-INSOMNIA-TEENS-moth.jpg",
    category: "health",
    language: "en",
    country: "us",
    published_at: "2023-05-08T14:54:47+00:00",
  },
  {
    author: "Danielle Friedman",
    title:
      "Fitness Influencers Often Do More Harm Than Good, Research Suggests",
    description:
      "Research suggests that many fitness-themed Instagram accounts risk doing more harm than good. Here’s how to find #fitspiration you can trust.",
    url: "https://www.nytimes.com/2023/05/10/well/move/fitness-influencers.html",
    source: "The New York Times",
    image:
      "https://static01.nyt.com/images/2023/05/03/well/5Well-Fitness-Influencers/5Well-Fitness-Influencers-moth.jpg",
    category: "health",
    language: "en",
    country: "us",
    published_at: "2023-05-10T09:00:20+00:00",
  },
  {
    author: "Christina Caron",
    title: "How Seasonal Allergies Can Affect Mental Health",
    description:
      "Studies suggest that allergens could play a role in mood disorders like depression and anxiety. Here’s what to know and how to get help if you need it.",
    url: "https://www.nytimes.com/2023/05/08/well/mind/allergies-depression-anxiety.html",
    source: "The New York Times",
    image:
      "https://static01.nyt.com/images/2023/04/24/multimedia/24Well-Allergies-Depression/24Well-Allergies-Depression-moth.jpg",
    category: "health",
    language: "en",
    country: "us",
    published_at: "2023-05-08T09:00:23+00:00",
  },
  {
    author: "Pam Belluck",
    title:
      "F.D.A. Advisers Say Benefits of Over-the-Counter Birth Control Pill Outweigh Risks",
    description:
      "The agency is expected to decide this summer whether to allow the first nonprescription sales of an oral contraceptive in the United States.",
    url: "https://www.nytimes.com/2023/05/10/health/fda-otc-birth-control-pill.html",
    source: "The New York Times",
    image:
      "https://static01.nyt.com/images/2023/05/10/multimedia/10OTCpill-01-lkvj/10OTCpill-01-lkvj-moth.jpg",
    category: "health",
    language: "en",
    country: "us",
    published_at: "2023-05-10T17:21:21+00:00",
  },
  {
    author: null,
    title: "Hepatitis C home test kits available to most-at-risk in England",
    description:
      "The blood-borne virus can lead to liver disease and cancer, but symptoms often go unnoticed.",
    url: "https://www.bbc.co.uk/news/health-65571131?at_medium=RSS&at_campaign=KARANGA",
    source: "BBC News - Health",
    image: null,
    category: "health",
    language: "en",
    country: "gb",
    published_at: "2023-05-13T06:32:43+00:00",
  },
  {
    author: "Alisha Haridasani Gupta",
    title: "What to Know About the New Treatment for Hot Flashes",
    description:
      "Veozah, a nonhormonal drug, is effective against a signature symptom of menopause.",
    url: "https://www.nytimes.com/2023/05/12/well/live/hot-flash-menopause-treatment.html",
    source: "The New York Times",
    image:
      "https://static01.nyt.com/images/2023/05/12/well/Well-Fezolinetant1/Well-Fezolinetant1-moth.jpg",
    category: "health",
    language: "en",
    country: "us",
    published_at: "2023-05-12T23:07:14+00:00",
  },
  {
    author: null,
    title: "Covid inquiry: What is it investigating and how will it work?",
    description:
      "The inquiry examining the UK's handling of the pandemic has heard from politicians and experts.",
    url: "https://www.bbc.co.uk/news/explainers-57085964?at_medium=RSS&at_campaign=KARANGA",
    source: "BBC News - Health",
    image: null,
    category: "health",
    language: "en",
    country: "gb",
    published_at: "2023-06-27T07:52:37+00:00",
  },
  {
    author: "Eliza Shapiro",
    title: "How Are New Yorkers Handling the Costs of Child Care?",
    description:
      "The New York Times is interested in exploring how New York City residents are navigating the costs and challenges of care.",
    url: "https://www.nytimes.com/2023/06/26/nyregion/nyc-child-care-costs.html",
    source: "The New York Times",
    image:
      "https://static01.nyt.com/images/2023/06/23/multimedia/23childCareCallout-bzpj/23childCareCallout-bzpj-moth.jpg",
    category: "health",
    language: "en",
    country: "us",
    published_at: "2023-06-26T09:00:40+00:00",
  },
  {
    author: "Amanda Loudin",
    title: "How to Treat and Prevent Tennis Elbow",
    description:
      "The painful condition isn’t just caused by racket swings, and can sideline you from activity. But a few simple tips can get you back into the game.",
    url: "https://www.nytimes.com/2023/05/17/well/move/tennis-elbow-treatment-prevention.html",
    source: "The New York Times",
    image:
      "https://static01.nyt.com/images/2023/05/23/well/16TENNIS-ELBOW/16TENNIS-ELBOW-moth.jpg",
    category: "health",
    language: "en",
    country: "us",
    published_at: "2023-05-17T20:15:36+00:00",
  },
  {
    author: "Carina del Valle Schorske",
    title: "I Had to Quit Therapy to Finally Be Ready for It",
    description:
      "Giving up on psychoanalysis made it possible to imagine going back.",
    url: "https://www.nytimes.com/2023/05/18/magazine/quit-therapy.html",
    source: "The New York Times",
    image: null,
    category: "health",
    language: "en",
    country: "us",
    published_at: "2023-05-19T03:44:36+00:00",
  },
  {
    author: "Dani Blum",
    title: "Did You Have Your First Child After 40?",
    description: "The Times wants to hear about your parenting experience.",
    url: "https://www.nytimes.com/2023/04/05/well/family/pregnancy-after-40-callout.html",
    source: "The New York Times",
    image:
      "https://static01.nyt.com/images/2023/03/31/well/WELL-OVER-40-CALLOUT1/WELL-OVER-40-CALLOUT1-moth.jpg",
    category: "health",
    language: "en",
    country: "us",
    published_at: "2023-04-05T20:40:26+00:00",
  },
  {
    author: "Catherine Pearson",
    title: "How to Help Teens Cut Back on Social Media",
    description:
      "Public health experts have sounded alarms over the potential risks. But if you’ve already given your child full access, here’s how to cut back.",
    url: "https://www.nytimes.com/2023/06/29/well/family/social-media-usage-teens.html",
    source: "The New York Times",
    image:
      "https://static01.nyt.com/images/2023/06/09/well/09WELL-RESET-SOCIAL-MEDIA/09WELL-RESET-SOCIAL-MEDIA-moth.jpg",
    category: "health",
    language: "en",
    country: "us",
    published_at: "2023-06-29T09:00:42+00:00",
  },
  {
    author: null,
    title: "'My drinking was out of control - but now I know I can recover'",
    description:
      "Scotland's only NHS-funded rehab launches a new peer support project to save people from addiction.",
    url: "https://www.bbc.co.uk/news/uk-scotland-66058774?at_medium=RSS&at_campaign=KARANGA",
    source: "BBC News - Health",
    image: null,
    category: "health",
    language: "en",
    country: "gb",
    published_at: "2023-06-30T04:50:23+00:00",
  },
  {
    author: null,
    title: "Covid pandemic linked to surge in child and teen diabetes",
    description:
      "Experts have seen a 'substantial' yet unexplained rise in new cases worldwide since the pandemic.",
    url: "https://www.bbc.co.uk/news/health-66054946?at_medium=RSS&at_campaign=KARANGA",
    source: "BBC News - Health",
    image: null,
    category: "health",
    language: "en",
    country: "gb",
    published_at: "2023-06-30T15:00:45+00:00",
  },
  {
    author: "Trisha Pasricha",
    title: "Can You Cure Constipation Without Laxatives?",
    description:
      "Many people want to avoid taking medications. Experts weigh in on what else works.",
    url: "https://www.nytimes.com/2023/05/23/well/eat/constipation-treatment-laxatives.html",
    source: "The New York Times",
    image:
      "https://static01.nyt.com/images/2023/05/23/multimedia/23ASKWELL-CONSTIPATION-CURES1-mctb/23ASKWELL-CONSTIPATION-CURES1-mctb-moth.jpg",
    category: "health",
    language: "en",
    country: "us",
    published_at: "2023-05-23T09:00:30+00:00",
  },
  {
    author: "Catherine Pearson",
    title:
      "Is Your Child’s Relationship to Social Media Unhealthy? Here’s How to Tell.",
    description:
      "The surgeon general has warned that it can pose a “profound risk” to the mental health of adolescents. We asked experts what problematic use could look like.",
    url: "https://www.nytimes.com/2023/05/23/well/family/social-media-use-children-parents.html",
    source: "The New York Times",
    image:
      "https://static01.nyt.com/images/2023/05/23/multimedia/WELL-PROBLEMATIC-SOCIAL-MEDIA-hpgt/WELL-PROBLEMATIC-SOCIAL-MEDIA-hpgt-moth.jpg",
    category: "technology",
    language: "en",
    country: "us",
    published_at: "2023-05-23T23:13:23+00:00",
  },
  {
    author: "Danielle Friedman",
    title:
      "Hiking Guide for Beginners: How to Pack, Choose Trails and Stay Safe",
    description:
      "Exploring the great outdoors offers a host of mental and physical benefits. But there a few things you need to know first.",
    url: "https://www.nytimes.com/2023/05/24/well/move/hiking-guide-beginners.html",
    source: "The New York Times",
    image:
      "https://static01.nyt.com/images/2023/05/22/multimedia/22WNT-BEGINNERS-HIKING5-vkmt/22WNT-BEGINNERS-HIKING5-vkmt-moth.jpg",
    category: "technology",
    language: "en",
    country: "us",
    published_at: "2023-05-24T09:00:33+00:00",
  },
  {
    author: null,
    title: "'Every time she falls asleep, she might die'",
    description:
      "Sadie has a rare condition which affects how her nervous system controls her breathing.",
    url: "https://www.bbc.co.uk/news/uk-england-birmingham-65250672?at_medium=RSS&at_campaign=KARANGA",
    source: "BBC News - Health",
    image: null,
    category: "technology",
    language: "en",
    country: "gb",
    published_at: "2023-04-13T13:41:31+00:00",
  },
  {
    author: null,
    title:
      "NHS England chief Amanda Pritchard says strike disruption will get worse",
    description:
      'Amanda Pritchard told the BBC that patients were "paying the price" of failure to prevent strikes',
    url: "https://www.bbc.co.uk/news/uk-66079976?at_medium=RSS&at_campaign=KARANGA",
    source: "BBC News - Health",
    image: null,
    category: "technology",
    language: "en",
    country: "gb",
    published_at: "2023-07-02T12:56:29+00:00",
  },
];

let repeatedData = [];
repeatedData = mockData;
// for (let i = 0; i < 100; i++) {
//   repeatedData.push(mockData[0]);
// }

export default repeatedData;
