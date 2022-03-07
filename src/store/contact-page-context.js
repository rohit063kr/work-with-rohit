import { createContext, useState } from "react";

export const contactPageContext = createContext({
  isShow: false,
  toggleContactPageView() {},
});

const ContactPageProvider = function (props) {
  const [isContactShow, setIsContactShow] = useState(false);

  const toggleContactPageView = function () {
    setIsContactShow((state) => !state);
  };

  const contactPageState = {
    isShow: isContactShow,
    toggleContactPageView,
  };

  return (
    <contactPageContext.Provider value={contactPageState}>
      {props.children}
    </contactPageContext.Provider>
  );
};

export default ContactPageProvider;
