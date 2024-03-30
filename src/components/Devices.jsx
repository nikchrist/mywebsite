import { useMediaQuery } from "react-responsive";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
};

export { Desktop };

const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  return isTablet ? children : null;
};
export { Tablet };

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};
export { Mobile };

const DefaultDevice = ({ children }) => {
  const isDefault = useMediaQuery({ minWidth: 768 });
  return isDefault ? children : null;
};

export default DefaultDevice;
