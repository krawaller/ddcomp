import React from "react";

import css from "./stat.css";

type StatProps = {
  name: string;
  value: number;
  set: (val: number) => void;
};

export const Stat: React.FunctionComponent<StatProps> = props => {
  const { name, value, set } = props;
  return (
    <span className={css.stat}>
      <button className={css.button} onClick={() => set(value - 1)}>
        -{" "}
      </button>
      <span className={css.name}>{name}</span>
      <span className={css.value}>{value}</span>
      <button className={css.button} onClick={() => set(value + 1)}>
        {" "}
        +
      </button>
    </span>
  );
};
