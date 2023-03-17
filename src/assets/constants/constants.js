export const YOUTUBE_API_KEY = "AIzaSyA8WHvV2JdW2o9XoML3tVsMLk_zdDRo_iU";
export const YOUTUBE_API_URL = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+YOUTUBE_API_KEY;


export const YOUTUBE_RELATED_API_URL = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=***&maxResults=20&type=video&key="+YOUTUBE_API_KEY;
export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
export const YOUTUBE_COMMENTS_API_URL = "https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&maxResults=100&videoId=***&key="+YOUTUBE_API_KEY;
export const YOUTUBE_SEARCH_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=***&key="+YOUTUBE_API_KEY;

export const getFormattedViews = (views) => {
    const v = parseInt(views);
    if (v < 999) return v;
    else if (v > 999 && v < 1000000) return (v / 1000).toFixed(1) + "K";
    else if (v >= 1000000) return (v / 1000000).toFixed(1) + "M";
    return v;
}
export const dummyObj = {
    "id": "kuab6Xxzkg8",
    "snippet": {
      "title": "Mujhe Pyaar Hua Tha Ep 14 |Digitally Presented by Surf Excel & Glow & Lovely (Eng Sub)-13 March 2023",
      "description": "Mujhe Pyaar Hua Tha Episode 14 | 13th March 2023 | Hania Aamir | Wahaj Ali | Zaviyar Naumaan | ARY Digital Drama\n\nSubscribe NOW: https://www.youtube.com/arydigitalasia 🔔\n\nTo watch all the episodes of Mujhe Pyaar Hua Tha: https://bit.ly/3juZpcb\n\nDownload ARY ZAP: https://l.ead.me/bb9zI1\n\nMujhe Pyaar Hua Tha; What You Want & What Your Destiny Wants\n\nMujhe Pyaar Hua Tha is a love triangle between Maheer, Saad, and Areeb. Saad has always been in love with his cousin Maheer but when he fails to confess it to her, life takes a different turn\n\nWritten By: Sidra Sehar Imran\nDirected By: Badar Mehmood\n\nCast:\nHania Aamir as Maheer\nZaviyar Naumaan as Areeb\nWahaj Ali as Saad\nShahood Alvi \nSalma Hassan\nAngeline Malik\nNoor-ul-Hassan\nShaheen Khan\nMalaikah\nAmbar Khan\nSabeena Syed\nAyesha Mirza\nWashma Fatima.\n\nWatch Mujhe Pyaar Hua Tha every Monday at 8 PM, on ARY Digital\n\n#mujhepyaarhuatha #haniaaamir #wahajali #zaviyarnaumaan #shahoodalvi  #arydigital \n\nThe most watched and loved Pakistani Entertainment channel is now on SoundCloud! Follow us here and listen to your favorite OSTs now! ♫ https://m.soundcloud.com/arydigitalhd\n\nPakistani Drama Industry's biggest Platform, ARY Digital, is the Hub of exceptional and uninterrupted entertainment. You can watch quality dramas with relatable stories, Original Sound Tracks, Telefilms, and a lot more impressive content in HD. Subscribe to the YouTube channel of ARY Digital to be entertained by the content you always wanted to watch.",
      "channelTitle": "ARY Digital HD",
    },
    "statistics": {
      "viewCount": "7908094",
      "likeCount": "170105",
      "favoriteCount": "0",
      "commentCount": "5500"
    }
  }
