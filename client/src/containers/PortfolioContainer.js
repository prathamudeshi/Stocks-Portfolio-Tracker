
import React, { useEffect, useState } from "react";
import { deleteShares, getHeldShares, postNewShareAdd } from "../services/PortfolioServices";
import PortfolioSharesList from "../components/portfolioComponents/PortfolioSharesList";
import ChartHoldingsByCompany from "../components/sharedComponents/ChartHoldingsByCompany";

const PortfolioContainer = ({apiData}) => {

    const [heldShares, setHeldShares] = useState([]);
    const [sharesWithPrice, setSharesWithPrice] = useState([]);

    useEffect(() => {
        getHeldShares()
        .then(shares => setHeldShares(shares))
    }, [])

    useEffect(() => {
        const portfolioCurrentPrices =
            heldShares.map((company) => {
            return (
                {
                ...company,
                currentPrice: apiData.filter(stock => stock.symbol === company.symbol)
                                .map((stock) => {
                                        return stock.price
                                    })[0]
                }
            )
            })        
        setSharesWithPrice(portfolioCurrentPrices)
    }, [heldShares, apiData])


    //REMOVE ALL SHARES IN A PARTICULAR COMPANY
    const removeHeldSharesInCompany = (id) => {
        const temp = heldShares.map(shares => shares);
        const indexToDelete = temp.map(shares => shares._id).indexOf(id);
        temp.splice(indexToDelete, 1);
        setHeldShares(temp);
    }

    //ADD A SHARE IN A STOCK WE DO NOT HAVE IN OUR PORTFOLIO
    const addNewShares = (newShares) => {
        postNewShareAdd(newShares)
        .then(savedNewShares => setHeldShares([...heldShares, savedNewShares]))
    }

    return (  

        <>
        <hr/>
            <PortfolioSharesList heldShares={sharesWithPrice} removeHeldSharesInCompany={removeHeldSharesInCompany} />
            <ChartHoldingsByCompany sharesData={sharesWithPrice} />
        </>

    );
}
 
export default PortfolioContainer;
