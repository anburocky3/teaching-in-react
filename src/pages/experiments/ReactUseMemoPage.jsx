import { useMemo } from "react";

const ReactUseMemoPage = () => {
  const user = {
    name: "Trisha",
    baseSalary: 60000,
    tax: 5000,
    bonus: 10000,
    homeAllowance: 15000,
    fuelAllowance: 5000,
  };

  const grossSalary = useMemo(() => {
    return (
      user.baseSalary +
      user.bonus +
      user.homeAllowance +
      user.fuelAllowance -
      user.tax
    );
  }, [user]);

  return (
    <div className="my-10">
      <p className="text-xl">{`${user.name} has gross salary ${grossSalary}`}</p>
    </div>
  );
};

export default ReactUseMemoPage;
