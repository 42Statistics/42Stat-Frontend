import { PluginFunc } from 'dayjs';

const FORMAT_DEFAULT = 'YYYY-MM-DDTHH:mm:ssZ';

// dayjs plugin 중에 week of month를 구하는 게 없어서 만들었습니다.
const weekOfMonth: PluginFunc = (option, dayjs) => {
  const proto = dayjs.prototype;
  const oldFormat = proto.format;

  proto.format = function (formatStr) {
    if (!this.isValid()) {
      return oldFormat.bind(this)(formatStr);
    }

    const str = formatStr || FORMAT_DEFAULT;
    const result = str.replace(/\[([^\]]+)]|ww|w{1,2}|S/g, (match) => {
      switch (match) {
        case 'w':
        case 'ww':
          return String(getWeekOfMonth(this.toDate())).padStart(
            match === 'w' ? 1 : 2,
            '0',
          );
        default:
          return match;
      }
    });
    return oldFormat.bind(this)(result);
  };
};

// TODO: 더 정확한 알고리즘으로 수정
const getWeekOfMonth = (date: Date) => {
  const currentDay = date.getDate();
  const firstDay = new Date(date.setDate(1)).getDay();

  return Math.ceil((currentDay + firstDay) / 7);
};

export default weekOfMonth;
