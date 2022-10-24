import { parseISO, format } from "date-fns";

const Date = ({ dateString }: { dateString: string }): JSX.Element => {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
};

export default Date;
