import { useEffect, useRef } from "react";

export default function useReveal({ threshold = 0.12, rootMargin = "0px 0px -10% 0px" } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // fallback: si algo falla, se muestra igual
    const fallback = setTimeout(() => {
      el.classList.add("is-visible");
    }, 120);

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          clearTimeout(fallback);
          obs.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    obs.observe(el);

    return () => {
      clearTimeout(fallback);
      obs.disconnect();
    };
  }, [threshold, rootMargin]);

  return ref;
}
