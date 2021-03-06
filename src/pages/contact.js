import React, { useRef, useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "./contact.css"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const Form = () => {
  const [submitMsg, setSubmitMsg] = useState(false)
  const name = useRef(null)
  const email = useRef(null)
  const subject = useRef(null)
  const message = useRef(null)

  const onSubmit = e => {
    e.preventDefault()

    const data = {
      name: name.current.value,
      email: email.current.value,
      subject: subject.current.value,
      message: message.current.value,
    }

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...data }),
    })
      .then(() => setSubmitMsg("Success: Thankyou for your message."))
      .catch(error => setSubmitMsg("Error: It appears something went wrong"))
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={onSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />
      <label htmlFor="name">Name</label>
      <input ref={name} name="name" type="text" required />
      <label htmlFor="email">Email</label>
      <input ref={email} name="email" type="email" required />
      <label htmlFor="subject">Subject</label>
      <input ref={subject} name="subject" type="text" />
      <label htmlFor="message">Message</label>
      <textarea
        ref={message}
        name="message"
        id="#message"
        cols="30"
        rows="10"
      ></textarea>
      <button class="btn submit-btn" type="submit">
        Submit
      </button>
      {submitMsg && <p>{submitMsg}</p>}
    </form>
  )
}

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact Us" description="Get in touch with us" />
      <h1>Contact Us</h1>
      <p>Please use the form to send us a message and we'll be in touch.</p>
      <hr />
      <Form />
    </Layout>
  )
}

export default Contact
