import type { Metadata } from "next";
import { CasinoOriginalsHeader } from "@/components/casino-originals-header";
import { CasinoOriginalsTable } from "@/components/casino-originals-table";
import { SearchboxIndex } from "@/components/searchbox-index";
import { CoinbetIndexSeoMetatags } from "@/components/coinbet-index-seo-metatags";

export const metadata: Metadata = {
  title: "Casino Originals",
};

export default function CasinoOriginalsPage() {
  return (
    <main>
      <CasinoOriginalsHeader />
      <CasinoOriginalsTable />
      <SearchboxIndex />
      <CoinbetIndexSeoMetatags />
    </main>
  );
}
