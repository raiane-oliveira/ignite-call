import { Calendar } from '@/components/Calendar'
import {
  Container,
  LoaderTimePickerItem,
  TimePicker,
  TimePickerHeader,
  TimePickerItem,
  TimePickerList,
} from './styles'
import { useState } from 'react'
import dayjs from 'dayjs'
import { api } from '@/lib/axios'
import { useRouter } from 'next/router'
import { useQuery } from '@tanstack/react-query'
import { Text } from '@raiane-ignite-ui/react'

interface Availability {
  possibleTimes: number[]
  availableTimes: number[]
}

export function CalendarStep() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  const router = useRouter()
  const username = String(router.query.username)

  const isDateSelected = !!selectedDate

  const weekDay = selectedDate ? dayjs(selectedDate).format('dddd') : null
  const describedDate = selectedDate
    ? dayjs(selectedDate).format('DD[ de ]MMMM')
    : null

  const selectedDateWithoutTime = selectedDate
    ? dayjs(selectedDate).format('YYYY-MM-DD')
    : null

  const { data: availability, isLoading } = useQuery<Availability>(
    ['availability', selectedDateWithoutTime],
    async () => {
      const response = await api.get(`/users/${username}/availability`, {
        params: {
          date: selectedDateWithoutTime,
        },
      })

      return response.data
    },
    {
      enabled: !!selectedDate,
    },
  )

  // 1° argumento -> a chave que identifica essa query, essa API call
  // Deve ser única, principalmente quando parametrizada, pois ficará cacheada

  /**
   * 2° argumento -> a função que queremos executar em si
   *
   * 3° argumento -> opções. A enabled fiz que a query só irá executar se `selectedDate` for `true`
   */

  return (
    <Container isTimePickerOpen={isDateSelected}>
      <Calendar selectedDate={selectedDate} onDateSelected={setSelectedDate} />

      {isDateSelected && (
        <TimePicker>
          <TimePickerHeader>
            {weekDay}, <span>{describedDate}</span>
          </TimePickerHeader>

          <TimePickerList>
            {isLoading && (
              <>
                <LoaderTimePickerItem />
                <LoaderTimePickerItem />
                <LoaderTimePickerItem />
                <LoaderTimePickerItem />
                <LoaderTimePickerItem />
              </>
            )}

            {!isLoading && availability?.possibleTimes.length === 0 && (
              <Text size="sm">Nenhum horário disponível nesse dia.</Text>
            )}

            {availability?.possibleTimes.map((hour) => (
              <TimePickerItem
                key={hour}
                disabled={!availability.availableTimes.includes(hour)}
              >
                {String(hour).padStart(2, '0')}:00h
              </TimePickerItem>
            ))}
          </TimePickerList>
        </TimePicker>
      )}
    </Container>
  )
}
