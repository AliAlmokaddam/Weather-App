import { ResponsiveLine, Serie} from '@nivo/line'

interface WeatherChartProps {
    data: Serie[];
}


const WeatherChart = (props: WeatherChartProps) => {
    const {data} = props;

    return <div className="h-[200px] lg:w-[280px] m-auto">
        <ChartNav/>
        <ResponsiveLine
            data={data}
            margin={{top: 20, right: 20, bottom: 70, left: 20}}
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
            enableSlices='x'
            colors={{scheme: 'purpleRed_green'}}
            gridXValues={["00", "06", "12", "18", "24"]}
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



const ChartNav = () => {
    return <div className="w-full justify-between flex p-1">
        <img alt="" src="src/Core/assets/chart/Rain&Thunderstorm.svg"/>
        <img alt="" src="src/Core/assets/chart/Cloudy.svg"/>
        <img alt="" src="src/Core/assets/chart/Cloudy.svg"/>
        <img alt="" src="src/Core/assets/chart/Clear-night.svg"/>
        <img alt="" src="src/Core/assets/chart/Partly-cloudy-night.svg"/>
        <img alt="" src="src/Core/assets/chart/Cloudy.svg"/>
        <img alt="" src="src/Core/assets/chart/Partly-cloudy.svg"/>
        <img alt="" src="src/Core/assets/chart/Partly-cloudy.svg"/>
        <img alt="" src="src/Core/assets/chart/Partly-cloudy.svg"/>
        <img alt="" src="src/Core/assets/chart/Rain.svg"/>
        <img alt="" src="src/Core/assets/chart/Heavy-rain.svg"/>
        <img alt="" src="src/Core/assets/chart/Rain&Thunderstorm.svg"/>
    </div>
}


export default WeatherChart;