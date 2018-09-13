
import * as React from "react";

// import './nivoline.d.ts';
import { ResponsiveLine } from '@nivo/line';

const data = [
    {
        "id": "japan",
        "color": "hsl(248, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 280
            },
            {
                "x": "helicopter",
                "y": 172
            },
            {
                "x": "boat",
                "y": 271
            },
            {
                "x": "train",
                "y": 238
            },
            {
                "x": "subway",
                "y": 97
            },
            {
                "x": "bus",
                "y": 189
            },
            {
                "x": "car",
                "y": 69
            },
            {
                "x": "moto",
                "y": 91
            },
            {
                "x": "bicycle",
                "y": 188
            },
            {
                "x": "others",
                "y": 51
            }
        ]
    },
    {
        "id": "france",
        "color": "hsl(2, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 60
            },
            {
                "x": "helicopter",
                "y": 242
            },
            {
                "x": "boat",
                "y": 173
            },
            {
                "x": "train",
                "y": 121
            },
            {
                "x": "subway",
                "y": 90
            },
            {
                "x": "bus",
                "y": 237
            },
            {
                "x": "car",
                "y": 158
            },
            {
                "x": "moto",
                "y": 45
            },
            {
                "x": "bicycle",
                "y": 195
            },
            {
                "x": "others",
                "y": 234
            }
        ]
    },
    {
        "id": "us",
        "color": "hsl(213, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 105
            },
            {
                "x": "helicopter",
                "y": 14
            },
            {
                "x": "boat",
                "y": 227
            },
            {
                "x": "train",
                "y": 123
            },
            {
                "x": "subway",
                "y": 97
            },
            {
                "x": "bus",
                "y": 194
            },
            {
                "x": "car",
                "y": 187
            },
            {
                "x": "moto",
                "y": 220
            },
            {
                "x": "bicycle",
                "y": 286
            },
            {
                "x": "others",
                "y": 73
            }
        ]
    },
    {
        "id": "germany",
        "color": "hsl(6, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 298
            },
            {
                "x": "helicopter",
                "y": 291
            },
            {
                "x": "boat",
                "y": 263
            },
            {
                "x": "train",
                "y": 257
            },
            {
                "x": "subway",
                "y": 203
            },
            {
                "x": "bus",
                "y": 159
            },
            {
                "x": "car",
                "y": 268
            },
            {
                "x": "moto",
                "y": 160
            },
            {
                "x": "bicycle",
                "y": 232
            },
            {
                "x": "others",
                "y": 66
            }
        ]
    },
    {
        "id": "norway",
        "color": "hsl(317, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 35
            },
            {
                "x": "helicopter",
                "y": 251
            },
            {
                "x": "boat",
                "y": 14
            },
            {
                "x": "train",
                "y": 288
            },
            {
                "x": "subway",
                "y": 269
            },
            {
                "x": "bus",
                "y": 297
            },
            {
                "x": "car",
                "y": 157
            },
            {
                "x": "moto",
                "y": 182
            },
            {
                "x": "bicycle",
                "y": 85
            },
            {
                "x": "others",
                "y": 150
            }
        ]
    }
];

interface IMatchProps {
    match: {
        params: {
            id: string
        }
    }
}

export default ({ match }: IMatchProps) => {
    return (
        <div>
            <p>{match.params.id}</p>
            <ResponsiveLine
                data={data}
                margin={{
                    "top": 50,
                    "right": 110,
                    "bottom": 50,
                    "left": 60
                }}
                xScale={{
                    "type": "point"
                }}
                yScale={{
                    "type": "linear",
                    "stacked": true,
                    "min": "auto",
                    "max": "auto"
                }}
                minY="auto"
                maxY="auto"
                stacked={true}
                axisBottom={{
                    "orient": "bottom",
                    "tickSize": 5,
                    "tickPadding": 5,
                    "tickRotation": 0,
                    "legend": "transportation",
                    "legendOffset": 36,
                    "legendPosition": "center"
                }}
                axisLeft={{
                    "orient": "left",
                    "tickSize": 5,
                    "tickPadding": 5,
                    "tickRotation": 0,
                    "legend": "count",
                    "legendOffset": -40,
                    "legendPosition": "center"
                }}
                dotSize={10}
                dotColor="inherit:darker(0.3)"
                dotBorderWidth={2}
                dotBorderColor="#ffffff"
                enableDotLabel={true}
                dotLabel="y"
                dotLabelYOffset={-12}
                animate={true}
                motionStiffness={90}
                motionDamping={15}
                legends={[
                    {
                        "anchor": "bottom-right",
                        "direction": "column",
                        "justify": false,
                        "translateX": 100,
                        "translateY": 0,
                        "itemsSpacing": 0,
                        "itemDirection": "left-to-right",
                        "itemWidth": 80,
                        "itemHeight": 20,
                        "itemOpacity": 0.75,
                        "symbolSize": 12,
                        "symbolShape": "circle",
                        "symbolBorderColor": "rgba(0, 0, 0, .5)",
                        "effects": [
                            {
                                "on": "hover",
                                "style": {
                                    "itemBackground": "rgba(0, 0, 0, .03)",
                                    "itemOpacity": 1
                                }
                            }
                        ]
                    }
                ]}
            />
        </div>
    );
};
