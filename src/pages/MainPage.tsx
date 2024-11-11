import styled from "@emotion/styled";
import { PageContent } from "./Content";
import { Header } from "../components/header/header";

interface Props {}

const Page = styled.div`
  background-color: var(--palette-white);
  color: var(--palette-blue-2);
`;

export const MainPage: React.FC<Props> = () => (
  <Page>
    <Header title="AJs Spors Card Lookup" />
    <PageContent />
  </Page>
);
