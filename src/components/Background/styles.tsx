import styled from "styled-components";

export const TopBackground = styled.div`
  position: fixed;
  background: url(background_top.png) no-repeat;
  background-size: 100% auto;
  width: 100vw;
  height: 100vh;
  z-index: -2;
  @media (max-width: 768px) {
    background-size: auto auto;
  }
`;

export const BottomBackground = styled.div`
  position: absolute;
  top: 800px;
  background: url(background_bottom.png) no-repeat;
  background-size: 100% auto;
  width: 100vw;
  height: 100%;
  z-index: -1;
  @media (max-width: 768px) {
    background-size: auto auto;
    top: 1000px;
  }
`;

export const Wrapper = styled.div`
  overflow: hidden;
  position: relative;
`;

export const Children = styled.div`
  z-index: 1;
`;
