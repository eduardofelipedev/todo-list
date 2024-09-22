import { CheckCircle, Circle, Trash } from "@phosphor-icons/react";
import styles from "./CardTaskList.module.css";

interface CardTaskListProps {
  task: string;
  onToggleComplete: () => void;
  onDelete: () => void;
  isCompleted: boolean;
}

export function CardTaskList({
  task,
  onToggleComplete,
  onDelete,
  isCompleted,
}: CardTaskListProps) {
  return (
    <div className={styles.card}>
      <button
        className={isCompleted ? styles.toggleButtonCheck : styles.toggleButton}
        onClick={onToggleComplete}
      >
        {isCompleted ? (
          <CheckCircle weight="fill" size={17} />
        ) : (
          <Circle weight="regular" size={17} />
        )}
      </button>
      <span
        className={`${styles.taskText} ${isCompleted ? styles.completed : ""}`}
      >
        {task}
      </span>
      <button className={styles.deleteButton} onClick={onDelete}>
        <Trash size={24} />
      </button>
    </div>
  );
}
