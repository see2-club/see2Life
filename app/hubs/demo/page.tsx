import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import UserHoldCryptoCard from '@/components/hub/page/userHoldCryptoCard'
import UserHoldNFTCard from '@/components/hub/page/userHoldNFTCard'
const { faker } = require('@faker-js/faker');
// or, if desiring a different locale
// const { fakerDE: faker } = require('@faker-js/faker');
import See2HubNavBar from '@/components/hub/page/HubNavBar'
import See2LinNavBar from '@/components/hub/page/LinNavBar'

const randomName = faker.person.fullName(); // Rowan Nikolaus
const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz

// 假資料
interface ValidationInfo {
  firstValidationTime: string;
  latestValidationTime: string;
  fromUserWallet: string;//來自使用者的錢包
  addedTime: string;//資料加入時間
  validationRecords: any[]; // 驗證紀錄
  de_identification: boolean;
  dataUsage: 'invisible' | 'private' | 'de_identification' | 'public';
}

interface NFT {
  tokenId: string; // NFT 的唯一識別碼
  tokenUrl: number; // NFT 的 URL
  name: string; // NFT 的名稱
  description: string; // NFT 的描述
  image: string; // NFT 的圖片 URL
  owner: string; // NFT 的擁有者的地址
  creator: string; // NFT 的創建者的地址
  creationTime: string; // NFT 的創建時間
  blockchain: string; // NFT 所在的區塊鏈
  contractAddress: string; // NFT 所在的智能合約地址
  collectionName?: string; // NFT 的系列名稱，如果有的話
}

interface NFTData extends ValidationInfo {
  NFTName: string;
  blockchain: string;
  quantity: number;
  imageUrl: string;
  NFTs: any[];
}

interface NFTInfo {
  name: string;
  tokenID: string;
  tokenUrl: number;
  image: string;
}

interface UserNFTCollection extends ValidationInfo {
  collectionName: string;
  blockchain: string;
  totalQuantity: number;
  collectionImage: string;
  NFTs: NFTInfo[];
}


interface CryptoData extends ValidationInfo {
  tokenName: string;
  symbol: string;
  blockchain: string;
  quantity: number;
  currentPrice: number;
  imageUrl: string;
}

const fakeCryptoData: CryptoData = {
  tokenName: 'SOL',
  blockchain: 'Solana',
  quantity: 10,
  currentPrice: 60000,
  imageUrl: 'https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png',
  firstValidationTime: '2021-10-10',
  latestValidationTime: '2021-10-11',
  fromUserWallet: '0x1234567890', //來自使用者的錢包
  addedTime: '2021-10-10', //資料加入時間
  validationRecords: [], // 驗證紀錄
  de_identification: false,
  dataUsage: 'public',
  symbol: 'SOL'
};

const userCryptoData = {
  cryptoTokens: [
    {
      symbol: 'BTC',
      tokenName: 'Bitcoin',
      blockchain: 'Bitcoin',
      quantity: 3,
      currentPrice: 60000,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/64px-Bitcoin.svg.png',
      firstValidationTime: '2021-10-10',
      latestValidationTime: '2028-10-11',
      fromUserWallet: '0x1234567890',//來自使用者的錢包
      addedTime: '2021-10-10',//資料加入時間
      validationRecords: [], // 驗證紀錄
      de_identification: false,
      usage: 'public',
    },
    {
      symbol: 'ETH',
      tokenName: 'ETH',
      blockchain: 'Ethereum',
      quantity: null,
      currentPrice: 1000,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/64px-Ethereum_logo_2014.svg.png',
      firstValidationTime: '2021-10-10',
      latestValidationTime: '2024-10-11',
      de_identification: true,
      usage: 'de_identification',
    },
    {
      symbol: 'ETH',
      tokenName: 'ETH',
      blockchain: 'Ethereum',
      quantity: 10,
      currentPrice: 1000,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/64px-Ethereum_logo_2014.svg.png',
      firstValidationTime: '2021-10-10',
      latestValidationTime: '2024-10-11',
    },
  ],
  overallFirstValidationTime: '2021-10-10',
  overallLatestValidationTime: '2021-10-11',
};

