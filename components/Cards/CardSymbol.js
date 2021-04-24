import React from "react";
import PropTypes from "prop-types";

export default function CardSymbol({
    symbol,
    sentiment,
    sentimentArrow
}) {
    const sentimentColor = sentimentArrow === "up" ? "text-orange-500" : sentimentArrow === "down" ? "text-red-500 " : "text-emerald-500";
    return (
        <button
            className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
            type="button"
        >
            <p className="text-sm text-blueGray-400 mt-4">
                <span className={sentimentColor + " mr-2"}>
                    <i
                        className={
                            sentimentArrow === "up"
                                ? "fas fa-arrow-up"
                            : sentimentArrow === "down"
                                ? "fas fa-arrow-down"
                                : ""
                        }
                    ></i>{" "}
                {sentiment}%
            </span>
                <span className="whitespace-nowrap">{symbol}</span>
            </p>
        </button>
    );
}

CardSymbol.propTypes = {
    symbol: PropTypes.string,
    sentimentArrow: PropTypes.oneOf(["up", "down", "neutral"]),
    lastNews: PropTypes.string
};
