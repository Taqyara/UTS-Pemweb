// Semua fungsi di sini memakai localStorage, jadi HANYA boleh dipanggil
// dari komponen "use client" (di dalam useEffect atau event handler).

const KEY_LOGIN = "sman3_admin_login";

// Login palsu untuk latihan. Username dan password ini bisa dibaca siapa saja
// lewat source code, jadi bukan keamanan yang sebenarnya.
const ADMIN_USER = "admin";
const ADMIN_PASS = "admin123";

export function login(username, password) {
  if (username === ADMIN_USER && password === ADMIN_PASS) {
    localStorage.setItem(KEY_LOGIN, "true");
    return true;
  }
  return false;
}

export function logout() {
  localStorage.removeItem(KEY_LOGIN);
}

export function isLoggedIn() {
  return localStorage.getItem(KEY_LOGIN) === "true";
}

// jenis: "berita" | "prestasi" | "guru" | "ekstrakurikuler"
export function getData(jenis) {
  try {
    return JSON.parse(localStorage.getItem(`sman3_${jenis}`)) ?? [];
  } catch {
    return [];
  }
}

export function saveData(jenis, daftar) {
  localStorage.setItem(`sman3_${jenis}`, JSON.stringify(daftar));
}