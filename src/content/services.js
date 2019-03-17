const services = [
  {
    value: 'seo',
    name: 'Search Engine Optimization'
  },
  {
    value: 'mediaBuying',
    name: 'Media Buying'
  },
  {
    value: 'contentMarketing',
    name: 'Content Marketing'
  },
  {
    value: 'pr',
    name: 'PR & Earned Media'
  },
  {
    value: 'socialMedia',
    name: 'Social Media'
  },
  {
    value: 'emailMarketing',
    name: 'emailMarketing'
  }
];

const mediaBuying = {
  value: 'mediaBuying',
  name: 'mediaBuying',
  options: ['Facebook', 'Google Ads', 'LinkedIn', 'Programmatic', 'Direct']
};

const contentMarketing = {
  value: 'contentMarketing',
  name: 'Content Marketing',
  options: []
};

const socialMedia = {
  value: 'socialMedia',
  name: 'Social Media',
  options: []
};

const pr = {
  value: 'pr',
  name: 'Public Relations',
  options: []
};

const emailMarketing = {
  value: 'emailMarketing',
  name: 'Email Marketing',
  options: []
};

const seo = {
  value: 'emailMarketing',
  name: 'Email Marketing',
  options: []
};

const marketingAutomation = {
  value: 'marketingAutomation',
  name: 'Marketing Automation',
  options: []
}

const goals = {
  awareness: [mediaBuying, socialMedia, pr, emailMarketing],
  leadGeneration: [mediaBuying, contentMarketing, socialMedia, seo],
  thoughtLeadership: [
    contentMarketing,
    mediaBuying,
    pr,
    emailMarketing,
    socialMedia
  ],
  orderGeneration: [
    mediaBuying,
    contentMarketing,
    emailMarketing,
    marketingAutomation
  ],
  leadNurturing: [
    emailMarketing,
    contentMarketing,
    socialMedia,
    mediaBuying,
    marketingAutomation,
    seo
  ]
};

export { services, goals };
