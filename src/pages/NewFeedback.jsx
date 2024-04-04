// Import necessary React features and assets
import {useContext} from "react"; // Import React and useContext hook
import {Link} from "react-router-dom"; // Import Link component for navigation
import arrowLeftIcon from "/assets/shared/icon-arrow-left.svg"; // Left arrow icon for navigation
import plusIcon from "/assets/shared/icon-new-feedback.svg"; // Plus icon for adding new feedback
import {FeedbackContext} from "../store/feedback-context"; // Import context to access feedback data
import styles from "../styles/NewFeedBacks.module.css"; // Import CSS module for styling

/**
 * NewFeedback component allows users to create new feedback entries.
 */
function NewFeedback() {
  // Use context to access the product data from the global state
  const {productData} = useContext(FeedbackContext);

  // Extract and de-duplicate categories from product data
  const categories = Array.from(new Set(productData.map(product => product.category)));

  return (
    <>
      <div className={styles.container}>
        <header className={styles.header}>
          {/* Navigation to go back to the main page */}
          <img src={arrowLeftIcon} alt="left arrow" />
          <Link to="/">Go back</Link>
        </header>

        <section className={styles.content}>
          {/* Section to add new feedback */}
          <img src={plusIcon} alt="plus icon" className={styles.plus} />
          <h2 className={styles.title}>Create New Feedback</h2>

          {/* Form for creating new feedback */}
          <form className={styles.form}>
            <fieldset>
              <label htmlFor="name" className={styles.label}>
                Feedback Title
              </label>
              <p className={styles.paragraph}>Add a short, descriptive headline</p>
              <input type="text" className={styles.input} />
            </fieldset>

            <fieldset>
              <label htmlFor="name" className={styles.label}>
                Category
              </label>
              <p className={styles.paragraph}>Choose a category for your feedback</p>

              {/* Dropdown for selecting a feedback category */}
              <select defaultValue={categories[1]}>
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </fieldset>
          </form>
        </section>
      </div>
    </>
  );
}

export default NewFeedback;
