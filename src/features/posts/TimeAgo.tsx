import { parseISO, formatDistanceToNow } from "date-fns";
import React from "react";

interface Props {
  timestamp: string;
}

export const TimeAgo: React.FC<Props> = ({ timestamp }) => {
  let timeAgo = "";
  if (timestamp) {
    const date = parseISO(timestamp);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = `${timePeriod} ago.`;
  }
  return <span>{timeAgo}</span>;
};
