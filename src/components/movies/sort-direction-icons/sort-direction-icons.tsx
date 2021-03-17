import { ReactComponent as SortAsc } from "../../../assets/icons/sort-asc.svg";
import { ReactComponent as SortDesc } from "../../../assets/icons/sort-desc.svg";

interface IProps {
  sortDirection: string;
}

function SortDirectionIcons(props: IProps) {
  const renderSortIcon = () => {
    if (props.sortDirection === "asc") {
      return <SortAsc />;
    } else {
      return <SortDesc />;
    }
  };

  return <div>{renderSortIcon()}</div>;
}

export default SortDirectionIcons;
