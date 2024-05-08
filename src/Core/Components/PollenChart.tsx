import {ResponsiveLine, Serie} from '@nivo/line'

interface PollenChartProps {
    data: Serie[];
}

const PollenChart = (props: PollenChartProps) => {
    const {data} = props;

    return <div className="h-[200px] lg:w-[260px] m-auto">
        <ResponsiveLine
            data={data}
            margin={{top: 30, right: 20, bottom: 50, left: 20}}
            xScale={{type: 'point'}}
            yScale={{
                type: 'linear',
                min: 'auto',
                max: 'auto',
                stacked: true,
                reverse: false
            }}
            yFormat=" >-.2f"
            curve="natural"
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legendOffset: 36,
                legendPosition: 'middle',
                truncateTickAt: 0,
                tickValues: ["00", "06", "12", "18", "24"]
            }}
            axisLeft={null}
            enableGridY={false}
            gridXValues={["00", "06", "12", "18", "24"]}
            colors={{scheme: 'purpleRed_green'}}
            lineWidth={5}
            enablePoints={false}
            pointSize={10}
            pointColor={{theme: 'background'}}
            pointBorderWidth={2}
            pointBorderColor={{from: 'serieColor'}}
            pointLabelYOffset={-12}
            areaBlendMode="darken"
            enableTouchCrosshair={true}
            legends={[]}
        />
    </div>

}

export default PollenChart;