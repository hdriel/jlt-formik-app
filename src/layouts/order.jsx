import React from "react";
import {
  Container,
  Item,
  ColoredBox,
  ItemContainer,
  Title,
  Image,
  Stack,
} from "./order.styled";

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
            <ColoredBox color="red">
              <Title>Lorem Ipsum is simply</Title>
            </ColoredBox>
          </Item>
          <Item xs={12}>
            <ColoredBox color="red">
              <Title>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specim
              </Title>
            </ColoredBox>
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
              <ColoredBox key={itemNo} color={"rgba(88,92,135,0.47)"}>
                extra {itemNo}
              </ColoredBox>
            ))}
          </Stack>
        </Item>
      </ItemContainer>
      <ItemContainer xs={12} sm={6}>
        <Item xs={12}>
          <Stack spacing={2}>
            <ColoredBox color="brown">fork?</ColoredBox>
            <ColoredBox color="yellow">note</ColoredBox>
          </Stack>
        </Item>
      </ItemContainer>
      <Item xs={12}>
        <ColoredBox color="green">Submit</ColoredBox>
      </Item>
    </Container>
  );
};
