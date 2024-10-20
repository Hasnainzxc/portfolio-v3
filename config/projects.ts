import { Maybe, Tuple } from '../types';
import { Stack } from './stack';

export type Deployment = {
  web?: string;
  android?: string;
  ios?: string;
};

export interface SubProject {
  title: string;
  description: string;
  repository: Maybe<string>;
  deployment: Deployment;
}

export const defaultDimensions: Tuple<number> = [450, 220];

export interface Project {
  title: string;
  slug: string;
  website: string;
  banner: string;
  description: string;
  shortDescription?: string;
  repository: Maybe<string>;
  stack: Stack[];
  dimensions?: Tuple<number>; // Tuple of [height, width]
  screenshots: string[];
  deployment: Deployment;
  subProjects: SubProject[];
}

export const projects: Project[] = [
  {
    title: 'Darkblock: Revolutionizing Content with Web3 - Unlock, Engage, and Monetize with NFTs!',
    slug: 'darkblock',
    banner: '/static/projects/darkblock/banner.png',
    website: 'https://www.darkblock.io/',
    description: `Darkblock is Web3's missing encryption and access control layer...`,
    shortDescription: 'Unlock the power of Web3-native publishing',
    repository: 'https://github.com/darkblockio',
    stack: [
      Stack.javascript,
      Stack.nodejs,
      Stack.tailwind,
      Stack.typescript,
      Stack.react,
      Stack.awslambda,
      Stack.awsdynamodb,
      Stack.awscloudwatch,
      Stack.docker,
      Stack.expo,
      Stack.express,
      Stack.nextjs,
      Stack.awssynthetics,
      Stack.awsrds,
      Stack.moesif,
      Stack.metabase,
      Stack.looker,
    ],
    dimensions: [400, 680],
    screenshots: [
      'OuDBzls.png', 'os1I98X.png', 'NOIse8w.png', '6Om4Nza.png', 
      'ABnRSYK.png', 'MBIUsfB.png', 'aXlf0Wo.png'
    ],
    deployment: { web: 'https://www.darkblock.io/' },
    subProjects: [
      {
        title: 'Darkblock Web-App',
        repository: 'https://github.com/darkblockio',
        description: 'The Darkblock web app...',
        deployment: { web: 'https://app.darkblock.io' },
      },
      {
        title: 'Darkblock-API',
        repository: 'https://github.com/darkblockio',
        description: 'The Darkblock API...',
        deployment: { web: 'https://darkblock.redoc.ly/openapi/core/tag/Darkblock-API/' },
      },
      {
        title: 'Admin Dashboard',
        repository: 'https://github.com/darkblockio',
        description: 'The internal Darkblock dashboard...',
        deployment: { web: 'https://darkblock-dashboard.vercel.app/' },
      },
      {
        title: 'NPM Packages For Various Chains',
        repository: 'https://github.com/darkblockio',
        description: 'Variety of npms available...',
        deployment: { web: 'https://www.npmjs.com/search?q=keywords:darkblock.io' },
      },
    ],
  },
  {
    title: 'Shopsy.pk (Now Prislo): A User-Centric E-commerce Evolution',
    slug: 'shopsy',
    banner: '/static/projects/shopsy/banner.png',
    website: 'https://prislo.com/',
    description: `Shopsy.pk, later Prislo...`,
    shortDescription: 'Revitalizing the User Experience with Online Shopping',
    repository: 'https://github.com/SageTheThird',
    stack: [
      Stack.java, Stack.androidsdk, Stack.dagger2, Stack.androidstudio, 
      Stack.cicd, Stack.room, Stack.coredata, Stack.firebase, Stack.hilt, 
      Stack.xml, Stack.zaplin
    ],
    dimensions: [840, 400],
    screenshots: [
      '0yqWclJ.mp4', 'vX5yRxs.jpg', 'zoVYEv4.jpg', 'aIVkJmJ.jpg',
      'ONuROum.jpg', '7UeSkTZ.jpg', 'fQxvFYk.jpg', 'Cb2gvYJ.jpg', '9u3S1y0.jpg'
    ],
    deployment: { 
      web: 'https://prislo.com/',
      android: 'https://play.google.com/store/apps/details?id=com.prislo.prisloapp&hl=en_SG&gl=US',
    },
    subProjects: [],
  },
  {
    title: 'Dads Agree: The Ultimate Parenting Resource',
    slug: 'dadsagree',
    banner: '/static/projects/dadsagree/banner.png',
    website: 'https://dadsagree.com/',
    description: `Dads Agree is a unique platform...`,
    shortDescription: 'A platform where dads share expert parenting advice and product reviews.',
    repository: 'https://github.com/SageTheThird',
    stack: [
      Stack.wordpress, Stack.ahreafs, Stack.jira, Stack.slack, Stack.zaplin
    ],
    dimensions: [400, 680],
    screenshots: [
      '0ZBueyQ.png', 'Ij278E9.png', 'zxeolRP.png', 'A0K1edX.png',
      'thLZCvv.png', '056WP8O.png', 'L7BSmR5.png', 'Ij278E9.png',
    ],
    deployment: { web: 'https://dadsagree.com/' },
    subProjects: [],
  },
  {
    title: 'Yooper Shirt',
    slug: 'yoopershirt',
    banner: '/static/projects/yoopershirts/Hero.png',
    website: 'https://yoopershirts.com/', // Corrected URL
    description: `Yooper Shirt is a Shopify-based apparel platform...`,
    shortDescription: 'An e-commerce platform selling custom shirts.',
    repository: 'https://github.com/SageTheThird',
    stack: [
      Stack.shopify, Stack.shopifycli, Stack.Wordpress, Stack.ahreafs, 
      Stack.jira, Stack.slack, Stack.zaplin
    ],
    dimensions: [400, 680],
    screenshots: ['FYqywxT.png', 'D6w39Kk.png', 'IG9sbrQ.png'],
    deployment: { web: 'https://yoopershirts.com/' }, // Fixed the incorrect URL
    subProjects: [],
  },
  {
    title: 'Caps Appareal',
    slug: 'capsappareal',
    banner: '/static/projects/caps-appareal/hero.png',
    website: 'https://capsapparel.com/', 
    description: 'A comprehensive e-commerce platform for apparels, providing a user-friendly interface and seamless shopping experience.',
    shortDescription: 'An apparel e-commerce platform.',
    repository: 'https://github.com/your-repo/capsappareal', 
    stack: [
      Stack.shopify, Stack.shopifycli, Stack.wordpress, Stack.ahreafs, 
      Stack.slack, Stack.jira, Stack.zaplin
    ],
    dimensions: [400, 680],
    screenshots: ['YCyB9gD.png', 'eTJ1yaL.png', 'BA98Kxb.png', 'lFKpHjV.png'], // Fixed missing closing bracket
    deployment: { web: 'https://capsapparel.com/' },
    subProjects: [],
  },
];
