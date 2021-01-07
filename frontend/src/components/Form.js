import { useRef, useEffect } from "react";

export default (props) => {
  const productNameInput = useRef(null);
  const descriptionInput = useRef(null);
  const priceInput = useRef(null);
  const imgInput = useRef(null);
  const productTypeInput = useRef(null);

  const createProduct = async (event) => {
    event.preventDefault();
    const productName = productNameInput.current.value;
    const description = descriptionInput.current.value;
    const price = priceInput.current.value;
    const img = imgInput.current.value;
    const productType = productTypeInput.current.value;

    const body = JSON.stringify({
      productName,
      description,
      price,
      img,
      productType,
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
      <input type="text" ref={productNameInput} placeholder="Product Name" />
      <br />
      <input type="text" ref={productTypeInput} placeholder="Product Type" />
      <br />
      <input type="text" ref={descriptionInput} placeholder="Description" />
      <br />
      <input type="number" ref={priceInput} placeholder="Price" />
      <br />
      <input type="text" ref={imgInput} placeholder="Image Link" />
      <br />

      <input type="submit" value="Create Item" />
    </form>
  );
};
