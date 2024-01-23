import React from 'react';
import './NameCard.css';

const nameCheapUrl = 'https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbHdlcWJobHk1LVpjMkNVeVRxdmZYZDRRSVhJd3xBQ3Jtc0tsMFBnZE9sV1Q0bGFtYVFCUmIwWTBtbU1UaWxlbUd0b3ZzSGw4dVZweXItcDNiNEl6U3RJbTE2SHlDT3JiMVJ5SmNSVmI1ZnViaFA0UmFlTDZWUTFaRVY1MzJkdGxRTzcxbG05NllldEhMUDhIUkdiQQ&q=https%3A%2F%2Fwww.namecheap.com%2Fdomains%2Fregistration%2Fresults%2F%3Fdomain%3D%27%3B&v=PIrcgjaPPaU';

const NameCard = ({suggestedName}) =>{
    return(
        <a 
        target='_blank'
        rel='noreferrer'
        className = "card-link" 
        href={`${nameCheapUrl}${suggestedName}`}
        >
            <div className="result-name-card">
                <p className="result-name">{suggestedName}</p>
            </div>
        </a>
    )
}

export default NameCard;
