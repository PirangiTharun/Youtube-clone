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

export const dd = {
    "kind": "youtube#searchListResponse",
    "etag": "qcXsb8iljxPhA9aniXoZeRP70H8",
    "nextPageToken": "CBkQAA",
    "regionCode": "IN",
    "pageInfo": {
        "totalResults": 1000000,
        "resultsPerPage": 25
    },
    "items": [
        {
            "kind": "youtube#searchResult",
            "etag": "fOHPXE67QPEJflECMFf2PqwC9Tg",
            "id": {
                "kind": "youtube#video",
                "videoId": "kr3wIXhmYpI"
            },
            "snippet": {
                "publishedAt": "2023-03-15T16:04:06Z",
                "channelId": "UCq0OueAsdxH6b8nyAspwViw",
                "title": "Strays | Official F***ing Trailer [HD]",
                "description": "They're bad to the bone. Watch Will Ferrell and Jamie Foxx as the voices of good dogs gone bad in Strays.",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/kr3wIXhmYpI/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/kr3wIXhmYpI/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/kr3wIXhmYpI/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Universal Pictures",
                "liveBroadcastContent": "none",
                "publishTime": "2023-03-15T16:04:06Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "lyeSQrnkm6C0AZBO2y4zGUKNFZE",
            "id": {
                "kind": "youtube#video",
                "videoId": "vFfaXch9X3E"
            },
            "snippet": {
                "publishedAt": "2020-01-28T23:07:54Z",
                "channelId": "UCNqFDjYTexJDET3rPDrmJKg",
                "title": "Two Feet - Love Is A Bi*** (Lyrics)",
                "description": "Follow our Spotify playlists: http://bit.ly/7cloudsSpotify Two Feet - Love Is A Bi*** (Lyrics) ⏬ Download / Stream: ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/vFfaXch9X3E/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/vFfaXch9X3E/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/vFfaXch9X3E/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "7clouds",
                "liveBroadcastContent": "none",
                "publishTime": "2020-01-28T23:07:54Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "T4cLQZys-jDHUfJBVGs8qQyccIM",
            "id": {
                "kind": "youtube#video",
                "videoId": "VDASPlpM7hQ"
            },
            "snippet": {
                "publishedAt": "2023-03-15T04:10:14Z",
                "channelId": "UC_2irx_BQR7RsBKmUV9fePQ",
                "title": "అసెంబ్లీలో అంబటిని ము*** కూర్చోమన్న  స్పీకర్ || Ambati Rambabu || ABN Telugu",
                "description": "AP Assembly LIVE || CM Jagan Speech || AP Assembly Session 2023 || ABN Telugu #apassembly #apassembly2023 #abn ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/VDASPlpM7hQ/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/VDASPlpM7hQ/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/VDASPlpM7hQ/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "ABN Telugu ",
                "liveBroadcastContent": "none",
                "publishTime": "2023-03-15T04:10:14Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "q_YcApYcdGw-0cyeD3hDHeB05ZM",
            "id": {
                "kind": "youtube#video",
                "videoId": "XSQswN4os_o"
            },
            "snippet": {
                "publishedAt": "2023-03-16T10:35:27Z",
                "channelId": "UCuzINE-97cyVd1XF-UxYxNA",
                "title": "Ё ХУДО МУШКИЛИ АР БАНДАРО ОСОН БИКУН***2023",
                "description": "",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/XSQswN4os_o/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/XSQswN4os_o/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/XSQswN4os_o/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Mirazim",
                "liveBroadcastContent": "none",
                "publishTime": "2023-03-16T10:35:27Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "pXKSuPf2JoGF4RerP98iEISAlTs",
            "id": {
                "kind": "youtube#video",
                "videoId": "ORkJFuTF8Wc"
            },
            "snippet": {
                "publishedAt": "2023-03-15T19:00:26Z",
                "channelId": "UC6UH7clqTHCHg1DSsGbgUTA",
                "title": "Jaffna tamil tv news today 16.03.2023***",
                "description": "",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/ORkJFuTF8Wc/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/ORkJFuTF8Wc/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/ORkJFuTF8Wc/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "JAFFNA TAMIL TV",
                "liveBroadcastContent": "none",
                "publishTime": "2023-03-15T19:00:26Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "r7wDNu7EuwNLIMj8Jf01jToH1l0",
            "id": {
                "kind": "youtube#video",
                "videoId": "0kEkSwkwlSo"
            },
            "snippet": {
                "publishedAt": "2023-03-13T21:33:57Z",
                "channelId": "UCatt7TBjfBkiJWx8khav_Gg",
                "title": "Piers Morgan Calls Hugh Grant A &quot;D***&quot; For His 2023 Oscars Interview",
                "description": "Piers Morgan Uncensored is joined by TalkTV's Sharon Osbourne and author and playwright Bonnie Greer to discuss the 2023 ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/0kEkSwkwlSo/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/0kEkSwkwlSo/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/0kEkSwkwlSo/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Piers Morgan Uncensored",
                "liveBroadcastContent": "none",
                "publishTime": "2023-03-13T21:33:57Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "e0PRMfT8UTGcQD27VArE7mF3sfk",
            "id": {
                "kind": "youtube#video",
                "videoId": "dOI7bMSyqN0"
            },
            "snippet": {
                "publishedAt": "2023-03-14T14:42:57Z",
                "channelId": "UChpFWeF84jA5JeV3YyIo3pQ",
                "title": "Dealers like to Low Ball the S*** out of you!",
                "description": "Luxury watch dealers are famous for low balling. It happens both at the wholesale and retail levels. #watchdealer #greymarket ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/dOI7bMSyqN0/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/dOI7bMSyqN0/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/dOI7bMSyqN0/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "CRM Jewelers",
                "liveBroadcastContent": "none",
                "publishTime": "2023-03-14T14:42:57Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "N_01JyCP6XhqV97L9FJIV0TZ6NA",
            "id": {
                "kind": "youtube#video",
                "videoId": "qW1JuYZ1BBI"
            },
            "snippet": {
                "publishedAt": "2023-03-14T15:50:43Z",
                "channelId": "UC0Sxhb22ot1zqvSGaR2mEAA",
                "title": "اخيراً اول مرة افوز على ابن ال*** 😭😭😭 مش مصدق",
                "description": "السلام عليكم ورحمة الله وبركاته (جيش السراويل) يعطيكم الف عافية على دعمكم الرهيب ان شاء الله بنحقق نجاح اكبر واكبر بوجودكم كلكم ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/qW1JuYZ1BBI/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/qW1JuYZ1BBI/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/qW1JuYZ1BBI/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "ABU SRWAL",
                "liveBroadcastContent": "none",
                "publishTime": "2023-03-14T15:50:43Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "qgLoNknHEouutzQkDQo6GljaOSU",
            "id": {
                "kind": "youtube#video",
                "videoId": "-njZiuyZtz8"
            },
            "snippet": {
                "publishedAt": "2023-03-16T13:52:57Z",
                "channelId": "UCBFmC18LqaNLED5wnhaGUxQ",
                "title": "Wait For End 🤣 comedy video 😂 funny video #trending #viral #shorts",
                "description": "Wait For End comedy video funny video #trending #viral #shorts #shorts #youtubeshorts #trending #viralvideo ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/-njZiuyZtz8/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/-njZiuyZtz8/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/-njZiuyZtz8/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "STP Dev",
                "liveBroadcastContent": "none",
                "publishTime": "2023-03-16T13:52:57Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "WfuyxnJWTd-3MXbBLr9hl2ijYnA",
            "id": {
                "kind": "youtube#video",
                "videoId": "8cLzcw6ffBM"
            },
            "snippet": {
                "publishedAt": "2020-11-06T17:00:05Z",
                "channelId": "UCuT26EQGhSb_fCe2UpDr2Uw",
                "title": "***** *** MeMes",
                "description": "Dzisiaj zrecenzujemy trochę contentu o naszych ukochanych przyjacielach Wpadaj na serwer Dragon-Craft.pl ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/8cLzcw6ffBM/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/8cLzcw6ffBM/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/8cLzcw6ffBM/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Kacper Rietz",
                "liveBroadcastContent": "none",
                "publishTime": "2020-11-06T17:00:05Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "6iG8I-6_07vPx9dlcV_0R6vZ__s",
            "id": {
                "kind": "youtube#video",
                "videoId": "H9Jpp7G3BVk"
            },
            "snippet": {
                "publishedAt": "2023-03-16T03:40:30Z",
                "channelId": "UC3Xlgbc8gq3NOMmdEUAlfGg",
                "title": "***BIRMINGHAM LECTURE*** (Russia-Ukraine War) Sunday 19th March (DAYS LEFT) Extra Tickets Available",
                "description": "Sheikh Imran N Hosein Will Be Conducting A Lecture In Birmingham On Sunday 19th March Titled \"An Islamic Eschatological ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/H9Jpp7G3BVk/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/H9Jpp7G3BVk/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/H9Jpp7G3BVk/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Sheikh Imran Hosein",
                "liveBroadcastContent": "none",
                "publishTime": "2023-03-16T03:40:30Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "L0xI3wqVpqSM28_T3tULrBPr5Ok",
            "id": {
                "kind": "youtube#video",
                "videoId": "RfgEM2wzW2c"
            },
            "snippet": {
                "publishedAt": "2023-03-11T11:30:13Z",
                "channelId": "UCxUEyDvqMcRtYSnQdlfRClw",
                "title": "*** Crush ပြန်ကြိုက်လာအောင် ဘာတွေလုပ်ရလဲ ? ***",
                "description": "Crush ပြန်ကြိုက်လာအောင် ဘာတွေလုပ်ရလဲ ? *** #dosomethingpls #Kyawgyi #pauksi #lwingyi ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/RfgEM2wzW2c/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/RfgEM2wzW2c/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/RfgEM2wzW2c/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Do Something plz",
                "liveBroadcastContent": "none",
                "publishTime": "2023-03-11T11:30:13Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "JUddjJCx2zXDJokY82-IvcqwVkc",
            "id": {
                "kind": "youtube#video",
                "videoId": "Rk1YsgBg_kY"
            },
            "snippet": {
                "publishedAt": "2023-03-15T01:31:57Z",
                "channelId": "UCLWE3Y_JkecVd0jZVBwGelg",
                "title": "🇲🇽 PASAMOS MUCHO MIEDO en este LUGAR de ESPAÑA 😱🇪🇸 ***no quiero verlo otra vez!!!***",
                "description": "Conviértete en miembro de este canal para disfrutar de ventajas: ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/Rk1YsgBg_kY/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/Rk1YsgBg_kY/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/Rk1YsgBg_kY/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Aldara y Alex",
                "liveBroadcastContent": "none",
                "publishTime": "2023-03-15T01:31:57Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "zkYoSrp1vdOFKmceEZ95w1Kz2XI",
            "id": {
                "kind": "youtube#video",
                "videoId": "QhaOWvMrDZ4"
            },
            "snippet": {
                "publishedAt": "2023-03-15T22:38:52Z",
                "channelId": "UC2SuCfuG0-ZUweqX_jDjf9Q",
                "title": "Yes, S*** Is About To Hit The Fan, But...",
                "description": "PREPARE NOW & get your Emergency Food Supply http://preparewithinspired.com Book Your FREE Food Independence ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/QhaOWvMrDZ4/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/QhaOWvMrDZ4/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/QhaOWvMrDZ4/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "INSPIRED",
                "liveBroadcastContent": "none",
                "publishTime": "2023-03-15T22:38:52Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "6ZKLa9xhb8GhkzvJmNe-KFWM84A",
            "id": {
                "kind": "youtube#video",
                "videoId": "HSKyCP6qloc"
            },
            "snippet": {
                "publishedAt": "2023-03-13T10:00:15Z",
                "channelId": "UC8X1KHwYUsoZDurQ-Q7kU9g",
                "title": "O NETO SE F*** FALOU DEMAIS E OLHA NO QUE DEU! MANO E BENJA DESESPERADOS APÓS ELIMINAÇÃO DO CURINTIA",
                "description": "FAÇA SUA APOSTA na 1XBET CLICANDO NESSE LINK: https://bit.ly/3L10cgA USE MEU CÓDIGO: AFLA101 e ganhe BÔNUS ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/HSKyCP6qloc/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/HSKyCP6qloc/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/HSKyCP6qloc/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Almeida Fla",
                "liveBroadcastContent": "none",
                "publishTime": "2023-03-13T10:00:15Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "2vO4EqdKSfMaAcDexq4WOy8PbSs",
            "id": {
                "kind": "youtube#video",
                "videoId": "EE0LsxpDGoM"
            },
            "snippet": {
                "publishedAt": "2023-03-15T18:01:18Z",
                "channelId": "UCi8e0iOVk1fEOogdfu4YgfA",
                "title": "Strays F***ing Trailer (2023)",
                "description": "Check out the official trailer for Strays starring Jamie Foxx and Will Ferrell! ▻ Buy Tickets on Fandango: ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/EE0LsxpDGoM/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/EE0LsxpDGoM/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/EE0LsxpDGoM/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Rotten Tomatoes Trailers",
                "liveBroadcastContent": "none",
                "publishTime": "2023-03-15T18:01:18Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "cUuaOlr62abw1V31Oicc2knhzvk",
            "id": {
                "kind": "youtube#video",
                "videoId": "9NGv_R_KucY"
            },
            "snippet": {
                "publishedAt": "2023-03-16T08:04:39Z",
                "channelId": "UCAR3h_9fLV82N2FH4cE4RKw",
                "title": "పిల్ల నా కో*** Raghu Rama Krishna Raju Strong Counter To YCP MP Margani Bharat | TV5 News",
                "description": "పిల్ల నా కో*** మార్గాని భరత్ కి ఓ రేంజ్ లో కౌంటర్ ఇచ్చిన రఘురామ #tv5live ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/9NGv_R_KucY/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/9NGv_R_KucY/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/9NGv_R_KucY/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "TV5 News ",
                "liveBroadcastContent": "none",
                "publishTime": "2023-03-16T08:04:39Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "1n2pOto3t0pc8mNgzelTmgC9QrA",
            "id": {
                "kind": "youtube#video",
                "videoId": "HvH2Are0jUs"
            },
            "snippet": {
                "publishedAt": "2021-12-17T13:59:37Z",
                "channelId": "UCizFguf9h2vM0zlvjHVH9iw",
                "title": "06. DGE x Shellerini - ***** *** (prod. Tailor Cut) [#TRINITY]",
                "description": "Zamów album TRINITY na http://szpadyzor.pl/go/trinity Więcej teledysków: ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/HvH2Are0jUs/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/HvH2Are0jUs/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/HvH2Are0jUs/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "donGURALesko",
                "liveBroadcastContent": "none",
                "publishTime": "2021-12-17T13:59:37Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "tA6h4aRBqdo-SMO4ZunN3S9h8nY",
            "id": {
                "kind": "youtube#video",
                "videoId": "KcL0VzxovFU"
            },
            "snippet": {
                "publishedAt": "2023-03-11T18:00:07Z",
                "channelId": "UCfa76qEvaM110rKbtGLUk6A",
                "title": "Breck Goes Swimming During Chores! ***THE POND IS FINALLY DONE!***",
                "description": "",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/KcL0VzxovFU/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/KcL0VzxovFU/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/KcL0VzxovFU/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Plant Based Gabriel",
                "liveBroadcastContent": "none",
                "publishTime": "2023-03-11T18:00:07Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "H3HwmNN25RDalFOo7xwHg-Z6Zsc",
            "id": {
                "kind": "youtube#video",
                "videoId": "-KM_VYendTQ"
            },
            "snippet": {
                "publishedAt": "2023-03-11T14:00:00Z",
                "channelId": "UCdl_gZZR6BtKi45eHFGAduw",
                "title": "&quot;LOAD OF S***&quot; - BILLY JOE SAUNDERS REVEALS TEXTS WITH ANDRADE / &amp; EUBANK JR DEMANDING £1M FROM BENN",
                "description": "INTERVIEW BY @UMAR_IFL* \"LOAD OF S***\" - BILLY JOE SAUNDERS REVEALS TEXTS WITH ANDRADE / & EUBANK JR ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/-KM_VYendTQ/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/-KM_VYendTQ/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/-KM_VYendTQ/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "iFL TV",
                "liveBroadcastContent": "none",
                "publishTime": "2023-03-11T14:00:00Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "9E0JK-7q2CbhuxmF79Trvqf5-zk",
            "id": {
                "kind": "youtube#video",
                "videoId": "lLyMMFQSJBc"
            },
            "snippet": {
                "publishedAt": "2023-02-27T23:20:24Z",
                "channelId": "UC0VBgTT7n4DuRFoMxZiS0jw",
                "title": "F*** the ATF! 😳",
                "description": "edc #guns #gunchallenge #dji #atf #704 #guntuber #sig #braceyourself #Glock #ar15 #atfbraceban #iphone14promax #iphone ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/lLyMMFQSJBc/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/lLyMMFQSJBc/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/lLyMMFQSJBc/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Spent Shells",
                "liveBroadcastContent": "none",
                "publishTime": "2023-02-27T23:20:24Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "pjUwNZ-JcQEQYdN-WGYLjsz-SOE",
            "id": {
                "kind": "youtube#video",
                "videoId": "EH3ri4gM4VQ"
            },
            "snippet": {
                "publishedAt": "2022-10-25T17:00:14Z",
                "channelId": "UCTdMhilGQIL_Cava5S5GriA",
                "title": "Making Blue Crystal M*** From Breaking Bad",
                "description": "A fun recipe that makes it even more simple to consume this candy #shorts #breakingbad #rockcandy.",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/EH3ri4gM4VQ/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/EH3ri4gM4VQ/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/EH3ri4gM4VQ/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Michael Ligier",
                "liveBroadcastContent": "none",
                "publishTime": "2022-10-25T17:00:14Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "jXlHktvQ9MYkDkL9mN4CfXS8Uog",
            "id": {
                "kind": "youtube#video",
                "videoId": "rKlq-rlzmAg"
            },
            "snippet": {
                "publishedAt": "2023-03-14T03:20:56Z",
                "channelId": "UC8X1KHwYUsoZDurQ-Q7kU9g",
                "title": "JORNALISTA TOCA NA &quot;FERIDA&quot; DO VITOR PEREIRA E ELE FICA P*** DA VIDA APÓS FLAMENGO 3X2 VASCO!",
                "description": "Deus é Fiel INSCREVA-SE NO CANAL E DEIXE SEU LIKE .",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/rKlq-rlzmAg/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/rKlq-rlzmAg/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/rKlq-rlzmAg/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Almeida Fla",
                "liveBroadcastContent": "none",
                "publishTime": "2023-03-14T03:20:56Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "O_rCVf7Q3yUaksCIc01IV7QJA24",
            "id": {
                "kind": "youtube#video",
                "videoId": "9tYnx5VoTTo"
            },
            "snippet": {
                "publishedAt": "2023-03-11T17:00:04Z",
                "channelId": "UCgH8NCuYcVzxxrfsrBj1u3A",
                "title": "How F***ed Is The UK?!",
                "description": "The UK have announce their entrant for this year's Eurovision song context so today I'm reacting to the chosen song to see if we ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/9tYnx5VoTTo/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/9tYnx5VoTTo/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/9tYnx5VoTTo/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Justin Hawkins Rides Again",
                "liveBroadcastContent": "none",
                "publishTime": "2023-03-11T17:00:04Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "i-uNutIzQzVRFkyncm8mfSZ063k",
            "id": {
                "kind": "youtube#video",
                "videoId": "UXl5vL19edI"
            },
            "snippet": {
                "publishedAt": "2023-03-12T14:47:01Z",
                "channelId": "UCdl_gZZR6BtKi45eHFGAduw",
                "title": "&#39;YOU ARE TAKING THE P***&#39; - TONY BELLEW GOES IN ON TYSON FURY OVER 70-30 SPLIT WITH OLEKSANDR USYK",
                "description": "\"Everlast - Proud Sponsors of iFL TV - *Greatness is Within* Full range available at https://www.sportsdirect.com/everlast 'YOU ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/UXl5vL19edI/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/UXl5vL19edI/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/UXl5vL19edI/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "iFL TV",
                "liveBroadcastContent": "none",
                "publishTime": "2023-03-12T14:47:01Z"
            }
        }
    ]
};