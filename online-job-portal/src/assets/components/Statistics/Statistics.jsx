
import React from 'react';
import {
    ComposedChart,
    Line,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";
import DynamicTittle from '../Hook/DynamicTittle';

const data = [
    {
        name: "Web Developer",
        totalApply: 5590,
    },
    {
        name: "Software Engineer",
        totalApply: 4530,
    },
    {
        name: "Blockchain Developer",
        totalApply: 500,
    },
    {
        name: "ML Engineer",
        totalApply: 1790,
    },
    {
        name: "Game Development",
        totalApply: 4980,
    },
    {
        name: "UI/UX Engineer",
        totalApply: 3586,
    }
];

const Statistics = () => {
    DynamicTittle('Statistics');
    return (
        <div className='row'>
            <div className='py-5 my-3' id='details-background'>
                <h2 className='py-5 text-center'>Statistics component</h2>
            </div>
            <div className='d-flex justify-content-center align-items-center col-12' id='chart'>
                <ComposedChart
                    width={800}
                    height={500}
                    data={data}
                    margin={{
                        top: 10,
                        right: 10,
                        bottom: 10,
                        left: 10
                    }}
                >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="name" scale="band" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="totalApply" barSize={20} fill="#5187" />
                    <Line type="monotone" dataKey="totalApply" stroke="#ff7300" />
                </ComposedChart>
            </div>
        </div>
    );
};

export default Statistics;
