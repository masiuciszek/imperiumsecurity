import { motion } from "framer-motion";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";
import { handleFlex } from "../../utils/helpers";
import { Text, Form, FormGroup, Input, Label, BtnSubmit } from "../styled/Form";

interface ContactFormProps {
  className?: string;
}

const MAIL_QUERY = graphql`
  {
    mailId: site {
      siteMetadata {
        mail
      }
    }
  }
`;

interface Mail {
  mailId: {
    siteMetadata: {
      mail: string;
    };
  };
}

const ContactForm: React.FC<ContactFormProps> = ({
  className = "contact-form",
}) => {
  const {
    mailId: {
      siteMetadata: { mail },
    },
  } = useStaticQuery<Mail>(MAIL_QUERY);

  return (
    <motion.section
      className={className}
      initial={{ opacity: 0, x: 400 }}
      animate={{ opacity: 1, x: 0, rotate: 0 }}
      transition={{ duration: 2 }}
    >
      <Form
        method="POST"
        action={`https://getform.io/f/${mail}`}
        name="contact"
      >
        <input type="hidden" name="form-name" value="contact" />
        <FormGroup>
          <Label htmlFor="namn">
            <span>Namn</span>
          </Label>
          <Input type="text" placeholder="namn" name="namn" />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="telefonnummer">
            <span>Telefonnummer</span>
          </Label>
          <Input type="number" placeholder="070*******" name="telefonnummer" />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="epost">
            <span>E-post</span>
          </Label>
          <Input
            type="email"
            placeholder="användare@example.com"
            name="epost"
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="meddalnde">
            <span>Meddelande</span>
          </Label>

          <Text name="meddalnde"></Text>
        </FormGroup>

        <BtnSubmit>Kontakta oss</BtnSubmit>
      </Form>
    </motion.section>
  );
};

export default styled(ContactForm)`
  ${handleFlex("column", "center", "center")};
  background: ${({ theme }) => theme.colors.text};
  border-radius: ${({ theme }) => theme.borderRadius};
  margin: 3em auto 5em auto;
`;
