import { useRef, useEffect } from "react";

export default (props) => {
  const itemNameInput = useRef(null);
  const itemDescriptionInput = useRef(null);

  const createProduct = async (event) => {
    event.preventDefault();
    const productName = itemNameInput.current.value;
    // const itemDescription = itemDescriptionInput.current.value;
    const body = JSON.stringify({
      productName,
    });
    event.currentTarget.reset();

    try {
      const response = await fetch("http://localhost:3000/merchant", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: body,
      });
      const data = await response.json();
      props.updateItems([...props.items, data]);
      console.log(event.currentTarget);
      console.log(event.target);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={createProduct}>
      <input type="text" ref={itemNameInput} />
      {/* <input type="text" ref={itemDescriptionInput} /> */}
      <input type="submit" value="Create Item" />
    </form>
  );
};
