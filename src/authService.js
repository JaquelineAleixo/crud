const USERS_KEY = "users";

// ─── UTILITÁRIOS ────────────────────────────────────────────────
function loadUsers() {
  const data = localStorage.getItem(USERS_KEY);
  if (!data) return [];
  try {
    return JSON.parse(data);
  } catch {
    return [];
  }
}

function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

// ─── REGISTER ───────────────────────────────────────────────────
export function registerUser({ email, password, location }) {
  const emailTrimmed = (email || "").trim();
  const passwordTrimmed = (password || "").trim();
  const locationTrimmed = (location || "").trim();

  if (!emailTrimmed || !passwordTrimmed || !locationTrimmed) {
    return { ok: false, type: "error", message: "Preencha todos os campos." };
  }

  const users = loadUsers();
  const exists = users.some((u) => u.email === emailTrimmed);

  if (exists) {
    return { ok: false, type: "error", message: "Email já cadastrado." };
  }

  users.push({
    email: emailTrimmed,
    password: passwordTrimmed,
    location: locationTrimmed,
  });

  saveUsers(users);

  return { ok: true, type: "success", message: "Usuário cadastrado com sucesso!" };
}

// ─── LOGIN ──────────────────────────────────────────────────────
export function loginUser({ email, password, location }) {
  const emailTrimmed = (email || "").trim();
  const passwordTrimmed = (password || "").trim();
  const locationTrimmed = (location || "").trim();

  if (!locationTrimmed) {
    return { ok: false, type: "error", message: "Selecione sua localização." };
  }

  if (!emailTrimmed || !passwordTrimmed) {
    return { ok: false, type: "error", message: "Preencha email e senha." };
  }

  const users = loadUsers();

  const user = users.find(
    (u) =>
      u.email === emailTrimmed &&
      u.password === passwordTrimmed &&
      u.location === locationTrimmed
  );

  if (!user) {
    return {
      ok: false,
      type: "error",
      message: "Credenciais incorretas ou localização incorreta.",
    };
  }

  return { ok: true, user, type: "success", message: "Login realizado!" };
}

// ─── CHANGE PASSWORD ─────────────────────────────────────────────
export function changePassword({ email, newPassword }) {
  const emailTrimmed = (email || "").trim();
  const newPasswordTrimmed = (newPassword || "").trim();

  if (!emailTrimmed || !newPasswordTrimmed) {
    return { ok: false, type: "error", message: "Preencha email e nova senha." };
  }

  const users = loadUsers();

  const idx = users.findIndex((u) => u.email === emailTrimmed);

  if (idx === -1) {
    return { ok: false, type: "error", message: "Email não encontrado." };
  }

  users[idx].password = newPasswordTrimmed;
  saveUsers(users);

  return {
    ok: true,
    type: "success",
    message: "Senha alterada com sucesso!",
  };
}
