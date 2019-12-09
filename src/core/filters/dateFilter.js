import moment from 'moment'

export default function formatFilter(date, pattern = 'YYYY-MM-DD HH:mm:ss') {
  return moment(date).format(pattern)
}
