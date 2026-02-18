const BadgeItem = (prop) => {
  console.log(prop);
  // console.log(prop.skill);

  let badgeColor = "bg-gray-500"; // Default color
  if (prop.color === "blue") {
    badgeColor = "bg-blue-500";
  } else if (prop.color === "green") {
    badgeColor = "bg-green-500";
  } else if (prop.color === "yellow") {
    badgeColor = "bg-yellow-500";
  } else if (prop.color === "purple") {
    badgeColor = "bg-purple-500";
  }

  return (
    <li
      className={`${badgeColor} text-white px-4 py-2 rounded flex items-center gap-2`}
      // style={{ backgroundColor: prop.color }}
    >
      {prop.children}
      {prop.skill}
    </li>
  );
};

export default BadgeItem;
