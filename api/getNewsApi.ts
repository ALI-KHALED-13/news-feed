

export const getNewsFeed = async() : Promise<string | INewsFeed[]> =>{
  const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;
  //the date string remains the same for the whole day, and thus caching remains
  const yesterdayDate = new Date(Date.now() - (24*60*60*1000)).toISOString().slice(0, 10);//till the T in iso date.
  
  try {
    const resp = await fetch(`
      https://newsapi.org/v2/top-headlines?apiKey=${apiKey}&language=en&from=${yesterdayDate}&page=1&pageSize=54
    `, {
      next: {
        revalidate: 3600 * 4//revalidate every 4 hourse and fetch latest news
      }
    })

    const data = await resp.json();

    if (data.status === 'error')throw data;
    
    return data.articles;
  } catch (err: any){
    console.error(err) //maybe sentry logging

    return err.message
  }
}