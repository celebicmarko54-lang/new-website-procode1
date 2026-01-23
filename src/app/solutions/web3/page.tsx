import Header from "@/components/Header";
import BlockchainSection from "@/components/BlockchainSection";
import Footer from "@/components/Footer";

export default function Web3Page() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-14">
        <BlockchainSection />
      </main>

      <Footer />
    </div>
  );
}
