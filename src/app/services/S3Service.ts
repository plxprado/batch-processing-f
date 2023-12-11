import { HttpClient, HttpParams } from "@angular/common/http";

export class S3Service {

    private URL_SERVICE : string = "http://localhost:8086/api/v1/csv/aws/download/objects"
                                    
    constructor(private httpClient : HttpClient){
    }

    downloadByBucketName(name : string){
        console.log("PARAMETROS" + name)
        const body = { name: name };

    
        this.httpClient.post<any>(this.URL_SERVICE, body).subscribe(data=>{
            
         console.info("status========>" + data)
        })

    }

}