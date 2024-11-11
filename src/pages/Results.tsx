import styled from "@emotion/styled";
import { useCallback, useState } from "react";
import { EBayItem } from "../types/types";

interface Props {
  items: EBayItem[];
}

const Container = styled.div`
  display: flex;
  color: black;
  flex-direction: column;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 26px 80px 1fr auto;
  justify-items: start;
  column-gap: 8px;
  padding: 8px 0;
  border-bottom: 1px solid #ccc;
  align-items: center;
`;

const TitleLink = styled.a`
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
interface StarIconProps {
  onClick: () => void;
  filledIn: boolean;
}

const StarIcon: React.FC<StarIconProps> = ({ onClick, filledIn }) => {
  const [isFilled, setIsFilled] = useState(filledIn);

  const onClickHandler = useCallback(() => {
    setIsFilled(!isFilled);
    onClick();
  }, [isFilled, onClick]);
  return (
    <svg
      onClick={onClickHandler}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill={isFilled ? "black" : "none"}
      stroke="black"
      strokeWidth="2"
      style={{ cursor: "pointer" }}
    >
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );
};

export const PageResults: React.FC<Props> = ({ items }) => {
  const saveItem = useCallback((item: EBayItem) => {
    console.log("saving item to local database store", item.id);
  }, []);

  return (
    <Container>
      <h3>Results</h3>
      {items &&
        items.map((item) => (
          <Row key={item.itemId}>
            <StarIcon onClick={() => saveItem(item)} filledIn={false} />
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
