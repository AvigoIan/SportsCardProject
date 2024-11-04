import styled from "@emotion/styled";
import { FormControl, Input, InputLabel } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface Props {}

const Content = styled.div`
  display: flex;
  color: black;
`;

const ContentButton = styled.div`
  padding-top: 10px;
`;
type Inputs = {
  nameInput: string;
};

export const PageContent: React.FC<Props> = () => {
  const { handleSubmit, register } = useForm<Inputs>();

  const [items, setItems] = useState([]);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log("data is ", data);
    // handleSearch(data[""])
    handleSearch(data["nameInput"]);
  };

  const handleSearch = async (query: any) => {
    try {
      console.log("QUERY ", query);
      const response = await axios.get("http://localhost:8080/search", {
        params: { q: query, limit: 30 },
      });
      console.log("response is ", response);

      console.log("summarys is ", response.data.itemSummaries);
      setItems(response.data.itemSummaries || []);
    } catch (error) {
      console.error("Error fetching data from backend:", error);
    }
  };

  return (
    <Content>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl fullWidth margin="normal" variant="standard">
          <InputLabel htmlFor="card-input-field">Card Name</InputLabel>
          <Input
            id="card-input-field"
            {...register("nameInput")}
            required={true}
          />
          <ContentButton>
            <input type="submit" value="submit" />
          </ContentButton>
        </FormControl>
      </form>
    </Content>
  );
};
