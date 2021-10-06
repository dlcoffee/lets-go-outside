function getAvailable(campsites) {
  const ids = Object.keys(campsites)

  const available = []

  for (let id of ids) {
    const campsite = campsites[id]

    const hasAvailability = Object.entries(campsite.availabilities).some(
      ([, availability]) => {
        return availability === 'Available'
      }
    )

    if (hasAvailability) {
      available.push(campsite)
    }
  }

  return available
}

module.exports = getAvailable
