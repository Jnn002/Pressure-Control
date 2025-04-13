function generateRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function generateRandomDate() {
  const currentDate = new Date()
  const pastDate = new Date()
  pastDate.setDate(currentDate.getDate() - 365)
  const randomDate = new Date(pastDate.getTime() + Math.random() * (currentDate.getTime() - pastDate.getTime()))
  // Format date as yyyy-MM-ddThh:mm:ss (ISO without milliseconds and timezone)
  const year = randomDate.getFullYear()
  const month = String(randomDate.getMonth() + 1).padStart(2, "0") // Months are 0-based, so add 1 and pad with 0
  const day = String(randomDate.getDate()).padStart(2, "0")
  const hours = String(randomDate.getHours()).padStart(2, "0")
  const minutes = String(randomDate.getMinutes()).padStart(2, "0")
  const seconds = String(randomDate.getSeconds()).padStart(2, "0")

  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`
}

function insertLogsIntoLocalStorage(numberOfLogs = 100) {
  const logs = JSON.parse(localStorage.getItem("logs") as string) || []

  for (let i = 0; i < numberOfLogs; i++) {
    const log = {
      id: crypto.randomUUID(),
      systolic: generateRandomNumber(120, 190),
      diastolic: generateRandomNumber(80, 120),
      pulse: generateRandomNumber(60, 120),
      medicine: Math.random() < 0.5,
      notes: "",
      date: generateRandomDate()
    }
    logs.push(log)
  }

  localStorage.setItem("logs", JSON.stringify(logs))
}

export default insertLogsIntoLocalStorage