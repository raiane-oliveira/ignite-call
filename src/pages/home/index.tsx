import { Heading, Text } from '@raiane-ignite-ui/react'
import { Container, Hero, Preview } from './styles'
import Image from 'next/image'

import calendarPreview from '@/assets/calendar.png'
import { ClaimUsernameForm } from './components/ClaimUsernameForm'

export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading as="h1" size="4xl">
          Agendamento descomplicado
        </Heading>
        <Text size="xl">
          Conecte seu calendário e permita que as pessoas marquem agendamentos
          no seu tempo livre.
        </Text>

        <ClaimUsernameForm />
      </Hero>

      <Preview>
        <Image
          src={calendarPreview}
          width={820}
          height={442}
          alt="Calendário simbolizando aplicação em funcionamento"
          quality={100}
          priority
        />
      </Preview>
    </Container>
  )
}
