import styles from "./Answer.module.css";
import Card from "./Card";

const Answer = (props) => {
  return (
    <Card className={styles.answerBox}>
      <h2>Answer: </h2>
      <div className={styles.answer}>{props.answer}</div>
    </Card>
  );
}

export default Answer;
