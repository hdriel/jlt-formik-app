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
} from "./Order.styled";
import { Input, ButtonIcon, Checkbox } from "../../base-components";

export const Order = ({
  _id,
  orderName,
  orderDescription,
  orderImage,
  notes,
  cutlery,
  freeExtras,
  basicPrice,
  extras,
}) => {
  let totalPrice = basicPrice;

  return (
    <Container>
      <Container direction={{ xs: "column-reverse", md: "row" }}>
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
              <Input
                label="Order name"
                value={orderName}
                readOnly
                variant="standard"
              />
            </Title>
          </Item>
          <Item xs={12}>
            <Title>
              <Input
                label="Order description"
                value={orderDescription}
                readOnly
                variant="standard"
                multiline
              />
            </Title>
          </Item>
        </ItemContainer>
        <Item xs={12} sm>
          <Image src={orderImage} width={"100%"} height={200} fit={"contain"} />
        </Item>
      </Container>
      <ItemContainer xs={12} sm={6}>
        <Item xs={12}>
          <Title>Extra: </Title>
          <Stack spacing={0}>
            {extras
              ?.sort((e1, e2) => e1.order - e2.order)
              .map(({ _id, name, price }) => (
                <Checkbox key={_id} label={`${name} (${price}$)`} checked />
              ))}
          </Stack>
        </Item>
      </ItemContainer>
      <ItemContainer xs={12} sm={6}>
        <Item xs={12}>
          <Stack spacing={3}>
            <Checkbox label="Include cutlery?" checked={cutlery} />
            <Input
              multiline
              rows={5}
              label="Note"
              variant={"outlined"}
              value={notes}
            />
          </Stack>
        </Item>
      </ItemContainer>
      <Item xs={12} align="center" mt={{ xs: 5, sm: 10, md: 20 }}>
        <ButtonIcon endIcon={<span>{totalPrice}$</span>}>Submit</ButtonIcon>
      </Item>
    </Container>
  );
};
