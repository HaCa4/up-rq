import { useNavigate } from "react-router-dom";

/* FORM HANDLING & VALIDATION */
import { FormikValues, useFormik } from "formik";
import * as Yup from "yup";

/* CSS-TAILWIND CLASSNAMES */
import { create } from "../utils/styling/styleNames";

/* CONSTANTS AND TYPES */
import { AiOutlineRollback } from "react-icons/ai";
import axios from "../axios";
import { useMutation, useQuery } from "react-query";

export type CategoryType = {
  id: string;
  name: string;
};
const Create = () => {
  const navigate = useNavigate();
  const mutation = useMutation((values) => {
    return axios.post("/products", values);
  });
  const { data } = useQuery("categories", () => axios.get("/categories").then((res) => res.data));
  const addNewProductFormik = useFormik<FormikValues>({
    initialValues: {
      name: "",
      description: "",
      avatar: "",
      developerEmail: "",
      category: "",
      price: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Product name is required"),
      description: Yup.string().required("Description is required"),
      avatar: Yup.string().required("Image url of product is required"),
      category: Yup.string().required("Category selection is required"),
      price: Yup.string().required("Product price is required"),
      developerEmail: Yup.string()
        .required("Developer email is required")
        .email("Invalid email address"),
    }),
    onSubmit: async (values: any) => {
      mutation.mutate(values);
      navigate("/");
    },
  });
  return (
    <div className="pageDiv">
      <h3 className={create.formTitle}>Create New Product</h3>
      <form className={create.form} onSubmit={addNewProductFormik.handleSubmit}>
        <input
          name="name"
          placeholder="Product Name"
          className={create.input}
          value={addNewProductFormik.values.name}
          onChange={addNewProductFormik.handleChange}
          onBlur={addNewProductFormik.handleBlur}
        />
        {addNewProductFormik.errors.name && (
          <h6
            style={{
              margin: "-1rem 0.5rem",
              color: "red",
              fontSize: "12px",
              alignSelf: "flex-start",
            }}
          >
            <>{addNewProductFormik.errors.name}</>
          </h6>
        )}
        <textarea
          rows={3}
          name="description"
          placeholder="Description"
          className={create.input}
          value={addNewProductFormik.values.description}
          onChange={addNewProductFormik.handleChange}
          onBlur={addNewProductFormik.handleBlur}
        />
        {addNewProductFormik.errors.description && (
          <h6
            style={{
              margin: "-1rem 0.5rem",
              color: "red",
              fontSize: "12px",
              alignSelf: "flex-start",
            }}
          >
            <>{addNewProductFormik.errors.description}</>
          </h6>
        )}
        <input
          name="avatar"
          placeholder="Image URL"
          className={create.input}
          value={addNewProductFormik.values.avatar}
          onChange={addNewProductFormik.handleChange}
          onBlur={addNewProductFormik.handleBlur}
        />
        {addNewProductFormik.errors.avatar && (
          <h6
            style={{
              margin: "-1rem 0.5rem",
              color: "red",
              fontSize: "12px",
              alignSelf: "flex-start",
            }}
          >
            <>{addNewProductFormik.errors.avatar}</>
          </h6>
        )}
        <select
          name="category"
          className={create.select}
          value={addNewProductFormik.values.category}
          onChange={addNewProductFormik.handleChange}
          onBlur={addNewProductFormik.handleBlur}
        >
          <option value="None">Select a category</option>
          {data.map((category: CategoryType) => (
            <option value={category.name} key={category.id}>
              {category.name}{" "}
            </option>
          ))}
        </select>
        {addNewProductFormik.errors.category || addNewProductFormik.errors.category === "None" ? (
          <h6
            style={{
              margin: "-1rem 0.5rem",
              color: "red",
              fontSize: "12px",
              alignSelf: "flex-start",
            }}
          >
            <>{addNewProductFormik.errors.category}</>
          </h6>
        ) : null}
        <input
          name="price"
          placeholder="Price"
          className={create.input}
          value={addNewProductFormik.values.price}
          onChange={addNewProductFormik.handleChange}
          onBlur={addNewProductFormik.handleBlur}
        />
        {addNewProductFormik.errors.price && (
          <h6
            style={{
              margin: "-1rem 0.5rem",
              color: "red",
              fontSize: "12px",
              alignSelf: "flex-start",
            }}
          >
            {" "}
            <>{addNewProductFormik.errors.price}</>
          </h6>
        )}
        <input
          name="developerEmail"
          placeholder="Developer Email"
          className={create.input}
          value={addNewProductFormik.values.developerEmail}
          onChange={addNewProductFormik.handleChange}
          onBlur={addNewProductFormik.handleBlur}
        />
        {addNewProductFormik.errors.developerEmail && (
          <h6
            style={{
              margin: "-1rem 0.5rem",
              color: "red",
              fontSize: "12px",
              alignSelf: "flex-start",
            }}
          >
            <>{addNewProductFormik.errors.developerEmail}</>
          </h6>
        )}
        <button
          type="submit"
          className={create.button}
          disabled={addNewProductFormik.values.category === "Select a category" ? true : false}
        >
          SUBMIT
        </button>
        {mutation.status === "loading" && <>Loading</>}
        {mutation.status === "error" && <>Error</>}
      </form>

      <AiOutlineRollback onClick={() => navigate("/")} className="backIcon" />
    </div>
  );
};

export default Create;
