import React, { useEffect, useLayoutEffect, useRef } from "react";

export const VideoPlayer = ({ user }) => {
  const ref = useRef();

  useEffect(() => {
    user.videoTrack.play(ref.current);
  }, []);

  return (
    <div>
      آی دی کاربر: {user.uid}
      <div ref={ref} style={{ width: "200px", height: "200px", border: "1px solid red", marginTop: "20px" }}></div>
    </div>
  );
};
