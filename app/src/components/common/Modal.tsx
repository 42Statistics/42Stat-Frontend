import { ModalType } from '@/utils/types/Modal';
import styled from '@emotion/styled';
import { rgba } from 'emotion-rgba';
import { Input } from './Input';

export const ModalContainer = styled.div`
  // Modal을 구현하는데 전체적으로 필요한 CSS를 구현
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const ModalBackdrop = styled.div`
  // Modal이 떴을 때의 배경을 깔아주는 CSS를 구현
  z-index: 500; //위치지정 요소
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const ModalView = styled.div`
  // Modal창 CSS를 구현합니다.
  padding: 4rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 2rem;
  width: 500px;
  heigth: 200px;
  background-color: #ffffff;
  > div.desc {
    margin: 50px;
    font-size: 20px;
    color: var(--coz-purple-600);
  }
`;

type ModalProps = ModalType & React.PropsWithChildren;

export const Modal = ({ isOpen, toggle, children }: ModalProps) => {
  const openModalHandler = () => {
    toggle();
  };
  return (
    <>
      <ModalContainer>
        {isOpen ? (
          <ModalBackdrop onClick={openModalHandler}>
            {/* //event 버블링을 막는 메소드 */}
            <ModalView role="dialog" onClick={(e) => e.stopPropagation()}>
              {children}
            </ModalView>
          </ModalBackdrop>
        ) : null}
      </ModalContainer>
    </>
  );
};

const EvalLogSearchInput = styled(Input)`
  all: unset;
  padding: 0.5rem 1.5rem;
  border-radius: 2rem;

  box-shadow: ${({ theme }) =>
    `0 0.4rem 0.4rem ${rgba(theme.colors.mono.black, 0.1)}`};

  :hover {
    box-shadow: ${({ theme }) =>
      `0 0.4rem 0.4rem ${rgba(theme.colors.mono.black, 0.25)}`};
  }

  transition: all 0.2s;
  :hover,
  :focus {
    background-color: ${({ theme }) => theme.colors.mono.white};
    color: ${({ theme }) => theme.colors.mono.black};
  }
`;

/**
 * 
 * <form onSubmit={handleSubmit(onSubmit)}>
                <VStack as="ul" w="100%" spacing="2rem">
                  <HStack
                    w="100%"
                    as="li"
                    justify="space-between"
                    spacing="3rem"
                  >
                    <Text>과제명</Text>
                    <EvalLogSearchInput {...register('projectName')} />
                  </HStack>
                  <HStack w="100%" as="li" justify="space-between">
                    <Text>From</Text>
                    <EvalLogSearchInput {...register('corrector')} />
                  </HStack>
                  <HStack w="100%" as="li" justify="space-between">
                    <Text>To</Text>
                    <EvalLogSearchInput {...register('corrected')} />
                  </HStack>
                  <HStack w="100%" as="li" justify="space-between">
                    <Text>플래그</Text>
                    <HStack spacing="2rem">
                      <HStack spacing="1rem">
                        <input
                          type="radio"
                          {...register('outstandingOnly')}
                          value="all"
                          defaultChecked={form.outstandingOnly === 'all'}
                        />
                        <Text>전체</Text>
                      </HStack>
                      <HStack spacing="1rem">
                        <input
                          type="radio"
                          {...register('outstandingOnly')}
                          value="outstanding"
                          defaultChecked={
                            form.outstandingOnly === 'outstanding'
                          }
                        />
                        <Text>Outstanding</Text>
                      </HStack>
                    </HStack>
                  </HStack>
                  <Button type="submit" text="검색하기" />
                </VStack>
              </form>
 */
