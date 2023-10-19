import Community from "@/components/home/community";
import Header from "@/components/home/header";
import Revolution from "@/components/home/revolution";
import Works from "@/components/home/works";

export default function Home() {
  return (
    <main className="layout">
      <Header />
      <Revolution />
      <Works />
      <Community />
    </main>
  );
}
