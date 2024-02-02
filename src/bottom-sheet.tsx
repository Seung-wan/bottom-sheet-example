import { motion } from 'framer-motion';
import styled from 'styled-components';
import BottomSheetHeader from './bottom-sheet-header';
import { useBottomSheet } from './use-bottom-sheet';

export const MIN_Y = 60; // 바텀시트가 최대로 높이 올라갔을 때의 y 값
export const MAX_Y = window.innerHeight - 80; // 바텀시트가 최소로 내려갔을 때의 y 값
export const BOTTOM_SHEET_HEIGHT = window.innerHeight - MIN_Y; // 바텀시트의 세로 길이

export default function BottomSheet() {
  const { sheet, content } = useBottomSheet();

  return (
    <Wrapper ref={sheet}>
      <BottomSheetHeader />
      <BottomSheetContent ref={content}>
        <div style={{ height: '200px' }}>content!!!</div>
        <div style={{ height: '200px' }}>content!!!</div>
        <div style={{ height: '200px' }}>content!!!</div>
        <div style={{ height: '200px' }}>content!!!</div>
        <div style={{ height: '200px' }}>content!!!</div>
      </BottomSheetContent>
    </Wrapper>
  );
}

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 1;
  bottom: -${BOTTOM_SHEET_HEIGHT - MIN_Y}px;
  left: 0;
  right: 0;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);
  height: ${BOTTOM_SHEET_HEIGHT}px;
  transition: transform 150ms ease-out;
`;

const BottomSheetContent = styled.div`
  overflow: auto;
  -webkit-overflow-scrolling: touch;
`;
