import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { handleFlex } from "../../utils/helpers";
import { Text, Form, FormGroup, Input, Label, BtnSubmit } from "../styled/Form";

interface ContactFormProps {
  className?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({
  className = "contact-form",
}) => {
  return (
    <motion.section
      className={className}
      initial={{ opacity: 0, x: 400 }}
      animate={{ opacity: 1, x: 0, rotate: 0 }}
      transition={{ duration: 2 }}
    >
      <Form
        method="post"
        netlify-honeypot="bot-field"
        data-netlify="true"
        name="contact"
      >
        <input type="hidden" name="form-name" value="contact" />
        <FormGroup>
          <Label htmlFor="förnamn">
            <span>Förnamn</span>
          </Label>
          <Input type="text" placeholder="Goran" name="förnamn" />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="efternamn">
            <span>Efternamn</span>
          </Label>
          <Input type="text" placeholder="Pandzic" name="efternamn" />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="epost">
            <span>epost</span>
          </Label>
          <Input type="email" placeholder="goran@example.com" name="epost" />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="meddalnde">
            <span>meddalnde</span>
          </Label>

          <Text name="epost"></Text>
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
