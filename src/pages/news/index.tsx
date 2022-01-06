import axios from 'axios'
import React, { useEffect, useState } from 'react'

const News = () => {
 const [news, setNews] = useState<any[]>([])

 useEffect(() => {
  (async () => {
   const { data } = await axios.get('https://newsdata.io/api/1/news?apikey=pub_3365dd8401625cf5a2948987de7e619e5f1d&q=nba&country=us&language=en&category=sports')
   setNews(data.results)

  })()
 }, [])
 return (
  <div className='col-span-full'>
   <h1>news page</h1>
   <div className='grid grid-cols-9 gap-4'>
    {
     news?.map((newsArticles) => {
      return (
       <div className='col-span-3'>
        <p>{newsArticles.title}</p>
       </div>

      )
     })
    }
   </div>


  </div>
 )
}

export default News