import styled from "@emotion/styled";
import { PageContent } from "./Content";

interface Props {}

const Page = styled.div`
  padding: 10px;
  background-color: white;
  color: blue;
`;

const Header = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MainPage: React.FC<Props> = () => (
  <Page>
    <Header>Sports Card Lookup</Header>
    <PageContent />
  </Page>
);
