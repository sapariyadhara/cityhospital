import React, { useEffect, useState } from 'react';

function ListData({items}) {
    const [data , setData] = useState([])

    useEffect(() => {
        console.log('call child');
        setData(items(5))
    } , [items])
    return (
        <div>
            <ul>
                {
                    data.map((v , i) => {
                        return(
                            <li key={i}>{v}</li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default ListData;