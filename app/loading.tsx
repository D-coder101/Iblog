import Spinner from "./_components/general/Spinner";

export default function Loading() {
  return (
    <div className="grid bg-white place-items-center min-h-screen">
      <Spinner />
    </div>
  );
}
