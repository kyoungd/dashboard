import React from "react";

// components

import CardStats from "components/Cards/CardStats.js";

export default function HeaderStats() {
  return (
    <>
      {/* Header */}
      <div className="relative md:pt-32 pb-32a pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="STATISTICS"
                  statArrows={["up", "up"]}
                  statPercents={["3.48 M", "32.7 %"]}
                  statPercentColors={["text-emerald-500", "text-emerald-500"]}
                  statDescriptions={["Share Float", "Float Percent"]}
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="LATEST NEWS"
                  statTitle="+64"
                  statDescriptions={["Sypris Wins Contract for Deep Space Program"]}
                  statIconName="fas fa-chart-pie"
                  statIconColor="bg-orange-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="TWITTER"
                  statTitle="+72"
                  statPercentColors={["text-orange-500"]}
                  statDescriptions={["SYPR is a monster"]}
                  statIconName="fas fa-users"
                  statIconColor="bg-pink-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="DISCORD"
                  statTitle="+69"
                  statPercentColors={["text-emerald-500"]}
                  statDescriptions={["SYPR is looking like a winner"]}
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
