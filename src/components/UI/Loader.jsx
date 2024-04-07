import {PropagateLoader} from "react-spinners";

export default function Loader() {
  const getColor = localStorage.getItem('theme')
  return (
    <div className="h-screen flex justify-center items-center">
      <PropagateLoader
        color={`${getColor !== 'dark' ? 'rgba(33,33,33,1)' : 'rgba(214, 222, 243)'}`}
        loading
        margin={4}
        size={25}
        speedMultiplier={2.5}
      />
    </div>
  );
}

import {SyncLoader} from "react-spinners";

export function LoaderDark() {
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

