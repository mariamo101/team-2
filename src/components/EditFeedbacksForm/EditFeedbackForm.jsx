import styles from "./EditFeedbackForm.module.css";
import {useContext, useEffect} from "react";
import {FeedbackContext} from "../../store/feedback-context";
import {useForm} from "react-hook-form";
import {useParams, useNavigate} from "react-router-dom";

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

  // Current Feedback Id for remove it

  const {productData, editProductData, removeProduct} = useContext(FeedbackContext);

  console.log(productData);
  // Prepare categories and statuses without modifying their case
  const categories = ["UI", "UX", ...new Set(productData.map(item => item.category))];
  const statuses = [...new Set(productData.map(item => item.status))];

  // Navigate for redirecting

  const navigate = useNavigate();

  // For getting params
  const {id} = useParams();

  function handleDelete() {
    removeProduct(1);
  }

  useEffect(() => {
    console.log(productData);
  }, [productData]);

  function handleEditProduct(data) {
    editProductData(id, data.title, data.category, data.status, data.description);
    navigate("/roadmap");
  }

  function handleCancel() {
    navigate(-1);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(handleEditProduct)}>
      {/* Title input field */}
      <fieldset>
        <p className={styles.label}>Feedback Title</p>
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
        <p className={styles.label}>Category</p>
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
        <p className={styles.label}>Update Status</p>
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
          Feedback Detail
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

      {/* Container for buttons */}
      <div className={styles.buttonsContainer}>
        <div className={styles.right}>
          <button className={styles.addBtn} type="submit">
            Edit Feedback
          </button>
        </div>

        <div className={styles.left}>
          <button type="button" className={styles.deleteBtn} onClick={() => handleDelete(id)}>
            Delete
          </button>
          <button type="button" className={styles.cancel} onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
}

export default EditFeedbackForm;
