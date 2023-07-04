import { Drawer } from '@components/common/Drawer';
import { DesktopNavBar } from '../../Desktop';

type TabletNavDrawerViewProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const TabletNavDrawerView = ({
  isOpen,
  onClose,
}: TabletNavDrawerViewProps) => {
  return (
    <Drawer anchor="left" isOpen={isOpen} onClose={onClose}>
      <DesktopNavBar fixed={false} />
    </Drawer>
  );
};
