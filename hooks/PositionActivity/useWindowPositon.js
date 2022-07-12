import {  useState } from 'react';
import useLayoutEffect from "../useIsomorphicLayoutEffect"
export default function useWindowPosition(id) {
  const [animation, setAnimation] = useState(false);

  useLayoutEffect(() => {
    function updatePosition() {
      const offetSetHeight = window.document.getElementById(id).offsetHeight;

      if (window.pageYOffset > offetSetHeight * 0.8) {
        setAnimation(true);
      }
      if (window.pageYOffset < offetSetHeight * 0.3) {
        setAnimation(false);
      }
    }
    window.addEventListener('scroll', updatePosition);
    updatePosition();
    return () => window.removeEventListener('scroll', updatePosition);
  }, [id]);
  return animation;
}