import { dayOfWeekMap } from '../../../models/day-of-week-map';

export const HoverTooltip = ({ day, value }: { day: string; value: string }) => {
  const dayOfWeek = dayOfWeekMap[new Date(day).getDay() as keyof typeof dayOfWeekMap];
  let label: string | undefined;

  switch (value) {
    case '1':
      label = 'Gates not fully functional';
      break;
    case '100':
      label = `Today's date!`;
      break;
    default:
      label = 'Gates fully functional';
  }
  return (
    <div>
      <div
        style={{
          borderRadius: '5px',
          backgroundColor: '#202020',
          paddingTop: '5px',
          paddingBottom: '5px',
          paddingLeft: '10px',
          paddingRight: '10px',
          border: '1px solid #282828'
        }}
      >
        {day} ({dayOfWeek}): {label}
      </div>
    </div>
  );
};
