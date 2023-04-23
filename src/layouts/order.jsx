import React from "react";
import { Send as SendIcon } from "@mui/icons-material";

import {
  Container,
  Item,
  ColoredBox,
  ItemContainer,
  Title,
  Image,
  Stack,
} from "./order.styled";
import { Input, ButtonIcon, Checkbox } from "../base-components";

export const Order = () => {
  return (
    <Container>
      <Container direction={{ xs: "column-reverse", sm: "row" }}>
        <ItemContainer
          xs={12}
          sm={9}
          container
          spacing={1}
          justifyContent="flex-start"
          alignItems="flex-start"
          sx={{ m: 1 }}
        >
          <Item xs={12}>
            <Title>
              <Input label="Order name" />
            </Title>
          </Item>
          <Item xs={12}>
            <Title>
              <Input label="Order description" />
            </Title>
          </Item>
        </ItemContainer>
        <Item xs={12} sm>
          <Image
            src="https://picsum.photos/id/674/2000"
            width={"100%"}
            height={200}
            fit={"contain"}
          />
        </Item>
      </Container>
      <ItemContainer xs={12} sm={6}>
        <Item xs={12}>
          <Stack spacing={2}>
            {[1, 2, 3, 4, 5].map((itemNo) => (
              <Checkbox key={itemNo} label={`${itemNo}`} checked />
            ))}
          </Stack>
        </Item>
      </ItemContainer>
      <ItemContainer xs={12} sm={6}>
        <Item xs={12}>
          <Stack spacing={2}>
            <Checkbox label="include fork?" checked={false} />
            <Input multiline rows={5} label="Note" />
          </Stack>
        </Item>
      </ItemContainer>
      <Item xs={12} align="center">
        <ButtonIcon endIcon={<SendIcon />}>Submit</ButtonIcon>
      </Item>
    </Container>
  );
};
