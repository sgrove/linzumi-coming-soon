"use client"

import Image from "next/image"
import Link from "next/link"
import { useTheme } from "next-themes"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import LinzumiLogo from "@/components/images/linzumi_logo.png"
import LinzumiLogoDark from "@/components/images/linzumi_logo_dark.jpg"
import LinzumiLogoLight from "@/components/images/linzumi_logo_light.jpg"

export default function IndexPage() {
  const { setTheme, theme } = useTheme()

  // const image = theme === "dark" ? LinzumiLogoDark : LinzumiLogoLight
  const image = LinzumiLogo

  return (
    <section className=" section-margin container flex flex-col items-center gap-6 pb-8 pt-6 md:py-10">
      <Image alt="Linzumi Logo" src={image} width={300} height={300} />
      <div className="max-w-[700px]">
        <h1 className="heading text-3xl font-extrabold md:text-4xl">Linzumi</h1>
        <h2 className="heading text-2xl font-extrabold">
          Craft serverless ML APIs in minutes, with seamless support for
          Replicate, HuggingFace & OpenAI
        </h2>
        <div className="text-lg text-muted-foreground">
          <ul className="list-disc">
            <li>
              Try public flows, customize for your needs, then import into your
              own API instantly
            </li>
            <li>
              Compile out a type-safe client for use in Node, Python, or mobile
              applications
            </li>
            <li>
              Built-in visualizer and debugger so you can see every step of
              every API invocation
            </li>
            <li>Trigger flows via API call, webhooks, or even emails</li>
            <li>
              Send the results of every flow to your application, to an outgoing
              webhook, or an email address
            </li>
          </ul>
        </div>
      </div>

      <div className="flex max-w-[700px] flex-col items-center gap-2">
        <div className="section-margin">
          <h3 className="heading text-2xl font-extrabold">Preview</h3>
          <iframe
            width="700"
            height="394"
            src="https://www.youtube-nocookie.com/embed/0TL-gQfCLoU?showInfo=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{ maxWidth: "100%" }}
          ></iframe>
        </div>
        <div className="section-margin" id="mc_embed_shell">
          <link
            href="//cdn-images.mailchimp.com/embedcode/classic-061523.css"
            rel="stylesheet"
            type="text/css"
          />
          <div className="font-sans" id="mc_embed_signup">
            <form
              action="https://gmail.us21.list-manage.com/subscribe/post?u=1d9a63fb66443660fd83b72fe&id=6af0049181&f_id=00b52fe7f0"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              className="validate"
              target="_blank"
            >
              <div id="mc_embed_signup_scroll">
                <h3 className="heading text-2xl font-extrabold">
                  Sign up for early access
                </h3>
                <div className="indicates-required">
                  <span className="asterisk">*</span> indicates required
                </div>
                <div className="mc-field-group">
                  <label htmlFor="mce-EMAIL">
                    Email Address <span className="asterisk">*</span>
                  </label>
                  <input
                    type="email"
                    name="EMAIL"
                    className="required email"
                    id="mce-EMAIL"
                    required
                  />
                  {/* <span id="mce-EMAIL-HELPERTEXT" className="helper_text" /> */}
                </div>
                <div className="mc-field-group">
                  <label htmlFor="mce-FNAME">First Name </label>
                  <input
                    type="text"
                    name="FNAME"
                    className=" text"
                    id="mce-FNAME"
                    defaultValue=""
                  />
                </div>
                <div className="mc-field-group">
                  <label htmlFor="mce-LNAME">Last Name </label>
                  <input
                    type="text"
                    name="LNAME"
                    className=" text"
                    id="mce-LNAME"
                    defaultValue=""
                  />
                </div>
                <div id="mce-responses" className="clear foot">
                  <div
                    className="response"
                    id="mce-error-response"
                    style={{ display: "none" }}
                  />
                  <div
                    className="response"
                    id="mce-success-response"
                    style={{ display: "none" }}
                  />
                </div>
                <div
                  aria-hidden="true"
                  style={{ position: "absolute", left: "-5000px" }}
                >
                  {/* real people should not fill this in and expect good things - do not
                  remove this or risk form bot signups */}
                  <input
                    type="text"
                    name="b_1d9a63fb66443660fd83b72fe_6af0049181"
                    tabIndex={-1}
                    defaultValue=""
                  />
                </div>
                <div className="optionalParent">
                  <div className="clear foot">
                    <input
                      type="submit"
                      name="subscribe"
                      id="mc-embedded-subscribe"
                      className="button"
                      defaultValue="Subscribe"
                    />
                    <p style={{ margin: "0px auto" }}>
                      <a
                        href="http://eepurl.com/ixm7Jw"
                        title="Mailchimp - email marketing made easy and fun"
                      >
                        <span
                          style={{
                            visibility: "hidden",
                            backgroundColor: "transparent",
                            borderRadius: 4,
                          }}
                        >
                          <img
                            className="refferal_badge"
                            src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg"
                            alt="Intuit Mailchimp"
                            style={{
                              width: 220,
                              height: 40,
                              display: "flex",
                              visibility: "hidden",
                              padding: "2px 0px",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          />
                        </span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
