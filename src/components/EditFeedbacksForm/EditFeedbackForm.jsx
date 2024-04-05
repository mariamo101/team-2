import styles from "./EditFeedbackForm.module.css";

import {useForm} from "react-hook-form";

function EditFeedbackForm({product}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm({
    defaultValues: {
      title: product.title,
      category: product.category,
      description: product.description,
      status: "planned",
    },
  });

  return (
    <form className={styles.form}>
      <fieldset>
        <h1 className={styles.title}>{product.title}</h1>
      </fieldset>
    </form>
  );
}

export default EditFeedbackForm;
