var DateHelper = {


getDateFr(date) {
    return new Date(date).toLocaleDateString("fr")
  },
  
  timeSince(date) {
  
    const seconds = Math.floor((new Date() - date) / 1000);
    const ilya = "";
    const fin = "";
    // new Date(item.createdAt).toLocaleDateString("fr")
  
    let interval = seconds / 31536000;
    if (interval > 1) {
      return "en " + new Date(date).getFullYear();
    }
    interval = (seconds / (60 * 60 * 24 * 30));
    if (interval > 1) {
      return "en " + new Date(date).toLocaleString('default', { month: 'long' });;
      //   return "en " + Math.floor(interval) + " mois";
    }
    interval = seconds / (60 * 60 * 24);
    if (interval > 1) {
      return ilya + Math.floor(interval) + " jours" + fin;
    }
    interval = seconds / (60 * 60);
    if (interval > 1) {
      return ilya + Math.floor(interval) + " heures" + fin;
    }
    interval = seconds / (60);
    if (interval > 1) {
      return ilya + Math.floor(interval) + " minutes" + fin;
    }
    // return ilya + Math.floor(seconds) + " secondes";
    return "à l'instant";
  }
}

  export default DateHelper;