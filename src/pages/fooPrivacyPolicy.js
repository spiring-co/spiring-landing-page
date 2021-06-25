import Layout from "components/Layout"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import Helmet from "react-helmet"

const RenderBody = ({ home, projects, meta }) => {
    let [fullView, setFullView] = useState(false)

    return (
        <>
            <Helmet
                title={meta.title}
                titleTemplate={`%s | ${meta.title}`}
                meta={[
                    {
                        name: `description`,
                        content: meta.description,
                    },
                    {
                        property: `og:title`,
                        content: meta.title,
                    },
                    {
                        property: `og:description`,
                        content: meta.description,
                    },
                    {
                        property: `og:type`,
                        content: `website`,
                    },
                    {
                        name: `twitter:card`,
                        content: `summary`,
                    },
                    {
                        name: `twitter:creator`,
                        content: meta.author,
                    },
                    {
                        name: `twitter:title`,
                        content: meta.title,
                    },
                    {
                        name: `twitter:description`,
                        content: meta.description,
                    },
                ].concat(meta)}
            />
            <h1>Foo App Privacy Policy</h1>
            <h3 id="introduction">Introduction</h3>
            <p>In this Privacy Policy, references to “you” means any person submitting any data or information to AWE SPIRING DESIGN PRIVATE LIMTED.
                The term “Platform” used in this document refers to the website (being learnwithfoo.com, mobile apps and / or any other services offered / to be offered by foo.
                Privacy issues are a high priority for us at foo and we follow standard industry practices to maintain your personal information. Please read the following to learn more about our privacy policy.</p>
            <h2 id="the-information-foo-collects-">The Information Foo Collects:</h2>
            <p>When you register yourself as a teacher/vendor as part of the registration process, we collect the personal information you give us such as your name, number, address, email address and other data such as location, photographs and social media details.
                When you browse our website/app, The app takes your number to log in to the application and to contribute content such as ratings, comments, testimonials, we also automatically receive your computer’s internet protocol (IP) address in order to provide us with information that helps us learn about your browser and operating system.
                We may also communicate with the users through in-app (mobile application) notifications, SMS, email which may lead to data collected by us from the user such as permissions for sending offers/information from our partners, opinion polls etc</p>
            <p><strong>Cookies</strong></p>
            <p>To improve the responsiveness of the sites for our users, we may use “cookies”, or similar electronic tools to collect information to assign each visitor a unique, random number as a User Identification (User ID) to understand the user’s individual interests using the Identified Computer. Unless you voluntarily identify yourself (through registration, for example), we will have no way of knowing who you are, even if we assign a cookie to your computer. The only personal information a cookie can contain is information you supply (an example of this is when you ask for our Personalised Horoscope). A cookie cannot read data off your hard drive. Our advertisers may also assign their own cookies to your browser (if you click on their ads), a process that we do not control.</p>
            <h2 id="your-consent">Your consent</h2>
            <p><strong>How do you get my consent?</strong></p>
            <p>When you provide us with personal information to complete a transaction, verify your credit card, place an order, arrange for a delivery or return a purchase, we imply that you consent to our collecting it and using it for that specific reason only.
                If we ask for your personal information for a secondary reason, like marketing, we will either ask you directly for your expressed consent, or provide you with an opportunity to say no.</p>
            <p><strong>How do I withdraw my consent?</strong></p>
            <p>If after you opt-in, you change your mind, you may withdraw your consent for us to contact you, for the continued collection, use or disclosure of your information, at anytime, by contacting us at support@learnwithfoo.com</p>
            <p><strong>Third party services</strong></p>
            <p>In general, the third-party providers used by us will only collect, use and disclose your information to the extent necessary to allow them to perform the services they provide to us.
                However, certain third-party service providers, such as payment gateways and other payment transaction processors, have their own privacy policies in respect to the information we are required to provide to them for your purchase-related transactions.
                For these providers, we recommend that you read their privacy policies so you can understand the manner in which your personal information will be handled by these providers.
                In particular, remember that certain providers may be located in or have facilities that are located a different jurisdiction than either you or us. So if you elect to proceed with a transaction that involves the services of a third-party service provider, then your information may become subject to the laws of the jurisdiction(s) in which that service provider or its facilities are located.
                Once you leave our website or are redirected to a third-party website or application, you are no longer governed by this Privacy Policy or our website’s Terms of Service.</p>
            <p><strong>Contact us</strong></p>
            <p>If you would like to: access, correct, amend or delete any personal information we have about you, register a complaint, or simply want more information contact our Privacy Compliance Officer at at <strong>support@learnwithfoo.com</strong></p>

        </>
    )
}
export default ({ data }) => {
    //Required check for no data being returned
    const meta = data.site.siteMetadata

    return (
        <Layout>
            <RenderBody meta={meta} />
        </Layout>
    )
}

RenderBody.propTypes = {
    meta: PropTypes.object.isRequired,
}

export const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
