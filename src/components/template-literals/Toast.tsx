//Template Literals and Exclude

type HorizontalPosition = "left" | "right" | "center";
type VerticalPosition = "top" | "bottom" | "center";

type ToastProps = {
  position:
    | Exclude<`${HorizontalPosition}-${VerticalPosition}`, "center-center">
    | "center";
};

export function Toast({ position }: ToastProps) {
  return <div>Toast Notification Position ➡️ {position}</div>;
};
