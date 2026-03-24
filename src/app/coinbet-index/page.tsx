import type { Metadata } from "next";
import { CoinbetIndexHeader } from "@/components/coinbet-index-header";
import { CoinbetIndexTable } from "@/components/coinbet-index-table";
import { SearchboxIndex } from "@/components/searchbox-index";
import { CoinbetIndexSeoMetatags } from "@/components/coinbet-index-seo-metatags";

export const metadata: Metadata = {
  title: "Coinbet Index",
};

export default function CoinbetIndexPage() {
  return (
    <main>
      <CoinbetIndexHeader />
      <CoinbetIndexTable />
      <SearchboxIndex />
      <CoinbetIndexSeoMetatags />
    </main>
  );
}
