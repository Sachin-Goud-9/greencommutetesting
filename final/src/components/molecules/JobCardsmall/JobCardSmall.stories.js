import React from "react";

import JobCardSmall from "./JobCardSmall";

import LocalTaxiOutlinedIcon from '@material-ui/icons/LocalTaxiOutlined';
import TrainOutlinedIcon from '@material-ui/icons/TrainOutlined';
import DirectionsBusOutlinedIcon from '@material-ui/icons/DirectionsBusOutlined';
import MotorcycleOutlinedIcon from '@material-ui/icons/MotorcycleOutlined';

export default {
    title: "Molecules/Job Card Small",
    component: JobCardSmall,
};

const Template = (args) => <JobCardSmall {...args} />;

export const PrimaryJobCardSmall = Template.bind({});


PrimaryJobCardSmall.args = {
    logo : "https://cdn.zeplin.io/5fa28fcbff79c58958e4e1a6/assets/4a211710-3383-49de-9edd-ef48e3af27d1-2x.png",
    roleName : 'User Experience Designer',
    companyName: 'Hp',
    location : 'Hyderabad, Telangana India',
    icons : [<LocalTaxiOutlinedIcon />, <TrainOutlinedIcon /> , <DirectionsBusOutlinedIcon /> , <MotorcycleOutlinedIcon />]
};