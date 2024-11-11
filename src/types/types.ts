export interface EBayItem {
  id: string;
  title: string;
  price: {
    value: string;
    currency: string;
  };
  itemId: string;
  itemLocation: {
    postalCode: string;
    country: string;
  };
  image: {
    imageUrl: string;
  };
  itemWebUrl: string;
}
