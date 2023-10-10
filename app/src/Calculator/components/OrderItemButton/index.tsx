import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

import type { TableRowList } from '@/Calculator/types/OrderItemButton';
import { ReactComponent as MdDelete } from '@shared/assets/icon/md-delete.svg';
import { ReactComponent as MdDown } from '@shared/assets/icon/md-down.svg';
import { ReactComponent as MdUp } from '@shared/assets/icon/md-up.svg';
import { IconButton } from '@shared/ui-kit';

export const OrderItemButton = ({
  tableRowList,
  index,
  onListChange,
}: OrderItemButtonProps) => {
  const theme = useTheme();

  const switchListOrder = ({ arr, index1, index2 }: SwitchListOrderProps) => {
    const tmp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tmp;
  };

  const handleClickUp = () => {
    if (index <= 0) return;
    switchListOrder({ arr: tableRowList, index1: index, index2: index - 1 });
    onListChange(tableRowList);
  };

  const handleClickDown = () => {
    if (index >= tableRowList.length - 1) return;
    switchListOrder({ arr: tableRowList, index1: index, index2: index + 1 });
    onListChange(tableRowList);
  };

  const handleClickDelete = () => {
    if (tableRowList.length <= 1) return;
    tableRowList.splice(index, 1);
    onListChange(tableRowList);
  };

  return (
    <Layout>
      <IconButton onClick={handleClickUp}>
        <MdUp width={15} height={15} fill={theme.colors.mono.black} />
      </IconButton>
      <IconButton onClick={handleClickDown}>
        <MdDown width={15} height={15} fill={theme.colors.mono.black} />
      </IconButton>
      <IconButton onClick={handleClickDelete}>
        <MdDelete width={15} height={15} fill={theme.colors.mono.black} />
      </IconButton>
    </Layout>
  );
};

type OrderItemButtonProps = {
  tableRowList: TableRowList[];
  index: number;
  onListChange: (tableRowList: TableRowList[]) => void;
};

type SwitchListOrderProps = {
  arr: TableRowList[];
  index1: number;
  index2: number;
};

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
`;
