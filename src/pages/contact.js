import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "./contact.css"

const contact = () => {
  return (
    <Layout>
      <SEO title="Contact Us" description="Get in touch with us" />
      <h1>Contact Us</h1>
      <hr />
      <form
        name="contact-page"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <label htmlFor="name">Name</label>
        <input name="name" type="text" required />
        <label htmlFor="email">Email</label>
        <input name="email" type="email" required />
        <label htmlFor="subject">Subject</label>
        <input name="subject" type="text" />
        <label htmlFor="message">Message</label>
        <textarea name="message" id="#message" cols="30" rows="10"></textarea>
        <button class="btn submit-btn" type="submit">
          Submit
        </button>
      </form>
    </Layout>
  )
}

export default contact
