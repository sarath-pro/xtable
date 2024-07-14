import React, { useState } from 'react'

function Table() {

    let arr =
        [

            { date: "2022-09-01", views: 100, article: "Article 1" },

            { date: "2023-09-01", views: 100, article: "Article 1" },

            { date: "2023-09-02", views: 150, article: "Article 2" },

            { date: "2023-09-02", views: 120, article: "Article 3" },

            { date: "2020-09-03", views: 200, article: "Article 4" }

        ]

    const [data, setData] = useState(arr)

    const handleSortByDate = () => {
        arr.sort((a,b)=>(
            b.date.localeCompare(a.date)
        ))
        setData(arr)
    }

    const handleSortByViews = () => {
        arr.sort((a,b)=>(
            b.views - a.views
        ))
        setData(arr)
    }

    return (
        <div>
            <h1>Date and Views Table</h1>
            <div>
                <button onClick={handleSortByDate}>Sort by Date</button>
                <button onClick={handleSortByViews}>Sort by Views</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <td>Date</td>
                        <td>Views</td>
                        <td>Article</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item) => (
                            <tr>
                                <td>{item.date}</td>
                                <td>{item.views}</td>
                                <td>{item.article}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    )
}

export default Table