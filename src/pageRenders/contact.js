/** @jsx jsx */
import React, { useState } from "react";
import axios from "axios";
import { jsx, css } from "@emotion/core";
import styled from "@emotion/styled";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { CTAHeader, H2 } from "../emotionComponents/Headers";
import { CaptionOne } from "../emotionComponents/BodyText";
import InputBox from "../emotionComponents/inputBox/InputBox";
import SmallText from "../emotionComponents/SmallText";
import ButtonWhite from "../emotionComponents/ButtonWhite";
import TextArea from "../emotionComponents/textArea/TextArea";

function ContactUs(props) {
  const ID = function() {
    return (
      "" +
      Math.random()
        .toString(36)
        .substr(2, 9)
    );
  };

  const postData = async (id, setSubmitting, name, email, body) => {
    try {
      const params = {
        id,
        name,
        email,
        message: body
      };
      await axios
        .post(
          `https://je1lxtunua.execute-api.us-east-1.amazonaws.com/prod/contact-us/${id}`,
          params
        )
        .then(resp => {
          setSubmitting(false);
          setSubmitted(true);
        })
        .catch(err => {
          setSubmitted(false);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const [submitted, setSubmitted] = useState(null);

  const Container = styled("div")`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 800px;
    width: 100%;
    margin-top: 50px;
    @media (max-width: 500px) {
      height: 900px;
    }
  `;

  const FormContainer = styled("div")`
    z-index: 1;
    position: relative;
    width: 800px;
    height: 700px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background: #ffffff;
    box-shadow: 0 4px 7px rgba(0, 0, 0, 0.05);
    border-radius: 12px;
    padding: 50px;
    @media (max-width: 500px) {
      box-shadow: 0 0 0;
      border-radius: 0;
      height: 650px;
    }
  `;

  const submittedChecker = (handleBlur, errors, touched) => {
    if (submitted === null) {
      return (
        <div
          css={css`
            display: flex;
            flex-direction: column;
            align-items: center;
          `}
        >
          <div
            css={css`
              margin-bottom: 20px;
            `}
          >
            <H2
              css={css`
                text-align: center;
                margin-bottom: 20px;
              `}
            >
              Get In Touch!
            </H2>
          </div>
          <Formik
            initialValues={{ name: "", email: "", body: "" }}
            validationSchema={Yup.object({
              name: Yup.string().required("Name is Required"),
              email: Yup.string()
                .email("Please enter valid email")
                .required("Email is Required"),
              body: Yup.string().required("Query is Required")
            })}
            onSubmit={({ name, email, body }, { setSubmitting }) => {
              setSubmitting(true);

              postData(ID(), setSubmitting, name, email, body);
            }}
          >
            {({ handleBlur, errors, touched, isSubmitting }) => (
              <Form
                css={css`
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                `}
              >
                <div>
                  <div
                    css={css`
                      margin-bottom: 10px;
                    `}
                  >
                    <CaptionOne
                      css={css`
                        margin-bottom: 5px;
                      `}
                    >
                      Name
                    </CaptionOne>
                    <Field
                      type="text"
                      onBlur={handleBlur}
                      placeholder="Please enter your name"
                      name="name"
                      errorvalue={errors.name && touched.name ? `red` : ""}
                      as={InputBox}
                    />
                    <div
                      css={css`
                        height: 10px;
                      `}
                    >
                      <ErrorMessage
                        name={`name`}
                        render={msg => <SmallText color={`red`}>{msg}</SmallText>}
                      />
                    </div>
                  </div>
                </div>
                <div
                  css={css`
                    display: flex;
                    flex-direction: column;
                  `}
                >
                  <div
                    css={css`
                      margin-bottom: 10px;
                    `}
                  >
                    <CaptionOne
                      css={css`
                        margin-bottom: 5px;
                      `}
                    >
                      Email
                    </CaptionOne>
                    <Field
                      type="email"
                      onBlur={handleBlur}
                      placeholder="Please enter your email"
                      name="email"
                      errorvalue={errors.email && touched.email ? `red` : ""}
                      as={InputBox}
                    />
                    <div
                      css={css`
                        height: 10px;
                      `}
                    >
                      <ErrorMessage
                        name={`email`}
                        render={msg => <SmallText color={`red`}>{msg}</SmallText>}
                      />
                    </div>
                  </div>
                </div>
                <div
                  css={css`
                    display: flex;
                    flex-direction: column;
                  `}
                >
                  <div
                    css={css`
                      margin-bottom: 20px;
                    `}
                  >
                    <CaptionOne
                      css={css`
                        margin-bottom: 5px;
                      `}
                    >
                      Query
                    </CaptionOne>
                    <Field
                      onBlur={handleBlur}
                      placeholder="Please enter your query"
                      name="body"
                      errorvalue={errors.body && touched.body ? `red` : ""}
                      as={TextArea}
                    />
                    <div
                      css={css`
                        height: 10px;
                      `}
                    >
                      <ErrorMessage
                        name={`body`}
                        render={msg => <SmallText color={`red`}>{msg}</SmallText>}
                      />
                    </div>
                  </div>
                </div>
                <ButtonWhite disabled={isSubmitting} type={`submit`}>
                  Submit
                </ButtonWhite>
              </Form>
            )}
          </Formik>
        </div>
      );
    }

    if (submitted) {
      return (
        <div
          css={css`
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
          `}
        >
          <CTAHeader
            css={css`
              color: green;
              margin-bottom: 10px;
            `}
          >
            Thanks for getting in touch!
          </CTAHeader>
          <div>We will get back shortly</div>
        </div>
      );
    }

    if (!submitted) {
      return (
        <div
          css={css`
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
          `}
        >
          <CTAHeader
            css={css`
              color: red;
              margin-bottom: 10px;
            `}
          >
            There has been an error!
          </CTAHeader>
          <div>Please refresh and try again</div>
        </div>
      );
    }
  };

  return (
    <Container>
      <FormContainer>{submittedChecker()}</FormContainer>
    </Container>
  );
}

export default ContactUs;
