export function statusToPosition(s) {
  if (s === 0) return "Principal";
  if (s === 1) return "HOD";
  if (s === 2) return "Professor";
  if (s === 3) return "CR";
  return "Student";
}

export function positionToStatus(s) {
  if (s === "Principal") return 0;
  if (s === "HOD") return 1;
  if (s === "Professor") return 2;
  if (s === "CR") return 4;
  return 10;
}