const fakeNFTData: NFTData = {
  NFTName: 'basedpunks',
  blockchain: 'Ethereum',
  quantity: 3,
  imageUrl: 'https://i.seadn.io/s/raw/files/857e39e54f4fa53eb78d1747e9470478.png?auto=format&dpr=1&w=136&h=136&fr=1',
  firstValidationTime: '2021-10-10',
  latestValidationTime: '2021-10-11',
  fromUserWallet: '0x1234567890', //來自使用者的錢包
  addedTime: '2021-10-10', //資料加入時間
  validationRecords: [],
  NFTs: [],
  de_identification: false,
  dataUsage: 'public',
};
interface ViewModeProps {
  mode: 'edit_mode' | 'view_mode';
  editor: string;
}
// UserNFTDataSet UserCryptoDataSet

export default function Page() {

  const viewMode: ViewModeProps = {
    mode: 'view_mode',
    editor: ''
  }

  return (
    <>
      <See2LinNavBar />
      <div className='mx-auto flex w-full flex-col flex-wrap items-center gap-2 bg-black '>

        <UserInfo />
        <div className="p-10">
          <button className="btn btn-primary">Button</button>
        </div>
      </div>
      <div role="tablist" className="tabs tabs-lifted ">
        <input type="radio" name="my_tabs_2" role="tab" className="tab tabs-sm	" aria-label="Tab 1" />
        <div role="tabpanel" className="tab-content rounded-box border-base-300 bg-base-100 p-6">Tab content 1</div>

        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 2" checked />
        <div role="tabpanel" className="tab-content m-2 rounded-box border-base-300 bg-base-100">

          <div className='mx-auto flex w-full flex-col flex-wrap items-center gap-2  p-4'>
            <div className="p-10">
              <button className="btn btn-primary">Button</button>
            </div>



            {userCryptoData.cryptoTokens.map((token) => (
              <UserHoldCryptoCard viewMode={viewMode} key={token.tokenName} data={token} />
            ))}

            <UserHoldCryptoCard viewMode={viewMode} data={fakeCryptoData} />
            <UserHoldNFTCard viewMode={viewMode} data={fakeNFTData} />
            <div className="flex items-center rounded-box bg-accent p-4 text-accent-content shadow-xl">
              <div className="flex-1 px-2">
                <h2 className="text-3xl font-extrabold">4,600</h2>
                <p className="text-sm text-opacity-80">Page views</p>
              </div>
              <div className="flex-0">
                <div className="dropdown dropdown-end dropdown-top">
                  <div >
                    <div className="flex space-x-1">
                      <button className="btn btn-square btn-ghost" aria-label="button component">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block size-6 stroke-current">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                      </button>
                      <button className="btn btn-square btn-ghost" aria-label="button component"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block size-6 stroke-current">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                      </button>
                    </div>
                  </div>
                  <div className="dropdown-content py-2">
                    <div className="bg-neutral-focus card compact w-72 rounded-box text-neutral-content shadow-xl">
                      <div className="card-body">
                        <h2 className="card-title font-extrabold capitalize">button component</h2>
                        <p className="text-sm text-neutral-content text-opacity-80"> Buttons come in various shapes, colors and sizes </p>
                        <div className="mt-4 flex justify-end">
                          <a target="blank" href="https://daisyui.com/components/button" className="btn btn-primary btn-sm xl:btn-md"> See component </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}


function UserInfo() {

  return (
    <div className='flex items-center justify-center  bg-gradient-to-br from-secondary to-secondary-content'>
      <div className="group relative mx-auto my-6 mt-24 w-full min-w-0 max-w-md break-words rounded-xl border bg-secondary text-secondary-content shadow-2xl  md:max-w-sm">
        <div className="pb-6">
          <div className="flex flex-wrap justify-center">
            <div className="flex w-full justify-center">
              <div className="relative">
                <img src="https://source.unsplash.com/jmURdhtm7Ng/120x120" className="-ml-18 absolute -m-16 max-w-[150px] rounded-full border-8 border-white align-middle dark:border-gray-800 dark:shadow-xl lg:-ml-16" />
              </div>
            </div>
          </div>
          <div className="mt-2 mt-20 text-center">
            <h3 className="mb-1 text-2xl font-bold leading-normal text-gray-700 dark:text-gray-300">Ariel Cerda</h3>
            <div className="mx-auto flex w-full flex-row justify-center space-x-2 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="size-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
              </svg>
              <div className="font-mono text-sm text-xl font-bold tracking-wide text-gray-600 dark:text-gray-300">Diseñador UI / Front-end</div>
            </div>
            <div className="w-full text-center">
              <div className="flex justify-center pb-0 pt-8 lg:pt-4">
                <div className="flex space-x-2">
                  <a
                    className="-m-1 p-1 text-gray-400 ring-primary hover:text-amber-500 focus:outline-none focus-visible:ring-2"
                    href="https://www.twitter.com/smilesharks"
                    rel="noopener"
                    aria-label="Ariel Cerda on Twitter"
                    target="_blank"
                  >
                    <svg className="size-6 overflow-visible fill-current" aria-hidden="true" viewBox="0 0 24 24">
                      <path
                        d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                      ></path>
                    </svg>
                  </a>

                  <a className="-m-1 p-1 text-gray-400 ring-primary hover:text-amber-500 focus:outline-none focus-visible:ring-2" href="https://www.github.com/Smilesharks" rel="noopener" aria-label="Ariel Cerda on Github" target="_blank">
                    <svg className="size-6 overflow-visible fill-current" aria-hidden="true" viewBox="0 0 140 140">
                      <path
                        d="M70 1.633a70 70 0 00-21.7 136.559h1.692a5.833 5.833 0 006.183-6.184v-1.225-6.358a2.917 2.917 0 00-1.167-1.925 2.917 2.917 0 00-2.45-.583C36.925 125.3 33.6 115.5 33.367 114.858a27.067 27.067 0 00-10.034-12.775 6.767 6.767 0 00-.875-.641 3.675 3.675 0 012.217-.409 8.575 8.575 0 016.708 5.134 17.5 17.5 0 0023.334 6.766 2.917 2.917 0 001.691-2.1 11.667 11.667 0 013.267-7.175 2.917 2.917 0 00-1.575-5.075c-13.825-1.575-27.942-6.416-27.942-30.275a23.333 23.333 0 016.125-16.216A2.917 2.917 0 0036.808 49a20.533 20.533 0 01.059-14 32.317 32.317 0 0114.7 6.708 2.858 2.858 0 002.45.409A61.892 61.892 0 0170 39.958a61.075 61.075 0 0116.042 2.159 2.858 2.858 0 002.391-.409 32.608 32.608 0 0114.7-6.708 20.825 20.825 0 010 13.883 2.917 2.917 0 00.525 3.092 23.333 23.333 0 016.125 16.042c0 23.858-14.175 28.641-28.058 30.216a2.917 2.917 0 00-1.575 5.134 12.833 12.833 0 013.558 10.15v18.55a6.183 6.183 0 002.1 4.841 7 7 0 006.184 1.109A70 70 0 0070 1.633z"
                      ></path>
                    </svg>
                  </a>

                  <a
                    className="-m-1 p-1 text-gray-400 ring-primary hover:text-amber-500 focus:outline-none focus-visible:ring-2"
                    href="https://www.linkedin.com/in/arielcerdahernandez/"
                    rel="noopener"
                    aria-label="Ariel Cerda on Linkedin"
                    target="_blank"
                  >
                    <svg className="size-6 overflow-visible fill-current" aria-hidden="true" viewBox="0 0 140 140">
                      <path
                        d="M23.4 44.59h-4.75a12.76 12.76 0 00-9.73 2.19 9.44 9.44 0 00-2.35 7.12V131a9.08 9.08 0 002.3 7 9.24 9.24 0 006.82 2c2.22 0 4.15-.21 8.24-.06a12 12 0 009.25-2 9.1 9.1 0 002.29-7V53.9a9.44 9.44 0 00-2.34-7.12 12.68 12.68 0 00-9.73-2.19zM21 0A16.19 16.19 0 005.09 15.6 16.52 16.52 0 0021 31.86 16.12 16.12 0 0037 15.6 16.18 16.18 0 0021 0zM99.74 43.63a31.09 31.09 0 00-20.93 6.3A7.25 7.25 0 0077 46.34a6.08 6.08 0 00-4.52-1.78 119.08 119.08 0 00-15 .3c-4.16.84-6.18 3.79-6.18 9V131a9.14 9.14 0 002.28 7 12.06 12.06 0 009.26 2c4.47-.17 5.74.06 8.22.06a9.26 9.26 0 006.83-2 9.12 9.12 0 002.3-7V89.88A12.48 12.48 0 0192.93 76 12.44 12.44 0 01106 89.88V131a9.1 9.1 0 002.29 7 12 12 0 009.24 2c1.83-.07 4-.07 5.8 0a12.09 12.09 0 009.26-2 9.14 9.14 0 002.28-7V78.32a33.07 33.07 0 00-35.13-34.69z"
                      ></path>
                    </svg>
                  </a>

                  <a
                    className="-m-1 p-1 text-gray-400 ring-primary hover:text-amber-500 focus:outline-none focus-visible:ring-2"
                    href="https://www.instagram.com/smilesharks"
                    rel="noopener"
                    aria-label="Ariel Cerda on Instagram"
                    target="_blank"
                  >
                    <svg className="size-6 overflow-visible fill-current" aria-hidden="true" viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M73.1735 2C89.9405 2 92.3831 2.0897 99.4487 2.414C106.79 2.7521 111.807 3.9182 116.195 5.6225C120.801 7.35353 124.973 10.0686 128.422 13.5782C131.931 17.0266 134.646 21.1993 136.378 25.805C138.082 30.1934 139.248 35.2097 139.586 42.5513C139.917 49.9136 140 52.2596 140 71V71.552C140 89.7887 139.917 92.1623 139.586 99.4487C139.248 106.79 138.082 111.807 136.378 116.195C134.646 120.801 131.931 124.973 128.422 128.422C124.973 131.931 120.801 134.646 116.195 136.378C111.807 138.082 106.79 139.248 99.4487 139.586C92.0864 139.917 89.7404 140 71 140H70.448C52.2113 140 49.8377 139.917 42.5513 139.586C35.2097 139.248 30.1934 138.082 25.805 136.378C21.1993 134.646 17.0266 131.931 13.5782 128.422C10.0686 124.973 7.35353 120.801 5.6225 116.195C3.9182 111.807 2.7521 106.79 2.414 99.4487C2.0897 92.3831 2 89.9336 2 73.1735V68.8265C2 52.0595 2.0897 49.6169 2.414 42.5513C2.7521 35.2097 3.9182 30.1934 5.6225 25.805C7.35353 21.1993 10.0686 17.0266 13.5782 13.5782C17.0266 10.0686 21.1993 7.35353 25.805 5.6225C30.1934 3.9182 35.2097 2.7521 42.5513 2.414C49.6169 2.0897 52.0664 2 68.8265 2H73.1735V2ZM72.6146 14.4338H69.3854C52.439 14.4338 50.1758 14.5097 43.1171 14.834C36.3896 15.1445 32.7395 16.2623 30.3038 17.2076C27.0815 18.4634 24.7838 19.9538 22.3688 22.3688C19.9538 24.7838 18.4634 27.0815 17.2076 30.3038C16.2623 32.7395 15.1376 36.3896 14.834 43.1171C14.5097 50.1758 14.4338 52.439 14.4338 69.3854V72.6146C14.4338 89.561 14.5097 91.8242 14.834 98.8829C15.1445 105.61 16.2623 109.261 17.2076 111.696C18.4634 114.912 19.9607 117.216 22.3688 119.631C24.7838 122.046 27.0815 123.537 30.3038 124.792C32.7395 125.738 36.3896 126.862 43.1171 127.166C50.3897 127.497 52.5701 127.566 71 127.566H71.552C89.4713 127.566 91.6793 127.497 98.876 127.166C105.61 126.855 109.261 125.738 111.696 124.792C114.912 123.537 117.216 122.046 119.631 119.631C122.046 117.216 123.537 114.919 124.792 111.696C125.738 109.261 126.862 105.61 127.166 98.8829C127.497 91.6034 127.566 89.4299 127.566 71V70.448C127.566 52.5287 127.497 50.3207 127.166 43.124C126.855 36.3896 125.738 32.7395 124.792 30.3038C123.687 27.3062 121.923 24.5947 119.631 22.3688C117.405 20.077 114.694 18.3134 111.696 17.2076C109.261 16.2623 105.61 15.1376 98.8829 14.834C91.8242 14.5097 89.561 14.4338 72.6146 14.4338ZM71 35.5685C75.6529 35.5685 80.2603 36.485 84.559 38.2656C88.8578 40.0462 92.7637 42.656 96.0539 45.9461C99.344 49.2363 101.954 53.1422 103.734 57.441C105.515 61.7397 106.432 66.3471 106.432 71C106.432 75.6529 105.515 80.2603 103.734 84.559C101.954 88.8578 99.344 92.7637 96.0539 96.0539C92.7637 99.344 88.8578 101.954 84.559 103.734C80.2603 105.515 75.6529 106.432 71 106.432C61.603 106.432 52.5908 102.699 45.9461 96.0539C39.3015 89.4092 35.5685 80.397 35.5685 71C35.5685 61.603 39.3015 52.5908 45.9461 45.9461C52.5908 39.3015 61.603 35.5685 71 35.5685V35.5685ZM71 48.0023C64.9006 48.0023 59.0511 50.4253 54.7382 54.7382C50.4253 59.0511 48.0023 64.9006 48.0023 71C48.0023 77.0994 50.4253 82.9489 54.7382 87.2618C59.0511 91.5747 64.9006 93.9977 71 93.9977C77.0994 93.9977 82.9489 91.5747 87.2618 87.2618C91.5747 82.9489 93.9977 77.0994 93.9977 71C93.9977 64.9006 91.5747 59.0511 87.2618 54.7382C82.9489 50.4253 77.0994 48.0023 71 48.0023V48.0023ZM107.832 25.8878C110.028 25.8878 112.134 26.7602 113.687 28.313C115.24 29.8658 116.112 31.9718 116.112 34.1678C116.112 36.3638 115.24 38.4698 113.687 40.0226C112.134 41.5754 110.028 42.4478 107.832 42.4478C105.636 42.4478 103.53 41.5754 101.977 40.0226C100.425 38.4698 99.5522 36.3638 99.5522 34.1678C99.5522 31.9718 100.425 29.8658 101.977 28.313C103.53 26.7602 105.636 25.8878 107.832 25.8878Z"
                      ></path>
                    </svg>
                  </a>

                  <a
                    className="-m-1 p-1 text-gray-400 ring-primary hover:text-amber-500 focus:outline-none focus-visible:ring-2"
                    href="https://www.youtube.com/channel/UCWip2TrjNMXb0kg6LWbsNzw?sub_confirmation=1"
                    rel="noopener"
                    aria-label="Ariel Cerda on Youtube"
                    target="_blank"
                  >
                    <svg className="size-6 overflow-visible fill-current" aria-hidden="true" viewBox="0 0 140 140">
                      <path
                        d="M115 15H25A25 25 0 000 40v60a25 25 0 0025 25h90a25 25 0 0025-25V40a25 25 0 00-25-25zM95.71 76.25L63.58 94.1A7.15 7.15 0 0153 87.85v-35.7a7.15 7.15 0 0110.6-6.26l32.11 17.86a7.15 7.15 0 010 12.5z"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-6 mt-6 border-t border-gray-200 pt-6 text-center dark:border-gray-700/50">
            <div className="flex flex-wrap justify-center">
              <div className="w-full px-6">
                <p className="mb-4 font-light leading-relaxed text-gray-600 dark:text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin turpis orci, maximus sed purus a, cursus scelerisque purus. Morbi molestie, odio at sagittis rhoncus, felis massa iaculis mi, quis molestie erat ipsum vel risus.
                </p>
              </div>
            </div>
          </div>
          <div className="relative h-6 translate-y-6 overflow-hidden rounded-b-xl">
            <div className="absolute flex -space-x-12 rounded-b-2xl">
              <div className="z-10 h-8 w-36 skew-x-[35deg] bg-amber-400/90 transition-colors delay-75 duration-200 group-hover:bg-amber-600/90"></div>
              <div className="z-20 h-8 w-28 skew-x-[35deg] bg-amber-300/90 transition-colors delay-100 duration-200 group-hover:bg-amber-500/90"></div>
              <div className="z-30 h-8 w-28 skew-x-[35deg] bg-amber-200/90 transition-colors delay-150 duration-200 group-hover:bg-amber-400/90"></div>
              <div className="z-40 h-8 w-28 skew-x-[35deg] bg-amber-100/90 transition-colors delay-200 duration-200 group-hover:bg-amber-300/90"></div>
              <div className="z-50 h-8 w-28 skew-x-[35deg] bg-amber-50/90 transition-colors delay-300 duration-200 group-hover:bg-amber-200/90"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}