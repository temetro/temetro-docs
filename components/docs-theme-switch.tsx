"use client";

import { useEffect, useState } from "react";
import { Airplay, Moon, Sun } from "lucide-react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/cn";

type ThemeMode = "light" | "dark" | "system";

const THEME_STORAGE_KEY = "temetro-docs-theme";

const itemVariants = cva("size-6.5 p-1.5 text-fd-muted-foreground", {
  variants: {
    active: {
      true: "bg-fd-accent text-fd-accent-foreground",
      false: "text-fd-muted-foreground"
    }
  }
});

const full: Array<[ThemeMode, typeof Sun]> = [
  ["light", Sun],
  ["dark", Moon],
  ["system", Airplay]
];

function getSystemTheme(): Exclude<ThemeMode, "system"> {
  if (typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }

  return "light";
}

function applyTheme(mode: ThemeMode) {
  if (typeof document === "undefined") return;

  const resolved = mode === "system" ? getSystemTheme() : mode;
  const root = document.documentElement;

  root.classList.toggle("dark", resolved === "dark");
  root.style.colorScheme = resolved;
  root.dataset.theme = mode;
}

export function DocsThemeSwitch({
  className,
  mode = "light-dark"
}: {
  className?: string;
  mode?: "light-dark" | "light-dark-system";
}) {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<ThemeMode>("system");

  useEffect(() => {
    const stored = (window.localStorage.getItem(THEME_STORAGE_KEY) as ThemeMode | null) ?? "system";
    setTheme(stored);
    applyTheme(stored);
    setMounted(true);

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      if ((window.localStorage.getItem(THEME_STORAGE_KEY) as ThemeMode | null) === "system") {
        applyTheme("system");
      }
    };

    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const container = cn(
    "inline-flex items-center rounded-full border p-1 overflow-hidden *:rounded-full",
    className
  );

  const setAndPersistTheme = (value: ThemeMode) => {
    setTheme(value);
    window.localStorage.setItem(THEME_STORAGE_KEY, value);
    applyTheme(value);
  };

  if (mode === "light-dark") {
    const resolved = mounted ? (theme === "system" ? getSystemTheme() : theme) : null;

    return (
      <button
        className={container}
        aria-label="Toggle Theme"
        onClick={() => setAndPersistTheme(resolved === "light" ? "dark" : "light")}
        data-theme-toggle=""
      >
        {full.map(([key, Icon]) => {
          if (key === "system") return null;

          return (
            <Icon
              key={key}
              fill="currentColor"
              className={cn(itemVariants({ active: resolved === key }))}
            />
          );
        })}
      </button>
    );
  }

  const value = mounted ? theme : null;

  return (
    <div className={container} data-theme-toggle="">
      {full.map(([key, Icon]) => (
        <button
          key={key}
          aria-label={key}
          className={cn(itemVariants({ active: value === key }))}
          onClick={() => setAndPersistTheme(key)}
        >
          <Icon className="size-full" fill="currentColor" />
        </button>
      ))}
    </div>
  );
}
