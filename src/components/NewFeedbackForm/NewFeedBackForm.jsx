import {useContext} from "react";
import {FeedbackContext} from "../../store/feedback-context";
import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import styles from "./NewFeedBackForm.module.css";

function NewFeedBackForm() {
  const {productData, setProduct} = useContext(FeedbackContext);
  const navigate = useNavigate();

  // Setting Form for sending data
  const {
    register,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm({
    defaultValues: {
      title: "",
      category: "feature",
      description: "",
    },
  });

  // Extract and de-duplicate categories from product data
  const categories = Array.from(new Set(productData.map(product => product.category)));

  //Adding product to to the list and resetting inputs
  function handleAddProduct(data) {
    setProduct(
      Math.floor(Math.random() * Date.now()),
      data.title,
      data.category,
      0,
      "suggestion",
      data.description,
      []
    );
    reset();
    navigate("/");
  }

  function handleCancel() {
    reset();
    navigate("/");
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit(data => handleAddProduct(data))}>
      <fieldset>
        <label htmlFor="name" className={styles.label}>
          Feedback Title
        </label>
        <p className={styles.paragraph}>Add a short, descriptive headline</p>
        <input
          {...register("title", {required: "Can't be empty"})}
          type="text"
          className={`${styles.input} ${errors.input ? styles.errorBorder : ""}`}
        />
        {errors.title ? <p className={styles.error}>{errors.title.message}</p> : ""}
      </fieldset>

      <fieldset>
        <label htmlFor="name" className={styles.label}>
          Category
        </label>
        <p className={styles.paragraph}>Choose a category for your feedback</p>

        {/* Dropdown for selecting a feedback category */}

        <select {...register("category", {required: "You must select a category"})}>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </fieldset>

      <fieldset>
        <label htmlFor="name" className={styles.label}>
          Feedback Description
        </label>
        <p className={styles.paragraph}>
          Include any specific comments on what should be improved, added, etc.
        </p>
        <textarea
          className={`${styles.textarea} ${errors.description ? styles.errorBorder : ""}`}
          {...register("description", {required: "Can't be empty"})}
        />
        {errors.description ? <p className={styles.error}>{errors.description.message}</p> : ""}
      </fieldset>
      <div className={styles.buttonsContainer}>
        <button className={styles.addBtn} type="submit">
          Add Feedback
        </button>
        <button type="button" className={styles.cancel} onClick={() => handleCancel()}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default NewFeedBackForm;
