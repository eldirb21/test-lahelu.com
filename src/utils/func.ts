const Func = {
  formatDate(date: any) {
    const now: any = new Date();
    if (date === '') return '';
    const diffInMs = now - new Date(date);
    const diffInSeconds = Math.floor(diffInMs / 1000);
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);
    const diffInMonths = Math.floor(diffInDays / 30);

    if (diffInMinutes < 2) {
      return 'now';
    } else if (diffInMinutes < 60) {
      return `${diffInMinutes} minutes ago`;
    } else if (diffInHours < 24) {
      return `${diffInHours} hours ago`;
    } else if (diffInDays < 2) {
      return '1 day ago';
    } else if (diffInDays < 30) {
      return `${diffInDays} days ago`;
    } else {
      return new Date(date).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
      });
    }
  },
};
export default Func;
