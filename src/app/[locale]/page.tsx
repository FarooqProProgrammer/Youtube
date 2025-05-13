"use client";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import { NextSeo } from "next-seo";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <>
  
      <DashboardLayout>
        <h1>{t("title")}</h1>
        <Link href="/about">{t("about")}</Link>
      </DashboardLayout>
    </>
  );
}
