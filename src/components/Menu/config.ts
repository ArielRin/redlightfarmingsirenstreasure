import { MenuEntry } from 'jetswap-uikit2'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade Coming EOY',
    icon: 'TradeIcon',
    href: '/',
  //   items: [
  //     {
  //       label: 'Exchange',
  //       href: 'https://dawnswap.finance/#/swap',
  //     },
  //     {
  //       label: 'Liquidity',
  //       href: 'https://dawnswap.finance/#/pool',
  //     },
  //   ],
  },
  {
    label: 'Yield Farming',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Dream Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'Collectibles',
  //   icon: 'NftIcon',
  //   href: '/collectibles',
  // },
  // {
  //   label: 'Teams & Profile',
  //   icon: 'GroupsIcon',
  //   calloutClass: 'rainbow',
  //   items: [
  //     {
  //       label: 'Leaderboard',
  //       href: '/teams',
  //     },
  //     {
  //       label: 'Task Center',
  //       href: '/profile/tasks',
  //     },
  //     {
  //       label: 'Your Profile',
  //       href: '/profile',
  //     },
  //   ],
  // },
  // {
  //   label: 'Info',
  //   icon: 'InfoIcon',
  //   items: [
  //     {
  //       label: 'Overview',
  //       href: 'https://redlc.sirenstreasure.tk/home',
  //     },
  //     {
  //       label: 'Tokens',
  //       href: 'https://redlc.sirenstreasure.tk/tokens',
  //     },
  //     {
  //       label: 'Pairs',
  //       href: 'https://redlc.sirenstreasure.tk/pairs',
  //     },
  //     {
  //       label: 'Accounts',
  //       href: 'https://redlc.sirenstreasure.tk/accounts',
  //     },
  //   ],
  // },
  // {
  //   label: 'IFO',
  //   icon: 'IfoIcon',
  //   href: '/ifo',
  // },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      // {
      //   label: 'Voting',
      //   href: '#',
      // },
      {
        label: 'Github',
        href: 'https://github.com/ArielRin',
      },
      {
        label: 'Whitepaper',
        href: 'https://docs.sirenstreasure.tk/',
      },
      {
        label: 'Telegram',
        href: 'https://t.me/+-uBRR6AyIeZmMmRl',
      },
      {
        label: 'Twitter',
        href: 'https://twitter.com/SirenTrove_DEX',
      },
      {
        label: 'YouTUBE',
        href: 'https://www.youtube.com/channel/UCGYbs-aIG9qdKR3X3NiHw9Q',
      },
    ],
  },
]

export default config
