import { useFormStatus } from "react-dom";
import { ClipLoader } from "react-spinners";

// import CreatingSvg from "./CreatingSvg";
interface ConfirmActionProps {
  title: string;
  resourceMessage: string;
  action: () => void;
  // onConfirm?: () => void;
  onConfirm?: (onCloseModal: () => void) => void;
  onCloseModal?: () => void;
  isDelete?: boolean;
  isLoading?: boolean;
}

export default function ConfirmAction({
  title,
  resourceMessage,
  onConfirm,
  onCloseModal,
  isDelete,
  isLoading,
  action,
}: ConfirmActionProps) {
  return (
    <div className="flex flex-col gap-y-8 min-w-[300px]    md:min-w-[450px]">
      <div className="space-y-2">
        <h2 className="font-semibold text-center text-xl md:text-2xl text-black">
          {title}
        </h2>

        <p className=" text-sm md:text-base text-gray-700 text-center">
          Are you sure you want to {resourceMessage} ?
          {isDelete && "This action cannot be undone."}
        </p>
      </div>

      <div className="flex justify-center gap-x-4">
        <button
          onClick={onCloseModal}
          className="rounded-md transition-all ease-in-out duration-200 text-sm border-none py-2 hover:bg-gray-400/80 bg-gray-400 w-36 disabled:cursor-not-allowed text-white"
        >
          Cancel
        </button>
        <form action={action}>
          <Button title={title} />
        </form>
        {/* <button
          disabled={isLoading}
          className="rounded-md transition-all ease-in-out duration-200 text-sm border-none py-2 disabled:cursor-not-allowed disabled:bg-red-400 bg-red-500 flex items-center justify-center  hover:bg-red-600 w-36 text-white"
          onClick={() => onConfirm(() => onCloseModal?.())}
          // onClick={onConfirm}
        >
          {!isLoading ? (
            `Yes, ${title} `
          ) : (
            <ClipLoader color={"#fff"} size={20} loading={true} />
          )}
        </button> */}
      </div>
    </div>
  );
}

function Button({ title }: { title: string }) {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className="rounded-md transition-all ease-in-out duration-200 text-sm border-none py-2 disabled:cursor-not-allowed disabled:bg-red-400 bg-red-500 flex items-center justify-center  hover:bg-red-600 w-36 text-white"
      // onClick={() => onConfirm(() => onCloseModal?.())}
      // onClick={onConfirm}
    >
      {!pending ? (
        `Yes, ${title} `
      ) : (
        <ClipLoader color={"#fff"} size={20} loading={true} />
      )}
    </button>
  );
}
