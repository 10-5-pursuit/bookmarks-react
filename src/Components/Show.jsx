import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

const Show = () => {
    const [bookmark, setBookmark] = useState(null)
    const { index } = useParams()
    

    useEffect(() => {
        fetch(`http://localhost:4001/bookmarks/${index}`)
            .then(res => res.json())
            .then(res => {
                // console.log(res)
                setBookmark(res)
            })
            .catch(err => console.error(err))
    }, [])

    return (
        <div>
            { bookmark && 
                <div>
                    <h2>{bookmark.name}</h2>
                    <a href={bookmark.url} target="_blank">Take me there</a>
                </div> 
            }
        </div>
    );
};

export default Show;