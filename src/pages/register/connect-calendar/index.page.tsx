import { Button, Heading, MultiStep, Text } from '@raiane-ignite-ui/react'
import { ConnectSchedule, Container, ConnectBox, Header } from './styles'
import { ArrowRight } from 'phosphor-react'

export default function Connect() {
  return (
    <Container>
      <Header>
        <Heading as="strong">Conecte sua agenda!</Heading>
        <Text>
          Conecte o seu calendário para verificar automaticamente as horas
          ocupadas e os novos eventos à medida em que são agendados.
        </Text>

        <MultiStep size={4} currentStep={2} />
      </Header>

      <ConnectBox>
        <ConnectSchedule>
          <Text>Google Calendar</Text>
          <Button size="sm" variant="secondary">
            Conectar <ArrowRight />
          </Button>
        </ConnectSchedule>

        <Button disabled>
          Próximo passo <ArrowRight />
        </Button>
      </ConnectBox>
    </Container>
  )
}
