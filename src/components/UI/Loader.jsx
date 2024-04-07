import {SyncLoader} from "react-spinners";

export default function LoaderDark() {
  return (
    <>
      <SyncLoader
        color="rgba(33,33,33,1)"
        cssOverride={{}}
        loading
        margin={4}
        size={20}
        speedMultiplier={1}
      />
    </>
  );
}

export function LoaderWhite() {
  return (
    <>
      <SyncLoader
        color="rgba(214, 222, 243)"
        cssOverride={{}}
        loading
        margin={4}
        size={20}
        speedMultiplier={1}
      />
    </>
  );
}
