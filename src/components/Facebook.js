import { BrowserRouter, Routes,Route,useParams } from "react-router-dom"
import Issue from "../Pages/Issue"
import "../components/Face.css"
import Code from "./Code"
import Footer from "./Footer"
import HomePage from "../Pages/HomePage"
import { useState } from "react"
let Facebook=()=>{


// let [page,setPage]=useState(

// )

    return(<>
    <NavLine />
        <Code/>
<BrowserRouter>
        <Routes>
<Route  path="/" element={<HomePage/>}  />
<Route  path="/:owner/:repo/issues/:p_no"  element={<Issue  />}  />
     



        </Routes>
</BrowserRouter>



        <Footer/>

    </>
    )
}

function NavLine(){
 
   let owner="facebook";
   let repo="react";


    return<> <div className="Facebook">
    <div className="react">{`${owner}/ ${repo}`} </div>
    <div className="btn">
        <button className="buttons">Notification</button>
        <button className="buttons">Fork</button>
        <button className="buttons">Star</button>
    </div>
 

</div>
    
    </>
}


export default Facebook