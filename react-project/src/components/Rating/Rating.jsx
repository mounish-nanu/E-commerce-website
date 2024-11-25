import Icon from "@mdi/react";
import { mdiStar } from "@mdi/js";
import classNames from "classnames";

import "./Rating.css";
function Rating({ rating, maxRating }) {
  return (
    <div>
      {new Array(maxRating).fill(0).map((_, index) => {
        const isActive = rating >= index + 1;
        return (
          <Icon
            path={mdiStar}
            size={1.2}
            key={index}
            className={classNames("rating__star", {
              "rating__star--active": isActive
            })}
          />
        );
      })}
    </div>
  );
}
export default Rating;