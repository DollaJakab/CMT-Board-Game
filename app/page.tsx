import Board from "@/components/Board";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center w-[100svw] h-[100svh]">
      <h1 className=" text-2xl font-black text-center my-8">CMT Board Game</h1>
      <Board />
    </main>
  );
}
