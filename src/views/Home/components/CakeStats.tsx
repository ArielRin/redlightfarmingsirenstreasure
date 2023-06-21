import React from 'react'
import { Card, CardBody, Heading, Text } from 'jetswap-uikit2'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'

const StyledWingsStats = styled(Card)`
  background-image: url('/images/jet/bg2.svg');
  background-repeat: no-repeat;
  background-position: bottom right;
  min-height: 376px;
`

const Block = styled.div`
  margin-bottom: 16px;
`
const CardImage = styled.img`
  margin-bottom: 16px;
`

const CakeStats = () => {
  const TranslateString = useI18n()
  const totalSupply = useTotalSupply()
  const burnedBalance = getBalanceNumber(useBurnedBalance(getCakeAddress()))
  const cakeSupply = totalSupply ? getBalanceNumber(totalSupply) - burnedBalance : 0

  return (
    <StyledWingsStats>
      <CardBody>
        <Heading size="xl" mb="24px">
          {TranslateString(534, "SIRENS Stats")}
        </Heading>
        <CardImage src="/images/jet/sirens.png" alt="wings logo" width={64} height={64} />
        <Block>
          {cakeSupply && <CardValue fontSize="36px" value={cakeSupply} />}
          <Text fontSize="14px" color="#808080">{TranslateString(536, "Total SIRENS Supply")}</Text>
        </Block>
        <Block>
          <CardValue fontSize="36px" decimals={0} value={burnedBalance} />
          <Text fontSize="14px" color="#808080">{TranslateString(538, "Total SIRENS Burned")}</Text>
        </Block>
        <Block>
          <CardValue fontSize="36px" decimals={0} value={25} />
          <Text fontSize="14px" color="#808080">{TranslateString(540, "New SIRENS/block")}</Text>
        </Block>
      </CardBody>
    </StyledWingsStats>
  )
}

export default CakeStats
