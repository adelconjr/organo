import React from "react";

const teams = [
    {
        name: "Programação",
        primaryColor: '#D9F7E9',
        secondaryColor: '#57C278',
        underlineClass: 'color1'
    },
    {
        name: "Front-End",
        primaryColor: '#E8F8FF',
        secondaryColor: '#82CFFA',
        underlineClass: 'color2'
    },
    {
        name: "Data Science",
        primaryColor: '#F0F8E2',
        secondaryColor: '#A6D157',
        underlineClass: 'color3'
    },
    {
        name: "DevOps",
        primaryColor: '#FDE7E8',
        secondaryColor: '#E06B69',
        underlineClass: 'color4'
    },
    {
        name: "UX e Design",
        primaryColor: '#FAE9F5',
        secondaryColor: '#DB6EBF',
        underlineClass: 'color5'
    },
    {
        name: "Mobile",
        primaryColor: '#FFF5D9',
        secondaryColor: '#FFBA05',
        underlineClass: 'color6'
    },
    {
        name: "Inovação e Gestão",
        primaryColor: '#FFEEDF',
        secondaryColor: 'FF8A29',
        underlineClass: 'color7'
    }
];

export const TeamsContext = React.createContext(teams);