import Image from "next/image";
import Countdown from "./Countdown";
import { FIM_DO_SEMESTRE, SEMESTRES } from "./data";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <p className={styles.kicker}>Tecnologia em Análise e Desenvolvimento de Sistemas</p>
        <h1>Relógio do Semestre</h1>
      </header>

      <Countdown fim={FIM_DO_SEMESTRE} />

      <section className={styles.timelineSecao}>
        <h2>Minha trajetória no curso</h2>
        <ol className={styles.timeline}>
          {SEMESTRES.map((s) => (
            <li key={s.numero} className={styles.item}>
              <span className={styles.marcador}>{s.numero}º</span>
              <article className={styles.card}>
                <Image
                  src={s.foto}
                  alt={`Foto do ${s.numero}º semestre`}
                  width={640}
                  height={360}
                  className={styles.foto}
                  unoptimized
                />
                <div className={styles.cardCorpo}>
                  <p className={styles.periodo}>
                    {s.numero}º semestre · {s.periodo}
                  </p>
                  <p className={styles.resumo}>{s.resumo}</p>
                  <ul className={styles.trabalhos}>
                    {s.trabalhos.map((t) => (
                      <li key={t.titulo}>
                        <h3>{t.titulo}</h3>
                        <p>{t.descricao}</p>
                        <div className={styles.tags}>
                          {t.tecnologias.map((tec) => (
                            <span key={tec}>{tec}</span>
                          ))}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </section>

      <footer className={styles.footer}>Feito com Next.js · Publicado na Vercel</footer>
    </main>
  );
}
