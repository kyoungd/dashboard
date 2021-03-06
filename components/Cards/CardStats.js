import React from "react";
import PropTypes from "prop-types";

function getStatTitle(statTitle) {
  if (typeof statTitle === 'undefined' || !statTitle || statTitle.length === 0)
    return (<></>);
  else return (
    <span className="font-semibold text-xl text-blueGray-700">
      {statTitle}
    </span>
  )
}

function getStatIcon(statIconName, statIconColor) {
  if (typeof statIconName === 'undefined' || !statIconName || statIconName.length === 0)
    return (<></>);
  else return (
    <div className="relative w-auto pl-4 flex-initial">
      <div
        className={
          "text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full " +
          statIconColor
        }
      >
        <i className={statIconName}></i>
      </div>
    </div>
  )
}

function statDescriptionString(ix, statArrow, statPercent, statPercentColor, statDescription) {
  if (statArrow === "" && statPercent === "")
    return <span>{statDescription}</span>
  else
    return (
      <li key={ix}>
        <span className={statPercentColor + " mr-2"}>
          <i
            className={
              statArrow === "up"
                ? "fas fa-arrow-up"
                : statArrow === "down"
                  ? "fas fa-arrow-down"
                  : ""
            }
          ></i>{" "}
          {statPercent}
        </span>
        <span>{statDescription}</span>
      </li>
    );
}

function getStatDescription(statArrows, statPercents, statPercentColors, statDescriptions) {

  if (typeof statDescriptions === 'undefined' || !statDescriptions || statDescriptions.length === 0)
    return (<></>);
  else {
    const descriptions = [];
    for (let ix = 0; ix < statDescriptions.length; ++ix)
      descriptions.push(statDescriptionString(ix,
        typeof statArraows !== 'undefined' && statArrows && statArrows.length > 0 ? statArrows[ix] : "",
        typeof statPercents !== 'undefined' && statPercents && statPercents.length > 0 ? statPercents[ix] : "",
        typeof statPercentColors !== 'undefined' && statPercentColors && statPercentColors.length > 0 ? statPercentColors[ix] : "",
        statDescriptions[ix]));
    return descriptions;
  }
}

export default function CardStats({
  statSubtitle,
  statTitle,
  statArrows,
  statPercents,
  statPercentColors,
  statDescriptions,
  statIconName,
  statIconColor,
}) {

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
        <div className="flex-auto p-4">
          <div className="flex flex-wrap">
            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
              <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                {statSubtitle}
              </h5>
              {getStatTitle(statTitle)}
            </div>
            {getStatIcon(statIconName, statIconColor)}
          </div>
          <p className="text-sm text-blueGray-400 mt-4">
            {getStatDescription(statArrows, statPercents, statPercentColors, statDescriptions)}
          </p>
        </div>
      </div>
    </>
  );
}

CardStats.defaultProps = {
  statPercentColors: ["text-emerald-500"],
  statIconColor: "bg-red-500",
};

CardStats.propTypes = {
  statSubtitle: PropTypes.string,
  statTitle: PropTypes.string,
  statArrows: PropTypes.arrayOf(PropTypes.oneOf(["up", "down"])),
  statPercents: PropTypes.arrayOf(PropTypes.string),
  // can be any of the text color utilities
  // from tailwindcss
  statPercentColors: PropTypes.arrayOf(PropTypes.string),
  statDescriptions: PropTypes.arrayOf(PropTypes.string),
  statIconName: PropTypes.string,
  // can be any of the background color utilities
  // from tailwindcss
  statIconColor: PropTypes.string,
};
