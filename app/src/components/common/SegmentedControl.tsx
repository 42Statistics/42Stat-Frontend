import styled from '@emotion/styled';
import { useEffect, useRef, useState } from 'react';
import { Input } from './Input';

export type SegmentType = {
  label: string;
  value: string;
  ref: React.RefObject<HTMLDivElement>;
};

type SegmentedControlProps = {
  segments: SegmentType[];
  callback: (value: string, index: number) => void;
  defaultIndex?: number;
  controlRef: React.RefObject<HTMLDivElement>;
};

// https://letsbuildui.dev/articles/building-a-segmented-control-component
// 위 내용에 type 추가, styled-components 방식으로 변경, css 테마에 맞게 변경
export const SegmentedControl = ({
  segments,
  callback,
  defaultIndex = 0,
  controlRef,
}: SegmentedControlProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(defaultIndex);
  const componentReady = useRef<boolean>(false);

  const onInputChange = (value: string, index: number) => {
    setActiveIndex(index);
    callback(value, index);
  };

  useEffect(() => {
    componentReady.current = true;
  }, []);

  useEffect(() => {
    const activeSegmentRef = segments[activeIndex].ref;
    if (!activeSegmentRef.current || !controlRef.current) return;
    const { offsetWidth, offsetLeft } = activeSegmentRef.current;
    const { style } = controlRef.current;

    style.setProperty('--highlight-width', `${offsetWidth}px`);
    style.setProperty('--highlight-x-pos', `${offsetLeft}px`);
  }, [activeIndex, callback, segments, controlRef]);

  return (
    <ControlsContainer ref={controlRef}>
      <Controls ready={componentReady.current}>
        {segments.map((item, i) => (
          <Segment key={item.value} active={activeIndex === i} ref={item.ref}>
            <SegmentInput
              type="radio"
              value={item.value}
              id={item.label}
              onChange={() => onInputChange(item.value, i)}
              checked={activeIndex === i}
            />
            <SegmentLabel htmlFor={item.label} active={activeIndex === i}>
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
`;

const Controls = styled.div<{ ready: boolean }>`
  display: inline-flex;
  justify-content: space-between;
  border-radius: 2rem;
  padding: 0.5rem;
  margin: auto;
  overflow: hidden;
  position: relative;
  transition: box-shadow 0.4s;

  :hover {
    box-shadow: 4px 4px 4px #dddddd, -4px -4px 4px #ffffff;
  }

  ::before {
    content: '';
    border-radius: 2rem;
    width: var(--highlight-width);
    transform: translateX(var(--highlight-x-pos));
    position: absolute;
    top: 3px;
    bottom: 3px;
    left: 0;
    z-index: 0;
    transition: ${({ ready }) =>
      ready && 'transform 0.3s ease, width 0.3s ease'};

    box-shadow: inset 4px 4px 4px #eeeeee, inset -4px -4px 4px #ffffff;
  }
`;

const Segment = styled.div<{ active: boolean }>`
  padding: 0.8rem 2.7rem;
  position: relative;
  text-align: center;
  z-index: 1;
`;

const SegmentInput = styled(Input)`
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

const SegmentLabel = styled.label<{ active: boolean }>`
  cursor: pointer;
  display: block;
  font-weight: medium;
  position: relative;
  transition: color 0.3s ease;
  /* color: ${({ active, theme }) => active && theme.colors.mono.white}; */
`;
