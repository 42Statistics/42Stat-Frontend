import { useEffect, useRef } from 'react';

import styled from '@emotion/styled';

export type SegmentType = {
  label: string;
  value: string;
  ref: React.RefObject<HTMLDivElement>;
};

type SegmentedControlProps = {
  segments: SegmentType[];
  index: number;
  onIndexChange: (index: number) => void;
  controlRef: React.RefObject<HTMLDivElement>;
};

// Ref. https://letsbuildui.dev/articles/building-a-segmented-control-component
// 위 내용에 type 추가, styled-components 방식으로 변경, css 테마에 맞게 변경
export const SegmentedControl = ({
  segments,
  index,
  onIndexChange,
  controlRef,
}: SegmentedControlProps) => {
  const componentReady = useRef<boolean>(false);
  useEffect(() => {
    componentReady.current = true;
  }, []);

  useEffect(() => {
    const activeSegmentRef = segments[index].ref;
    if (!activeSegmentRef.current || !controlRef.current) return;
    const { offsetWidth, offsetLeft } = activeSegmentRef.current;
    const { style } = controlRef.current;

    style.setProperty('--highlight-width', `${offsetWidth}px`);
    style.setProperty('--highlight-x-pos', `${offsetLeft}px`);
  }, [index, segments, controlRef]);

  return (
    <ControlsContainer ref={controlRef}>
      <Controls ready={componentReady.current}>
        {segments.map((item, i) => (
          <Segment key={item.value} active={index === i} ref={item.ref}>
            <SegmentInput
              type="radio"
              value={item.value}
              id={item.label}
              onChange={() => onIndexChange(i)}
              checked={index === i}
            />
            <SegmentLabel htmlFor={item.label} active={index === i}>
              {item.label}
            </SegmentLabel>
          </Segment>
        ))}
      </Controls>
    </ControlsContainer>
  );
};

const ControlsContainer = styled.div`
  --highlight-width: auto;
  --highlight-x-pos: 0;
  display: flex;
  user-select: none;
`;

type ControlsProps = {
  ready: boolean;
};

const Controls = styled.div<ControlsProps>`
  display: inline-flex;
  justify-content: space-between;
  border-radius: ${({ theme }) => theme.radius.md};
  padding: 0.5rem;
  overflow: hidden;
  position: relative;
  transition: box-shadow 0.4s;
  border: 1px solid ${({ theme }) => theme.colors.mono.gray200};

  ::before {
    content: '';
    border-radius: ${({ theme }) => theme.radius.md};
    width: var(--highlight-width);
    transform: translateX(var(--highlight-x-pos));
    position: absolute;
    top: 3px;
    bottom: 3px;
    left: 0;
    z-index: 0;
    transition: ${({ ready }) =>
      ready && 'transform 0.3s ease, width 0.3s ease'};

    background-color: ${({ theme }) => theme.colors.primary.default};
  }
`;

type SegmentProps = {
  active: boolean;
};

const Segment = styled.div<SegmentProps>`
  padding: 0.8rem 2.4rem;
  position: relative;
  text-align: center;
  z-index: 1;
`;

const SegmentInput = styled.input`
  opacity: 0;
  margin: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: absolute;
  width: 100%;
  cursor: pointer;
  height: 100%;
`;

type SegmentLabelProps = {
  active: boolean;
};

const SegmentLabel = styled.label<SegmentLabelProps>`
  cursor: pointer;
  display: block;
  position: relative;
  transition: color 0.3s ease;
  color: ${({ active, theme }) =>
    active ? theme.colors.mono.white : theme.colors.mono.black};
  font-weight: ${({ active, theme }) =>
    active ? theme.fonts.weight.bold : theme.fonts.weight.medium};
`;
