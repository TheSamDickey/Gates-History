import { ResponsiveCalendar } from '@nivo/calendar';
import { GoogleSheetsService } from '../../services/google-sheets';
import { HoverTooltip } from './components/hover-tooltip';
import './home.css';

export const Home = () => {
  const { data, isLoading } = GoogleSheetsService.getTable();

  if (isLoading || !data) {
    return <div>Loading...</div>;
  }

  const arrayOfDates: string[] = data.table.rows.flatMap(GoogleSheetsService.formatRow);

  const responsiveCalendarData = arrayOfDates.map((day) => ({
    value: 1,
    day
  }));

  responsiveCalendarData.push({
    day: '2023-04-29',
    value: 100
  });

  return (
    <>
      <div className="home">
        <h1>Were the gates working?</h1>

        <div style={{ width: '1200px', height: '500px', color: '#ffffff', cursor: 'pointer' }}>
          <ResponsiveCalendar
            data={responsiveCalendarData}
            from="2022-08-04"
            to="2023-04-29"
            emptyColor="#888888"
            colors={['#f47560', '#4488ff']}
            margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
            theme={{
              textColor: '#ffffff',
              tooltip: {
                container: {
                  background: '#333333'
                }
              }
            }}
            tooltip={HoverTooltip}
            yearSpacing={40}
            monthBorderColor="#000000"
            dayBorderWidth={2}
            dayBorderColor="#020202"
            legends={[
              {
                anchor: 'bottom-right',
                direction: 'row',
                translateY: 36,
                itemCount: 4,
                itemWidth: 42,
                itemHeight: 36,
                itemsSpacing: 14,
                itemDirection: 'right-to-left'
              }
            ]}
          />
        </div>
      </div>

      <p>
        This only shows historical data, and does not update in real time. Data shown is based on emails sent from
        management regarding gate outages.
      </p>
    </>
  );
};
