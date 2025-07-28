   
    export async function POST(req: Request) {

        const API_KEY = process.env.MARS_API_KEY || ''; //'MHEPfWZVJ9JrMMGRuGH9knnYvN3b2DFqcax9YVAS'; // 

        const {earthDate} = await req.json();
        
        const getUrl = (earth_date: string) => {
            const baseUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?';
            const params = new URLSearchParams();
            if (earth_date) params.set("earth_date", earth_date);
            params.set("api_key", API_KEY);

            const fullQuery = baseUrl + params.toString();
            console.log("API full url: ", fullQuery); // for debbugging only

            return fullQuery;
        }

        const url = getUrl(earthDate);
        const response = await fetch(url);

        console.log(response.status);
        const data = await response.json();
        console.log(data.photos[0]);
                
        return Response.json(data);  // Alternatively: new Response(JSON.stringify(data));  
    }