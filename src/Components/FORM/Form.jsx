import "./Form.css";
//import data from '../../assets/data.json';

function Form({ product, setProduct, productForm, setProductForm, emptyForm }) {
  function handleSubmit(event) {
    event.preventDefault();

    if (productForm.id) {
      const productToEditIndex = product.findIndex(
        (product) => product.id === productForm.id
      );

      setProduct([
        ...product.slice(0, productToEditIndex),
        ...product.slice(productToEditIndex + 1),
        productForm,
      ]);
    } else {
      setProduct([
        ...product,
        { ...productForm, id: (product.length + 1).toString() },
      ]);
    }

    setProductForm(emptyForm);
  }

  function handleChange(event) {
    setProductForm({
      ...productForm,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <div className="formulaire">
      <h2>FORMULAIRE</h2>
      <form method="post" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Add a title"
          onChange={handleChange}
          value={productForm.title}
        ></input>

        <input
          type="text"
          name="description"
          id="description"
          placeholder="Add a description"
          onChange={handleChange}
          value={productForm.description}
        ></input>

        <input
          type="text"
          name="price"
          id="price"
          placeholder="Add a price"
          onChange={handleChange}
          value={productForm.price}
        ></input>

        <input
          type="text"
          name="discountPercentage"
          id="Add a discountPercentage"
          placeholder="discountPercentage"
          onChange={handleChange}
          value={productForm.discountPercentage}
        ></input>

        <input
          type="text"
          name="stock"
          id="stock"
          placeholder="Add stock"
          onChange={handleChange}
          value={productForm.stock}
        ></input>

        <input
          type="text"
          name="brand"
          id="brand"
          placeholder="Add a brand"
          onChange={handleChange}
          value={productForm.brand}
        ></input>

        <input
          type="text"
          name="category"
          id="category"
          placeholder="Add a category"
          onChange={handleChange}
          value={productForm.category}
        ></input>

        <input
          type="text"
          name="thumbnail"
          id="thumbnail"
          placeholder="Add a thumbnail"
          onChange={handleChange}
          value={productForm.thumbnail}
        ></input>

        <input
          type="text"
          name="images"
          id="images"
          placeholder="Add a image"
          onChange={handleChange}
          value={productForm.images}
        ></input>

        <button type="submit">{productForm.id ? "Edit" : "Add"}</button>
      </form>
    </div>
  );
}

export default Form;
