import styles from "./EditFeedbackForm.module.css";
import {useContext} from "react";
import {FeedbackContext} from "../../store/feedback-context";
import {useForm} from "react-hook-form";

function EditFeedbackForm({product}) {
  // Initialize form with default values from the product
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      title: product.title,
      category: product.category,
      description: product.description,
      status: product.status,
    },
  });

  const {productData} = useContext(FeedbackContext);

  // Prepare categories and statuses without modifying their case
  const categories = ["UI", "UX", ...new Set(productData.map(item => item.category))];
  const statuses = [...new Set(productData.map(item => item.status))];

  function handleEditProduct(data) {
    console.log(data);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(handleEditProduct)}>
      {/* Title input field */}
      <fieldset>
        <h5 className={styles.title}>Feedback Title</h5>
        <p className={styles.paragraph}>Add a short, descriptive headline</p>
        <input
          className={`${styles.input} ${errors.title ? styles.errorBorder : ""}`}
          {...register("title", {required: "Can't be empty"})}
          type="text"
        />
        {errors.title && <p className={styles.error}>{errors.title.message}</p>}
      </fieldset>

      {/* Category selection */}
      <fieldset>
        <h5 className={styles.title}>Category</h5>
        <p className={styles.paragraph}>Choose a category</p>
        <select {...register("category", {required: "You must select a category"})}>
          {categories.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </fieldset>

      {/* Status selection */}
      <fieldset>
        <h5 className={styles.title}>Update Status</h5>
        <p className={styles.paragraph}>Change feature state</p>
        <select {...register("status", {required: "You must select a status"})}>
          {statuses.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </fieldset>

      {/* Description textarea */}
      <fieldset>
        <label htmlFor="description" className={styles.label}>
          Feedback Description
        </label>
        <p className={styles.paragraph}>
          Include any specific comments on what should be improved, added, etc.
        </p>
        <textarea
          className={`${styles.textarea} ${errors.description ? styles.errorBorder : ""}`}
          {...register("description", {required: "Can't be empty"})}
        />
        {errors.description && <p className={styles.error}>{errors.description.message}</p>}
      </fieldset>
    </form>
  );
}

export default EditFeedbackForm;
