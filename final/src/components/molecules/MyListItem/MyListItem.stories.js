import React from "react";
import MyListItem from "./MyListItem";
import DashboardIcon from '@material-ui/icons/Dashboard';

import { Secondary, Tertiary } from "../../atoms/MyTypography/MyTypography.stories";

export default {
    title: "Molecules/List Item",
    component: MyListItem,
};
const Template = (args) => <MyListItem {...args} />;

export const PrimaryListItem = Template.bind({});

PrimaryListItem.args = {
    icon: <DashboardIcon color="#9bbdcb" variant="outlined"/>,
    text: <Secondary {...Secondary.args} />,
    
};

export const SecondaryListItem = Template.bind({});


SecondaryListItem.args = {
    icon: <DashboardIcon color="#324552" />,
    text: <Tertiary {...Tertiary.args} />,
    
};