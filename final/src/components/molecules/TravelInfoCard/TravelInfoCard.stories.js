import React from "react";

import TravelInfoCard from "./TravelInfoCard";

export default {
    title: "Molecules/Travel Card Info",
    component: TravelInfoCard,
};
const Template = (args) => <TravelInfoCard {...args} />;

export const PrimaryTravelCardInfo = Template.bind({});


PrimaryTravelCardInfo.args = {
    mapImageSrc : 'images/map.png',
    srcLocation : "Marredpally",
    destLocation : "Hitech City",
};