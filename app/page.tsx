"use client"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

import LinzumiLogoLight from "@/components/images/linzumi_logo_light.jpg"
import LinzumiLogoDark from "@/components/images/linzumi_logo_dark.jpg"
import Image from "next/image"
import { useTheme } from "next-themes"

export default function IndexPage() {
  const { setTheme, theme } = useTheme()

  const image = theme === "dark" ? LinzumiLogoDark : LinzumiLogoLight

  return (
    <section className="container flex flex-col items-center gap-6 pb-8 pt-6 md:py-10">
      <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
        Linzumi
      </h1>
      <h2 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-3xl sm:max-w-lg">
        Craft serverless ML APIs in minutes, with seamless support for Replicate, HuggingFace & OpenAI
      </h2>

      <div className="flex max-w-[980px] flex-col items-center gap-2">
        <Image alt="Linzumi Logo" src={image} width={600} height={600} style={{
          borderRadius: "50%",
        }} />
        <div className="max-w-[700px] text-lg text-muted-foreground">
          <ul>
            <li>Try public flows, customize for your needs, then import into your own API instantly</li>
            <li>Compile out a type-safe client for use in Node, Python, or mobile applications</li>
            <li>Built in visualizer and debugger so you can see every step of every API invocation</li>
            <li>Trigger flows via API call, webhooks, or even emails</li>
            <li>Send the results of every flow to your application, to an outgoing webhook, or an email address</li>
          </ul>
        </div>
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Coming soon, check out our preview below
        </h1>
        <div className="flex gap-4">
          <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/0TL-gQfCLoU?start=2" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>

      </div>

    </section >
  )
}
