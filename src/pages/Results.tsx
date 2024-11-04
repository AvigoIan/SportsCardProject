import styled from "@emotion/styled";

interface Props {
  items: any[];
}

const Container = styled.div`
  display: flex;
  color: black;
  flex-direction: column;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr auto;
  justify-items: start;
  column-gap: 8px;
  padding: 8px 0;
  border-bottom: 1px solid #ccc;
`;

const TitleLink = styled.a`
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const PageResults: React.FC<Props> = ({ items }) => {
  return (
    <Container>
      <h3>Results</h3>
      {items &&
        items.map((item) => (
          <Row key={item.itemId}>
            <div>
              <img
                src={item.image.imageUrl}
                alt={item.title}
                width="60"
                height="100"
              />
            </div>
            <TitleLink
              href={item.itemWebUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.title}
            </TitleLink>
            <div>
              {item.price.value} {item.price.currency}
            </div>
          </Row>
        ))}
    </Container>
  );
};
