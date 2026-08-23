import type { Metadata } from "next";
import { Noto_Sans_SC, Noto_Serif_SC } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const sans = Noto_Sans_SC({ variable: "--font-sans", subsets: ["latin"], weight: ["400", "500", "600", "700", "900"] });
const serif = Noto_Serif_SC({ variable: "--font-serif", subsets: ["latin"], weight: ["600", "700", "900"] });

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;
  return {
    metadataBase: new URL(origin),
    title: { default: "明链指南｜中文数字资产安全与流程指南", template: "%s｜明链指南" },
    description: "用可复核的步骤、清晰的风险提示和持续更新记录，讲清账户、充值、交易、提现、安全与费用。",
    openGraph: { type: "website", locale: "zh_CN", siteName: "明链指南", title: "明链指南｜每一步都讲清楚，每个风险都标出来", description: "面向中文用户的数字资产基础教育与安全流程指南。", images:[{url:`${origin}/og.png`,width:1200,height:630,alt:"明链指南社交分享卡"}] },
    twitter: { card: "summary_large_image", title: "明链指南", description: "每一步都讲清楚，每个风险都标出来。", images:[`${origin}/og.png`] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body className={`${sans.variable} ${serif.variable}`}>{children}</body></html>;
}
