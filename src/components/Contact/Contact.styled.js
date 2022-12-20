import styled from 'styled-components';

export const StiledForm = styled.form`
  max-width: 570px;

  > h4 {
    font-size: ${p => p.theme.fontSizes[5]};
    font-weight: ${p => p.theme.fontWeights.extraBold};
    margin-bottom: 30px;
  }

  > input {
    background-color: ${p => p.theme.colors.light};
    width: 100%;
    max-width: calc(100% - 30px);

    height: 45px;
    border: 0px;
    padding: 0 15px;
    font-size: ${p => p.theme.fontSizes[0]};

    border: 2px solid ${p => p.theme.colors.light};
    outline: none;
    margin: 5px 0;
  }

  > input:active,
  > input:focus {
    border: 2px solid ${p => p.theme.colors.prymary};
  }

  ::placeholder {
    color: ${p => p.theme.colors.text};
    font-size: ${p => p.theme.fontSizes[0]};
  }

  textarea {
    background-color: ${p => p.theme.colors.light};
    width: 100%;
    max-width: calc(100% - 30px);

    border: 0px;
    padding: 15px;
    font-size: ${p => p.theme.fontSizes[0]};

    border: 2px solid ${p => p.theme.colors.light};
    outline: none;
    margin: 5px 0;
  }

  textarea:active,
  textarea:focus {
    border: 2px solid ${p => p.theme.colors.prymary};
  }

  ::placeholder {
    color: ${p => p.theme.colors.text};
    font-size: ${p => p.theme.fontSizes[0]};
  }

  @media screen and (max-width: 990px) {
    text-align: center;
  }
`;

export const SmallButton = styled.div`
  button {
    padding: 15px 40px;

    font-size: ${p => p.theme.fontSizes[1]};
    font-weight: ${p => p.theme.fontWeights.extraBold};

    background-color: ${p => p.theme.colors.prymary};
    border: 2px solid ${p => p.theme.colors.prymary};

    cursor: pointer;
    outline: none;
    transition: 0.5s ease;
  }

  button:hover {
    border: 2px solid ${p => p.theme.colors.prymary};
    background-color: transparent;
    transition: 0.5s ease;
  }

  @media screen and (max-width: 990px) {
    text-align: center;
    margin-bottom: 30px;
  }
`;

export const SendingBtn = styled(SmallButton)`
  width: 170px;
  background-color: ${p => p.theme.colors.prymary};
  border: 1px solid ${p => p.theme.colors.white};
  cursor: pointer;
  min-height: 52px;
  padding: 7px 0;
  margin: 0px;
  border-radius: ${p => p.theme.radii[0]};
`;

export const SblCirc = styled.div`
  margin: 0 auto;
  width: 30px;
  height: 30px;

  color: ${p => p.theme.colors.text};
  position: relative;
  display: inline-block;
  border: 5px solid;
  border-radius: 50%;
  border-top-color: transparent;
  animation: rotate 1s linear infinite;

  @keyframes rotate {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const WrapperImg = styled.div`
  width: 100%;
  max-width: 570px;
  margin-left: 60px;

  @media screen and (max-width: 990px) {
    margin-left: 0;
  }
`;
