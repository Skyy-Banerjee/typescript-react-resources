//Restricting Props 🙅🏻‍♂️

type RandomNumType = {
  value: number;
};

type PositiveNum = RandomNumType & {
  isPositive: boolean;
  isNegative?: never;
  isZero?: never;
};

type NegativeNum = RandomNumType & {
  isNegative: boolean;
  isPositive?: never;
  isZero?: never;
};

type ZeroNum = RandomNumType & {
  isZero: boolean;
  isPositive?: never;
  isNegative?: never;
};

type RandomNumProps = PositiveNum | NegativeNum | ZeroNum;
function RandomNum({ value, isPositive, isNegative, isZero }: RandomNumProps) {
  return (
    <h3>
      {value} {isPositive && "positive"} {isNegative && "negative"}{" "}
      {isZero && "zero"}
    </h3>
  );
}

export default RandomNum;
