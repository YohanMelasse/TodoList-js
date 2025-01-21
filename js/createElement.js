const createElement = (tag, attibute = {}) => {
    const element = document.createElement(tag);
    for (const [key, value] of Object.entries(attibute)){
      element.setAttribute(key, value);
    }
    return element;
  };
  
  createElement();

  export {createElement};