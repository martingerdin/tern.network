import contentful from "contentful";


/*

export function getNews() {
  
  const news = [
    {
      src: "pilot-protocol-bmjopen.png",
      title: "Trial pilot protocol published in BMJ Open!",
      author: "tern",
      date: "2022-04-18",
      content: "The TERN pilot protocol titled \"A pilot multicentre cluster randomised trial to compare the effect of trauma life support training programmes on patient and provider outcomes\" was just published in BMJ Open.",
      url: "https://bmjopen.bmj.com/content/12/4/e057504.full",
    },
    {
      src: "",
      title: "Pilot trial protocol accepted in BMJ Open!",
      author: "tern",
      date: "2022-03-28",
      content: "The TERN pilot trial protocol \"A Pilot Multicenter Cluster Randomized Trial to Compare The Effect of Trauma Life Support Training Programs on Patient and Provider Outcomes\" has been accepted for publication in BMJ Open.",
      url: "",
    },
    {
      src: "",
      title: "New ethical approval",
      author: "tern",
      date: "2022-03-03",
      content: "We have received ethical approval from the institutional ethics committee at the Medica Superspeciality Hospital in Kolkata.",
      url: "",
    },
    {
      src: "",
      title: "New ethical approval",
      author: "tern",
      date: "2022-02-24",
      content: "We just received ethical approval from the institutional ethics committee at Dr R N Cooper Municipal General Hospital in Juhu, Mumbai.",
      url: "",
    },
    {
      src: "",
      title: "New ethical approval",
      author: "tern",
      date: "2022-02-18",
      content: "The TERN pilot trial just received ethical approval from the institutional ethics committee at Seth Gowardhandas Sunderdas Medical College and King Edward Memorial Hospital in Mumbai.",
      url: "",
    },
    {
      src: "",
      title: "First ethical approval!",
      author: "tern",
      date: "2021-12-29",
      content: "The TERN pilot trial just received its first ethical approval from the institutional ethics committee at Nilratan Sircar Medical College & Hospital in Kolkata.",
      url: "",
    },
  ];

  return news;
}
*/


const client = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.CONTENTFUL_DELIVERY_API_KEY,
});

export async function getNews() {
  const news = await client.getEntries({content_type: "newsItem"}).items;

  if (!news) {
    return new Response(null, {
      status: 404,
      statusText: 'Not found'
    });
  }

  return new Response(JSON.stringify(news), {
    status: 200
  });
}

