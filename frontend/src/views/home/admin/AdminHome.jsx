import React from "react";
import { Bootcamps } from "../../bootcamps/Bootcamps.jsx";
import styles from "./AdminHome.module.css";
import { Button } from "../../../components/Buttons/Button.jsx";
export function AdminHome() {
  return (
    <div className={styles.adminDashboard}>
      <div className={styles.wrapper}>
        <h2 className={styles.typing_demo}>Bootcamps</h2>
      </div>
      <div className={styles.buttonsContainer}>
        <Button title="Crear bootcamp" link="/bootcamp/create-bootcamp" />
        <Button title="Ver formadores" link="/list_teachers" />
      </div>
      <div className={styles.bootcampsContainer}>
        <Bootcamps />
      </div>
      <div className={styles.buttonsContainer}>
        <Button title="Administrar Información" link="/all-cohorts/" />
      </div>
    </div>
  );
}
