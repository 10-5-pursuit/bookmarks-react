import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

const Home = () => {
    const [bookmarks, setBookmarks] = useState([])

    useEffect(() => {
        fetch('http://localhost:4001/bookmarks')
            .then(res => res.json())
            .then(res => {
                // console.log(res)
                setBookmarks(res)
            })
            .catch(err => console.error(err))


    }, [])

    return (
        <div>
            { bookmarks.map((bookmark, i) => {
                return (
                    <div key={i}>
                        <Link to={`/bookmarks/${i}`}>{bookmark.name}</Link>
                    </div>
                )
              }) 
            }
        </div>
    );
};

export default Home;