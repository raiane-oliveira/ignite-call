import { useState } from 'react'
import { CalendarStep } from './CalendarStep'
import { ConfirmStep } from './ConfirmStep'

export function ScheduleForm() {
  const [selectedDateWithoutTime, setSelectedDateWithoutTime] =
    useState<Date | null>()

  function handleClearSelectedDateTime() {
    setSelectedDateWithoutTime(null)
  }

  if (selectedDateWithoutTime) {
    return (
      <ConfirmStep
        schedulingDate={selectedDateWithoutTime}
        onCancelConfirmation={handleClearSelectedDateTime}
      />
    )
  }

  return <CalendarStep onSelectDateTime={setSelectedDateWithoutTime} />
}
