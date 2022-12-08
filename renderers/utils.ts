export const toTitleCase = (s: String): String => {
  return s.replace(/^[-_]*(.)/, (_, c) => c.toUpperCase())       // Initial char (after -/_)
    .replace(/[-_]+(.)/g, (_, c) => ' ' + c.toUpperCase())
}

export const displayableDate = (dateString: string) => {
  const date = new Date(dateString)
    return [
      date.getDate(),
      date.toLocaleString('default', { month: 'long' }),
      date.getFullYear(),
    ].join(' ');
  }