import styled from "@emotion/styled";

const HeaderElement = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: var(--application-padding-xxlg) var(--application-padding-lg);
  background-color: var(--palette-light-grey);
  font-size: var(--ajs-font-size-header);
  font-weight: var(--ajs-font-weight-body-bold);

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(to right, #ba2a06, #79bac0);
  }
`;

interface Props {
  title: string;
}

export const Header: React.FC<Props> = ({ title }) => (
  <HeaderElement>{title}</HeaderElement>
);
