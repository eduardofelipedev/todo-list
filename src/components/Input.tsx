import { useState } from "react";
import styles from "./Input.module.css";
import { PlusCircle } from "@phosphor-icons/react";
interface InputProps {
  addTask: (task: string) => void;
}

export function Input({ addTask }: InputProps) {
  const [task, setTask] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    addTask(task);
    setTask("");
  }
  return (
    <form onSubmit={handleSubmit} className={styles.teste}>
      <div className={styles.containerInput}>
        <input
          onChange={(e) => setTask(e.target.value)}
          className={styles.input}
          type="text"
          value={task}
          required
          placeholder="Adicione uma nova tarefa"
        />

        <button className={styles.button} type="submit">
          <span>Criar</span> <PlusCircle size={16} />
        </button>
      </div>
    </form>
  );
}
