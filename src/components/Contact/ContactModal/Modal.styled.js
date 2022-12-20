import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  background-color: ${p => p.theme.colors.white};
  border-radius: 15px;

  h3 {
    font-size: ${p => p.theme.fontSizes[5]};
    font-weight: ${p => p.theme.fontWeights.bold};
    color: ${p => (p.error ? 'red' : `${p.theme.colors.prymary}`)};
    margin-bottom: 20px;
  }
`;

export const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;

  p {
    color: ${p => p.theme.colors.text};

    font-size: ${p => p.theme.fontSizes[2]};
    font-weight: ${p => p.theme.fontWeights.extraBold};

    &:nth-child(1) {
      margin-bottom: 10px;
    }
  }
`;
