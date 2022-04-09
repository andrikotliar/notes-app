const renderContentDates = (content) => {
  const reg = /\d{1,4}[\/.]\d{1,2}[\/.]\d{1,4}/g;
  const dates = content.match(reg);

  let datesString = '';

  if(dates) {
    datesString = dates.join(', ');
  }

  return datesString;
}

export default renderContentDates;