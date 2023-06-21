import { getFormattedData } from './parser'
import { SettingsType } from './types'

describe('Parser', () => {
  const inputPool = [
    {
      _id: '5ffd7e80361bff0009cc8198',
      decimals: 18,
      is_active: false,
      name: 'BLINk (BLK)',
      address: '0x44a9Cc8463EC00937242b660BF65B10365d99baD',
      sub_title: 'Online games on BSC',
      description:
        'BLINk enables BNB holders to enjoy gaming experiences that WINk users on Tron have been enjoying for over two years.',
      project_url: 'https://blink.wink.org',
      currency: 'CAKE-BNB LP',
      currency_address: '0xA527a61703D82139F8a06Bc30097cC9CAA2df5A6',
      launch_datetime: '2020-11-20T13:00:00.000Z',
      sale_amount: '100000000',
      raise_amount: 1000000,
      burn_amount: 500000,
      created_at: '2021-01-12T10:48:32.829Z',
      __v: 0,
    },
  ]
  const inputIFO = [
    {
      _id: '5ffd7e80361bff0009cc8198',
      decimals: 18,
      is_active: false,
      name: 'BLINk (BLK)',
      address: '0x44a9Cc8463EC00937242b660BF65B10365d99baD',
      sub_title: 'Online games on BSC',
      description:
        'BLINk enables BNB holders to enjoy gaming experiences that WINk users on Tron have been enjoying for over two years.',
      project_url: 'https://blink.wink.org',
      currency: 'CAKE-BNB LP',
      currency_address: '0xA527a61703D82139F8a06Bc30097cC9CAA2df5A6',
      launch_datetime: '2020-11-20T13:00:00.000Z',
      sale_amount: '100000000',
      raise_amount: 1000000,
      burn_amount: 500000,
      created_at: '2021-01-12T10:48:32.829Z',
      __v: 0,
    },
  ]
  const inputFarm = [
    {
      _id: '5ffd7e82361bff0009cc819c',
      multiplier: 1,
      is_community: false,
      pid: 0,
      lp_symbol: 'CAKE',
      lp_mainnet_address: '0x93E7ae1eF759Ee2dBEf0F87424b08d7Af7E4BcA5',
      token: {
        _id: '5ffd7e79361bff0009cc8189',
        decimals: 18,
        name: 'SYRUP',
        symbol: 'SYRUP',
        mainnet_address: '0x93E7ae1eF759Ee2dBEf0F87424b08d7Af7E4BcA5',
        created_at: '2021-01-12T10:48:25.388Z',
        __v: 0,
      },
      quote_token: {
        _id: '5ffd7e6d361bff0009cc8171',
        decimals: 18,
        name: 'BNB',
        symbol: 'BNB',
        mainnet_address: '0x00F22F97e249B980A1df5A091FcCbd6599600779',
        created_at: '2021-01-12T10:48:13.384Z',
        __v: 0,
      },
      created_at: '2021-01-12T10:48:34.893Z',
      __v: 0,
    },
  ]

  it('Pool - Return the correct value', () => {
    const outPut = [
      {
        sousId: '5ffd7e80361bff0009cc8198',
        tokenName: undefined,
        stakingTokenName: undefined,
        stakingLimit: undefined,
        stakingTokenAddress: undefined,
        contractAddress: undefined,
        poolCategory: undefined,
        projectLink: 'https://blink.wink.org',
        tokenPerBlock: undefined,
        sortOrder: undefined,
        harvest: undefined,
        isFinished: undefined,
        tokenDecimals: undefined,
      },
    ]
    expect(getFormattedData(SettingsType.POOL, inputPool)).toStrictEqual(outPut)
  })

  it('IFO - Return the correct value', () => {
    const outPut = [
      {
        id: '5ffd7e80361bff0009cc8198',
        isActive: false,
        address: '0x44a9Cc8463EC00937242b660BF65B10365d99baD',
        name: 'BLINk (BLK)',
        subTitle: 'Online games on BSC',
        description:
          'BLINk enables BNB holders to enjoy gaming experiences that WINk users on Tron have been enjoying for over two years.',
        launchDate: '2020-11-20',
        launchTime: '10:00:00',
        saleAmount: '100000000',
        raiseAmount: 1000000,
        cakeToBurn: 500000,
        projectSiteUrl: 'https://blink.wink.org',
        currency: 'CAKE-BNB LP',
        currencyAddress: '0xA527a61703D82139F8a06Bc30097cC9CAA2df5A6',
        tokenDecimals: 18,
        releaseBlockNumber: 0,
      },
    ]
    expect(getFormattedData(SettingsType.IFO, inputIFO)).toStrictEqual(outPut)
  })

  it('FARM - return the correct value', () => {
    const outPut = [
      {
        pid: 0,
        lpSymbol: 'CAKE',
        lpAddresses: '0x93E7ae1eF759Ee2dBEf0F87424b08d7Af7E4BcA5',
        tokenSymbol: 'SYRUP',
        tokenAddresses: '0x81A0C88ABAE37C24CEFe0A5947D3667c13A24d9F',
        quoteTokenSymbol: 'BNB',
        quoteTokenAdresses: '0x00F22F97e249B980A1df5A091FcCbd6599600779',
        multiplier: 1,
        isCommunity: false,
      },
    ]
    expect(getFormattedData(SettingsType.FARM, inputFarm)).toStrictEqual(outPut)
  })
})
