
import React from "react";
import PropTypes from "prop-types";
import CardSymbol from "components/Cards/CardSymbol";

function drawCard(ticker) {
    return (<CardSymbol symbol={ticker.symbol} sentimentArrow={ticker.sentimentArrow} lastNews={ticker.lastNews} />);
}

export default function CardSymbolList({ symbols }) {
    const cards = [];
    for (let ix = 0; ix < symbols.length; ++ix)
        cards.push(drawCard(symbols[ix]));
    return (
        <div className="relative bg-blueGray-800 md:pt-32 pb-32a pt-12">
            <div className="px-4 md:px-10 mx-auto w-full">
                <div>
                    <div className="btn-wrapper text-center">
                        {cards}
                    </div>
                </div>
            </div>
        </div>
    );
}

CardSymbolList.propTypes = {
    symbols: PropTypes.arrayOf(
        PropTypes.shape({
            symbol: PropTypes.string,
            sentimentArrow: PropTypes.oneOf(["up", "down", "neutral"]),
            lastNews: PropTypes.string
        })
    ).isRequired,
}
