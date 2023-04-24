import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import CircularProgress from "@mui/material/CircularProgress";

import { getTotalPrice } from "./Order.utils";
import {
  Container,
  Item,
  ItemContainer,
  Title,
  Image,
  Stack,
} from "./Order.styled";
import { Input, ButtonIcon, Checkbox } from "../../base-components";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const Order = ({
  orderName,
  orderDescription,
  orderImage,
  notes,
  cutlery,
  freeExtras,
  basicPrice,
  extras,
}) => {
  const [note, setNote] = useState(notes);

  useEffect(() => {
    setTimeout(() => {
      console.log("Updating note...");
      setNote("Hello Hadriel");
    }, 5000);
  }, []);

  return (
    <Formik
      // enableReinitialize
      // validateOnBlur={false}
      // validateOnMount={false}
      // validateOnChange={false}
      initialValues={{ cutlery, notes: note, extraIds: [] }}
      onSubmit={async (values) => {
        await sleep(2500);
        alert(JSON.stringify(values, null, 4));
      }}
    >
      {(props) => {
        const {
          values,
          handleChange,
          setFieldValue,
          handleBlur,
          handleSubmit,
          isSubmitting,
        } = props;
        const totalPrice = getTotalPrice({
          freeExtras,
          basicPrice,
          selectedExtras: extras?.filter((e) =>
            values.extraIds.includes(e._id)
          ),
        });

        return (
          <Container>
            <Container direction={{ xs: "column-reverse", md: "row" }}>
              <ItemContainer
                xs={12}
                sm={9}
                spacing={1}
                justifyContent="flex-start"
                alignItems="flex-start"
                sx={{ m: 1 }}
              >
                <Item xs={12}>
                  <Input
                    label="Order name"
                    value={orderName}
                    readOnly
                    variant="standard"
                  />
                </Item>
                <Item xs={12}>
                  <Input
                    label="Order description"
                    value={orderDescription}
                    readOnly
                    variant="standard"
                    multiline
                    onBlur={handleBlur}
                  />
                </Item>
              </ItemContainer>
              <Item xs={12} sm>
                <Image
                  src={orderImage ?? ""}
                  width="100%"
                  height={200}
                  fit="contain"
                  brokenImage
                />
              </Item>
            </Container>
            <ItemContainer xs={12} sm={6}>
              <Item xs={12}>
                <Title>Extra: ({freeExtras} free) </Title>
                <Stack spacing={0}>
                  {extras
                    ?.sort((e1, e2) => e1.order - e2.order)
                    .map(({ _id, name, price }) => (
                      <Checkbox
                        key={_id}
                        label={`${name} (${price}$)`}
                        checked={values.extraIds.includes(_id)}
                        onChange={(event) => {
                          let newValues = values.extraIds;
                          if (event.target.checked) {
                            newValues.push(_id);
                          } else {
                            newValues = newValues.filter((eid) => eid !== _id);
                          }
                          setFieldValue("extraIds", newValues);
                        }}
                      />
                    ))}
                </Stack>
              </Item>
            </ItemContainer>
            <ItemContainer xs={12} sm={6}>
              <Item xs={12}>
                <Stack spacing={3}>
                  <Checkbox
                    name="cutlery"
                    label="Include cutlery?"
                    checked={values.cutlery}
                    onChange={handleChange}
                  />
                  <Input
                    name="notes"
                    multiline
                    rows={5}
                    label="Note"
                    variant={"outlined"}
                    value={values.notes}
                    onChange={handleChange}
                  />
                </Stack>
              </Item>
            </ItemContainer>
            <Item xs={12} align="center" mt={{ xs: 5, sm: 10, md: 20 }}>
              <ButtonIcon
                disabled={isSubmitting}
                endIcon={<span>{totalPrice}$</span>}
                onClick={handleSubmit}
              >
                {isSubmitting ? <CircularProgress color="success" /> : "Submit"}
              </ButtonIcon>
            </Item>
          </Container>
        );
      }}
    </Formik>
  );
};
