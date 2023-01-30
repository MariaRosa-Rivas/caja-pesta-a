import styles from './ListaEntradas.module.css'
const Ranking = ({ leader }) => {
  return (
    <div>
        <h3 className={styles.lider}>{leader}</h3>
    </div>
  )
}

export default Ranking