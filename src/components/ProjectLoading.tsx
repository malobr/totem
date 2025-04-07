import Loading from "./loading";

export default function ProjectLoading() {
  return (
    <div
      className={`bg-black w-full min-h-screen flex justify-center items-center flex-col`}
    >
      <h1 className="text-xl translate-y-[150px]">Aguarde...</h1>
      <div className="flex justify-center items-center relative">
        <Loading />
      </div>
    </div>
  );
}
