import * as React from "react";

interface Props {
  name: string;
  age: number;
  hasCar?: boolean;
}

const Test: React.FC<Props> = ({ name, age, hasCar }: Props) => {
  return (
    <div>
      <div>Name: {name}</div>
      <div>Age: {age}</div>
      <div>Has a car: {hasCar.toString()}</div>
    </div>
  );
};
export default Test;
