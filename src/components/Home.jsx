import React from 'react'
import Stocks from './Stocks'

function Home({stocks}) {
    return (
        <>
        <h1>Securities Available for Watchlist</h1>
        {stocks.map(stock => <Stocks stocks={stock}/>)}
        </>
    )
}

export default Home
