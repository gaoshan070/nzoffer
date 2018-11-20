export interface IBaseStepType {
  callback: Function;
}

// generate props for DropDownItem component
export const getItemProps = (
  item: string,
  index: number,
) => ({ key: index.toString(), itemText: item });
