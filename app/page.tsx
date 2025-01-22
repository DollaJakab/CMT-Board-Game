"use client";
import Board from "@/components/Board";

export default function Home() {
  return (
    <main className="w-full h-[100vh] flex flex-col justify-center items-center">
      <h1 className="text-2xl font-black text-center absolute top-10 ">
        CMT Board Game
      </h1>
      <Board />
    </main>
  );
}
