/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_TELEGRAM_BOT_TOKEN: string;
  readonly VITE_TELEGRAM_CHAT_ID: string;
  // boshqa env o'zgaruvchilar bo'lsa shu yerga qo'shasiz
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}