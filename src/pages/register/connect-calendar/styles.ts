import { Box, Heading, Text, styled } from '@raiane-ignite-ui/react'

export const Container = styled('main', {
  maxWidth: 572,
  margin: '$20 auto $4',
  padding: '0 $4',
})

export const Header = styled('div', {
  padding: '0 $6',

  [`> ${Heading}`]: {
    lineHeight: '$base',
  },

  [`> ${Text}`]: {
    color: '$gray200',
    marginBottom: '$6',
  },
})

export const ConnectBox = styled(Box, {
  marginTop: '$6',
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
})

export const ConnectSchedule = styled(Box, {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  padding: '$4 $6',

  [`> ${Text}`]: {
    fontWeight: '$medium',
  },
})

export const AuthError = styled(Text, {
  color: '#f75a68',
})
