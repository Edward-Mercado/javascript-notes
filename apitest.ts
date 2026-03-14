const appToken:string = "Mwhk5kNMKOYt39UGW3qdvlSRa"

interface ApiResponse {
    results: any[]
}

async function callAPI() {
    let isLoading:boolean = true
    let errorMessage:string = ""
    let resulting:Array<any> = []

    try {
        const response:Response = await fetch(`https://data.cityofnewyork.us/api/v3/views/yjub-udmw/query.json`,
            {headers: {
                "X-App-Token": appToken,
                "Accept": "application/json"
            }}
        )

        if(!response.ok) {
            throw new Error(`Request failed with status ${response.status}`)
        }

        const data:ApiResponse = await response.json()
        resulting = Array.isArray(data) ? data : []

    } catch (error) {
        errorMessage = error instanceof Error ? error.message : "Failed to load API"
        resulting = []
        
    } finally {
        isLoading = false
        console.log(errorMessage)
        for(let i=0;i<4;i++) {
            console.log(resulting[i])
        }
    }
}

callAPI()