import type { Metadata } from "next";
import { Noto_Sans_SC } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";
const sans=Noto_Sans_SC({variable:"--font-sans",subsets:["latin"],weight:["400","500","600","700","900"]});
export async function generateMetadata():Promise<Metadata>{const h=await headers();const host=h.get("x-forwarded-host")??h.get("host")??"localhost:3000";const protocol=h.get("x-forwarded-proto")??(host.startsWith("localhost")?"http":"https");const origin=`${protocol}://${host}`;return {metadataBase:new URL(origin),title:{default:"2026币安注册下载、欧易邀请码与USDT出金教程｜币圈老陈",template:"%s｜币圈老陈"},description:"币圈老陈的实操笔记：2026币安注册、币安APP下载、欧易OKX注册、邀请码、KYC、买USDT、手续费和USDT出金防冻卡教程。",keywords:["币安注册","币安下载","币安邀请码","欧易注册","欧易下载","欧易邀请码","买USDT","USDT出金","币安手续费"],openGraph:{type:"website",locale:"zh_CN",siteName:"币圈老陈",title:"2026币安、欧易注册下载与买币教程",description:"不讲概念，只讲注册、下载、KYC、买USDT、手续费和出金实操。"},twitter:{card:"summary",title:"币圈老陈",description:"2026币安、欧易注册下载与买币教程"}}}
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="zh-CN"><body className={sans.variable}>{children}</body></html>}
