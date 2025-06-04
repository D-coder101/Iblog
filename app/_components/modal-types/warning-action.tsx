import { CgClose } from "react-icons/cg";
import { ClipLoader } from "react-spinners";

// import CreatingSvg from "./CreatingSvg";
interface ConfirmActionProps {
  title: string;
  resourceMessage: string;
  onConfirm?: () => void;
  //   onConfirm: (onCloseModal: () => void) => void;
  onCloseModal?: () => void;
  isDelete?: boolean;
  isLoading?: boolean;
}

export default function WarningAction({
  title,
  resourceMessage,
  onConfirm,
  onCloseModal,
  isDelete,
  isLoading,
}: ConfirmActionProps) {
  return (
    <div className="flex flex-col gap-y-8 min-w-[300px] md:min-w-[450px]">
      <span className="rounded-full h-10 w-10 text-2xl text-white grid place-items-center self-center bg-red-600">
        <CgClose />
      </span>

      <div className="space-y-2">
        <h2 className="font-semibold text-center text-xl md:text-2xl text-black">
          {title}
        </h2>

        <p className=" text-sm md:text-base text-gray-700 text-center">
          Your session has expired!
          <br />
          You will be redirected to login in{" "}
          <span className="font-bold">4</span>
          {/* Are you sure you want to {resourceMessage} ?
          {isDelete && "This action cannot be undone."} */}
        </p>
      </div>

      <div className="flex justify-center gap-x-4">
        {/* <button
          onClick={onCloseModal}
          className="rounded-md text-sm border-none py-2 hover:bg-gray-400/80 bg-gray-400 w-36 disabled:cursor-not-allowed text-white"
        >
          Cancel
        </button> */}
        <button
          disabled={isLoading}
          className="rounded-md text-sm border-none py-2 disabled:cursor-not-allowed disabled:bg-red-400 bg-red-600 flex items-center justify-center  hover:bg-red-400 w-full text-white"
          //   onClick={() => onConfirm(onCloseModal)}
          onClick={onConfirm}
        >
          {!isLoading ? (
            `Log Out`
          ) : (
            <ClipLoader color={"#fff"} size={20} loading={true} />
          )}
        </button>
      </div>
    </div>
  );
}
