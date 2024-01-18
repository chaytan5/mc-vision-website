import mcLogo from '@/assets/images/magiccraft-logo.webp'
import { ArrowUpRight, PlayCircle } from 'lucide-react'
import NavMenu from './Navmenu'

export type NavMenuItemProps = {
  path?: string
  title: string
  icon: string
  notBlank?: boolean
  submenu: SubMenuProps[]
}

export type NavMenuProps = {
  item: NavMenuItemProps
  closeSidebar?: () => void
}

export type SubMenuProps = {
  title: string
  icon: string
  path: string
}

const commonMenuItemsNew: NavMenuItemProps[] = [
  {
    title: 'MagicCraft Game',
    icon: './icons/icon-gamepad.svg',
    submenu: [
      {
        title: 'Download PC installer',
        icon: './icons/icon-pc.svg',
        path: 'https://mc-game-public.s3.eu-central-1.amazonaws.com/MagicCraft_4.24.9034.zip',
      },
      {
        title: 'Get it on App Store',
        icon: './icons/icon-apple.svg',
        path: 'https://apps.apple.com/us/app/magiccraft-pvp/id1638183525',
      },
      {
        title: 'Get it on Google play',
        icon: './icons/icon-playstore.svg',
        path: 'https://play.google.com/store/apps/details?id=com.magiccraft.magiccraft&hl=en&pli=1',
      },
      {
        title: 'Download on Steam',
        icon: './icons/icon-steam.svg',
        path: 'https://store.steampowered.com/app/2395760/MagicCraft/',
      },
      {
        title: 'Main website',
        icon: './icons/icon-home.svg',
        path: 'https://magiccraft.io',
      },
    ],
  },
  {
    title: 'NFTs',
    icon: './icons/icon-nft-new.svg',
    submenu: [
      {
        title: 'Marketplace',
        icon: './icons/icon-marketplace.svg',
        path: 'https://app.magiccraft.io/marketplace/explorer',
      },
      {
        title: 'Mint NFTs',
        icon: './icons/icon-mint-nft.svg',
        path: 'https://app.magiccraft.io/nft_mint',
      },
    ],
  },
  {
    title: 'Pledging',
    icon: './icons/icon-pledging-new.svg',
    path: 'https://app.magiccraft.io/pledging',
    submenu: [],
  },
  {
    title: 'Buy $MCRT',
    icon: './icons/icon-currency.svg',
    submenu: [
      {
        title: 'PancakeSwap',
        icon: './icons/icon-pancakeswap.svg',
        path: 'https://pancakeswap.finance/swap?outputCurrency=0x4b8285aB433D8f69CB48d5Ad62b415ed1a221e4f ',
      },
      {
        title: 'Bybit',
        icon: './icons/icon-bybit.svg',
        path: 'https://www.bybit.com/en-US/trade/spot/MCRT/USDT',
      },
      {
        title: 'Huobi Global',
        icon: './icons/icon-huobi.svg',
        path: 'https://www.huobi.com/en-us/exchange/mcrt_usdt',
      },
    ],
  },
  {
    title: 'Help',
    icon: './icons/icon-help.svg',
    submenu: [
      {
        title: 'FAQ',
        icon: './icons/icon-faq.svg',
        path: '/faq',
      },
      {
        title: 'Contact us',
        icon: './icons/icon-contact.svg',
        path: 'https://magiccraft.io/contact-us',
      },
      {
        title: 'Community',
        icon: './icons/icon-community.svg',
        path: 'https://t.me/magiccraftgamechat',
      },
    ],
  },
  {
    title: 'Statistics',
    icon: './icons/icon-stats.svg',
    submenu: [
      {
        title: 'Leaderboard',
        icon: './icons/icon-leaderboard.svg',
        path: '/leaderboard',
      },
      {
        title: 'Game stats',
        icon: './icons/icon-gamestats.svg',
        path: '/stats',
      },
    ],
  },
]

const Header = () => {
  return (
    <header className="w-full bg-[#0A091799] p-5 backdrop-blur-md">
      <nav className="flex items-center justify-between gap-12 rounded-xl bg-[#431269B2]">
        <div className="grid shrink-0 place-items-center self-stretch  bg-black/20 px-8 ">
          <a href="https://magiccraft.io/" rel="noreferrer noopener">
            <img className="w-44" src={mcLogo} alt="MagicCraft" />
          </a>
        </div>

        <div className="flex w-full items-center justify-end gap-12 py-4 pr-5 xl:justify-between">
          {/* <div className="flex items-center gap-12">
            <a href="#" rel="noreferrer noopener">
              <div className="flex cursor-pointer items-center gap-2">
                <ShoppingBag size={18} />
                <p className="text-base">NFT Marketplace</p>
              </div>
            </a>
            <a href="#" rel="noreferrer noopener">
              <div className="flex cursor-pointer items-center gap-2">
                <Gamepad2 size={18} />
                <p className="text-base">MagicPortal</p>
              </div>
            </a>
            <a href="#" rel="noreferrer noopener">
              <div className="flex cursor-pointer items-center gap-2">
                <Coins size={18} />
                <p className="text-base">$MCRT</p>
              </div>
            </a>
          </div> */}

          <div className="hidden items-center gap-6 xl:flex">
            {commonMenuItemsNew.map((item) =>
              item?.submenu?.length > 0 ? (
                <NavMenu key={item.title} item={item} />
              ) : (
                <a key={item.title} href={item.path || '/'}>
                  <div className="flex items-center justify-center gap-2">
                    <div className="hidden shrink-0 2xl:block">
                      <img src={item.icon} alt={item.title} />
                    </div>
                    <p className="text-lg text-white">{item.title}</p>
                  </div>
                </a>
              )
            )}
          </div>
          <div className="flex items-center gap-5">
            <div className="flex cursor-pointer items-center gap-2 ">
              <PlayCircle size={18} />
              <p>MagicCraft Ecosystem</p>
            </div>
            <button>
              <div className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#98FFF9] px-5 py-3 text-[#03082F]">
                <ArrowUpRight size={18} />
                <p>Go to Lobby</p>
              </div>
            </button>
          </div>
        </div>
      </nav>
      {/* <div className="py-3"></div> */}
    </header>
  )
}

export default Header
