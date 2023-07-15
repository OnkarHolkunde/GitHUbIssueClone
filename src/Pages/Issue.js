import React, { useEffect, useState } from 'react';
import "./Issue.css"
import { useParams, useNavigate } from 'react-router-dom';
let Issue=()=>{
    const navigate=useNavigate()
    const [issues, setIssues] = useState([]);
    
    const [totalPages, setTotalPages] = useState(1);
    let {owner,repo,p_no}=useParams()

    const [page, setPage] = useState( Number(p_no) || 1);
    // if(owner.length<=0){owner="facebook"};
   
    // if(repo.length<=0){repo="react"}
   
    

 
  
    useEffect(() => {
      fetchIssues()
      
    }, [page]);

    const fetchIssues =  () => {
    
           fetch(`https://api.github.com/repos/${owner}/${repo}/issues?state=open&page=${page}`)
           .then(response=>{
            setTotalPages(response.headers.get('link').match(/page=(\d{1,})>; rel="last"/)[1]);
            return response.json()})
          .then(data=>setIssues(data))
       
      };

      let PrevPage = () => {
        if (page > 1) {
          setPage(prevPage => prevPage - 1);
          navigate(`/${owner}/${repo}/issues/${page-1}`);
          
          
          
        }
      };
    
      let NextPage = () => {
        if (page < totalPages) {
          setPage(prevPage => prevPage + 1); 
          navigate(`/${owner}/${repo}/issues/${page+1}`);
           
         
        }
      };


    return(
        <>
       
        <div  id="issues">
            {issues.map((issue,index) => (
            <div key={index} className="issue"  >
              <div className="issue-title" ><i className="fa-regular fa-circle-dot"></i> {issue.title}</div>
              <div className="issue-number">#{issue.number}</div>
              <div className="issue-labels">
                {issue.labels.map(label => (
                  <span key={label.id} className="issue-label">
                    {label.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
            
            <div className="pagination">
    <button onClick={PrevPage} >  &lt; Previous </button>
    <span >Page 
        <button id='pagebtn' >{page}</button>
         <span> {page+1}
          </span>   <span> {page+2}</span>   of  {totalPages}</span>
    <button onClick={NextPage}>Next  &gt;</button>
  </div>
        </div>
        </>
    )
}


export default Issue