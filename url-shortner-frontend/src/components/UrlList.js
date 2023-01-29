import React  from "react";
import UrlItem from "./UrlItem";
const UrlList=(props)=>{
    const {urls,handleUrls}=props
    return(
        <div>
            <h1>Listing URLS - {urls.length}</h1>
            {
                urls.map(url=>{return <UrlItem url={url} key={url._id} handleUrls={handleUrls}/>})
            }
        </div>
    )
}
export default UrlList