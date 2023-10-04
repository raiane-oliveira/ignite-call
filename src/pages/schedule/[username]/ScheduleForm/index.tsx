import React, { useState } from 'react'
import { CalendarStep } from './CalendarStep'
import { ConfirmStep } from './ConfirmStep'
import { Toast } from '@raiane-ignite-ui/react'
import dayjs from 'dayjs'
import { ToastContainer } from './styles'

export function ScheduleForm() {
  const [selectedDateWithoutTime, setSelectedDateWithoutTime] =
    useState<Date | null>()
  const [isScheduleSuccessful, setIsScheduleSuccessful] =
    useState<boolean>(false)

  function handleClearSelectedDateTime() {
    setSelectedDateWithoutTime(null)
  }

  function handleSuccessfulSchedule() {
    setIsScheduleSuccessful(true)
  }

  if (selectedDateWithoutTime) {
    return (
      <ConfirmStep
        schedulingDate={selectedDateWithoutTime}
        onCancelConfirmation={handleClearSelectedDateTime}
        onSuccessfulSchedule={handleSuccessfulSchedule}
      />
    )
  }

  const describeDate = dayjs(selectedDateWithoutTime).format(
    'dddd[, ]DD[ de ]MMMM[ às ]HH[h]',
  )

  return (
    <>
      <CalendarStep onSelectDateTime={setSelectedDateWithoutTime} />
      {isScheduleSuccessful && (
        <ToastContainer>
          <Toast title="Agendamento realizado" description={describeDate}>
            {null}
          </Toast>
        </ToastContainer>
      )}
    </>
  )
}
