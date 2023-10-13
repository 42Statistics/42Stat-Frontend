import { TableRowList } from '@/Calculator/types/orderItemButton';
import { ReactComponent as MdDown } from '@shared/assets/icon/md-down.svg';
import { ReactComponent as MdUp } from '@shared/assets/icon/md-up.svg';
import { ReactComponent as MdDelete } from '@shared/assets/icon/md-delete.svg';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

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
      <ButtonLayout>
        <MdUp
          width={15}
          height={15}
          fill={theme.colors.mono.black}
          onClick={handleClickUp}
        />
      </ButtonLayout>
      <ButtonLayout>
        <MdDown
          width={15}
          height={15}
          fill={theme.colors.mono.black}
          onClick={handleClickDown}
        />
      </ButtonLayout>
      <ButtonLayout>
        <MdDelete
          width={15}
          height={15}
          fill={theme.colors.mono.black}
          onClick={handleClickDelete}
        />
      </ButtonLayout>
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
`;

const ButtonLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0.5rem;
  user-select: none;
  transition: all 0.3s;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 3px 12px;
    transform: translateY(-2px);
  }

  &:active {
    box-shadow: none;
    transform: translateY(0px);
  }
`;
