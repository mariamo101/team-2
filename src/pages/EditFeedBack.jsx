import {useContext, useEffect} from "react";
import {useParams, useNavigate, Link} from "react-router-dom";
import {FeedbackContext} from "../store/feedback-context";
import arrowLeftIcon from "/assets/shared/icon-arrow-left.svg"; // Left arrow icon for navigation
import styles from "../styles/EditFeedBacks.module.css";
import EditFeedbackForm from "../components/EditFeedbacksForm/EditFeedbackForm";
import Icon from "/assets/shared/icon-edit-feedback.svg";

function EditFeedBack() {
  const {id} = useParams();
  const navigate = useNavigate();
  const {productData} = useContext(FeedbackContext);

  // Find the product to edit
  const product = productData.find(product => product.id === Number(id));

  // If no product found, redirect to Error page
  useEffect(() => {
    if (!product) {
      navigate("*");
    }
  }, [product, navigate]);

  // For redirecting to the previous page
  function goBack() {
    navigate(-1);
  }

  return (
    <>
      <main className={styles.container}>
        <header className={styles.header}>
          {/* Navigation to go back */}
          <Link className="no-underline" style={{cursor: "pointer"}} onClick={goBack}>
            <img src={arrowLeftIcon} alt="Go back" />
            Go back
          </Link>
        </header>
        <section className={styles.content}>
          <img src={Icon} alt="plus icon" className={styles.plus} />
          <h2 className={styles.title}>Editing `{product?.title}`</h2>

          {product && <EditFeedbackForm product={product} />}
        </section>
      </main>
    </>
  );
}

export default EditFeedBack;
