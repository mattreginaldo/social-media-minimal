

import moment from 'moment';

const defaultLabel = 'Publicado há';

const formatPublicationDate = (publicationDate: string) => {
  const now = moment();
  const difference = now.diff(publicationDate, 'seconds');

  if (difference < 60) {
    return `${defaultLabel} ${difference}s`;
  } else if (difference < 3600) {
    const minutes = Math.floor(difference / 60);
    return `${defaultLabel} ${minutes}m`;
  } else if (difference < 86400) {
    const hours = Math.floor(difference / 3600);
    return `${defaultLabel} ${hours}h`;
  } else {
    const days = Math.floor(difference / 86400);
    return `${defaultLabel} ${days}d`;
  }
}

export default formatPublicationDate
