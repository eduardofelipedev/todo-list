// import { useState } from "react";
import "./global.css";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import styles from "./App.module.css";
import { ClipboardText } from "@phosphor-icons/react";
import { CardTaskList } from "./components/CardTaskList";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState<{ text: string; isCompleted: boolean }[]>(
    []
  );

  const addTask = (task: string) => {
    setTasks([...tasks, { text: task, isCompleted: false }]);
  };

  const toggleCompleteTask = (index: number) => {
    const newTasks = [...tasks];
    newTasks[index].isCompleted = !newTasks[index].isCompleted;
    setTasks(newTasks);
  };

  const deleteTask = (index: number) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };
  return (
    <>
      <Header />
      <Input addTask={addTask} />
      <main className={styles.wrapper}>
        <div className={styles.container}>
          <span className={styles.taskCreated}>
            Tarefas criadas{" "}
            <span className={styles.number}>{tasks.length}</span>
          </span>
          <span className={styles.taskCompleted}>
            Concluídas{" "}
            <span className={styles.number}>
              {tasks.length > 0
                ? tasks.filter((task) => task.isCompleted).length +
                  " de " +
                  tasks.length
                : 0}
            </span>
          </span>
        </div>

        {tasks.length !== 0 ? (
          <div className={styles.containerTask}>
            {tasks.map((task, index) => (
              <CardTaskList
                key={index}
                task={task.text}
                isCompleted={task.isCompleted}
                onToggleComplete={() => toggleCompleteTask(index)}
                onDelete={() => deleteTask(index)}
              />
            ))}
          </div>
        ) : (
          <div className={styles.containerEmpty}>
            <ClipboardText size={100} />
            <span className={styles.title}>
              Você ainda não tem tarefas cadastradas
            </span>
            <span className={styles.subtitle}>
              Crie tarefas e organize seus itens a fazer
            </span>
          </div>
        )}
      </main>
    </>
  );
}

export default App;
