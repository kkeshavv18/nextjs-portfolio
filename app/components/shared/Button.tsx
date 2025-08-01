"use client";

import type React from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "light" | "dark";
  href?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?: string;
  onClick?: () => void;
  className?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
  download?: boolean;
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "light",
  href,
  target = "_self",
  rel,
  onClick,
  className = "",
  startIcon,
  endIcon,
  loading = false,
  disabled = false,
  download = false,
  type = "button",
  ariaLabel,
}) => {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 border-[0.5px] rounded-full font-medium transition-transform duration-500 hover:-translate-y-1 " +
    "text-sm sm:text-sm md:text-base px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 " +
    "focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantClasses =
    variant === "light"
      ? "border-gray-400 dark:border-gray-600 text-black dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus:ring-gray-300 dark:focus:ring-gray-600"
      : "border-gray-700 dark:border-gray-500 text-white bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-600 focus:ring-gray-500 dark:focus:ring-gray-400";

  const disabledClasses =
    loading || disabled
      ? "opacity-60 cursor-not-allowed hover:translate-y-0"
      : "";

  // Simple className combination without external dependencies
  const combinedClasses = [
    className,
    baseClasses,
    variantClasses,
    disabledClasses,
  ]
    .filter(Boolean)
    .join(" ");

  // Auto-add security rel for external links
  const linkRel =
    href && target === "_blank" ? rel || "noopener noreferrer" : rel;

  const iconClass = "w-4 h-4 sm:w-5 sm:h-5";
  const isDisabled = loading || disabled;

  const content = (
    <span className="flex items-center justify-center gap-2">
      {loading ? (
        <svg
          className={`animate-spin ${iconClass} text-current`}
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      ) : (
        <>
          {startIcon && (
            <span
              className={`flex items-center justify-center ${iconClass}`}
              aria-hidden="true"
            >
              {startIcon}
            </span>
          )}
          <span>{children}</span>
          {endIcon && (
            <span
              className={`flex items-center justify-center ${iconClass}`}
              aria-hidden="true"
            >
              {endIcon}
            </span>
          )}
        </>
      )}
    </span>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={linkRel}
        className={combinedClasses}
        download={download}
        aria-label={ariaLabel}
        aria-busy={loading}
        onClick={(e) => {
          if (isDisabled) {
            e.preventDefault();
            return;
          }
          onClick?.();
        }}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={() => !isDisabled && onClick?.()}
      disabled={isDisabled}
      className={combinedClasses}
      aria-label={ariaLabel}
      aria-busy={loading}
    >
      {content}
    </button>
  );
};

export default Button;
