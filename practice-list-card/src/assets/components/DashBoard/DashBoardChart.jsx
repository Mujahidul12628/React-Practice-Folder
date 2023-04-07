import React from 'react';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const DashBoardChart = () => {

    const studentsMark = [
        {
            id: "1001",
            name: "Sophie Johnson",

            Physics: 80,
            Chemistry: 75,
            Math: 90,
            Biology: 85,
            ICT: 80

        },
        {
            id: "1002",
            name: "Benjamin Lee",

            Physics: 60,
            Chemistry: 70,
            Math: 80,
            Biology: 90,
            ICT: 75

        },
        {
            id: "1003",
            name: "Emily Chen",

            Physics: 85,
            Chemistry: 65,
            Math: 70,
            Biology: 80,
            ICT: 75

        },
        {
            id: "1004",
            name: "Alex Rodriguez",

            Physics: 70,
            Chemistry: 80,
            Math: 85,
            Biology: 75,
            ICT: 60

        },
        {
            id: "1005",
            name: "Isabella Nguyen",

            Physics: 75,
            Chemistry: 85,
            Math: 60,
            Biology: 70,
            ICT: 80

        },
        {
            id: "1006",
            name: "William Kim",

            Physics: 90,
            Chemistry: 80,
            Math: 70,
            Biology: 85,
            ICT: 75

        },
        {
            id: "1007",
            name: "Ava Brown",

            Physics: 70,
            Chemistry: 75,
            Math: 80,
            Biology: 85,
            ICT: 90

        },
        {
            id: "1008",
            name: "Ethan Davis",

            Physics: 80,
            Chemistry: 85,
            Math: 75,
            Biology: 70,
            ICT: 60

        },
        {
            id: "1009",
            name: "Olivia Perez",

            Physics: 85,
            Chemistry: 70,
            Math: 80,
            Biology: 75,
            ICT: 65

        },
        {
            id: "1010",
            name: "James Smith",

            Physics: 60,
            Chemistry: 75,
            Math: 90,
            Biology: 80,
            ICT: 70
        }
    ]
    return (
        <div>
            <LineChart
                width={1000}
                height={500}
                data={studentsMark}
            >
                <XAxis dataKey="id" />
                <YAxis />
                <Tooltip />
                <Line dataKey="Biology" stroke="#8884d8" fill="#8884d8"></Line>
                <Line dataKey="Chemistry" stroke="#82ca9d" fill="#82ca9d"></Line>
                <Line dataKey="Physics" stroke="#ffc658" fill="#ffc658"></Line>
                <Line dataKey="Math" stroke="#f66666" fill="#f66666"></Line>

            </LineChart>






        </div >
    );
};

export default DashBoardChart;