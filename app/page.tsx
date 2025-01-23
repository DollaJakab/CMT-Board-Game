import Board from "@/components/Board";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center min-h-[100vh]">
      <h1 className=" text-2xl font-black text-center my-8 ">CMT Board Game</h1>
      <Board />
    </main>
  );
}
