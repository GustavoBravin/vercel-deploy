"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";

type Restante = { dias: number; horas: number; minutos: number; segundos: number };

function calcular(alvo: number): Restante {
  const diff = Math.max(0, alvo - Date.now());
  return {
    dias: Math.floor(diff / 86_400_000),
    horas: Math.floor(diff / 3_600_000) % 24,
    minutos: Math.floor(diff / 60_000) % 60,
    segundos: Math.floor(diff / 1000) % 60,
  };
}

const pad = (n: number) => String(n).padStart(2, "0");

export default function Countdown({ fim }: { fim: string }) {
  const alvo = new Date(fim).getTime();
  // Começa vazio para evitar diferença entre o HTML do servidor e o do navegador.
  const [restante, setRestante] = useState<Restante | null>(null);
  const [agora, setAgora] = useState<Date | null>(null);

  useEffect(() => {
    const tick = () => {
      setRestante(calcular(alvo));
      setAgora(new Date());
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [alvo]);

  const unidades: [string, number | undefined][] = [
    ["dias", restante?.dias],
    ["horas", restante?.horas],
    ["minutos", restante?.minutos],
    ["segundos", restante?.segundos],
  ];
  const acabou = restante !== null && Object.values(restante).every((v) => v === 0);

  return (
    <section className={styles.relogio} aria-live="polite">
      <p className={styles.horaAtual}>
        {agora ? agora.toLocaleTimeString("pt-BR") : "--:--:--"}
        <span>{agora ? agora.toLocaleDateString("pt-BR", { dateStyle: "full" }) : " "}</span>
      </p>

      <h2 className={styles.tituloContador}>
        {acabou ? "O semestre terminou! 🎉" : "Faltam para o fim do semestre"}
      </h2>

      <div className={styles.digitos}>
        {unidades.map(([rotulo, valor]) => (
          <div key={rotulo} className={styles.digito}>
            <span className={styles.numero}>
              {valor === undefined ? "--" : rotulo === "dias" ? valor : pad(valor)}
            </span>
            <span className={styles.rotulo}>{rotulo}</span>
          </div>
        ))}
      </div>

      <p className={styles.dataFim}>
        Encerramento: {new Date(fim).toLocaleString("pt-BR", { dateStyle: "long", timeStyle: "short", timeZone: "America/Sao_Paulo" })}
      </p>
    </section>
  );
}
