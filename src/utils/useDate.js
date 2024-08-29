const useDate = (firstDate, secondDate) => {
  if (firstDate === null) {
    return [null]
  } else {
    const startDate = firstDate ? new Date(firstDate) : new Date()
    const endDate = secondDate ? new Date(secondDate) : new Date()

    const result = {
      startDate: `${startDate.getFullYear()}.${startDate.getMonth() > 8 ? startDate.getMonth() + 1 : `0${startDate.getMonth() + 1}`}`,
      endDate: `${endDate.getFullYear()}.${endDate.getMonth() > 8 ? endDate.getMonth() + 1 : `0${endDate.getMonth() + 1}`}`,
      duration: Math.round((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 30)),
    }

    return result
  }
}
export default useDate
