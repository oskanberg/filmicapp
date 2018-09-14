
import * as React from "react";

import './style.css';

import { ResponsiveLine } from '@nivo/line';
import { Query } from "react-apollo";
import gql from "graphql-tag";

const GET_DAILY_GROSS = gql`
    query getFilm($filmID: ID!, $from: Time, $to: Time) {
        getFilm(id: $filmID) {
            title,
            grossDaily(from: $from, to: $to) {
                date
                gross
            }
        }
    }
`;

interface DailyGrossData {
    getFilm: {
        title: string,
        grossDaily: Array<{
            gross: number;
            date: string;
        }>
    };
}

interface DailyGrossVariables {
    filmID: string,
    from: string,
    to: string,
}

class DailyGrossQuery extends Query<DailyGrossData, DailyGrossVariables> { }

interface IGrossProps {
    filmID: string,
    from: string,
    to: string
}

const currencyStr = (v: number) => {
    return v.toFixed(0).replace(/\d(?=(\d{3})+$)/g, '$&,');
};

const Gross: React.StatelessComponent<IGrossProps> = ({ filmID, from, to }) => (
    <DailyGrossQuery
        query={GET_DAILY_GROSS}
        variables={{
            filmID,
            from,
            to
        }}
    >
        {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;

            const series = data!
                .getFilm
                .grossDaily
                .map(({ gross, date }) => ({
                    x: date,
                    y: gross,
                }));
            const chartData = [{
                id: data!.getFilm.title,
                data: series
            }];
            return (
                <div className="lineContainer">
                    <ResponsiveLine
                        data={chartData}
                        animate
                        margin={{
                            top: 80,
                            right: 40,
                            bottom: 80,
                            left: 80
                        }}
                        xScale={{
                            type: 'time',
                            format: '%Y-%m-%dT%H:%M:%SZ',
                            precision: 'day'
                        }}
                        yScale={{
                            type: 'linear',
                            stacked: false,
                            min: 0
                        }}
                        axisBottom={{ format: '%b %d' }}
                        curve="monotoneX"
                        enableDotLabel
                        dotLabel={e => `$${currencyStr(e.y)}`}
                        axisLeft={{
                            format: v => `$${currencyStr(parseInt(v))}`
                        }}
                        colors={["rgb(97, 205, 187)"]}
                    />
                </div>
            );

        }}
    </DailyGrossQuery>
);



interface IMatchProps {
    match: {
        params: {
            id: string
        }
    }
}

const today = new Date();
const daysAgoISO = (num: number) => {
    var d = new Date();
    d.setDate(d.getDate() - num);
    return d.toISOString();
};

export default ({ match }: IMatchProps) => {
    return (
        <div>
            <p>{match.params.id}</p>
            <Gross
                filmID={match.params.id}
                from={daysAgoISO(300)}
                to={today.toISOString()}
            ></Gross>
        </div>
    );
};
