
import styles from "./styles.module.css"
import img from "../../assets/gustavo.png"

export const BannerSection = () => {
    return (
        <div className={styles.BannerSection}>
            <div className={styles.BannerSectionTexts}>
                <p className={styles.BannerTitle}>Gustavo Honorato</p>
                <p className={styles.Title}>Bem vindo ao meu portfólio</p>
                <p className={styles.Text}>Desenvolvedor Full Stack em formação</p>
                <button className={styles.ButtonSectionBanner}>Saiba Mais</button> 
            </div>
            <img className={styles.ImgBanner} src={img} alt="Imagem computador" />
        </div>
    )
}