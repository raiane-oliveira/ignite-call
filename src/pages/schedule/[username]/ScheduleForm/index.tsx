import React, { useState } from 'react'
import { CalendarStep } from './CalendarStep'
import { ConfirmStep } from './ConfirmStep'
import { Toast } from '@raiane-ignite-ui/react'
import dayjs from 'dayjs'
import { ToastContainer } from './styles'

export function ScheduleForm() {
  const [selectedDateWithoutTime, setSelectedDateWithoutTime] =
    useState<Date | null>()
  const [successfulScheduleDate, setSuccessfulScheduleDate] =
    useState<Date | null>(null)

  function handleClearSelectedDateTime() {
    setSelectedDateWithoutTime(null)
  }

  function handleSuccessfulSchedule(date: Date) {
    setSuccessfulScheduleDate(date)
  }

  if (selectedDateWithoutTime) {
    return (
      <ConfirmStep
        schedulingDate={selectedDateWithoutTime}
        onCancelConfirmation={handleClearSelectedDateTime}
        onSuccessfulScheduleDate={handleSuccessfulSchedule}
      />
    )
  }

  const describeDate = dayjs(successfulScheduleDate).format(
    'dddd[, ]DD[ de ]MMMM[ às ]HH[h]',
  )

  return (
    <>
      <CalendarStep onSelectDateTime={setSelectedDateWithoutTime} />
      {successfulScheduleDate && (
        <ToastContainer>
          <Toast title="Agendamento realizado" description={describeDate}>
            {null}
          </Toast>
        </ToastContainer>
      )}
    </>
  )
}
