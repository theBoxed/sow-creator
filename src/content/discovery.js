const discoveryOptions = [
  {
    value: 'analytics',
    name: 'Analytics Audit',
    price: '$1,000',
    description: 'We will review your analytics and it will be fun.'
  },
  {
    value: 'marketingAutomation',
    name: 'Marketing Automation Audit',
    price: '$1,000',
    description: 'We will review your ma and it will be fun.'
  },
  {
    value: 'contentAudit',
    name: 'Content Audit',
    price: '$1,000',
    description: 'We will review your content and it will be fun.'
  },
  {
    value: 'competitorAnalysis',
    name: 'Competitor Analysis',
    price: '$1,000',
    description: 'We will review your competitors and it will be fun.'
  },
  {
    value: 'adwordsAudit',
    name: 'AdWords Audit',
    price: '$1,000',
    description: 'We will review your adwords and it will be fun.'
  },
  {
    value: 'seoAudit',
    name: 'SEO Audit',
    price: '$1,000',
    description: 'We will review your seo and it will be fun.'
  },
  {
    value: 'goals',
    name: 'Goals',
    price: '$1,000',
    description: 'We will review your goals and it will be fun.'
  },
  {
    value: 'all',
    name: 'Full Discovery',
    price: '$10,000',
    description: 'A little bit of everything'
  }
];

const existingResources = [
  {
    value: 'contentWriter',
    name: 'Content Writer',
  },
  {
    value: 'mediaPlanner',
    name: 'Media Planner'
  },
  {
    value: 'designer',
    name: 'Designer',
  },
  {
    value: 'other',
    name: 'Other'
  }
]

const dropdowns = {
  positionInMarket: ['Leader', 'Middle of Pack', 'Bottom', 'Start-up'],
  sizeOfMarketingTeam: [
    '1 person',
    '2 people',
    '3 people',
    '4 people',
    '5-10 people',
    '10+ people'
  ],
  businessType: ['B2B Services', 'B2B Product', 'B2C Services', 'B2C Product'],
  lookingFor:[
    'Discovery and Strategy',
    'Building a Marketing Campaign',
    'Full Service Marketing',
    'Creative Production'
  ],
  numberOfMarkets: [1, 2, 3],
  numberOfCompetitors: ['1-5', '6-10', '11-15'],
  analyticsTools: ['Google Analytics', 'MixPanel', 'Adobe Analytics', 'Other'],
  automationTools: ['Hubspot', 'Marketo', 'Other'],
  campaignObjective: ['Awareness', 'Lead Generation', 'Thought Leadership', 'Order Generation', 'Lead Nurturing'],
  campaignLength: ['3 Months', '3-6 Months', '6-9 Months', '9-12 Months'],
};

export {
  discoveryOptions,
  dropdowns,
  existingResources
};
