import React, { useMemo } from "react";
import { withFormik, useField, FieldArray } from "formik";
import CircularProgress from "@mui/material/CircularProgress";
import { withFormikDevtools } from "formik-devtools-extension";

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

const Order = (props) => {
  withFormikDevtools(props);
  const {
    values,
    handleChange,
    setFieldValue,
    handleBlur,
    handleSubmit,
    isSubmitting,
    orderName,
    orderDescription,
    orderImage,
    freeExtras,
    basicPrice,
    extras,
  } = props;
  const totalPrice = useMemo(
    () =>
      getTotalPrice({
        freeExtras,
        basicPrice,
        selectedExtras: extras?.filter((e) => values.extraIds.includes(e._id)),
      }),
    [values.extraIds.length]
  );

  const [notesFiled, notesMeta] = useField("notes");
  const [cutleryFiled, cutleryMeta] = useField("cutlery");

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
            <FieldArray name="extraIds">
              {({ remove, push }) => {
                return extras
                  ?.sort((e1, e2) => e1.order - e2.order)
                  .map(({ _id, name, price }) => (
                    <Checkbox
                      key={_id}
                      label={`${name} (${price}$)`}
                      checked={values.extraIds.includes(_id)}
                      onChange={() => {
                        const eIndex = values.extraIds.indexOf(_id);
                        if (eIndex >= 0) remove(eIndex);
                        else push(_id);
                      }}
                    />
                  ));
              }}
            </FieldArray>
          </Stack>
        </Item>
      </ItemContainer>
      <ItemContainer xs={12} sm={6}>
        <Item xs={12}>
          <Stack spacing={3}>
            <Checkbox
              label="Include cutlery?"
              checked={cutleryFiled.value}
              {...cutleryFiled}
            />
            <Input
              multiline
              rows={5}
              label="Note"
              variant={"outlined"}
              helperText={notesMeta.touched ? notesMeta.error : ""}
              error={!!(notesMeta.touched && notesMeta.error)}
              {...notesFiled}
            />
          </Stack>
        </Item>
      </ItemContainer>
      <Item xs={12} align="center" mt={{ xs: 5, sm: 10, md: 20 }}>
        <ButtonIcon
          disabled={isSubmitting}
          endIcon={<span>{totalPrice}$</span>}
          onClick={() => {
            debugger;
            handleSubmit();
          }}
        >
          {isSubmitting ? <CircularProgress color="success" /> : "Submit"}
        </ButtonIcon>
      </Item>
    </Container>
  );
};

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default withFormik({
  // enableReinitialize: true,
  // validateOnBlur: false,
  // validateOnChange: false,
  // validateOnMount: false,
  mapPropsToValues: (props) => ({
    cutlery: props.cutlery,
    notes: props.notes,
    extraIds: [],
  }),
  validate(values) {
    return { ...(!values.notes.length && { notes: "is required!" }) };
  },
  handleSubmit: async (values, { props }) => {
    await sleep(2500);
    console.table(values);
    props.onSubmit(values);
  },
})(Order);
