import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { DesktopDashboard } from '@/components/elements/Dashboard';
import { DesktopDashboardRow } from '@/components/elements/DashboardRow';
import { DashboardItemContainer } from '@/components/elements/DashboardItemContainer';
import { DashboardItem } from '@/components/elements/DashboardItem';
import { UserProfile } from './contents';
import { useState } from 'react';
import { Button, HStack } from '@/components/common';

export const ProfilePage = () => {
  const { username } = useParams();
  const [isGeneralTab, setIsGeneralTab] = useState(true);

  const onClickGeneralTab = () => {
    setIsGeneralTab(true);
  };

  const onClickEvaluationTab = () => {
    setIsGeneralTab(false);
  };

  return (
    <>
      <Helmet>
        <title>{username} | 42Stat</title>
      </Helmet>
      <DesktopDashboard>
        <DesktopDashboardRow row={2} col={3}>
          <DashboardItemContainer
            row={1}
            col={1}
            rowSpan={2}
            colSpan={3}
            element={<DashboardItem content={UserProfile} />}
          ></DashboardItemContainer>
        </DesktopDashboardRow>
      </DesktopDashboard>
      <HStack>
        <Button element={<p>일반</p>} onClick={onClickGeneralTab} />
        <Button element={<p>평가</p>} onClick={onClickEvaluationTab} />
      </HStack>
      {isGeneralTab ? <div>General</div> : <div>Evaluation</div>}
    </>
  );
};
